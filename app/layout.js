import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import { orgSchema, localSchema, defaultKeywords } from "@/lib/seo";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
const display = Space_Grotesk({subsets:["latin"],variable:"--font-display",display:"swap"});
const body = Inter({subsets:["latin"],variable:"--font-body",display:"swap"});
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Powerbeam Technologies | Best Solar Inverter & Battery Supplier in Bangladesh", template: "%s | Powerbeam Technologies Bangladesh" },
  description: "Powerbeam Technologies — exclusive channel partner of Crown Micro Global Bangladesh. Hybrid, on-grid, off-grid inverters, LiFePO4 batteries & solar pumps with nationwide support in Dhaka, Bangladesh.",
  keywords: defaultKeywords,
  authors: [{name:SITE_NAME}],
  robots: { index:true, follow:true, googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1} },
  alternates: { canonical: SITE_URL, languages:{"en-BD":SITE_URL,"bn-BD":`${SITE_URL}/bn`} },
  openGraph: { type:"website", locale:"en_BD", url:SITE_URL, siteName:SITE_NAME, title:"Powerbeam Technologies | Powering a Sustainable Future in Bangladesh", description:"Reliable Crown Micro solar inverters, ESS & batteries. Residential, commercial & industrial solutions.", images:[{url:`${SITE_URL}/og.jpg`,width:1200,height:630,alt:"Powerbeam Solar Bangladesh"}] },
  twitter: { card:"summary_large_image", title:"Powerbeam Technologies Bangladesh", description:"Exclusive Crown Micro partner — solar inverters & batteries." },
  verification: { google: "google-site-verification-code" },
  category: "Solar Energy",
};
export const viewport = { themeColor:"#04070F", width:"device-width", initialScale:1 };
export default function RootLayout({children}){
 return <html lang="en-BD" className={`${display.variable} ${body.variable}`}>
  <head><link rel="icon" href="/favicon.svg"/><link rel="manifest" href="/manifest.webmanifest"/><meta name="geo.region" content="BD"/><meta name="geo.placename" content="Dhaka"/><JsonLd data={orgSchema()}/><JsonLd data={localSchema()}/></head>
  <body className="bg-ink-950 text-white font-sans">
   <Navbar/>
   {children}
   <Footer/>
   <WhatsAppButton/>
  </body>
  </html>;
}