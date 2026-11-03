import Link from 'next/link';
import { Zap, Phone, Mail, MapPin, Clock, Facebook, Youtube, Linkedin } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { CATEGORIES } from '@/lib/products';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-[#020409] border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image
                // src="/images/powerbeam-logo.svg"
                src="/images/Logo_Final-white-text.svg"
                alt="Powerbeam Logo"
                width={150}
                height={60}
                priority
              />
            </div>
            <p className="text-white/60 text-sm mt-4 leading-relaxed">
              Powering homes and businesses across the country with tier-one solar panels,
              high-efficiency inverters, and dependable energy storage solutions.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Youtube, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/15 grid place-items-center hover:bg-solar-500 hover:text-ink-950 hover:border-solar-500 transition"
                >
                  <I size={16} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-solar-400">Products</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/products?cat=${c.slug}`} className="hover:text-solar-400">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-solar-400">Company</h4>
            <ul className="space-y-2.5 text-sm text-white/65">
              {[
                ['About Us', '/about'],
                ['Solutions', '/solutions'],
                ['Services', '/services'],
                ['Partnership', '/partnership'],
                ['Resources', '/resources'],
                ['Compare', '/compare'],
                ['Become Partner', '/become-partner'],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className="hover:text-solar-400">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-4 text-solar-400">Contact</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <h5 className="text-white font-semibold">Dhaka Office</h5>
              <li className="flex gap-2">
                <MapPin size={16} className="text-solar-500 shrink-0" />
                {CONTACT.address}
              </li>
              <h5 className="text-white font-semibold">Rajshahi Office</h5>
              <li className="flex gap-2">
                <MapPin size={16} className="text-solar-500 shrink-0" />
                {CONTACT.rajshahiAddress}
              </li>
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex gap-2 hover:text-solar-400">
                  <Phone size={16} className="text-solar-500" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex gap-2 hover:text-solar-400">
                  <Mail size={16} className="text-solar-500" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-2">
                <Clock size={16} className="text-solar-500" />
                {CONTACT.hours}
              </li>
            </ul>
            <Link href="/contact" className="btn-solar !py-2.5 !px-5 !text-sm mt-5">
              Request Consultation
            </Link>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/40">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Powerbeam
            Technologies. All rights reserved. | Solar Inverter Supplier in Bangladesh
          </p>
          <p>ISO 9001 • IP66 • SREDA and BSTI Enlisted</p>
        </div>
      </div>
    </footer>
  );
}
