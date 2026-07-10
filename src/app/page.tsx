import type { Metadata } from "next";
import FounderTeaser from "@/components/AboutSection";

export const metadata: Metadata = {
  title: {
    absolute: "Forever Fuzed | Luxury Wedding & Event Planning",
  },
  description:
    "Forever Fuzed is a luxury wedding and event planning agency specializing in crafting signature celebrations for NRI couples across Canada, USA, and India.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "luxury wedding planner",
    "event planning",
    "wedding styling",
    "luxury gifting",
    "wedding hampers",
    "event logistics",
    "vendor management",
    "wedding India",
    "wedding Canada",
    "wedding USA",
  ],
};
import BrandStatement from "@/components/BrandStatementSections";
import CTABanner from "@/components/Cta";
import Gallery from "@/components/Gallery";
import Hero from "@/components/HeroSection";
import ServicesOverview from "@/components/ServiceSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUse";
import LeadPopup from "@/components/LeadPopup";
import HomeFAQs from "@/components/HomeFAQs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BrandStatement />
      <FounderTeaser />
      <WhyChooseUs />
      <ServicesOverview />
      <Testimonials />
      <Gallery />
      <HomeFAQs />
      <CTABanner />
      <LeadPopup />
    </div>
  );
}
