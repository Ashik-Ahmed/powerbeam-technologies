import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, Item } from "@/components/ui/Reveal";
import { IMG } from "@/lib/products";
import { SERVICES } from "@/lib/content";
import * as L from "lucide-react";
export const metadata = {
  title: "Solar Services: Design, Supply, Installation & AMC in Bangladesh",
  description:
    "Consultation, system design, authentic supply, installation support & after-sales AMC across Bangladesh.",
};
export default function Services() {
  return (
    <main className="bg-ink-950">
      <PageHero
        title="Our Services"
        subtitle="From consultation to lifetime support — professional guidance at every step."
        crumb="Services"
        image={IMG.panel}
      />
      <section className="py-20 max-w-7xl mx-auto px-6">
        <SectionHeading
          dark
          eyebrow="End-to-End"
          title="Complete Solar Lifecycle Support"
        />
        <Stagger className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const I = L[s.icon] || L.Zap;
            return (
              <Item
                key={s.t}
                className="rounded-3xl bg-ink-900 border border-white/10 p-8 hover:border-solar-500/40 card-hover"
              >
                <span className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                  <I className="text-solar-500" />
                </span>
                <h3 className="font-display font-bold text-xl mt-5">{s.t}</h3>
                <p className="text-sm text-white/60 mt-3 leading-relaxed">
                  {s.d}
                </p>
              </Item>
            );
          })}
        </Stagger>
        <div className="mt-12 grid md:grid-cols-4 gap-4 text-center">
          {[
            "1. Survey & Quote",
            "2. Design & Supply",
            "3. Install & Commission",
            "4. Monitor & Maintain",
          ].map((t, i) => (
            <div
              key={t}
              className="rounded-2xl bg-solar-gradient text-ink-950 font-display font-bold py-5 px-4"
            >
              {t}
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
