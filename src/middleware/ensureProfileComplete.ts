import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req })

  if (!token) return NextResponse.next()

  const isProfileComplete = token?.cpf && token?.address && token?.city && token?.state && token?.zip

  if (!isProfileComplete && req.nextUrl.pathname !== '/completar-perfil') {
    const url = req.nextUrl.clone()
    url.pathname = '/completar-perfil'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}