"use client";
import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { PRODUCTS, IMG } from "@/lib/products";
export default function Compare() {
  const opts = PRODUCTS.slice(0, 10);
  const [a, setA] = useState(opts[2].slug);
  const [b, setB] = useState(opts[6].slug);
  const pa = PRODUCTS.find((p) => p.slug === a);
  const pb = PRODUCTS.find((p) => p.slug === b);
  const rows = [
    ["Power Range", pa.power, pb.power],
    ["Efficiency", pa.efficiency, pb.efficiency],
    ["Warranty", pa.warranty, pb.warranty],
    ["Category", pa.categoryLabel, pb.categoryLabel],
    ["Series", pa.series, pb.series],
  ];
  return (
    <main className="bg-ink-950">
      <PageHero
        title="Product Comparison Tool"
        subtitle="Side-by-side inverter & ESS comparison."
        crumb="Compare"
        image={IMG.home}
      />
      <section className="py-14 max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            [a, setA],
            [b, setB],
          ].map(([v, s], i) => (
            <select
              key={i}
              value={v}
              onChange={(e) => s(e.target.value)}
              className="bg-ink-900 border border-white/15 rounded-2xl px-5 py-4 text-sm font-bold"
            >
              {opts.map((o) => (
                <option key={o.slug} value={o.slug}>
                  {o.name}
                </option>
              ))}
            </select>
          ))}
        </div>
        <div className="rounded-3xl overflow-hidden border border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-ink-900">
                <th className="p-5 text-left text-white/40">Feature</th>
                <th className="p-5 text-left text-solar-400">{pa.name}</th>
                <th className="p-5 text-left text-volt-400">{pb.name}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr
                  key={r[0]}
                  className="border-t border-white/5 bg-white/[.02]"
                >
                  <td className="p-5 font-bold">{r[0]}</td>
                  <td className="p-5">{r[1]}</td>
                  <td className="p-5">{r[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
