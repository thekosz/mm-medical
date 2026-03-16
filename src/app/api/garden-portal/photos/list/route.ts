import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { promises as fs } from 'fs'
import path from 'path'

const PHOTOS_DIR = path.join(process.cwd(), 'public', 'images', 'providers')

async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')
  return session?.value === 'authenticated'
}

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const files = await fs.readdir(PHOTOS_DIR)
    const photos = files
      .filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'))
      .sort()

    return NextResponse.json({ success: true, photos })
  } catch (error) {
    console.error('Failed to list photos:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to list photos' },
      { status: 500 }
    )
  }
}
