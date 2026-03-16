'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Loader2, Shield, Smartphone } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [mfaCode, setMfaCode] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState<'password' | 'mfa'>('password')

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/garden-portal/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const result = await response.json()

      if (result.success) {
        if (result.requiresMfa) {
          // MFA is enabled, show code input
          setStep('mfa')
        } else if (result.requiresMfaSetup) {
          // No MFA yet, prompt to set it up
          router.push('/garden-portal/mfa')
        } else {
          // Fully authenticated
          router.push('/garden-portal/providers')
        }
      } else {
        setError(result.error || 'Invalid password')
      }
    } catch (err) {
      setError('Failed to connect to server')
    } finally {
      setIsLoading(false)
    }
  }

  const handleMfaSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (mfaCode.length !== 6) {
      setError('Please enter a 6-digit code')
      return
    }

    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/garden-portal/mfa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: mfaCode }),
      })

      const result = await response.json()

      if (result.success) {
        router.push('/garden-portal/providers')
      } else {
        setError(result.error || 'Invalid code')
      }
    } catch (err) {
      setError('Failed to verify code')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {step === 'password' ? (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-500 mt-2">Enter password to access</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="Enter admin password"
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[var(--primary)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--primary)]/90 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[var(--primary)]" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Two-Factor Auth</h1>
              <p className="text-gray-500 mt-2">Enter the code from your authenticator app</p>
            </div>

            <form onSubmit={handleMfaSubmit} className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Smartphone className="w-5 h-5 text-gray-400" />
                  <label className="text-sm font-medium text-gray-700">
                    6-Digit Code
                  </label>
                </div>
                <input
                  type="text"
                  value={mfaCode}
                  onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-center text-2xl tracking-widest font-mono focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="000000"
                  maxLength={6}
                  autoComplete="one-time-code"
                  autoFocus
                />
              </div>

              {error && (
                <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || mfaCode.length !== 6}
                className="w-full bg-[var(--primary)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--primary)]/90 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify'
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setStep('password')
                  setMfaCode('')
                  setError('')
                }}
                className="w-full text-gray-500 text-sm hover:text-gray-700"
              >
                Back to password
              </button>
            </form>
          </>
        )}

        <p className="text-center text-gray-400 text-sm mt-6">
          Garden OB/GYN Content Management
        </p>
      </div>
    </div>
  )
}
