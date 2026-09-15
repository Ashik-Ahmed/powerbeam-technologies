"use client";
import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { GUIDES,FAQS } from "@/lib/content";
import { IMG } from "@/lib/products";
import { BookOpen,Newspaper } from "lucide-react";
export default function Resources(){
 const [o,setO]=useState(0);
 return <main className="bg-ink-950"><PageHero title="Resources & Knowledge Center" subtitle="Guides, news & FAQs for smarter solar decisions in Bangladesh." crumb="Resources" image={IMG.panel}/>
 <section className="py-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
  <div><h2 className="font-display text-2xl font-bold flex items-center gap-2"><BookOpen className="text-solar-500"/>Solar Energy Guides</h2><div className="grid gap-4 mt-6">{GUIDES.map(g=><article key={g.t} className="rounded-2xl bg-ink-900 border border-white/10 p-6 hover:border-solar-500/40 transition"><span className="text-[11px] font-bold text-volt-400 bg-volt-500/10 px-2.5 py-1 rounded-full">{g.tag} • {g.read}</span><h3 className="font-bold mt-3">{g.t}</h3><p className="text-sm text-white/55 mt-1">{g.d}</p></article>)}</div>
  <h2 className="font-display text-2xl font-bold mt-10 flex items-center gap-2"><Newspaper className="text-solar-500"/>News & Updates</h2><div className="mt-4 rounded-2xl bg-solar-gradient text-ink-950 p-6 font-semibold text-sm">🚀 Crown Micro NOVA 12.6kW & Oyster IP66 now in Dhaka stock • Dealer onboarding open nationwide.</div></div>
  <div><h2 className="font-display text-2xl font-bold">FAQs</h2><div className="space-y-3 mt-6">{FAQS.map((f,i)=><div key={i} className="rounded-2xl bg-ink-900 border border-white/10 overflow-hidden"><button onClick={()=>setO(o===i?-1:i)} className="w-full text-left px-6 py-5 font-bold text-sm flex justify-between gap-4">{f.q}<span className={o===i?"text-solar-400":""}>{o===i?"−":"+"}</span></button>{o===i&&<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">{f.a}</p>}</div>)}</div></div>
 </section></main>;
}