// app/api/contact/route.js
export async function POST(req) {
  try {
    const b = await req.json();
    if (!b.name || !b.phone)
      return Response.json({ error: "Missing fields" }, { status: 400 });
    console.log("CONTACT LEAD:", b); // integrate Nodemailer/Resend + Google Sheet here
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
// app/api/partner/route.js — same pattern
export async function POST(req) {
  const b = await req.json();
  console.log("PARTNER LEAD:", b);
  return Response.json({ ok: true });
}
