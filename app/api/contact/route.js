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

  const limits = { name: 120, company: 160, phone: 50, email: 254, interest: 120, message: 5000 };
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
  if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  try {
    await sendLeadEmail({
      subject: 'New website consultation inquiry',
      replyTo: fields.email,
      fields: [
        { label: 'Name', value: fields.name },
        { label: 'Company', value: fields.company },
        { label: 'Phone', value: fields.phone },
        { label: 'Email', value: fields.email },
        { label: 'Interested product / solution', value: fields.interest },
        { label: 'Message', value: fields.message },
      ],
    });
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact inquiry email:', error);
    return Response.json({ error: 'Unable to send your inquiry right now.' }, { status: 500 });
  }
}
