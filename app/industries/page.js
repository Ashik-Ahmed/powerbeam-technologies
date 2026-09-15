import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger,Item } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/content";
import { IMG } from "@/lib/products";
import * as L from "lucide-react";
export const metadata={title:"Industries We Serve — Solar Across Bangladesh",description:"Residential, corporate, manufacturing, agriculture, education, healthcare, government & NGOs — tailored solar."};
export default function Industries(){
 return <main className="bg-ink-950"><PageHero title="Solar Across Multiple Sectors" subtitle="8 key industries powered by Powerbeam + Crown Micro." crumb="Industries" image={IMG.roof}/>
 <section className="py-20 max-w-7xl mx-auto px-6"><SectionHeading dark eyebrow="Industries" title="Where We Deliver Impact"/><Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{INDUSTRIES.map(s=>{const I=L[s.icon]||L.Zap;return <Item key={s.t} className="rounded-3xl bg-ink-900 border border-white/10 p-7 hover:border-solar-500/40 card-hover"><I className="text-solar-500" size={30}/><h3 className="font-bold mt-4">{s.t}</h3><p className="text-xs text-white/50 mt-1">{s.d}</p></Item>;})}</Stagger></section><CTASection/></main>;
}