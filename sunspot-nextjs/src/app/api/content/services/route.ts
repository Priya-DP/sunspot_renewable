import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const services = await db.select().from(schema.services);
    return NextResponse.json({ success: true, services });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, icon, image, category, active, delay, content } = body;

    const result = await db.insert(schema.services).values({
      title,
      description,
      icon: icon || 'SolarPanelIcon',
      image: image || '',
      category: category || 'Solar Energy',
      active: active ? 1 : 0,
      delay: delay || '.3',
      content: content || '',
    }).returning();

    return NextResponse.json({ success: true, id: result[0]?.id });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, description, icon, image, category, active, delay, content } = body;

    await db.update(schema.services)
      .set({
        title,
        description,
        icon,
        image,
        category,
        active: active ? 1 : 0,
        delay,
        content,
      })
      .where(eq(schema.services.id, Number(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    await db.delete(schema.services).where(eq(schema.services.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}
