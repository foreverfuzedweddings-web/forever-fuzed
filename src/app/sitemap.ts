import type { MetadataRoute } from "next";
import { blogs } from "@/app/blogs/data";
import { servicesData } from "@/app/services/[slug]/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://foreverfuzedweddings.com";

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/gallery`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/blogs`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const servicePages = Object.keys(servicesData).map((slug) => ({
    url: `${base}/services/${slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = blogs.map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
