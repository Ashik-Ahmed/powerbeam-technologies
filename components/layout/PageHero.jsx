"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
export default function PageHero({title,subtitle,crumb,image}){
 return <section className="relative min-h-[52vh] flex items-end overflow-hidden pt-36 pb-14">
  {image&&<Image src={image} alt={title} fill priority className="object-cover" sizes="100vw"/>}
  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40"/><div className="absolute inset-0 grid-bg opacity-60"/>
  <div className="max-w-7xl mx-auto px-6 relative w-full">
   <motion.nav initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-2 text-xs text-white/60 mb-4"><Link href="/" className="hover:text-solar-400">Home</Link><ChevronRight size={12}/><span className="text-solar-400">{crumb||title}</span></motion.nav>
   <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="font-display text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">{title}</motion.h1>
   {subtitle&&<motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.15}} className="text-white/70 mt-4 max-w-2xl text-lg">{subtitle}</motion.p>}
  </div></section>;
}