import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/layout/CTASection";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";
import { IMG } from "@/lib/products";
export const metadata = {
  title: "About Us — Trusted Solar Supplier in Bangladesh",
  description:
    "Powerbeam Technologies accelerates clean energy adoption in Bangladesh with Crown Micro solar technology, nationwide distribution & expert support.",
};
const values = [
  "Quality First",
  "Customer Commitment",
  "Sustainability",
  "Integrity",
  "Innovation",
  "Partnership",
];
export default function About() {
  return (
    <main className="bg-ink-950">
      <PageHero
        title="Who We Are: Powering Bangladesh Forward"
        subtitle="Dedicated solar product supplier making renewable energy accessible through dependable products & strong support."
        crumb="About Us"
        image={IMG.ind}
      />
      <section className="py-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Accelerating Clean Energy Adoption Through Dependable Solar
          </h2>
          <p className="text-white/65 mt-5 leading-relaxed">
            Powerbeam Technologies combines advanced solar technology with
            strong distribution to deliver efficiency, durability & long-term
            performance. As exclusive channel partner of Crown Micro Global
            Bangladesh Ltd, we ensure authentic products, professional support &
            nationwide reach.
          </p>
          <p className="text-white/65 mt-4 leading-relaxed">
            We help customers reduce energy costs, improve reliability &
            contribute to a cleaner environment — from Dhaka homes to off-grid
            chars.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="rounded-3xl overflow-hidden border border-white/10">
            <Image
              src={IMG.roof}
              alt="About Powerbeam"
              width={700}
              height={480}
              className="object-cover h-[420px] w-full"
            />
          </div>
        </Reveal>
      </section>
      <section className="py-16 bg-ink-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            dark
            eyebrow="Mission • Vision"
            title="Driven by Purpose"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal className="rounded-3xl bg-ink-800 border border-solar-500/20 p-8">
              <Target className="text-solar-500" />
              <h3 className="font-display text-2xl font-bold mt-4">
                Our Mission
              </h3>
              <p className="text-white/65 mt-3">
                To provide reliable solar products empowering individuals,
                businesses & communities toward a sustainable energy future.
              </p>
            </Reveal>
            <Reveal
              delay={0.1}
              className="rounded-3xl bg-ink-800 border border-volt-500/20 p-8"
            >
              <Eye className="text-volt-400" />
              <h3 className="font-display text-2xl font-bold mt-4">
                Our Vision
              </h3>
              <p className="text-white/65 mt-3">
                To become a trusted leader in solar distribution with quality,
                exceptional service & innovative renewables.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 rounded-3xl bg-gradient-to-r from-solar-500 to-solar-600 text-ink-950 p-8 md:p-10">
            <h3 className="font-display text-2xl font-extrabold flex items-center gap-2">
              <HeartHandshake />
              Our Values
            </h3>
            <div className="flex flex-wrap gap-3 mt-5">
              {values.map((v) => (
                <span
                  key={v}
                  className="bg-ink-950 text-white text-sm font-bold px-4 py-2 rounded-full"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
