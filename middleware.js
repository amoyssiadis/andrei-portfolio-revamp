import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/index'],
}

export function middleware(req) {
  // const basicAuth = req.headers.get('authorization')
  // const url = req.nextUrl
  // if (basicAuth) {
  //   const authValue = basicAuth.split(' ')[1]
  //   const [user, pwd] = atob(authValue).split(':')
  //   if (user === 'admin' && pwd === 'porto99@') {
  //     return NextResponse.next()
  //   }
  // }
  // url.pathname = '/api/auth'
  // return NextResponse.rewrite(url)
}
