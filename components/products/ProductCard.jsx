"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
export default function ProductCard({ p, i = 0 }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (i % 3) * 0.08 }}
      className="group relative rounded-3xl overflow-hidden bg-ink-800 border border-white/10 hover:border-solar-500/50 card-hover"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width:768px)100vw,33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/20 to-transparent" />
        {p.badge && (
          <span className="absolute top-4 left-4 text-[11px] font-bold bg-solar-gradient text-ink-950 px-3 py-1.5 rounded-full flex items-center gap-1">
            <BadgeCheck size={12} />
            {p.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 text-[11px] font-bold glass-dark px-3 py-1.5 rounded-full">
          {p.power}
        </span>
      </div>
      <div className="p-6">
        <p className="text-[11px] tracking-widest text-volt-400 font-bold">
          {p.categoryLabel} • {p.series}
        </p>
        <h3 className="font-display text-xl font-bold mt-2 leading-snug text-solar-400 transition">
          <Link href={`/products/${p.slug}`}>{p.name}</Link>
        </h3>
        <p className="text-sm text-white/55 mt-2 line-clamp-2">{p.tagline}</p>
        <div className="flex gap-2 mt-4 text-white/70 text-[11px] font-semibold">
          <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            {p.efficiency}
          </span>
          <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
            {p.warranty}
          </span>
        </div>
        <div className="flex gap-3 mt-5">
          <Link
            href={`/products/${p.slug}`}
            className="flex-1 text-white text-center text-sm font-bold bg-white/5 hover:bg-solar-gradient hover:text-ink-950 border border-white/10 rounded-full py-2.5 transition"
          >
            View Details
          </Link>
          <Link
            href={`/contact?product=${p.slug}`}
            className="w-11 h-11 grid place-items-center rounded-full bg-solar-gradient text-ink-950"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
