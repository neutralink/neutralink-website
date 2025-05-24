import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rotas protegidas por role
const protectedRoutes = [
  { path: '/dashboard/gerador', role: 'GENERATOR' },
  { path: '/dashboard/admin', role: 'ADMIN' },
  { path: '/dashboard/certifier', role: 'CERTIFIER' },
  { path: '/dashboard/integrator', role: 'INTEGRATOR' },
  { path: '/dashboard/company', role: 'COMPANY' },
  { path: '/dashboard/marketplace', role: 'BUYER' },
]

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const userRole = req.cookies.get('role')?.value

  const publicPages = ['/', '/login', '/register'];
  if (token && publicPages.includes(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  const matchedRoute = protectedRoutes.find((route) =>
    req.nextUrl.pathname.startsWith(route.path)
  )

  if (matchedRoute) {
    if (!token || userRole !== matchedRoute.role) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  if (!token && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/certifier/:path*',
    '/integrator/:path*',
    '/marketplace/:path*',
    '/company/:path*',
    '/completar-perfil',
  ],
}
