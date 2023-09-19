import { currentProfile } from '@/lib/current-profile'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const profile = await currentProfile()

     

  } catch (error) {
    console.log('[CHANNELS_POST]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
