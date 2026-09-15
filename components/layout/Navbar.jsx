"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  Menu,
  Phone,
  X,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { CONTACT, NAV } from "@/lib/constants";
import { CATEGORIES } from "@/lib/products";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prod, setProd] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-ink-950 border-b border-white/10 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between text-white/70">
          <span className="flex gap-4">
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex gap-1.5 items-center hover:text-solar-400"
            >
              <Phone size={13} />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex gap-1.5 items-center hover:text-solar-400"
            >
              <Mail size={13} />
              {CONTACT.email}
            </a>
          </span>
          {/* <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-volt-500 rounded-full animate-pulse" />
            Exclusive Crown Micro Partner • {CONTACT.hours}
          </span> */}
        </div>
      </div>

      <nav
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "bg-ink-950/90 backdrop-blur-xl border-b border-white/10 shadow-card"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="w-11 h-11 rounded-2xl bg-solar-gradient grid place-items-center shadow-glow group-hover:rotate-12 transition-transform">
              <Zap className="text-ink-950" fill="currentColor" />
            </span>
            <span>
              <span className="font-display font-extrabold text-xl tracking-tight block leading-none">
                POWERBEAM
              </span>
              <span className="text-[10px] tracking-[0.3em] text-solar-500 font-bold">
                TECHNOLOGIES
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {NAV.map((item) =>
              item.mega ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setProd(true)}
                  onMouseLeave={() => setProd(false)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 hover:text-solar-400 transition"
                  >
                    Products
                    <ChevronDown size={14} />
                  </Link>

                  <AnimatePresence>
                    {prod && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[560px]"
                      >
                        <div className="bg-ink-900 border border-white/10 rounded-2xl p-4 grid grid-cols-2 gap-2 shadow-card">
                          {CATEGORIES.map((category) => (
                            <Link
                              key={category.slug}
                              href={`/products?cat=${category.slug}`}
                              className="p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-solar-500/30 transition"
                            >
                              <p className="font-bold text-white text-sm">
                                {category.label}
                              </p>
                              <p className="text-xs text-white/50 line-clamp-1 mt-1">
                                {category.desc}
                              </p>
                            </Link>
                          ))}
                          <Link
                            href="/compare"
                            className="col-span-2 mt-1 text-center text-xs font-bold text-solar-400 bg-solar-500/10 rounded-xl py-2.5 hover:bg-solar-500/20"
                          >
                            Compare Inverters →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-solar-400 transition relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-solar-500 after:transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="hidden lg:flex gap-3">
            <Link href="/contact" className="btn-ghost !py-2.5 !px-5 !text-sm">
              Contact Us
            </Link>
            <Link
              href="/become-partner"
              className="btn-solar !py-2.5 !px-5 !text-sm"
            >
              Become a Partner
              <ArrowRight size={16} />
            </Link>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28 }}
            className="fixed inset-y-0 right-0 w-[86%] max-w-sm bg-ink-900 border-l border-white/10 z-[60] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center">
              <span className="font-display font-bold">MENU</span>
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="mt-6 space-y-1 flex-1 overflow-auto">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-white/5 font-display text-lg"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/become-partner"
                onClick={() => setOpen(false)}
                className="btn-solar mt-6 w-full"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
