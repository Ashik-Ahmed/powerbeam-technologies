"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ShieldCheck,
  Play,
  Zap,
  Sun,
  BatteryCharging,
} from "lucide-react";
import { IMG } from "@/lib/products";
import { STATS } from "@/lib/constants";
import { useRef } from "react";
export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const yFg = useTransform(scrollYProgress, [0, 1], [0, -60]);
  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-32 pb-16"
    >
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <Image
          src={IMG.hero}
          alt="Solar panels Bangladesh"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        <div className="absolute inset-0 grid-bg opacity-70" />
      </motion.div>
      <motion.div
        style={{ y: yFg }}
        className="max-w-7xl mx-auto px-6 relative w-full grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center"
      >
        <div>
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass rounded-full pl-2 pr-4 py-1.5 text-xs font-semibold"
          >
            <span className="bg-volt-500 text-ink-950 px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
              <ShieldCheck size={12} />
              EXCLUSIVE
            </span>
            <span className="text-white/80">
              Crown Micro Global Bangladesh Partner
            </span>
          </motion.div> */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="font-display text-[2.6rem] leading-[1.02] md:text-7xl font-extrabold mt-6"
          >
            Powering a <span className="text-gradient">Sustainable Future</span>{" "}
            with Reliable Solar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-lg mt-6 max-w-xl leading-relaxed"
          >
            High-quality Crown Micro solar inverters, LiFePO4 batteries & ESS
            for homes, businesses & industries across Bangladesh.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Link href="/products" className="btn-solar">
              Explore Products
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
            <Link
              href="/become-partner"
              className="hidden sm:inline-flex items-center gap-2 font-semibold text-solar-400 hover:text-solar-300 px-2"
            >
              <Play
                size={16}
                className="rounded-full border border-solar-500 p-0.5"
              />
              Become a Partner
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-xl"
          >
            {STATS.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-3 text-center">
                <p className="font-display text-2xl font-extrabold text-solar-400">
                  {s.value}
                  {s.suffix}
                </p>
                <p className="text-[11px] text-white/60 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="hidden lg:block relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-white/15 shadow-card">
            <Image
              src={IMG.home}
              alt="Modern home solar Bangladesh"
              width={640}
              height={760}
              className="object-cover h-[560px] w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
            <div className="absolute bottom-5 inset-x-5 glass-dark rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-volt-400 font-bold flex items-center gap-1">
                  <span className="w-2 h-2 bg-volt-500 rounded-full animate-pulse" />
                  LIVE GENERATION
                </p>
                <p className="font-display text-2xl font-bold mt-1">
                  8.42 kW{" "}
                  <span className="text-sm text-white/50">
                    • 32.6 kWh today
                  </span>
                </p>
              </div>
              <Sun className="text-solar-500 animate-spinSlow" size={36} />
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-10 top-10 glass-dark rounded-2xl p-4 flex items-center gap-3 shadow-card"
          >
            <span className="w-10 h-10 rounded-xl bg-solar-gradient grid place-items-center">
              <Zap className="text-ink-950" />
            </span>
            <div>
              <p className="text-sm font-bold">Up to 99% Efficiency</p>
              <p className="text-xs text-white/50">Volmore On-Grid</p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-4 bottom-32 glass-dark rounded-2xl p-4 flex items-center gap-3 shadow-card"
          >
            <span className="w-10 h-10 rounded-xl bg-volt-500 grid place-items-center">
              <BatteryCharging className="text-ink-950" />
            </span>
            <div>
              <p className="text-sm font-bold">8000+ Cycles LiFePO4</p>
              <p className="text-xs text-white/50">15 Years Design Life</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 inset-x-0 border-t border-white/10 bg-ink-950/70 backdrop-blur overflow-hidden py-3">
        <div className="marquee-track gap-12 text-xs font-bold tracking-widest text-white/50">
          {Array(2)
            .fill([
              "XAVIER HYBRID",
              "ARCEUS 6.5KW",
              "NOVA 12.6KW",
              "ELEGO OYSTER IP66",
              "VOLMORE 350KW",
              "NURA ESS",
              "CMLB LiFePO4",
              "SOLAR PUMP 200KW",
            ])
            .flat()
            .map((t, i) => (
              <span key={i} className="mx-6 whitespace-nowrap">
                ⚡ {t}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
