import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through our most unforgettable celebrations — curated with love, executed with precision. View our signature wedding style and design.",
  alternates: {
    canonical: "/gallery",
  },
  keywords: [
    "wedding gallery",
    "wedding portfolio",
    "luxury wedding pictures",
    "pre-wedding shoot photography",
    "wedding styling photos",
    "forever fuzed gallery",
  ],
  openGraph: {
    title: "Gallery | Forever Fuzed",
    description: "A visual journey through our most unforgettable celebrations — curated with love, executed with precision.",
    url: "https://foreverfuzedweddings.com/gallery",
    type: "website",
    images: [
      {
        url: "/hero-section.JPG",
        width: 1200,
        height: 630,
        alt: "Forever Fuzed Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Forever Fuzed",
    description: "A visual journey through our most unforgettable celebrations.",
    images: ["/hero-section.JPG"],
  },
};

export { default } from "@/components/GalleryPage"