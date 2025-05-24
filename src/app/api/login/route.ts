// app/api/login/route.ts
import { NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email e senha são obrigatórios.' }, { status: 400 });
  }

  let authRes;
  try {
    authRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  } catch (err) {
    return NextResponse.json({ error: 'Erro de rede. Tente novamente mais tarde.' }, { status: 500 });
  }

  if (!authRes.ok) {
    const error = await authRes.json();
    return NextResponse.json({ error: error?.message || 'Login inválido' }, { status: authRes.status });
  }

  const { token, user } = await authRes.json();
  const { password: _, ...safeUser } = user;
  const response = NextResponse.json({ user: safeUser });
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}