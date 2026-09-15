"use client";
import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { IMG } from "@/lib/products";
import { Handshake, Store, Truck, BadgePercent } from "lucide-react";
export default function Partner() {
  const [sent, setSent] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    await fetch("/api/partner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(fd)),
    });
    setSent(true);
  }
  return (
    <main className="bg-ink-950">
      <PageHero
        title="Become a Dealer / Partner"
        subtitle="Join Bangladesh’s fastest growing Crown Micro network — attractive margins & technical training."
        crumb="Partner"
        image={IMG.field}
      />
      <section className="py-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                i: Store,
                t: "Dealership",
                d: "District-level exclusive rights",
              },
              {
                i: BadgePercent,
                t: "Attractive Margin",
                d: "Competitive pricing & credit",
              },
              { i: Truck, t: "Fast Supply", d: "Dhaka warehouse stock" },
              {
                i: Handshake,
                t: "Training",
                d: "Installation & sales training",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl bg-ink-900 border border-white/10 p-6"
              >
                <c.i className="text-solar-500" />
                <h3 className="font-bold mt-3">{c.t}</h3>
                <p className="text-xs text-white/55 mt-1">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-6 text-sm text-white/65">
            Requirements: Trade license, showroom/service capability, initial
            stock commitment. Our team will verify within 48 hours.
          </div>
        </div>
        <div className="rounded-[2rem] bg-white text-ink-900 p-8">
          {sent ? (
            <p className="font-bold text-green-700 py-16 text-center text-xl">
              Application received! We’ll call you soon.
            </p>
          ) : (
            <form onSubmit={submit} className="grid gap-4">
              <h2 className="font-display text-2xl font-extrabold">
                Partner Inquiry Form
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  required
                  placeholder="Name *"
                  className="border rounded-xl px-4 py-3 text-sm bg-slate-50"
                />
                <input
                  name="phone"
                  required
                  placeholder="Phone *"
                  className="border rounded-xl px-4 py-3 text-sm bg-slate-50"
                />
              </div>
              <input
                name="business"
                placeholder="Business Name"
                className="border rounded-xl px-4 py-3 text-sm bg-slate-50"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="district"
                  placeholder="District / Area"
                  className="border rounded-xl px-4 py-3 text-sm bg-slate-50"
                />
                <select
                  name="type"
                  className="border rounded-xl px-4 py-3 text-sm bg-slate-50"
                >
                  <option>Dealer</option>
                  <option>Sub-dealer</option>
                  <option>Installer</option>
                  <option>Corporate</option>
                </select>
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Experience, monthly volume…"
                className="border rounded-xl px-4 py-3 text-sm bg-slate-50"
              />
              <button className="btn-dark w-full">Submit Application</button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
