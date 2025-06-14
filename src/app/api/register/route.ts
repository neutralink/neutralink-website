import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, password, cpf, role } = await req.json();

  if (!name || !email || !password || !cpf || !role) {
    return NextResponse.json(
      { error: 'Todos os campos são obrigatórios.' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, cpf, role }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return NextResponse.json(
        { error: errorData?.message || 'Erro ao criar conta.' },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(
      { message: 'Conta criada com sucesso!', data },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'Erro ao comunicar com o backend. Tente novamente.' },
      { status: 500 }
    );
  }
}