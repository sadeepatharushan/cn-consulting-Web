import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export async function middleware(request: NextRequest) {
  const { isAuthenticated, getPermission, } = getKindeServerSession()

  const authenticated = await isAuthenticated()
  const isAdmin = await getPermission('view:dashboard')

  if (!authenticated) {
    // Redirect unauthenticated users to login
    return NextResponse.redirect(new URL('/api/auth/login', request.url))
  }

  if (!isAdmin?.isGranted) {
    // Redirect non-admin users who try to access admin routes
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Specify which routes this middleware should apply to
export const config = {
  matcher: ['/dashboard/:path*']
}