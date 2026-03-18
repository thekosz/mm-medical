import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Store in a JSON file
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'appointments.json')

    await fs.mkdir(dataDir, { recursive: true })

    let appointments: unknown[] = []
    try {
      const existing = await fs.readFile(filePath, 'utf-8')
      appointments = JSON.parse(existing)
    } catch {
      // File doesn't exist yet
    }

    appointments.push({
      id: Date.now(),
      ...data,
    })

    await fs.writeFile(filePath, JSON.stringify(appointments, null, 2))

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'appointments.json')
    const data = await fs.readFile(filePath, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch {
    return NextResponse.json([])
  }
}
