// app/api/partner/route.js
export async function POST(req) {
  const b = await req.json();
  console.log("PARTNER LEAD:", b);
  return Response.json({ ok: true });
}
