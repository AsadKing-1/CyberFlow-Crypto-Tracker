import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

function redirectWithCookies(request: NextRequest, response: NextResponse, pathname: string) {
    const url = request.nextUrl.clone()
    url.pathname = pathname

    const redirectResponse = NextResponse.redirect(url)
    response.cookies.getAll().forEach(({ name, value, ...options }) => {
        redirectResponse.cookies.set(name, value, options)
    })

    return redirectResponse
}

export default async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl
    let supabaseResponse = NextResponse.next({
        request,
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
                    supabaseResponse = NextResponse.next({
                        request,
                    })
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    )
                },
            },
        }
    )

    const { data: { user } } = await supabase.auth.getUser()
    const isProtectedRoute = ['/dashboard', '/market', '/top'].some((route) =>
        pathname.startsWith(route)
    )

    if (!user && isProtectedRoute) {
        return redirectWithCookies(request, supabaseResponse, '/auth/login')
    }

    if (user && pathname.startsWith('/auth')) {
        return redirectWithCookies(request, supabaseResponse, '/dashboard')
    }

    return supabaseResponse
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
