import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

// Rate limiting: track failed attempts per IP
const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()
const MAX_ATTEMPTS = 5
const LOCKOUT_MS = 15 * 60 * 1000 // 15 minutes

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const record = loginAttempts.get(ip)

  if (!record) return { allowed: true }

  // Reset if lockout period has passed
  if (now - record.lastAttempt > LOCKOUT_MS) {
    loginAttempts.delete(ip)
    return { allowed: true }
  }

  if (record.count >= MAX_ATTEMPTS) {
    const retryAfter = Math.ceil((LOCKOUT_MS - (now - record.lastAttempt)) / 1000)
    return { allowed: false, retryAfter }
  }

  return { allowed: true }
}

function recordFailedAttempt(ip: string) {
  const now = Date.now()
  const record = loginAttempts.get(ip)
  if (record) {
    record.count++
    record.lastAttempt = now
  } else {
    loginAttempts.set(ip, { count: 1, lastAttempt: now })
  }
}

function clearAttempts(ip: string) {
  loginAttempts.delete(ip)
}

function isMfaEnabled(): boolean {
  return !!process.env.MFA_SECRET
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'

  // Rate limit check
  const rateCheck = checkRateLimit(ip)
  if (!rateCheck.allowed) {
    return NextResponse.json(
      { success: false, error: `Too many attempts. Try again in ${rateCheck.retryAfter} seconds.` },
      { status: 429 }
    )
  }

  try {
    const { password } = await request.json()
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json(
        { success: false, error: 'Admin password not configured' },
        { status: 500 }
      )
    }

    if (password === adminPassword) {
      clearAttempts(ip)
      const cookieStore = await cookies()
      const mfaEnabled = isMfaEnabled()

      if (mfaEnabled) {
        // MFA is enabled - set pending state
        cookieStore.set('admin_session', 'pending_mfa', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 5, // 5 minutes to complete MFA
          path: '/',
        })

        return NextResponse.json({
          success: true,
          requiresMfa: true,
          message: 'Please enter your authenticator code'
        })
      } else {
        // No MFA - fully authenticate but prompt to set up MFA
        cookieStore.set('admin_session', 'pending_mfa_setup', {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          maxAge: 60 * 60 * 24,
          path: '/',
        })

        return NextResponse.json({
          success: true,
          requiresMfa: false,
          requiresMfaSetup: true,
          message: 'Please set up MFA to secure your account'
        })
      }
    }

    recordFailedAttempt(ip)
    return NextResponse.json(
      { success: false, error: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    )
  }
}

export async function DELETE() {
  // Logout - clear the session cookie
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  return NextResponse.json({ success: true })
}
