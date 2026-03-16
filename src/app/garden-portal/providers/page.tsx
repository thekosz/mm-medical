'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  Save,
  Loader2,
  LogOut,
  Plus,
  Trash2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle,
  Users,
  ImageIcon,
  X,
  Search,
} from 'lucide-react'

interface Provider {
  id: number
  name: string
  credentials: string
  type: string
  specialty: string
  bio: string
  education: string[]
  languages: string[]
  locations: string[]
  photo?: string
}

interface ProviderType {
  id: string
  name: string
  description: string
}

interface ProvidersData {
  providerTypes: ProviderType[]
  providers: Provider[]
}

// Custom Photo Picker with thumbnail previews and search
function PhotoPicker({
  value,
  onChange,
  photos,
}: {
  value: string | undefined
  onChange: (photo: string | undefined) => void
  photos: string[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Filter photos by search term
  const filteredPhotos = photos.filter(photo =>
    photo.toLowerCase().includes(search.toLowerCase())
  )

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Selected Value / Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-left flex items-center gap-3 hover:border-gray-400 focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
      >
        {value ? (
          <>
            <div className="w-10 h-12 flex-shrink-0 rounded overflow-hidden bg-gray-100">
              <img
                src={`/images/providers/${value}`}
                alt={value}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="flex-1 truncate text-gray-900">{value}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onChange(undefined)
              }}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </>
        ) : (
          <>
            <div className="w-10 h-12 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-gray-300" />
            </div>
            <span className="flex-1 text-gray-500">Select a photo...</span>
          </>
        )}
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          {/* Search input */}
          <div className="p-2 border-b border-gray-100">
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search photos..."
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="max-h-64 overflow-y-auto">
            {/* Clear option */}
            {!search && (
              <button
                type="button"
                onClick={() => {
                  onChange(undefined)
                  setIsOpen(false)
                  setSearch('')
                }}
                className="w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-gray-50 border-b border-gray-100"
              >
                <div className="w-10 h-12 flex-shrink-0 rounded bg-gray-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-gray-300" />
                </div>
                <span className="text-gray-500">No photo</span>
              </button>
            )}

            {/* Photo options */}
            {filteredPhotos.length === 0 ? (
              <div className="px-3 py-4 text-center text-gray-500 text-sm">
                No photos match "{search}"
              </div>
            ) : (
              filteredPhotos.map((photo) => (
                <button
                  key={photo}
                  type="button"
                  onClick={() => {
                    onChange(photo)
                    setIsOpen(false)
                    setSearch('')
                  }}
                  className={`w-full px-3 py-2 text-left flex items-center gap-3 hover:bg-blue-50 ${
                    value === photo ? 'bg-blue-50 border-l-4 border-[var(--primary)]' : ''
                  }`}
                >
                  <div className="w-10 h-12 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                    <img
                      src={`/images/providers/${photo}`}
                      alt={photo}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <span className={`flex-1 truncate ${value === photo ? 'font-medium text-[var(--primary)]' : 'text-gray-700'}`}>
                    {photo}
                  </span>
                  {value === photo && (
                    <CheckCircle className="w-5 h-5 text-[var(--primary)]" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function AdminProvidersPage() {
  const router = useRouter()
  const [data, setData] = useState<ProvidersData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [expandedProvider, setExpandedProvider] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [availablePhotos, setAvailablePhotos] = useState<string[]>([])

  useEffect(() => {
    fetchProviders()
  }, [])

  const fetchProviders = async () => {
    try {
      const response = await fetch('/api/garden-portal/providers')
      const result = await response.json()

      if (response.status === 401) {
        router.push('/garden-portal')
        return
      }

      if (result.success) {
        setData(result.data)
      } else {
        setError(result.error)
      }

      // Also fetch available photos
      const photosRes = await fetch('/api/garden-portal/photos/list')
      if (photosRes.ok) {
        const photosData = await photosRes.json()
        if (photosData.success) {
          setAvailablePhotos(photosData.photos)
        }
      }
    } catch (err) {
      setError('Failed to fetch providers')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async () => {
    if (!data) return

    setIsSaving(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch('/api/garden-portal/providers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSuccess('Providers saved successfully! Changes are live.')
        setTimeout(() => setSuccess(''), 5000)
      } else {
        setError(result.error)
      }
    } catch (err) {
      setError('Failed to save providers')
    } finally {
      setIsSaving(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/garden-portal/login', { method: 'DELETE' })
    router.push('/garden-portal')
  }

  const updateProvider = (id: number, field: keyof Provider, value: any) => {
    if (!data) return

    setData({
      ...data,
      providers: data.providers.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    })
  }

  const updateArrayField = (
    id: number,
    field: 'education' | 'languages' | 'locations',
    value: string
  ) => {
    const array = value.split('\n').filter((item) => item.trim())
    updateProvider(id, field, array)
  }

  const addProvider = () => {
    if (!data) return

    const maxId = Math.max(...data.providers.map((p) => p.id), 0)
    const newProvider: Provider = {
      id: maxId + 1,
      name: 'New Provider',
      credentials: '',
      type: 'physician',
      specialty: '',
      bio: '',
      education: [],
      languages: ['English'],
      locations: [],
    }

    setData({
      ...data,
      providers: [...data.providers, newProvider],
    })
    setExpandedProvider(newProvider.id)
  }

  const deleteProvider = (id: number) => {
    if (!data) return
    if (!confirm('Are you sure you want to delete this provider?')) return

    setData({
      ...data,
      providers: data.providers.filter((p) => p.id !== id),
    })
  }

  const filteredProviders = data?.providers.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = filterType === 'all' || p.type === filterType
    return matchesSearch && matchesType
  })

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Provider Management</h1>
                <p className="text-sm text-gray-500">
                  {data?.providers.length} providers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/garden-portal/photos"
                className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200"
              >
                <ImageIcon className="w-4 h-4" />
                Photo Gallery
              </Link>
              <button
                onClick={addProvider}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                <Plus className="w-4 h-4" />
                Add Provider
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]/90 disabled:opacity-50"
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                Save Changes
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-gray-700"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Alerts */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {success}
          </div>
        )}

        {/* Filters */}
        <div className="mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search providers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
          />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
          >
            <option value="all">All Types</option>
            {data?.providerTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Provider List */}
        <div className="space-y-3">
          {filteredProviders?.map((provider) => (
            <div
              key={provider.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              {/* Provider Header */}
              <div
                className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                onClick={() =>
                  setExpandedProvider(
                    expandedProvider === provider.id ? null : provider.id
                  )
                }
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center text-[var(--primary)] font-semibold">
                    {provider.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {provider.name}
                      {provider.credentials && (
                        <span className="text-[var(--primary)] ml-1">
                          , {provider.credentials}
                        </span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {data?.providerTypes.find((t) => t.id === provider.type)?.name} ·{' '}
                      {provider.specialty}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      deleteProvider(provider.id)
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {expandedProvider === provider.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Expanded Editor */}
              {expandedProvider === provider.id && (
                <div className="px-4 py-4 border-t border-gray-100 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={provider.name}
                        onChange={(e) =>
                          updateProvider(provider.id, 'name', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Credentials (MD, DO, CNM, etc.)
                      </label>
                      <input
                        type="text"
                        value={provider.credentials}
                        onChange={(e) =>
                          updateProvider(provider.id, 'credentials', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Provider Type
                      </label>
                      <select
                        value={provider.type}
                        onChange={(e) =>
                          updateProvider(provider.id, 'type', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      >
                        {data?.providerTypes.map((type) => (
                          <option key={type.id} value={type.id}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Specialty
                      </label>
                      <input
                        type="text"
                        value={provider.specialty}
                        onChange={(e) =>
                          updateProvider(provider.id, 'specialty', e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Photo ({availablePhotos.length} available)
                      </label>
                      <PhotoPicker
                        value={provider.photo}
                        onChange={(photo) => updateProvider(provider.id, 'photo', photo)}
                        photos={availablePhotos}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Languages (one per line)
                      </label>
                      <textarea
                        value={provider.languages.join('\n')}
                        onChange={(e) =>
                          updateArrayField(provider.id, 'languages', e.target.value)
                        }
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        value={provider.bio}
                        onChange={(e) =>
                          updateProvider(provider.id, 'bio', e.target.value)
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Education (one per line)
                      </label>
                      <textarea
                        value={provider.education.join('\n')}
                        onChange={(e) =>
                          updateArrayField(provider.id, 'education', e.target.value)
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Locations (one per line)
                      </label>
                      <textarea
                        value={provider.locations.join('\n')}
                        onChange={(e) =>
                          updateArrayField(provider.id, 'locations', e.target.value)
                        }
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredProviders?.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No providers found matching your search.
          </div>
        )}
      </main>
    </div>
  )
}
