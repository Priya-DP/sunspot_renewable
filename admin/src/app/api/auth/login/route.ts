import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';
import { createToken, COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Please enter both username and password' },
        { status: 400 }
      );
    }

    // Query user from Drizzle ORM adminUsers table
    const users = await db
      .select()
      .from(schema.adminUsers)
      .where(eq(schema.adminUsers.username, username.trim()));

    if (users.length === 0) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    const user = users[0];
    const passwordValid = bcrypt.compareSync(password, user.passwordHash);

    if (!passwordValid) {
      return NextResponse.json(
        { error: 'Invalid username or password' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = await createToken({
      id: user.id,
      username: user.username,
      name: user.name,
    });

    const response = NextResponse.json(
      { success: true, user: { username: user.username, name: user.name } },
      { status: 200 }
    );

    // Set HTTP-only session cookie
    response.cookies.set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 24 hours
      sameSite: 'lax',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
