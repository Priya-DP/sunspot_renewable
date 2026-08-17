import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const ext = path.extname(file.name) || '.jpg';
    const filename = `upload-${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;

    // Target upload locations: main site public/uploads and admin public/uploads
    const mainPublicUploads = path.resolve(process.cwd(), '..', 'public', 'uploads');
    const adminPublicUploads = path.resolve(process.cwd(), 'public', 'uploads');

    [mainPublicUploads, adminPublicUploads].forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    fs.writeFileSync(path.join(mainPublicUploads, filename), buffer);
    fs.writeFileSync(path.join(adminPublicUploads, filename), buffer);

    const fileUrl = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url: fileUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
