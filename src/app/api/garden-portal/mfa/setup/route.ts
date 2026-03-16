import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import * as OTPAuth from 'otpauth'
import QRCode from 'qrcode'

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated' || session?.value === 'pending_mfa_setup'
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // If MFA_SECRET env var exists, MFA is already configured
    if (process.env.MFA_SECRET) {
      return NextResponse.json({
        success: true,
        enabled: true,
        message: 'MFA is already configured'
      })
    }

    // Generate new TOTP secret for setup
    const totp = new OTPAuth.TOTP({
      issuer: 'GardenOBGYN',
      label: 'Admin',
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: new OTPAuth.Secret({ size: 20 })
    })

    const secret = totp.secret.base32
    const otpauthUrl = totp.toString()

    // Generate QR code as data URL
    const qrCodeDataUrl = await QRCode.toDataURL(otpauthUrl, {
      width: 256,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    })

    return NextResponse.json({
      success: true,
      enabled: false,
      qrCode: qrCodeDataUrl,
      secret: secret,
      message: 'Scan the QR code with your authenticator app'
    })
  } catch (error) {
    console.error('MFA setup error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to set up MFA' },
      { status: 500 }
    )
  }
}

// Verify a code against a provided secret (for setup flow)
export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { code, secret } = await request.json()

    if (!secret || !code) {
      return NextResponse.json(
        { success: false, error: 'Code and secret are required' },
        { status: 400 }
      )
    }

    // Verify the code against the provided secret
    const totp = new OTPAuth.TOTP({
      issuer: 'GardenOBGYN',
      label: 'Admin',
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: OTPAuth.Secret.fromBase32(secret)
    })

    const delta = totp.validate({ token: code, window: 1 })

    if (delta === null) {
      return NextResponse.json(
        { success: false, error: 'Invalid code. Please try again.' },
        { status: 400 }
      )
    }

    // Code is valid — tell user to add the env var
    const cookieStore = await cookies()
    cookieStore.set('admin_session', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24,
      path: '/',
    })

    return NextResponse.json({
      success: true,
      message: 'Code verified! Add MFA_SECRET to Vercel environment variables to enable MFA.',
      secret: secret,
    })
  } catch (error) {
    console.error('MFA verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to verify code' },
      { status: 500 }
    )
  }
}
