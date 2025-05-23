// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const authRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!authRes.ok) {
    const error = await authRes.json();
    return NextResponse.json({ error: error?.message || 'Login inválido' }, { status: authRes.status });
  }

  const { token, user } = await authRes.json();

  const response = NextResponse.json({ user });
  response.headers.set('Set-Cookie', serialize('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  }));

  return response;
}