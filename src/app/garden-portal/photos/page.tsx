'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ImageIcon, Loader2, Pencil, X, Trash2, AlertTriangle } from 'lucide-react'

export default function PhotoGalleryPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [photos, setPhotos] = useState<string[]>([])
  const [assignedPhotos, setAssignedPhotos] = useState<Record<string, string>>({})

  // Rename modal state
  const [renamePhoto, setRenamePhoto] = useState<string | null>(null)
  const [newName, setNewName] = useState('')
  const [isRenaming, setIsRenaming] = useState(false)
  const [renameError, setRenameError] = useState('')

  // Delete modal state
  const [deletePhoto, setDeletePhoto] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch('/api/garden-portal/providers')
      if (response.status === 401) {
        router.push('/garden-portal')
        return
      }
      const result = await response.json()
      if (result.success) {
        // Build map of photo -> provider name
        const photoMap: Record<string, string> = {}
        result.data.providers.forEach((p: any) => {
          if (p.photo) {
            const filename = p.photo.includes('/')
              ? p.photo.split('/').pop()
              : p.photo
            photoMap[filename] = p.name
          }
        })
        setAssignedPhotos(photoMap)
      }

      // Fetch actual photo list from API
      const photosRes = await fetch('/api/garden-portal/photos/list')
      if (photosRes.ok) {
        const photosData = await photosRes.json()
        if (photosData.success) {
          setPhotos(photosData.photos)
        }
      }
    } catch (err) {
      console.error('Failed to fetch data:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [router])

  const openRenameModal = (photo: string) => {
    setRenamePhoto(photo)
    // Suggest a clean name based on assigned provider or keep original
    const assignedTo = assignedPhotos[photo]
    if (assignedTo) {
      const suggested = assignedTo
        .toLowerCase()
        .replace(/^dr\.?\s*/i, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '')
      setNewName(suggested)
    } else {
      setNewName(photo.replace('.jpg', ''))
    }
    setRenameError('')
  }

  const handleRename = async () => {
    if (!renamePhoto || !newName.trim()) return

    setIsRenaming(true)
    setRenameError('')

    try {
      const response = await fetch('/api/garden-portal/photos/rename', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          oldName: renamePhoto,
          newName: newName.trim()
        })
      })

      const result = await response.json()

      if (result.success) {
        await fetchData()
        setRenamePhoto(null)
        setNewName('')
      } else {
        setRenameError(result.error || 'Failed to rename')
      }
    } catch (err) {
      setRenameError('Failed to rename photo')
    } finally {
      setIsRenaming(false)
    }
  }

  const handleDelete = async () => {
    if (!deletePhoto) return

    setIsDeleting(true)
    setDeleteError('')

    try {
      const response = await fetch('/api/garden-portal/photos/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename: deletePhoto })
      })

      const result = await response.json()

      if (result.success) {
        await fetchData()
        setDeletePhoto(null)
      } else {
        setDeleteError(result.error || 'Failed to delete')
      }
    } catch (err) {
      setDeleteError('Failed to delete photo')
    } finally {
      setIsDeleting(false)
    }
  }

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
              <Link
                href="/garden-portal/providers"
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Photo Gallery</h1>
                <p className="text-sm text-gray-500">
                  {photos.length} photos · Rename or delete
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Instructions */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Photo Management:</h3>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li><Pencil className="w-3 h-3 inline" /> Rename a photo to something meaningful</li>
            <li><Trash2 className="w-3 h-3 inline text-red-500" /> Delete unwanted photos (only if not assigned)</li>
            <li>Green border = assigned to a provider</li>
          </ul>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {photos.map((photo) => {
            const isAssigned = !!assignedPhotos[photo]
            const assignedTo = assignedPhotos[photo]

            return (
              <div
                key={photo}
                className={`bg-white rounded-lg overflow-hidden shadow-sm border-2 transition-all hover:shadow-md ${
                  isAssigned ? 'border-green-400' : 'border-gray-200'
                }`}
              >
                <div className="aspect-[3/4] relative bg-gray-100">
                  <Image
                    src={`/images/providers/${photo}`}
                    alt={photo}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
                <div className="p-2">
                  <code className="text-xs text-gray-600 block truncate mb-2" title={photo}>
                    {photo}
                  </code>
                  {isAssigned && (
                    <p className="text-xs text-green-600 mb-2 truncate" title={assignedTo}>
                      {assignedTo}
                    </p>
                  )}
                  <div className="flex gap-1">
                    <button
                      onClick={() => openRenameModal(photo)}
                      className="flex-1 py-1.5 px-2 bg-yellow-50 hover:bg-yellow-100 rounded text-yellow-700 text-xs font-medium flex items-center justify-center gap-1"
                      title="Rename photo"
                    >
                      <Pencil className="w-3 h-3" />
                      Rename
                    </button>
                    <button
                      onClick={() => {
                        setDeletePhoto(photo)
                        setDeleteError('')
                      }}
                      className={`py-1.5 px-2 rounded text-xs font-medium flex items-center justify-center gap-1 ${
                        isAssigned
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-red-50 hover:bg-red-100 text-red-600'
                      }`}
                      disabled={isAssigned}
                      title={isAssigned ? 'Cannot delete: assigned to provider' : 'Delete photo'}
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 bg-green-400 rounded"></span>
            {Object.keys(assignedPhotos).length} assigned
          </span>
          <span className="mx-4">·</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-200 rounded"></span>
            {photos.length - Object.keys(assignedPhotos).length} unassigned
          </span>
        </div>
      </main>

      {/* Rename Modal */}
      {renamePhoto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-gray-900">Rename Photo</h2>
              <button
                onClick={() => setRenamePhoto(null)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={`/images/providers/${renamePhoto}`}
                  alt={renamePhoto}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-1">Current name:</p>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded block mb-3">
                  {renamePhoto}
                </code>
                {assignedPhotos[renamePhoto] && (
                  <p className="text-xs text-green-600">
                    Assigned to: {assignedPhotos[renamePhoto]}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New name
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value.toLowerCase().replace(/[^a-z0-9\-_]/g, '-'))}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                  placeholder="e.g., dr-abraham-pathak"
                />
                <span className="text-gray-500">.jpg</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Only lowercase letters, numbers, and dashes allowed
              </p>
            </div>

            {renameError && (
              <div className="mb-4 bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm">
                {renameError}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setRenamePhoto(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleRename}
                disabled={isRenaming || !newName.trim()}
                className="flex-1 px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--primary)]/90 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isRenaming ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Renaming...
                  </>
                ) : (
                  'Rename'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deletePhoto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">Delete Photo</h2>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={`/images/providers/${deletePhoto}`}
                  alt={deletePhoto}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-600 mb-2">
                  Are you sure you want to delete this photo?
                </p>
                <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {deletePhoto}
                </code>
                <p className="text-xs text-red-500 mt-2">
                  This action cannot be undone.
                </p>
              </div>
            </div>

            {deleteError && (
              <div className="mb-4 bg-red-50 text-red-600 px-3 py-2 rounded-lg text-sm">
                {deleteError}
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={() => setDeletePhoto(null)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
