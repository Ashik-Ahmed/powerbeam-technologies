import { sendLeadEmail } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const limits = { name: 120, phone: 50, business: 160, district: 120, type: 80, message: 5000 };
  const fields = Object.fromEntries(
    Object.entries(limits).map(([key]) => [
      key,
      typeof body[key] === 'string' ? body[key].trim() : '',
    ]),
  );

  if (!fields.name || !fields.phone) {
    return Response.json({ error: 'Name and phone are required.' }, { status: 400 });
  }
  if (Object.entries(limits).some(([key, limit]) => fields[key].length > limit)) {
    return Response.json({ error: 'One or more fields are too long.' }, { status: 400 });
  }

  try {
    await sendLeadEmail({
      subject: 'New website partner application',
      fields: [
        { label: 'Name', value: fields.name },
        { label: 'Phone', value: fields.phone },
        { label: 'Business', value: fields.business },
        { label: 'District / Area', value: fields.district },
        { label: 'Partner type', value: fields.type },
        { label: 'Message', value: fields.message },
      ],
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Failed to send partner inquiry email:', error);
    return Response.json({ error: 'Unable to send your application right now.' }, { status: 500 });
  }
}
