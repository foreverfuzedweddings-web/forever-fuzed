import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogs } from "@/app/blogs/data";
import BlogPost from "@/components/BlogPost";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Normalize slug to match whichever casing is in the data
  const post = blogs.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
  if (!post) return {};
  
  const title = post.title;
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    keywords: [
      post.title.toLowerCase(),
      post.category.toLowerCase(),
      "luxury wedding planner",
      "destination wedding India",
      "nri wedding planning",
    ],
    openGraph: {
      title: `${title} | Forever Fuzed`,
      description,
      url: `https://foreverfuzedweddings.com/blogs/${post.slug}`,
      type: "article",
      images: [
        {
          url: post.heroImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Forever Fuzed`,
      description,
      images: [post.heroImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug.toLowerCase() === slug.toLowerCase());

  if (!post) notFound();

  return <BlogPost post={post} />;
}
