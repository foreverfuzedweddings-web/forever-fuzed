import type { MetadataRoute } from "next";
import { blogs } from "@/app/blogs/data";
import { servicesData } from "@/app/services/[slug]/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://foreverfuzedweddings.com";
  const currentDate = new Date();

  const staticPages = [
    { url: base, lastModified: currentDate, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${base}/about`, lastModified: currentDate, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/services`, lastModified: currentDate, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/gallery`, lastModified: currentDate, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/blogs`, lastModified: currentDate, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${base}/contact`, lastModified: currentDate, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/privacy`, lastModified: currentDate, priority: 0.3, changeFrequency: "monthly" as const },
    { url: `${base}/terms`, lastModified: currentDate, priority: 0.3, changeFrequency: "monthly" as const },
  ];

  const servicePages = Object.keys(servicesData).map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: currentDate,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  const blogPages = blogs.map((post) => ({
    url: `${base}/blogs/${post.slug}`,
    lastModified: currentDate,
    priority: 0.6,
    changeFrequency: "yearly" as const,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
