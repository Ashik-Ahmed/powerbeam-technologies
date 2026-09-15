"use client";
import { useState,useMemo,Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS,CATEGORIES,IMG } from "@/lib/products";
import { Search } from "lucide-react";
function List(){
 const sp=useSearchParams();const init=sp.get("cat")||"all";
 const [cat,setCat]=useState(init);const [q,setQ]=useState("");
 const filtered=useMemo(()=>PRODUCTS.filter(p=>(cat==="all"||p.category===cat)&&(p.name+p.series+p.power).toLowerCase().includes(q.toLowerCase())),[cat,q]);
 return <>
  <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
   <div className="flex flex-wrap gap-2">{[{slug:"all",label:"All"} ,...CATEGORIES].map(c=><button key={c.slug} onClick={()=>setCat(c.slug)} className={`text-xs font-bold px-4 py-2.5 rounded-full border transition ${cat===c.slug?"bg-solar-gradient text-ink-950 border-transparent":"border-white/15 text-white/70 hover:border-solar-500/50"}`}>{c.label}</button>)}</div>
   <label className="flex items-center gap-2 bg-ink-800 border border-white/10 rounded-full px-4 py-2.5 w-full md:w-72"><Search size={16} className="text-white/40"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search XAVIER, 10kW, pump…" className="bg-transparent text-sm w-full placeholder:text-white/30"/></label>
  </div>
  <p className="text-white/50 text-sm mb-6">{filtered.length} products • Genuine Crown Micro with official warranty</p>
  <div className="grid md:grid-cols-3 gap-6">{filtered.map((p,i)=><ProductCard key={p.slug} p={p} i={i}/>)}</div>
  {filtered.length===0&&<p className="text-center text-white/50 py-16">No products found. Try another keyword.</p>}
 </>;
}
export default function ProductsPage(){
 return <main className="bg-ink-950"><PageHero title="Solar Product Portfolio" subtitle="High-performance inverters, ESS & batteries — efficient conversion, smart monitoring & dependable operation." crumb="Products" image={IMG.panel}/><section className="py-16 max-w-7xl mx-auto px-6"><Suspense><List/></Suspense></section></main>;
}