import nodemailer from 'nodemailer';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[character];
  });
}

export async function sendLeadEmail({ subject, fields, replyTo }) {
  const host = process.env.ZIMBRA_SMTP_HOST;
  const port = Number(process.env.ZIMBRA_SMTP_PORT || 587);
  const user = process.env.ZIMBRA_EMAIL;
  const pass = process.env.ZIMBRA_PASSWORD;

  if (!host || !user || !pass || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error('Zimbra SMTP environment variables are missing or invalid.');
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
  });
  const details = fields.map(({ label, value }) => `${label}: ${value || '-'}`);

  await transporter.sendMail({
    from: { name: 'Powerbeam Website', address: user },
    to: process.env.CONTACT_EMAIL_TO || user,
    replyTo: replyTo || undefined,
    subject,
    text: details.join('\n'),
    html: `<h2>${escapeHtml(subject)}</h2><dl>${fields
      .map(
        ({ label, value }) =>
          `<dt><strong>${escapeHtml(label)}</strong></dt><dd>${escapeHtml(value || '-').replace(/\n/g, '<br>')}</dd>`,
      )
      .join('')}</dl>`,
  });
}
