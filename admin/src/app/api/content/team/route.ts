import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const members = await db.select().from(schema.teamMembers);
    return NextResponse.json({ success: true, teamMembers: members });
  } catch (error) {
    console.error('Error fetching team members:', error);
    return NextResponse.json({ error: 'Failed to fetch team members' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, description, image, facebookLink, instagramLink, linkedinLink, delay } = body;

    const result = await db.insert(schema.teamMembers).values({
      name,
      role,
      description,
      image,
      facebookLink: facebookLink || '',
      instagramLink: instagramLink || '',
      linkedinLink: linkedinLink || '',
      delay: delay || '.3',
    }).returning();

    return NextResponse.json({ success: true, id: result[0]?.id });
  } catch (error) {
    console.error('Error creating team member:', error);
    return NextResponse.json({ error: 'Failed to create team member' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, name, role, description, image, facebookLink, instagramLink, linkedinLink, delay } = body;

    await db.update(schema.teamMembers)
      .set({
        name,
        role,
        description,
        image,
        facebookLink,
        instagramLink,
        linkedinLink,
        delay,
      })
      .where(eq(schema.teamMembers.id, Number(id)));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating team member:', error);
    return NextResponse.json({ error: 'Failed to update team member' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'Missing ID' }, { status: 400 });

    await db.delete(schema.teamMembers).where(eq(schema.teamMembers.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting team member:', error);
    return NextResponse.json({ error: 'Failed to delete team member' }, { status: 500 });
  }
}
