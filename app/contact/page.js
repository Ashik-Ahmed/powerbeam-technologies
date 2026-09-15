"use client";
import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { CONTACT } from "@/lib/constants";
import { IMG, PRODUCTS } from "@/lib/products";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
export default function Contact() {
  const [sent, setSent] = useState(false);
  const [load, setLoad] = useState(false);
  async function submit(e) {
    e.preventDefault();
    setLoad(true);
    const fd = new FormData(e.target);
    const body = Object.fromEntries(fd);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setLoad(false);
    setSent(true);
  }
  return (
    <main className="bg-ink-950">
      <PageHero
        title="Get in Touch"
        subtitle="Questions about solar? Our team will help you select the right products & solutions."
        crumb="Contact"
        image={IMG.roof}
      />
      <section className="py-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-[.9fr_1.1fr] gap-8">
        <div className="space-y-4">
          {[
            { i: MapPin, t: "Office Address", d: CONTACT.address },
            { i: Phone, t: "Phone / WhatsApp", d: CONTACT.phoneDisplay },
            { i: Mail, t: "Email", d: CONTACT.email },
            { i: Clock, t: "Business Hours", d: CONTACT.hours },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl bg-ink-900 border border-white/10 p-5 flex gap-4"
            >
              <span className="w-11 h-11 rounded-xl bg-solar-gradient grid place-items-center shrink-0">
                <c.i size={18} className="text-ink-950" />
              </span>
              <div>
                <h3 className="font-bold text-sm">{c.t}</h3>
                <p className="text-sm text-white/60 mt-1">{c.d}</p>
              </div>
            </div>
          ))}
          <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
            <iframe
              title="Powerbeam Map"
              src={CONTACT.mapEmbed}
              className="w-full h-full grayscale invert-[.9]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="rounded-[2rem] bg-white text-ink-900 p-8 md:p-10">
          {sent ? (
            <div className="h-full grid place-items-center text-center py-16">
              <div>
                <CheckCircle2 size={56} className="mx-auto text-green-600" />
                <h3 className="font-display text-2xl font-bold mt-4">
                  Thank You!
                </h3>
                <p className="text-slate-600 mt-2">
                  We’ll contact you within business hours. For urgent:{" "}
                  {CONTACT.phoneDisplay}
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
              <h2 className="sm:col-span-2 font-display text-2xl font-extrabold">
                Request a Consultation
              </h2>
              <input
                name="name"
                required
                placeholder="Full Name *"
                className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50"
              />
              <input
                name="company"
                placeholder="Company Name"
                className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50"
              />
              <input
                name="phone"
                required
                placeholder="Phone (01XXXXXXXXX) *"
                className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50"
              />
              <select
                name="interest"
                className="sm:col-span-2 border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50"
              >
                <option>Interested Product / Solution</option>
                {PRODUCTS.map((p) => (
                  <option key={p.slug} value={p.name}>
                    {p.name}
                  </option>
                ))}
                <option>Complete Solution / Others</option>
              </select>
              <textarea
                name="message"
                rows={5}
                placeholder="Message: load, location, monthly bill…"
                className="sm:col-span-2 border border-slate-200 rounded-xl px-4 py-3.5 text-sm bg-slate-50"
              />
              <button
                disabled={load}
                className="sm:col-span-2 btn-dark !bg-ink-950 w-full"
              >
                {load ? "Sending…" : "Send Inquiry"}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
