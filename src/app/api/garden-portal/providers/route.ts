import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { promises as fs } from 'fs'
import path from 'path'

const PROVIDERS_FILE = path.join(process.cwd(), 'data', 'providers.json')

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
    const data = await fs.readFile(PROVIDERS_FILE, 'utf-8')
    const providers = JSON.parse(data)
    return NextResponse.json({ success: true, data: providers })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to read providers file' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await request.json()

    // Validate structure
    if (!data.providers || !Array.isArray(data.providers)) {
      return NextResponse.json(
        { success: false, error: 'Invalid data structure' },
        { status: 400 }
      )
    }

    // Backup current file
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
    const backupPath = path.join(process.cwd(), 'data', `providers.backup.${timestamp}.json`)
    const currentData = await fs.readFile(PROVIDERS_FILE, 'utf-8')
    await fs.writeFile(backupPath, currentData)

    // Write new data
    await fs.writeFile(PROVIDERS_FILE, JSON.stringify(data, null, 2))

    return NextResponse.json({ success: true, message: 'Providers saved successfully' })
  } catch (error) {
    console.error('Failed to save providers:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save providers' },
      { status: 500 }
    )
  }
}
