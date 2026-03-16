import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { promises as fs } from 'fs'
import path from 'path'

const PHOTOS_DIR = path.join(process.cwd(), 'public', 'images', 'providers')
const PROVIDERS_FILE = path.join(process.cwd(), 'data', 'providers.json')

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { oldName, newName } = await request.json()

    // Validate inputs
    if (!oldName || !newName || typeof oldName !== 'string' || typeof newName !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Both oldName and newName are required' },
        { status: 400 }
      )
    }

    // Path traversal protection on oldName
    if (!/^[a-zA-Z0-9._-]+$/.test(oldName)) {
      return NextResponse.json(
        { success: false, error: 'Invalid filename' },
        { status: 400 }
      )
    }

    // Ensure .jpg extension
    const sanitizedNewName = newName.toLowerCase().endsWith('.jpg')
      ? newName.toLowerCase()
      : `${newName.toLowerCase()}.jpg`

    // Sanitize filename (only allow alphanumeric, dash, underscore)
    const cleanName = sanitizedNewName.replace(/[^a-z0-9_\-\.]/g, '-')

    const oldPath = path.resolve(path.join(PHOTOS_DIR, oldName))
    const newPath = path.resolve(path.join(PHOTOS_DIR, cleanName))

    // Verify both paths stay within PHOTOS_DIR
    const photosDir = path.resolve(PHOTOS_DIR)
    if (!oldPath.startsWith(photosDir) || !newPath.startsWith(photosDir)) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      )
    }

    // Check if old file exists
    try {
      await fs.access(oldPath)
    } catch {
      return NextResponse.json(
        { success: false, error: 'Original file not found' },
        { status: 404 }
      )
    }

    // Check if new name already exists
    try {
      await fs.access(newPath)
      return NextResponse.json(
        { success: false, error: 'A file with that name already exists' },
        { status: 409 }
      )
    } catch {
      // Good - file doesn't exist
    }

    // Rename the file
    await fs.rename(oldPath, newPath)

    // Update providers.json if any provider was using this photo
    const providersData = await fs.readFile(PROVIDERS_FILE, 'utf-8')
    const providers = JSON.parse(providersData)
    let updated = false

    for (const provider of providers.providers) {
      if (provider.photo === oldName) {
        provider.photo = cleanName
        updated = true
      }
    }

    if (updated) {
      await fs.writeFile(PROVIDERS_FILE, JSON.stringify(providers, null, 2))
    }

    return NextResponse.json({
      success: true,
      newName: cleanName,
      providersUpdated: updated
    })
  } catch (error) {
    console.error('Failed to rename photo:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to rename photo' },
      { status: 500 }
    )
  }
}
