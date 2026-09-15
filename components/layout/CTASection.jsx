import Link from "next/link";
import Reveal from "../ui/Reveal";
import { Phone,ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";
export default function CTASection(){
 return <section className="relative py-20 px-6"><div className="max-w-6xl mx-auto relative overflow-hidden rounded-[2rem] bg-ink-800 border border-solar-500/30 p-10 md:p-16 text-center">
  <div className="absolute inset-0 bg-hero-glow"/><div className="absolute -top-24 -right-24 w-96 h-96 bg-solar-500/20 blur-[120px] rounded-full"/>
  <Reveal><h2 className="font-display text-3xl md:text-5xl font-extrabold relative">Ready to Switch to <span className="text-gradient">Solar Energy?</span></h2><p className="text-white/70 mt-4 max-w-xl mx-auto relative">Talk to our experts to find the right Crown Micro solar solution for your energy needs. Free site survey in Dhaka.</p>
  <div className="flex flex-wrap justify-center gap-4 mt-8 relative"><Link href="/contact" className="btn-solar">Request a Consultation<ArrowRight size={18}/></Link><a href={`tel:${CONTACT.phone}`} className="btn-ghost"><Phone size={18}/>{CONTACT.phoneDisplay}</a></div></Reveal>
 </div></section>;
}