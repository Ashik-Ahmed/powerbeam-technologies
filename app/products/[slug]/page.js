import { PRODUCTS, getProduct, getRelated } from "@/lib/products";
import { SITE_URL } from "@/lib/constants";
import { productSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ShieldCheck, Zap, Phone } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import CTASection from "@/components/layout/CTASection";
export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} Price in Bangladesh | Powerbeam`,
    description: `${p.description.slice(0, 155)}…`,
    alternates: { canonical: `${SITE_URL}/products/${p.slug}` },
    openGraph: { title: p.name, description: p.tagline, images: [p.image] },
  };
}
export default function Detail({ params }) {
  const p = getProduct(params.slug);
  if (!p) return <div className="p-20 text-center">Not found</div>;
  const rel = getRelated(p.slug, p.category);
  return (
    <main className="bg-ink-950 pt-32">
      <JsonLd data={productSchema(p)} />
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/products"
          className="text-sm text-white/50 hover:text-solar-400 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>
        <div className="grid lg:grid-cols-2 gap-10 mt-6">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 h-[420px] md:h-[520px]">
            <Image
              src={p.image}
              alt={p.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px)100vw,50vw"
            />
            <span className="absolute top-5 left-5 bg-solar-gradient text-ink-950 text-xs font-bold px-3 py-1.5 rounded-full">
              {p.badge}
            </span>
          </div>
          <div>
            <p className="text-xs font-bold tracking-widest text-volt-400">
              {p.categoryLabel} • {p.series}
            </p>
            <h1 className="font-display text-3xl md:text-5xl font-extrabold mt-3 leading-tight">
              {p.name}
            </h1>
            <p className="text-solar-400 font-semibold mt-3">{p.tagline}</p>
            <div className="flex gap-3 mt-5">
              {[p.power, p.efficiency, p.warranty].map((v) => (
                <span
                  key={v}
                  className="text-xs font-bold bg-white/5 border border-white/10 px-3 py-2 rounded-full flex items-center gap-1.5"
                >
                  <Zap size={12} className="text-solar-500" />
                  {v}
                </span>
              ))}
            </div>
            <p className="text-white/65 mt-6 leading-relaxed">
              {p.description}
            </p>
            <ul className="grid sm:grid-cols-2 gap-2.5 mt-6">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex gap-2 text-sm bg-ink-800 border border-white/10 rounded-xl px-3.5 py-2.5"
                >
                  <CheckCircle2
                    size={16}
                    className="text-volt-500 shrink-0 mt-0.5"
                  />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href={`/contact?product=${p.slug}`} className="btn-solar">
                Request Best Price
              </Link>
              <a href="https://wa.me/8801799608805" className="btn-ghost">
                <Phone size={18} />
                WhatsApp
              </a>
            </div>
            <p className="text-xs text-white/40 mt-4 flex items-center gap-2">
              <ShieldCheck size={14} className="text-volt-500" />
              100% Genuine Crown Micro • Official Warranty • Nationwide Delivery
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <div className="rounded-3xl bg-ink-900 border border-white/10 overflow-hidden">
            <h2 className="font-display font-bold text-xl p-6 pb-0">
              Available Models
            </h2>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-white/40 text-xs">
                    <th className="pb-3">Model</th>
                    <th className="pb-3">Power</th>
                    <th className="pb-3">PV / Battery</th>
                  </tr>
                </thead>
                <tbody>
                  {p.models.map((m) => (
                    <tr key={m.model} className="border-t border-white/5">
                      <td className="py-3 font-bold text-solar-400">
                        {m.model}
                      </td>
                      <td className="py-3">{m.power}</td>
                      <td className="py-3 text-white/60">
                        {m.pv}
                        <br />
                        {m.battery}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-3xl bg-ink-900 border border-white/10 p-6">
            <h2 className="font-display font-bold text-xl">
              Key Specifications
            </h2>
            <dl className="mt-4 space-y-3">
              {p.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between text-sm bg-white/[.03] rounded-xl px-4 py-3"
                >
                  <dt className="text-white/50">{s.label}</dt>
                  <dd className="font-bold text-right">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="text-xs text-white/40 mt-4">
              Full datasheet in catalog PDF. Specs subject to update by Crown
              Micro.
            </p>
          </div>
        </div>
        {rel.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-6">
              Related Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {rel.map((r) => (
                <ProductCard key={r.slug} p={r} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-10">
        <CTASection />
      </div>
    </main>
  );
}
