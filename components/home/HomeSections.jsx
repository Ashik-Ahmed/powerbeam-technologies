"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Handshake,
  Leaf,
  Headset,
  Home,
  Building2,
  Factory,
  GraduationCap,
  Landmark,
  Satellite,
  Quote,
  Download,
  GitCompareArrows,
} from "lucide-react";
import Reveal, { Stagger, Item } from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ProductCard from "../products/ProductCard";
import { PRODUCTS, IMG, CATEGORIES } from "@/lib/products";
import { TESTIMONIALS, FAQS } from "@/lib/content";
import { useState } from "react";
export function WhyChoose() {
  const items = [
    {
      icon: ShieldCheck,
      t: "Trusted Solar Expertise",
      d: "Industry-focused, quality-assured Crown Micro products with technical support.",
      pts: ["Quality-assured", "Technical knowledge", "Proven performance"],
    },
    {
      icon: Handshake,
      t: "Exclusive Partnership",
      d: "Official channel partner — authentic products & reliable supply chain.",
      pts: ["100% Genuine", "Official warranty", "Nationwide stock"],
    },
    {
      icon: Headset,
      t: "Customer-Centric",
      d: "Solution-oriented recommendations & long-term after-sales care.",
      pts: ["Free consultation", "AMC support", "Monitoring help"],
    },
    {
      icon: Leaf,
      t: "Sustainability Commitment",
      d: "Accelerating renewable adoption & energy independence in Bangladesh.",
      pts: ["Net-metering", "CO₂ reduction", "Energy freedom"],
    },
  ];
  return (
    <section className="py-24 bg-ink-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          dark
          eyebrow="Why Powerbeam"
          title="Engineered for Bangladesh. Backed by Global Tech."
          desc="We combine Crown Micro innovation with local expertise for maximum ROI."
        />
        <Stagger className="grid md:grid-cols-4 gap-5">
          {items.map((c) => (
            <Item
              key={c.t}
              className="rounded-3xl bg-ink-800/80 border border-white/10 p-7 hover:border-solar-500/40 card-hover group"
            >
              <span className="w-12 h-12 rounded-2xl bg-solar-gradient grid place-items-center shadow-glow group-hover:scale-110 transition">
                <c.icon className="text-ink-950" />
              </span>
              <h3 className="font-display font-bold text-lg mt-5">{c.t}</h3>
              <p className="text-sm text-white/55 mt-2">{c.d}</p>
              <ul className="mt-4 space-y-2">
                {c.pts.map((p) => (
                  <li key={p} className="text-xs flex gap-2 text-white/70">
                    <CheckCircle2 size={14} className="text-volt-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
export function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#F6F8FB] text-ink-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Featured Products"
          title="Powerbeam Solar Portfolio in Bangladesh"
          desc="Hybrid, on-grid, ESS & pumps — filter by your needs. Best solar inverter price in Bangladesh with warranty."
        />
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/products?cat=${c.slug}`}
              className="text-xs font-bold px-4 py-2 rounded-full border border-ink-900/15 hover:bg-ink-900 hover:text-white transition"
            >
              {c.label}
            </Link>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 6).map((p, i) => (
            <ProductCard key={p.slug} p={p} i={i} />
          ))}
        </div>
        <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/products" className="btn-dark">
            View All Products
            <ArrowRight size={18} />
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full border-2 border-ink-900 hover:bg-ink-900 hover:text-white transition"
          >
            <GitCompareArrows size={18} />
            Compare Inverters
          </Link>
        </div>
      </div>
    </section>
  );
}
export function Partnership() {
  return (
    <section className="py-24 bg-ink-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <Reveal>
          <span className="text-xs font-bold tracking-widest text-solar-400 border border-solar-500/30 bg-solar-500/10 px-3 py-1.5 rounded-full">
            POWERED BY STRONG PARTNERSHIP
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-5 leading-tight">
            Exclusive Channel Partner of{" "}
            <span className="text-gradient">Crown Micro Global Bangladesh</span>
          </h2>
          <p className="text-white/65 mt-5 leading-relaxed">
            Global-quality solar technology + local distribution strength.
            Authentic products, professional guidance & dependable service —
            operating in 30+ countries.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 mt-7">
            {[
              "Product excellence",
              "Market expertise",
              "Reliable supply chain",
              "Technical support",
            ].map((t) => (
              <li
                key={t}
                className="flex gap-2 text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="text-volt-400" size={18} />
                {t}
              </li>
            ))}
          </ul>
          <Link href="/partnership" className="btn-solar mt-8">
            Our Partnership Story
            <ArrowRight size={18} />
          </Link>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="rounded-[2rem] overflow-hidden border border-white/15 shadow-card">
            <Image
              src={IMG.field}
              alt="Crown Micro partnership"
              width={700}
              height={520}
              className="object-cover h-[480px] w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 glass-dark rounded-2xl p-5 shadow-card">
            <p className="font-display text-3xl font-extrabold text-solar-400">
              30+
            </p>
            <p className="text-xs text-white/60">Countries Served</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export function Applications() {
  const apps = [
    { icon: Home, t: "Residential Buildings" },
    { icon: Building2, t: "Commercial Facilities" },
    { icon: Factory, t: "Industrial Projects" },
    { icon: GraduationCap, t: "Educational Institutions" },
    { icon: Landmark, t: "Government & NGO" },
    { icon: Satellite, t: "Remote & Off-grid" },
  ];
  return (
    <section className="py-24 bg-white text-ink-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Applications"
          title="Solar Solutions for Every Sector"
          desc="From Uttara homes to Rangpur irrigation — scalable 1.5kW to 350kW+ systems."
        />
        <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {apps.map((a) => (
            <Item
              key={a.t}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center hover:bg-ink-900 hover:text-white hover:border-ink-900 transition-all duration-300 group"
            >
              <a.icon
                className="mx-auto text-solar-600 group-hover:text-solar-400"
                size={30}
              />
              <p className="text-sm font-bold mt-3">{a.t}</p>
            </Item>
          ))}
        </Stagger>
        <div className="mt-10 rounded-3xl overflow-hidden grid md:grid-cols-3 border border-slate-200">
          <div className="p-8 bg-ink-900 text-white">
            <h3 className="font-display font-bold text-xl">Download Catalog</h3>
            <p className="text-sm text-white/60 mt-2">
              Full Crown Micro specs & datasheets.
            </p>
            <a
              href="/catalog/powerbeam-crown-micro-catalog.pdf"
              className="btn-solar !py-2.5 mt-5 !text-sm"
            >
              <Download size={16} />
              PDF Catalog
            </a>
          </div>
          <div className="relative h-56 md:h-auto">
            <Image
              src={IMG.panel}
              alt="Solar panels"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 bg-solar-gradient text-ink-950">
            <h3 className="font-display font-bold text-xl">
              Get Best Price in BD
            </h3>
            <p className="text-sm mt-2 font-medium">
              Hybrid packages with battery & panels.
            </p>
            <Link
              href="/contact"
              className="inline-flex mt-5 font-bold bg-ink-950 text-white px-6 py-2.5 rounded-full text-sm"
            >
              Request Quote →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Testimonials() {
  return (
    <section className="py-24 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          dark
          eyebrow="Testimonials"
          title="Trusted Across Bangladesh"
        />
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <Reveal
              key={t.n}
              className="rounded-3xl bg-ink-800 border border-white/10 p-7 relative"
            >
              <Quote className="text-solar-500" size={28} />
              <p className="text-white/70 text-sm mt-4 leading-relaxed">
                “{t.t}”
              </p>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="font-bold">{t.n}</p>
                <p className="text-xs text-solar-400">{t.r}</p>
                <p className="text-xs text-amber-400 mt-1">★★★★★</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function HomeFAQ() {
  const [o, setO] = useState(0);
  return (
    <section className="py-24 bg-[#F6F8FB] text-ink-900">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="FAQs"
          title="Solar Buying Questions, Answered"
        />
        <div className="space-y-3">
          {FAQS.slice(0, 5).map((f, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setO(o === i ? -1 : i)}
                className="w-full text-left px-6 py-5 font-bold flex justify-between items-center"
              >
                {f.q}
                <span
                  className={`w-8 h-8 rounded-full grid place-items-center transition ${o === i ? "bg-solar-500 text-ink-950 rotate-45" : "bg-slate-100"}`}
                >
                  +
                </span>
              </button>
              {o === i && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="px-6 pb-6 text-sm text-slate-600 leading-relaxed"
                >
                  {f.a}
                </motion.p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/resources"
            className="font-bold text-ink-900 underline underline-offset-8 decoration-solar-500 decoration-2"
          >
            Visit Knowledge Center →
          </Link>
        </div>
      </div>
    </section>
  );
}
