# Powerbeam Technologies — Solar Corporate Site

Next.js 15 App Router • Tailwind • Framer Motion • SEO BD

- Run: npm install && npm run dev
- Place catalog PDF at /public/catalog/powerbeam-crown-micro-catalog.pdf
- Replace Unsplash with real product shoots in /public/images/products for higher conversion
- Update google verification in layout.js, deploy on Vercel with domain www.powerbeambd.com

## Website inquiry email

Contact and partner form submissions are sent through the Zimbra mailbox's SMTP server.

1. Copy `.env.example` to `.env.local`.
2. Set `ZIMBRA_SMTP_HOST`, `ZIMBRA_SMTP_PORT`, `ZIMBRA_EMAIL`, and `ZIMBRA_PASSWORD` to the SMTP settings provided by your Zimbra administrator. Use port `465` for implicit TLS or `587` for STARTTLS.
3. Set `CONTACT_EMAIL_TO` to the address that should receive inquiries, if it differs from the sending mailbox.
4. Restart the development server after editing `.env.local`. In production, add the same variables to the hosting provider's server-side environment configuration.

Keep `.env.local` and mailbox passwords private; do not commit credentials or expose them in `NEXT_PUBLIC_*` variables. Send a test inquiry from both forms after configuration.
