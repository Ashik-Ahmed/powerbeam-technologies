/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif","image/webp"],
    remotePatterns: [{protocol:"https",hostname:"images.unsplash.com"}],
    deviceSizes: [640,750,828,1080,1200,1920],
  },
  experimental: { optimizePackageImports: ["lucide-react","framer-motion"] },
  async headers(){return[{source:"/(.*)",headers:[
    {key:"X-Content-Type-Options",value:"nosniff"},
    {key:"X-Frame-Options",value:"SAMEORIGIN"},
    {key:"Referrer-Policy",value:"origin-when-cross-origin"},
    {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"}
  ]}]},
};
module.exports = nextConfig;