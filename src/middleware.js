import { NextResponse } from "next/server"

export function middleware(req) {
  const authCookie = req.cookies.get('auth')
  console.log({ authCookie })

  // LOGOUT ROUTE
  if (req.nextUrl.pathname === '/logout') {
    const res = NextResponse.redirect(new URL('/login', req.url))
    res.cookies.delete('auth')
    return res
  }

  // PROTECTED ROUTE WITHOUT AUTH
  if (req.nextUrl.pathname !== '/login' && !authCookie) {
    const loginUrl = new URL('/login', req.url)
    loginUrl.searchParams.set('redirect', req.nextUrl.pathname)

    return NextResponse.redirect(loginUrl)
  }

  // LOGIN ROUTE WITH AUTH
  if (req.nextUrl.pathname === '/login' && authCookie) return NextResponse.redirect(new URL('/', req.url))

  // ELSE
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/login',
    '/logout',
    '/burti',
  ]
}