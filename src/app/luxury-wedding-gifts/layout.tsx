import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Wedding Gifts | Premium Gifting Experience",
  description:
    "Discover Forever Fuzed's luxury wedding gift collection — bespoke hampers, personalized keepsakes, premium return gifts, and curated trousseau packages. Handcrafted elegance for NRI weddings across Canada, USA, and India.",
  alternates: {
    canonical: "/luxury-wedding-gifts",
  },
  keywords: [
    "luxury wedding gifts",
    "premium wedding hampers",
    "personalized wedding gifts",
    "luxury return gifts India",
    "wedding gift boxes Canada",
    "NRI wedding gifting",
    "bespoke wedding hampers",
    "luxury trousseau packaging",
    "premium bridesmaid gifts",
    "wedding welcome hampers",
    "curated wedding gifts Toronto",
    "luxury gift boxes Mississauga",
  ],
  openGraph: {
    title: "Luxury Wedding Gifts | Forever Fuzed — Premium Gifting Experience",
    description:
      "Bespoke luxury wedding gifts, curated hampers, and personalized keepsakes. Handcrafted elegance for unforgettable celebrations across Canada, USA & India.",
    images: [
      {
        url: "/luxury-gifts/hero.png",
        width: 1200,
        height: 630,
        alt: "Forever Fuzed — Luxury Wedding Gifts & Premium Hampers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Wedding Gifts | Forever Fuzed",
    description:
      "Premium wedding gifting — bespoke hampers, personalized keepsakes & luxury return gifts.",
    images: ["/luxury-gifts/hero.png"],
  },
};

export default function LuxuryWeddingGiftsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
