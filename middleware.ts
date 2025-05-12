import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rotas protegidas por role
const protectedRoutes = [
  {
    path: '/dashboard/gerador',
    role: 'GENERATOR',
  },
  // você pode adicionar mais roles aqui no futuro
]

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const userRole = req.cookies.get('role')?.value

  const matchedRoute = protectedRoutes.find((route) =>
    req.nextUrl.pathname.startsWith(route.path)
  )

  if (matchedRoute) {
    if (!token || userRole !== matchedRoute.role) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
