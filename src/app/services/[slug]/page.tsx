import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { servicesData } from "./data";
import ServicePageClient from "./ServicePageClient";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  const description = `${service.tagline}. ${service.intro} ${service.paragraphs[0]}`.slice(0, 155);

  return {
    title: service.title,
    description,
    keywords: [
      service.title.toLowerCase(),
      "luxury wedding planning Canada",
      "NRI wedding services",
      "destination wedding India",
      "wedding services Mississauga",
      "luxury event planning Toronto",
    ],
    openGraph: {
      title: `${service.title} | Forever Fuzed`,
      description,
      images: [
        {
          url: service.overviewImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Forever Fuzed`,
      description,
      images: [service.overviewImage],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!servicesData[slug]) {
    notFound();
  }

  return <ServicePageClient slug={slug} />;
}
