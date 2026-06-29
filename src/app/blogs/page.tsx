import type { Metadata } from "next";
import BlogsListingClient from "@/components/BlogsListingClient";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Stories, inspiration, and behind-the-scenes insights from Forever Fuzed — perspectives on love, design, and the art of crafting unforgettable celebrations.",
  alternates: {
    canonical: "/blogs",
  },
  keywords: [
    "wedding blogs",
    "wedding inspiration",
    "luxury wedding planning tips",
    "destination wedding ideas India",
    "nri wedding planning guide",
    "forever fuzed journal",
  ],
  openGraph: {
    title: "Journal | Forever Fuzed",
    description: "Stories, inspiration, and behind-the-scenes insights from Forever Fuzed — perspectives on love, design, and the art of crafting unforgettable celebrations.",
    url: "https://foreverfuzedweddings.com/blogs",
    type: "website",
    images: [
      {
        url: "/hero-section.JPG",
        width: 1200,
        height: 630,
        alt: "Forever Fuzed Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Forever Fuzed",
    description: "Stories, inspiration, and behind-the-scenes insights from Forever Fuzed.",
    images: ["/hero-section.JPG"],
  },
};

export default function BlogsPage() {
  return <BlogsListingClient />;
}
