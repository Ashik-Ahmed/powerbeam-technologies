import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import Reveal from "@/components/ui/Reveal";
import { IMG } from "@/lib/products";
import { CheckCircle2,Home,Building2,Factory } from "lucide-react";
export const metadata={title:"Solar Solutions: Residential, Commercial & Industrial | Bangladesh",description:"Lower bills & backup power: residential 3-10kW, commercial 10-100kW, industrial 100kW-1MW+ solar with Crown Micro inverters & ESS."};
const S=[
 {icon:Home,t:"Residential Solar Solutions",d:"For Dhaka flats, villas & rural homes",pts:["Lower electricity costs 40-70%","Backup during load-shedding","Sustainable usage + net-metering"],cap:"3kW – 15kW Hybrid + 5-15kWh Battery",img:IMG.home},
 {icon:Building2,t:"Commercial Solar Solutions",d:"Offices, retail, schools, hospitals",pts:["Reduced operational expenses","Improved energy reliability","Environmental responsibility & branding"],cap:"10kW – 125kW On-Grid/Hybrid",img:IMG.roof},
 {icon:Factory,t:"Industrial Solar Solutions",d:"Factories, RMG, manufacturing plants",pts:["Energy cost optimization","Scalable 100kW-MW systems","Long-term sustainability & ESG"],cap:"50kW – 350kW+ Utility",img:IMG.ind},
];
export default function Solutions(){
 return <main className="bg-ink-950"><PageHero title="Solutions for Every Scale" subtitle="System design, product supply, installation support & consultation — end-to-end." crumb="Solutions" image={IMG.field}/>
 <section className="py-20 max-w-7xl mx-auto px-6 space-y-8">{S.map((s,i)=><Reveal key={s.t} className={`grid lg:grid-cols-2 gap-8 items-center rounded-[2rem] bg-ink-900 border border-white/10 overflow-hidden ${i%2?"lg:[&>*:first-child]:order-2":""}`}><div className="p-8 md:p-12"><span className="w-12 h-12 rounded-2xl bg-solar-gradient grid place-items-center"><s.icon className="text-ink-950"/></span><h2 className="font-display text-2xl md:text-4xl font-bold mt-5">{s.t}</h2><p className="text-solar-400 text-sm mt-2 font-semibold">{s.d} • {s.cap}</p><ul className="mt-6 space-y-3">{s.pts.map(p=><li key={p} className="flex gap-2 text-white/70"><CheckCircle2 className="text-volt-400" size={18}/>{p}</li>)}</ul></div><div className="h-72 lg:h-full min-h-[320px] relative"><img src={s.img} alt={s.t} className="absolute inset-0 w-full h-full object-cover"/></div></Reveal>)}</section><CTASection/></main>;
}