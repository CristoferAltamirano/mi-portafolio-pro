import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  // En Next.js 15, cookies() es asíncrono, usamos await
  const cookieStore = await cookies();
  
  // Borramos la cookie de sesión
  cookieStore.delete('admin_session');

  return NextResponse.json({ success: true });
}