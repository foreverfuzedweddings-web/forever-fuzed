import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Luxury Wedding & Event Planning",
  description:
    "Explore Forever Fuzed's luxury wedding services — wedding styling & design, luxury gifting, event logistics, vendor curation, and entertainment. Serving NRI clients in Canada, USA, and India.",
  keywords: [
    "luxury wedding services Canada",
    "wedding styling India NRI",
    "luxury wedding gifting hampers",
    "NRI wedding logistics Canada",
    "destination wedding vendor management India",
    "wedding entertainment planning",
    "luxury event services Mississauga",
    "Indian wedding planning services Toronto",
  ],
  openGraph: {
    title: "Our Services | Forever Fuzed — Luxury Wedding Planning",
    description:
      "Full-service luxury wedding planning: styling, gifting, entertainment, logistics & vendor management for NRI clients in Canada, USA & India.",
    images: [
      {
        url: "/DEEP9441.JPG",
        width: 1200,
        height: 630,
        alt: "Forever Fuzed Luxury Wedding Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Forever Fuzed",
    description:
      "Luxury wedding styling, gifting, logistics & vendor management for NRI clients.",
    images: ["/DEEP9441.JPG"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
