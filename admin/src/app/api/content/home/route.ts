import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const slides = await db.select().from(schema.homeSlides);
    return NextResponse.json({ success: true, slides });
  } catch (error) {
    console.error('Error fetching home slides:', error);
    return NextResponse.json({ error: 'Failed to fetch home content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, heading, description, image, link, display_order } = body;

    const result = await db.insert(schema.homeSlides).values({
      title,
      heading,
      description,
      image,
      link: link || '/',
      displayOrder: Number(display_order) || 0,
    }).returning();

    return NextResponse.json({ success: true, id: result[0]?.id });
  } catch (error) {
    console.error('Error adding home slide:', error);
    return NextResponse.json({ error: 'Failed to create slide' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, heading, description, image, link } = body;

    await db.update(schema.homeSlides)
      .set({ title, heading, description, image, link })
      .where(eq(schema.homeSlides.id, Number(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating slide:', error);
    return NextResponse.json({ error: 'Failed to update slide' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    await db.delete(schema.homeSlides).where(eq(schema.homeSlides.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting slide:', error);
    return NextResponse.json({ error: 'Failed to delete slide' }, { status: 500 });
  }
}
