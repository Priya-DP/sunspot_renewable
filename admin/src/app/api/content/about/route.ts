import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const about = await db.select().from(schema.aboutContent);
    return NextResponse.json({ success: true, about: about[0] || null });
  } catch (error) {
    console.error('Error fetching about content:', error);
    return NextResponse.json({ error: 'Failed to fetch about content' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const {
      id,
      sectionSubtitle,
      mainHeading,
      description,
      aboutImage1,
      aboutImage2,
      experienceYears,
      reliabilityTitle,
      reliabilityDesc,
      supportTitle,
      supportDesc,
    } = body;

    if (id) {
      await db.update(schema.aboutContent)
        .set({
          sectionSubtitle,
          mainHeading,
          description,
          aboutImage1,
          aboutImage2,
          experienceYears,
          reliabilityTitle,
          reliabilityDesc,
          supportTitle,
          supportDesc,
        })
        .where(eq(schema.aboutContent.id, Number(id)));
    } else {
      await db.insert(schema.aboutContent)
        .values({
          sectionSubtitle,
          mainHeading,
          description,
          aboutImage1,
          aboutImage2,
          experienceYears,
          reliabilityTitle,
          reliabilityDesc,
          supportTitle,
          supportDesc,
        });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating about content:', error);
    return NextResponse.json({ error: 'Failed to update about content' }, { status: 500 });
  }
}
