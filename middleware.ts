import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // En Middleware usamos 'request.cookies', que NO necesita await.
  const adminSession = request.cookies.get('admin_session');
  const isAuth = adminSession?.value === 'true';

  // Si intenta entrar a /admin y NO está autenticado
  if (request.nextUrl.pathname.startsWith('/admin') && !isAuth) {
    // Permitir acceso a la página de login
    if (request.nextUrl.pathname === '/admin/login') {
      return NextResponse.next();
    }
    // Redirigir a login
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Si YA está autenticado y quiere ir a login, mandarlo al dashboard
  if (request.nextUrl.pathname === '/admin/login' && isAuth) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};