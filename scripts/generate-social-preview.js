const fs = require('fs');
const sharp = require('sharp');

const logoPath = 'public/images/powerbeam-logo.png';
const outputPath = 'public/og-image.png';

if (!fs.existsSync(logoPath)) {
  throw new Error(`Logo not found at ${logoPath}`);
}

const logo = fs.readFileSync(logoPath);
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0%" stop-color="#08111d" />
      <stop offset="100%" stop-color="#04070f" />
    </linearGradient>
    <radialGradient id="glowLeft" cx="0.2" cy="0.8" r="0.7">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.20" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="glowRight" cx="0.8" cy="0.15" r="0.75">
      <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="150" cy="540" r="230" fill="url(#glowLeft)"/>
  <circle cx="1040" cy="120" r="250" fill="url(#glowRight)"/>

  <rect x="52" y="52" width="1096" height="526" rx="28" fill="rgba(15,23,42,0.72)" stroke="rgba(148,163,184,0.28)"/>
  <rect x="88" y="92" width="430" height="300" rx="18" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)"/>

  <image href="data:image/png;base64,${logo.toString('base64')}" x="120" y="135" width="365" height="180" preserveAspectRatio="xMidYMid meet"/>

  <text x="590" y="245" fill="#f8fafc" font-size="48" font-family="Arial, Helvetica, sans-serif" font-weight="700">Powerbeam Technologies</text>
  <text x="590" y="305" fill="#b9c8d8" font-size="26" font-family="Arial, Helvetica, sans-serif" font-weight="500">Powering a Sustainable Future in Bangladesh</text>

  <g>
    <rect x="590" y="345" width="210" height="42" rx="21" fill="rgba(56,189,248,0.10)" stroke="rgba(56,189,248,0.30)"/>
    <text x="612" y="373" fill="#7dd3fc" font-size="18" font-family="Arial, Helvetica, sans-serif" font-weight="700">SOLAR ENERGY</text>
  </g>

  <g>
    <rect x="815" y="345" width="155" height="42" rx="21" fill="rgba(45,212,191,0.12)" stroke="rgba(45,212,191,0.30)"/>
    <text x="838" y="373" fill="#99f6e4" font-size="18" font-family="Arial, Helvetica, sans-serif" font-weight="700">BESS</text>
  </g>

  <text x="590" y="465" fill="#f8fafc" font-size="26" font-family="Arial, Helvetica, sans-serif" font-weight="700">powerbeam.com.bd</text>
  <text x="890" y="465" fill="#2dd4bf" font-size="18" font-family="Arial, Helvetica, sans-serif" font-weight="700">TRUSTED SOLAR PARTNER</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)
  .then(() => {
    console.log(`Generated ${outputPath}`);
  })
  .catch((error) => {
    console.error('Failed to generate social preview', error);
    process.exit(1);
  });
