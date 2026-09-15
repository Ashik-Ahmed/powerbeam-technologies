import Hero from "@/components/home/Hero";
import {
  WhyChoose,
  FeaturedProducts,
  Partnership,
  Applications,
  Testimonials,
  HomeFAQ,
} from "@/components/home/HomeSections";
import CTASection from "@/components/layout/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo";
import { FAQS } from "@/lib/content";
export const metadata = {
  title: "Best Solar Inverter & Battery Company in Bangladesh | Powerbeam",
  description:
    "Powerbeam Technologies delivers Crown Micro hybrid, on-grid & off-grid inverters, LiFePO4 batteries & solar pumps in Dhaka Bangladesh. Residential, commercial & industrial solutions.",
  alternates: { canonical: "https://powerbeam.com.bd/" },
};
export default function Home() {
  return (
    <main className="bg-ink-950">
      <JsonLd data={faqSchema(FAQS)} />
      <Hero />
      <WhyChoose />
      <FeaturedProducts />
      <Partnership />
      <Applications />
      <Testimonials />
      <HomeFAQ />
      <CTASection />
    </main>
  );
}
