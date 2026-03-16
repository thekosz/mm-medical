import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import * as OTPAuth from 'otpauth'

export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')

  // Must have pending MFA session
  if (session?.value !== 'pending_mfa') {
    return NextResponse.json(
      { success: false, error: 'Invalid session state' },
      { status: 401 }
    )
  }

  try {
    const { code } = await request.json()
    const mfaSecret = process.env.MFA_SECRET

    if (!mfaSecret) {
      return NextResponse.json(
        { success: false, error: 'MFA is not configured' },
        { status: 400 }
      )
    }

    // Verify the code
    const totp = new OTPAuth.TOTP({
      issuer: 'GardenOBGYN',
      label: 'Admin',
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: OTPAuth.Secret.fromBase32(mfaSecret)
    })

    const delta = totp.validate({ token: code, window: 1 })

    if (delta === null) {
      return NextResponse.json(
        { success: false, error: 'Invalid code. Please try again.' },
        { status: 400 }
      )
    }

    // Upgrade session to fully authenticated
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('MFA verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to verify code' },
      { status: 500 }
    )
  }
}

// Check MFA status
export async function GET() {
  return NextResponse.json({
    success: true,
    enabled: !!process.env.MFA_SECRET
  })
}
