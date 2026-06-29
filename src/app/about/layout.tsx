import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Story & Vision",
  description:
    "Meet Surbhi Singh, founder of Forever Fuzed — a luxury wedding planner with 10+ years of experience serving NRI clients in Canada, USA, and India. Discover our story.",
  keywords: [
    "luxury wedding planner Canada",
    "Indian wedding planner Mississauga",
    "NRI wedding specialist",
    "destination wedding planner India",
    "Surbhi Singh Forever Fuzed",
    "luxury event planner Toronto",
    "wedding planner for NRIs Canada",
    "Indian destination wedding specialist",
  ],
  openGraph: {
    title: "Our Story | Forever Fuzed — Luxury Wedding Planning",
    description:
      "Meet Surbhi Singh, founder of Forever Fuzed. 10+ years of experience planning luxury weddings across India, Canada, and USA for NRI couples.",
    images: [
      {
        url: "/founder.JPG",
        width: 1200,
        height: 630,
        alt: "Surbhi Singh — Founder, Forever Fuzed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Forever Fuzed",
    description:
      "Meet Surbhi Singh — luxury wedding planner serving NRI clients in Canada, USA & India.",
    images: ["/founder.JPG"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
