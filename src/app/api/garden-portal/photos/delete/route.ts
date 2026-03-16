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
    const { filename } = await request.json()

    if (!filename || typeof filename !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Filename is required' },
        { status: 400 }
      )
    }

    // Path traversal protection
    if (!/^[a-zA-Z0-9._-]+$/.test(filename)) {
      return NextResponse.json(
        { success: false, error: 'Invalid filename' },
        { status: 400 }
      )
    }

    const filePath = path.resolve(path.join(PHOTOS_DIR, filename))
    if (!filePath.startsWith(path.resolve(PHOTOS_DIR))) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      )
    }

    // Check if file exists
    try {
      await fs.access(filePath)
    } catch {
      return NextResponse.json(
        { success: false, error: 'File not found' },
        { status: 404 }
      )
    }

    // Check if photo is assigned to any provider
    const providersData = await fs.readFile(PROVIDERS_FILE, 'utf-8')
    const providers = JSON.parse(providersData)
    const assignedTo = providers.providers.find((p: any) => p.photo === filename)

    if (assignedTo) {
      return NextResponse.json(
        { success: false, error: `Cannot delete: photo is assigned to ${assignedTo.name}` },
        { status: 409 }
      )
    }

    // Delete the file
    await fs.unlink(filePath)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to delete photo:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to delete photo' },
      { status: 500 }
    )
  }
}
