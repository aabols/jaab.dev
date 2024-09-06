import { NextResponse } from 'next/server'
import { verify } from '@/app/utils'

export async function middleware(req) {
  try {
    // LOGOUT ROUTE
    if (req.nextUrl.pathname === '/logout') {
      const res = NextResponse.redirect(new URL('/login', req.url))
      res.cookies.delete(process.env.AUTH_COOKIE_NAME)
      return res
    }

    const token = req.cookies.get(process.env.AUTH_COOKIE_NAME)?.value

    // PROTECTED ROUTE WITHOUT TOKEN
    if (req.nextUrl.pathname !== '/login' && !token) {
      const loginUrl = new URL('/login', req.url)
      loginUrl.searchParams.set('redirect', req.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }

    const jwtPayload = token && await verify(token, process.env.JWT_KEY)

    // LOGIN ROUTE WITH AUTH
    if (req.nextUrl.pathname === '/login' && jwtPayload) return NextResponse.redirect(new URL('/', req.url))

    // ELSE
    return NextResponse.next()
  } catch ({ code }) {
    const res = NextResponse.redirect(new URL('/login', req.url))
    res.cookies.delete(process.env.AUTH_COOKIE_NAME)
    return res
  }
}

export const config = {
  matcher: [
    '/login',
    '/logout',
    '/burti',
  ]
}