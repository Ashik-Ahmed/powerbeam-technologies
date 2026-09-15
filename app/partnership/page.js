import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import Reveal from "@/components/ui/Reveal";
import { IMG } from "@/lib/products";
import { BadgeCheck,Globe,Truck,Wrench } from "lucide-react";
export const metadata={title:"Exclusive Crown Micro Partner in Bangladesh | Powerbeam",description:"Powerbeam is exclusive channel partner of Crown Micro Global Bangladesh Ltd — product excellence, supply chain & technical support."};
export default function Partnership(){
 return <main className="bg-ink-950"><PageHero title="A Partnership Built on Trust and Technology" subtitle="Exclusive channel partnership with Crown Micro Global Bangladesh Limited." crumb="Partnership" image={IMG.field}/>
 <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
  <Reveal><h2 className="font-display text-3xl font-bold">Global Technology × Local Expertise</h2><p className="text-white/65 mt-5 leading-relaxed">This strategic collaboration combines product excellence, market expertise, reliable supply chain management & technical support — expanding access to efficient solar across Bangladesh.</p><div className="grid sm:grid-cols-2 gap-4 mt-8">{[{i:BadgeCheck,t:"Product Excellence",d:"Tier-1 inverters & Grade-A LFP"},{i:Globe,t:"Market Expertise",d:"30+ countries, BD-focused"},{i:Truck,t:"Reliable Supply",d:"Dhaka stock & fast delivery"},{i:Wrench,t:"Technical Support",d:"Warranty & commissioning"}].map(c=><div key={c.t} className="rounded-2xl bg-ink-900 border border-white/10 p-5"><c.i className="text-solar-500"/><h3 className="font-bold mt-3">{c.t}</h3><p className="text-xs text-white/55 mt-1">{c.d}</p></div>)}</div></Reveal>
  <Reveal delay={.1} className="rounded-[2rem] overflow-hidden border border-white/10"><img src={IMG.ind} alt="Partnership" className="h-[480px] w-full object-cover"/></Reveal>
 </section><CTASection/></main>;
}