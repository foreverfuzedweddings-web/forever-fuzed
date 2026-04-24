import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Start Planning Your Wedding",
  description:
    "Get in touch with Forever Fuzed to begin planning your luxury wedding. Based in Mississauga, Ontario, Canada. Serving NRI clients across Canada, USA, and India.",
  keywords: [
    "contact wedding planner Canada",
    "hire wedding planner Mississauga",
    "luxury wedding consultation",
    "NRI wedding planner contact",
    "book destination wedding planner India",
    "wedding planner Toronto contact",
    "luxury wedding enquiry Canada",
    "Indian wedding planning consultation",
  ],
  openGraph: {
    title: "Contact Forever Fuzed | Luxury Wedding Planning",
    description:
      "Start planning your dream wedding with Forever Fuzed. Based in Mississauga, Ontario. Serving NRI clients across Canada, USA & India.",
    images: [
      {
        url: "/hero-section.JPG",
        width: 1200,
        height: 630,
        alt: "Forever Fuzed — Luxury Wedding Planning Enquiry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Forever Fuzed | Luxury Wedding Planning",
    description:
      "Start planning your dream wedding. Mississauga-based luxury wedding planners serving Canada, USA & India.",
    images: ["/hero-section.JPG"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
