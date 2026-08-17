import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const projects = await db.select().from(schema.projects);
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, image, link, delay, location, description } = body;

    const result = await db.insert(schema.projects).values({
      title,
      category,
      image,
      link: link || '/project-details',
      delay: delay || '.3',
      location: location || '',
      description: description || '',
    }).returning();

    return NextResponse.json({ success: true, id: result[0]?.id });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, title, category, image, link, delay, location, description } = body;

    await db.update(schema.projects)
      .set({
        title,
        category,
        image,
        link,
        delay,
        location,
        description,
      })
      .where(eq(schema.projects.id, Number(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    await db.delete(schema.projects).where(eq(schema.projects.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
