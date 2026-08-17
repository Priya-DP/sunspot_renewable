import { NextResponse } from 'next/server';
import { db, schema } from '@/db';
import { eq } from 'drizzle-orm';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const contact = await db.select().from(schema.contactInfo);
    const messages = await db.select().from(schema.contactMessages);
    return NextResponse.json({
      success: true,
      contact: contact[0] || null,
      messages
    });
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return NextResponse.json({ error: 'Failed to fetch contact info' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, phone, email, address, workingHours, mapUrl } = body;

    if (id) {
      await db.update(schema.contactInfo)
        .set({ phone, email, address, workingHours, mapUrl })
        .where(eq(schema.contactInfo.id, Number(id)));
    } else {
      await db.insert(schema.contactInfo)
        .values({ phone, email, address, workingHours, mapUrl });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating contact info:', error);
    return NextResponse.json({ error: 'Failed to update contact info' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  // Visitor submitting contact form
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    const result = await db.insert(schema.contactMessages).values({
      name,
      email,
      phone: phone || '',
      subject: subject || 'Website Inquiry',
      message,
    }).returning();

    return NextResponse.json({ success: true, id: result[0]?.id });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 });
  }
}
