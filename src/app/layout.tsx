import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://foreverfuzedweddings.com"),
  title: {
    default: "Forever Fuzed | Luxury Wedding & Event Planning",
    template: "%s | Forever Fuzed",
  },
  description:
    "Forever Fuzed is a luxury wedding and event planning company serving NRI clients across India, Canada, and USA. We specialise in wedding styling, luxury gifting, curated entertainment, seamless event logistics, and premium vendor management.",
  keywords: [
    "luxury wedding planner Canada",
    "Indian wedding planner Mississauga",
    "NRI wedding specialist",
    "destination wedding planner India",
    "luxury wedding events Toronto",
    "wedding planner USA India",
    "luxury wedding planning Ontario",
    "NRI destination wedding",
    "wedding planner for Indians in Canada",
    "forever fuzed weddings",
  ],
  openGraph: {
    type: "website",
    siteName: "Forever Fuzed",
    url: "https://foreverfuzedweddings.com",
    title: "Forever Fuzed | Luxury Wedding & Event Planning",
    description:
      "Luxury wedding and event planning for NRI clients across Canada, USA, and India. Wedding styling, gifting, entertainment & full-service logistics.",
    images: [
      {
        url: "/hero-section.JPG",
        width: 1200,
        height: 630,
        alt: "Forever Fuzed — Luxury Wedding & Event Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forever Fuzed | Luxury Wedding & Event Planning",
    description:
      "Luxury wedding planning for NRI clients across Canada, USA, and India.",
    images: ["/hero-section.JPG"],
  },
  icons: {
    icon: "/logo/forever-logo.png",
    apple: "/logo/forever-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://foreverfuzedweddings.com/#organization",
                    name: "Forever Fuzed",
                    url: "https://foreverfuzedweddings.com",
                    logo: "https://foreverfuzedweddings.com/logo/forever-logo.png",
                    description:
                      "Forever Fuzed is a luxury wedding and event planning company specializing in destination weddings for NRI clients across Canada, USA, and India.",
                    telephone: "+1-647-901-9915",
                    email: "Foreverfusedevents@gmail.com",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Suite-56, 6733 Mississauga Road",
                      addressLocality: "Mississauga",
                      addressRegion: "Ontario",
                      postalCode: "L5N 6J5",
                      addressCountry: "CA",
                    },
                    areaServed: [
                      { "@type": "Country", name: "Canada" },
                      { "@type": "Country", name: "United States" },
                      { "@type": "Country", name: "India" },
                    ],
                    sameAs: [
                      "https://www.instagram.com/foreverfuzedweddings",
                      "https://www.facebook.com/share/17JcFJkwK1/",
                    ],
                  },
                  {
                    "@type": "LocalBusiness",
                    "@id": "https://foreverfuzedweddings.com/#business",
                    name: "Forever Fuzed",
                    image: "https://foreverfuzedweddings.com/hero-section.JPG",
                    url: "https://foreverfuzedweddings.com",
                    telephone: "+1-647-901-9915",
                    email: "Foreverfusedevents@gmail.com",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Suite-56, 6733 Mississauga Road",
                      addressLocality: "Mississauga",
                      addressRegion: "Ontario",
                      postalCode: "L5N 6J5",
                      addressCountry: "CA",
                    },
                    openingHoursSpecification: {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                      ],
                      opens: "11:00",
                      closes: "20:00",
                    },
                    areaServed: [
                      { "@type": "Country", name: "Canada" },
                      { "@type": "Country", name: "United States" },
                      { "@type": "Country", name: "India" },
                    ],
                  },
                ],
              }),
            }}
          />
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </body>
        <GoogleAnalytics gaId="G-PRB967J3EQ" />
    </html>
  );
}
