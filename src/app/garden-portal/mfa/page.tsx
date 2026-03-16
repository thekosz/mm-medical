'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Loader2, CheckCircle, Smartphone } from 'lucide-react'

export default function MfaSetupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [secret, setSecret] = useState<string | null>(null)
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const [isEnabled, setIsEnabled] = useState(false)
  const [showEnvInstructions, setShowEnvInstructions] = useState(false)
  const [envSecret, setEnvSecret] = useState<string | null>(null)

  useEffect(() => {
    fetchMfaSetup()
  }, [])

  const fetchMfaSetup = async () => {
    try {
      const response = await fetch('/api/garden-portal/mfa/setup')
      if (response.status === 401) {
        router.push('/garden-portal')
        return
      }

      const result = await response.json()
      if (result.success) {
        if (result.enabled) {
          setIsEnabled(true)
        } else {
          setQrCode(result.qrCode)
          setSecret(result.secret)
        }
      }
    } catch (err) {
      setError('Failed to load MFA setup')
    } finally {
      setIsLoading(false)
    }
  }

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim() || code.length !== 6) {
      setError('Please enter a 6-digit code')
      return
    }

    setIsVerifying(true)
    setError('')

    try {
      const response = await fetch('/api/garden-portal/mfa/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim(), secret })
      })

      const result = await response.json()

      if (result.success) {
        setEnvSecret(result.secret || secret)
        setShowEnvInstructions(true)
      } else {
        setError(result.error || 'Invalid code')
      }
    } catch (err) {
      setError('Failed to verify code')
    } finally {
      setIsVerifying(false)
    }
  }

  const handleSkip = () => {
    router.push('/garden-portal/providers')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    )
  }

  if (showEnvInstructions && envSecret) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Code Verified!</h1>
            <p className="text-gray-500">One more step to activate MFA:</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-amber-800 mb-2">Add this environment variable in Vercel:</p>
            <div className="bg-white rounded p-3 border">
              <p className="text-xs text-gray-500 mb-1">Variable name:</p>
              <code className="text-sm font-mono font-bold">MFA_SECRET</code>
              <p className="text-xs text-gray-500 mt-2 mb-1">Value:</p>
              <code className="text-xs font-mono break-all select-all">{envSecret}</code>
            </div>
            <ol className="text-xs text-amber-700 mt-3 space-y-1 list-decimal list-inside">
              <li>Go to Vercel Dashboard → Project Settings</li>
              <li>Click Environment Variables</li>
              <li>Add <strong>MFA_SECRET</strong> with the value above</li>
              <li>Redeploy (or push a new commit)</li>
            </ol>
          </div>
          <button
            onClick={() => router.push('/garden-portal/providers')}
            className="w-full bg-[var(--primary)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--primary)]/90"
          >
            Continue to Admin Panel
          </button>
        </div>
      </div>
    )
  }

  if (isEnabled) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">MFA Enabled!</h1>
          <p className="text-gray-500 mb-6">
            Your account is now protected with two-factor authentication.
          </p>
          <button
            onClick={() => router.push('/garden-portal/providers')}
            className="w-full bg-[var(--primary)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--primary)]/90"
          >
            Continue to Admin Panel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-[var(--primary)]" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Set Up Two-Factor Auth</h1>
          <p className="text-gray-500 mt-2">
            Secure your admin account with an authenticator app
          </p>
        </div>

        {/* Step 1: Scan QR Code */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-bold">
              1
            </div>
            <h2 className="font-semibold text-gray-900">Scan QR Code</h2>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Open Google Authenticator, Authy, or any TOTP app and scan this code:
          </p>
          {qrCode && (
            <div className="flex justify-center mb-4">
              <img src={qrCode} alt="QR Code" className="w-48 h-48 border rounded-lg" />
            </div>
          )}
          <details className="text-sm text-gray-500">
            <summary className="cursor-pointer hover:text-gray-700">
              Can't scan? Enter code manually
            </summary>
            <code className="block mt-2 p-2 bg-gray-100 rounded text-xs break-all">
              {secret}
            </code>
          </details>
        </div>

        {/* Step 2: Verify */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm font-bold">
              2
            </div>
            <h2 className="font-semibold text-gray-900">Enter Verification Code</h2>
          </div>
          <form onSubmit={handleVerify}>
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="000000"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest font-mono focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                maxLength={6}
                autoComplete="one-time-code"
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}
            <button
              type="submit"
              disabled={isVerifying || code.length !== 6}
              className="w-full bg-[var(--primary)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--primary)]/90 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verifying...
                </>
              ) : (
                'Verify & Enable MFA'
              )}
            </button>
          </form>
        </div>

        <div className="text-center">
          <button
            onClick={handleSkip}
            className="text-gray-400 text-sm hover:text-gray-600"
          >
            Skip for now (not recommended)
          </button>
        </div>
      </div>
    </div>
  )
}
