"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Award,
  ShieldCheck,
  Gem,
  Heart,
  Gift,
  Palette,
  Package,
  Sparkles,
  ArrowRight,
} from "lucide-react";

/* ───────────────────────── Design Tokens ───────────────────────── */
const gold = "#7A5C29";
const rose = "#8E3B46";
const sage = "#4A5344";

/* ───────────────────────── Animation Variants ───────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ───────────────────────── Data ────────────────────────────────── */
const giftCategories = [
  {
    number: "01",
    title: "Welcome Hampers",
    description:
      "Curated arrival experiences for your guests — artisan chocolates, scented candles, local delicacies, and personalized welcome notes wrapped in premium packaging.",
    image: "/luxury-gifts/welcome-hamper.png",
    accent: gold,
  },
  {
    number: "02",
    title: "Bridesmaid Gifts",
    description:
      "Thoughtfully assembled keepsake boxes for your closest friends — silk robes, pearl accessories, beauty essentials, and heartfelt tokens of gratitude.",
    image: "/luxury-gifts/bridesmaid-gifts.png",
    accent: rose,
  },
  {
    number: "03",
    title: "Return Gifts",
    description:
      "Elegant mementos that leave a lasting impression — premium dry-fruit boxes, handcrafted keepsakes, and luxurious favours tailored to your wedding theme.",
    image: "/luxury-gifts/return-gifts.png",
    accent: sage,
  },
  {
    number: "04",
    title: "Personalized Keepsakes",
    description:
      "Custom-engraved treasures that carry your story — monogrammed journals, crystal mementos, bespoke perfume bottles, and heirloom-quality gifts.",
    image: "/luxury-gifts/personalized-keepsakes.png",
    accent: gold,
  },
  {
    number: "05",
    title: "Luxury Trousseau",
    description:
      "Exquisite trousseau presentations in heritage-style trunks — silk wrapping, jewelry organization, and ceremonial arrangement that honours tradition.",
    image: "/luxury-gifts/luxury-trousseau.png",
    accent: rose,
  },
  {
    number: "06",
    title: "Celebration Boxes",
    description:
      "Festive luxury boxes for Sangeet, Mehndi, and reception events — themed packaging with curated treats, mini cocktails, and celebration essentials.",
    image: "/luxury-gifts/celebration-boxes.png",
    accent: sage,
  },
];

const featuredProducts = [
  {
    title: "The Royal Hamper Collection",
    subtitle: "Signature Collection",
    description:
      "Our flagship gifting experience — hand-selected gourmet delicacies, artisan candles, premium teas, and fresh florals, presented in a bespoke keepsake box with silk ribbon finishing.",
    image: "/luxury-gifts/featured-gift-set.png",
    accent: gold,
  },
  {
    title: "The Artisan Keepsake Box",
    subtitle: "Heritage Edition",
    description:
      "A timeless keepsake featuring hand-engraved wooden boxes, crystal perfume bottles, leather-bound journals, and custom monogrammed accessories — crafted for generations.",
    image: "/luxury-gifts/custom-monogram.png",
    accent: rose,
  },
  {
    title: "The Celebration Trunk",
    subtitle: "Luxury Trousseau",
    description:
      "A statement piece for the modern bride — a vintage-inspired trunk with silk fabrics, curated jewelry boxes, artisan beauty essentials, and ceremonial items presented with royal elegance.",
    image: "/luxury-gifts/luxury-trousseau.png",
    accent: sage,
  },
];

const personalFeatures = [
  {
    icon: Sparkles,
    title: "Monogram Engraving",
    description:
      "Every piece bearing your initials in elegant gold foil or laser-etched precision.",
  },
  {
    icon: Palette,
    title: "Custom Colour Palettes",
    description:
      "Packaging and ribbons matched precisely to your wedding colour scheme.",
  },
  {
    icon: Package,
    title: "Bespoke Packaging",
    description:
      "Hand-assembled presentation boxes with silk lining and wax-sealed closures.",
  },
  {
    icon: Gift,
    title: "Theme Coordination",
    description:
      "Gifts curated and styled to complement every wedding event — Mehndi to reception.",
  },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Artisan Craftsmanship",
    description:
      "Every gift is hand-curated and assembled by skilled artisans using the finest materials — silk, leather, crystal, and premium botanicals.",
    accent: gold,
  },
  {
    icon: ShieldCheck,
    title: "Trusted Across Borders",
    description:
      "Coordinated from our Mississauga office with on-ground assembly in India. You get local consultations and overseas delivery with zero stress.",
    accent: rose,
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description:
      "We source only the finest materials and partner with heritage brands. No mass-produced gifts — each collection is exclusive and limited.",
    accent: sage,
  },
  {
    icon: Heart,
    title: "Unforgettable Experience",
    description:
      "Beyond the gift itself — we design the unboxing experience, the reveal moment, and the emotional connection that makes your celebration extraordinary.",
    accent: gold,
  },
];

const testimonials = [
  {
    quote:
      "The welcome hampers were the talk of our wedding. Guests couldn't believe the attention to detail — from the hand-calligraphed notes to the locally sourced treats. Forever Fuzed made our gifting unforgettable.",
    name: "Meera & Vikram Patel",
    event: "Destination Wedding · Udaipur",
    initials: "MP",
    accent: rose,
  },
  {
    quote:
      "We wanted something truly personal for our return gifts and Forever Fuzed delivered beyond our expectations. Custom-engraved boxes with our monogram, filled with premium keepsakes — pure luxury.",
    name: "Ananya & Raj Malhotra",
    event: "Royal Wedding · Jaipur",
    initials: "AM",
    accent: gold,
  },
  {
    quote:
      "Planning luxury gifting from Canada seemed impossible until we found Forever Fuzed. They matched every gift to our wedding palette, managed the logistics, and everything arrived flawlessly in India.",
    name: "Nisha & Arjun Kapoor",
    event: "Beachside Wedding · Goa",
    initials: "NK",
    accent: sage,
  },
];

/* ═══════════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export default function LuxuryWeddingGiftsPage() {
  const [loaded, setLoaded] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const current = testimonials[activeTestimonial];

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── 1. HERO SECTION ──────────────────────────────────────────── */}
      <section className="relative h-[80vh] md:h-screen min-h-130 md:min-h-170 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/luxury-gifts/hero.png"
            alt="Luxury wedding gift collection by Forever Fuzed — premium hampers and bespoke keepsakes"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/20 to-transparent" />
        </div>

        {/* Corner flourishes */}
        <div className="absolute top-24 left-6 md:left-10 w-14 h-14 border-l border-t border-[#7A5C29]/40 pointer-events-none z-20" />
        <div className="absolute top-24 right-6 md:right-10 w-14 h-14 border-r border-t border-[#7A5C29]/40 pointer-events-none z-20" />
        <div className="absolute bottom-8 left-6 md:left-10 w-14 h-14 border-l border-b border-[#7A5C29]/25 pointer-events-none z-20" />
        <div className="absolute bottom-8 right-6 md:right-10 w-14 h-14 border-r border-b border-[#7A5C29]/25 pointer-events-none z-20" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-white mt-12">
          {/* Label */}
          <div
            className={cn(
              "flex items-center gap-4 mb-6 transition-all duration-1000 delay-200",
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5",
            )}
          >
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase">
              Luxury Gifting Experience
            </span>
          </div>

          {/* Heading */}
          <h1
            className={cn(
              "font-cormorant font-light leading-[0.95] text-[clamp(2.5rem,7.5vw,6rem)] max-w-4xl mb-6 transition-all duration-1000 delay-350",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            Gifts That Speak
            <br />
            <span className="italic text-[#F2A7B0]">Louder</span> Than Words
          </h1>

          {/* Subtitle */}
          <p
            className={cn(
              "font-lato text-white/95 text-sm md:text-base leading-relaxed max-w-lg tracking-wide mb-10 transition-all duration-1000 delay-500",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            Bespoke luxury wedding gifts curated with intention, wrapped in
            elegance, and delivered with the care your celebration deserves.
            Handcrafted for NRI weddings across Canada, USA, and India.
          </p>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-wrap gap-4 transition-all duration-1000 delay-700",
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            )}
          >
            <Link
              href="/contact"
              className="relative overflow-hidden group font-lato text-[10px] tracking-[0.25em] uppercase px-10 py-4 bg-[#7A5C29] text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#7A5C29]/30"
            >
              <span className="absolute inset-0 bg-[#3a2e2a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative">Explore Collection</span>
            </Link>
            <Link
              href="https://wa.me/16479019915"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group font-lato text-[10px] tracking-[0.25em] uppercase px-10 py-4 border border-white/40 text-white hover:border-[#8E3B46] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white/8 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">Enquire Now</span>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={cn(
            "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-1000",
            loaded ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="w-px h-12 bg-linear-to-b from-[#7A5C29]/80 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── 2. BRAND INTRODUCTION ────────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-12 md:py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Top ornament */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="h-px w-16 bg-[#7A5C29]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#7A5C29]" />
            <div className="h-px w-16 bg-[#7A5C29]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl md:text-[56px] leading-[1.12]"
          >
            Every Gift Tells
            <br />
            <span className="italic text-[#7A5C29]">A Story.</span>
          </motion.h2>

          {/* Vertical divider */}
          <motion.div
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ originY: 0 }}
            className="mt-10 w-px h-10 bg-linear-to-b from-[#7A5C29] to-transparent"
          />

          {/* Body */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 font-lato text-[#3a2e2a] text-base sm:text-lg leading-relaxed max-w-2xl tracking-wide"
          >
            At Forever Fuzed, we believe the finest gifts are those that carry
            emotion, craftsmanship, and meaning. Each piece in our luxury
            collection is thoughtfully curated and hand-assembled to create
            moments of pure joy and lasting memory.
          </motion.p>

          {/* Bottom ornament */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center gap-3 mt-10"
          >
            <div className="h-px w-10 bg-[#8E3B46]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#8E3B46]" />
            <div className="h-px w-10 bg-[#4A5344]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#4A5344]" />
            <div className="h-px w-10 bg-[#7A5C29]" />
          </motion.div>
        </div>
      </section>

      {/* ── 3. LUXURY GIFT COLLECTION ────────────────────────────────── */}
      <section className="bg-white pb-12 pt-4 md:pb-20 md:pt-8 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-[#7A5C29]" />
              <span className="font-lato text-[#7A5C29] text-[10px] tracking-[0.35em] uppercase">
                Our Collection
              </span>
              <div className="h-px w-12 bg-[#7A5C29]" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl md:text-[56px] leading-[1.1]"
            >
              Curated With Intention,
              <span className="italic text-[#7A5C29]"> Wrapped in Elegance</span>
            </motion.h2>
          </div>

          {/* Grid — Row 1 (3 cards) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8ddd5] mb-px"
          >
            {giftCategories.slice(0, 3).map((cat) => (
              <GiftCard key={cat.number} item={cat} />
            ))}
          </motion.div>

          {/* Grid — Row 2 (3 cards) */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8ddd5]"
          >
            {giftCategories.slice(3, 6).map((cat) => (
              <GiftCard key={cat.number} item={cat} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center mt-16"
          >
            <Link href="/contact">
              <button className="relative overflow-hidden group font-lato text-[10.5px] tracking-[0.3em] uppercase px-10 py-4 border border-[#7A5C29] text-[#7A5C29] transition-all duration-300">
                <span className="absolute inset-0 bg-[#7A5C29] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  Request Custom Gifting
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 4. FEATURED PRODUCTS SHOWCASE ──────────────────────────── */}
      <section className="bg-[#FAF8F5] pb-12 pt-4 md:pb-20 md:pt-8 px-6 border-t border-b border-[#e8ddd5]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#7A5C29]" />
              <span className="font-lato text-[#7A5C29] text-[10px] tracking-[0.35em] uppercase mx-1">
                Signature Pieces
              </span>
              <div className="h-px w-8 bg-[#7A5C29]" />
            </div>
            <h2 className="font-cormorant text-[#3a2e2a] font-light text-3xl sm:text-5xl leading-[1.1]">
              Our Most Coveted
              <br />
              <span className="italic text-[#8E3B46]">Gift Experiences</span>
            </h2>
          </div>

          {/* Product rows */}
          <div className="flex flex-col gap-12 md:gap-16">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.75 }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
                )}
              >
                {/* Image */}
                <div
                  className={cn(
                    "relative h-[350px] sm:h-[450px] w-full border border-[#e8ddd5] p-3 bg-white group overflow-hidden",
                    i % 2 !== 0 && "lg:order-2",
                  )}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-transparent transition-colors duration-500" />
                  </div>
                  {/* Accent strip */}
                  <div
                    className="absolute top-3 left-3 w-1 h-16"
                    style={{ backgroundColor: product.accent }}
                  />
                </div>

                {/* Content */}
                <div className={cn(i % 2 !== 0 && "lg:order-1")}>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="h-px w-8"
                      style={{ backgroundColor: product.accent }}
                    />
                    <span
                      className="font-lato text-[9px] tracking-[0.3em] uppercase"
                      style={{ color: product.accent }}
                    >
                      {product.subtitle}
                    </span>
                  </div>

                  <h3 className="font-cormorant text-[#3a2e2a] font-light text-3xl sm:text-4xl md:text-[44px] leading-[1.1] mb-5">
                    {product.title}
                  </h3>

                  <p className="font-lato text-[#3a2e2a] text-sm md:text-base leading-relaxed max-w-lg mb-8">
                    {product.description}
                  </p>

                  <Link
                    href="/contact"
                    className={cn(
                      "inline-flex items-center gap-2 font-lato text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-[#3a2e2a]",
                    )}
                    style={{ color: product.accent }}
                  >
                    <span>Enquire About This Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PERSONALIZED WEDDING GIFTS ────────────────────────────── */}
      <section className="bg-white py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.75 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#7A5C29]" />
              <span className="font-lato text-[#7A5C29] text-[10px] tracking-[0.35em] uppercase">
                Made Exclusively Yours
              </span>
            </div>

            <h2 className="font-cormorant text-[#3a2e2a] font-light text-3xl sm:text-5xl leading-[1.05] mb-8">
              Personalised to
              <br />
              <span className="italic text-[#8E3B46]">Perfection</span>
            </h2>

            <div className="space-y-5 font-lato text-[#3a2e2a] text-sm md:text-base leading-relaxed mb-10">
              <p>
                Every love story is unique, and your gifts should reflect that.
                We offer full customisation — from monogram engraving and custom
                colour palettes to bespoke packaging designs that perfectly
                mirror your wedding aesthetic.
              </p>
              <p>
                Our artisan team works closely with you to create one-of-a-kind
                gifting experiences that your guests will cherish forever.
              </p>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#ede6df]">
              {personalFeatures.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex flex-col gap-2">
                    <div className="w-9 h-9 border border-[#e8ddd5] flex items-center justify-center text-[#7A5C29]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-cormorant text-[#3a2e2a] text-lg font-normal">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#4a423e] leading-relaxed font-lato">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative h-[450px] sm:h-[550px] w-full border border-[#ede6df] p-4 bg-[#FAF8F5]"
          >
            <div className="relative w-full h-full">
              <Image
                src="/luxury-gifts/custom-monogram.png"
                alt="Hand-engraved gold monogram on premium leather gift box — Forever Fuzed personalized gifting"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-transparent" />
            </div>

            {/* Overlay tag */}
            <div className="absolute -bottom-6 -left-6 bg-[#3a2e2a] text-white p-6 hidden sm:block max-w-xs border border-[#7A5C29]/20">
              <p className="font-cormorant italic text-lg text-[#7A5C29] mb-1">
                &ldquo;Your Initials, Your Story&rdquo;
              </p>
              <p className="font-lato text-[10px] leading-relaxed text-white/95 uppercase tracking-widest">
                Each piece hand-finished with your personalised monogram and
                wedding details.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className="bg-[#3D4F3C] py-12 md:py-20 px-6 overflow-hidden relative">
        {/* Big background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-cormorant text-[200px] md:text-[300px] font-light text-white/3 leading-none">
            Luxury
          </span>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#C9A96E]" />
                <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                  The Forever Fuzed Promise
                </span>
              </div>
              <h2 className="font-cormorant text-white font-light text-4xl sm:text-5xl md:text-[52px] leading-[1.1]">
                Why Customers
                <br />
                <span className="italic text-[#C9A96E]">Trust Us</span>
              </h2>
            </motion.div>
          </div>

          {/* 2×2 Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12"
          >
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex flex-col gap-5 p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <div
                    className="w-12 h-12 border flex items-center justify-center"
                    style={{
                      borderColor: item.accent,
                      backgroundColor: `${item.accent}15`,
                    }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: item.accent }}
                    />
                  </div>
                  <h3 className="font-cormorant text-white text-2xl font-light">
                    {item.title}
                  </h3>
                  <p className="font-lato text-white/90 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div
                    className="h-px w-10 mt-auto"
                    style={{ backgroundColor: `${item.accent}60` }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mt-14"
          >
            <div className="h-px flex-1 bg-white/10" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#7A5C29]/40" />
            <div className="h-px flex-1 bg-white/10" />
          </motion.div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="bg-[#FAF8F5] py-12 md:py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-[#7A5C29]" />
                <span className="font-lato text-[#7A5C29] text-[10px] tracking-[0.35em] uppercase">
                  Client Love
                </span>
              </div>
              <h2 className="font-cormorant text-[#3a2e2a] font-light text-4xl sm:text-5xl md:text-[52px] leading-[1.1]">
                What Our
                <br />
                <span className="italic text-[#7A5C29]">Customers Say</span>
              </h2>
            </motion.div>

            {/* Dot nav */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="relative flex items-center justify-center w-8 h-8 transition-all duration-300"
                >
                  <span
                    className="absolute inset-0 rounded-full border transition-all duration-300"
                    style={{
                      borderColor:
                        i === activeTestimonial
                          ? t.accent
                          : "rgba(58,46,42,0.2)",
                      backgroundColor:
                        i === activeTestimonial
                          ? `${t.accent}20`
                          : "transparent",
                    }}
                  />
                  <span
                    className="font-lato text-[9px] tracking-wider relative z-10"
                    style={{
                      color:
                        i === activeTestimonial
                          ? t.accent
                          : "rgba(58,46,42,0.4)",
                    }}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>

          {/* Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border border-[#e8ddd5]"
            >
              {/* Left panel */}
              <div
                className="relative flex flex-col justify-between p-10 md:p-12 overflow-hidden"
                style={{ backgroundColor: `${current.accent}08` }}
              >
                {/* Big quote */}
                <span
                  className="font-cormorant text-[140px] leading-none select-none absolute -top-4 -left-2 opacity-8"
                  style={{ color: current.accent }}
                >
                  {'"'}
                </span>

                {/* Initials */}
                <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border"
                  style={{
                    borderColor: current.accent,
                    backgroundColor: `${current.accent}15`,
                  }}
                >
                  <span
                    className="font-cormorant text-xl font-light"
                    style={{ color: current.accent }}
                  >
                    {current.initials}
                  </span>
                </div>

                {/* Name + event */}
                <div className="relative z-10 mt-auto pt-12">
                  <p className="font-cormorant text-[#3a2e2a] text-xl font-light leading-snug">
                    {current.name}
                  </p>
                  <p
                    className="font-lato text-[10px] tracking-[0.15em] uppercase mt-1.5"
                    style={{ color: `${current.accent}` }}
                  >
                    {current.event}
                  </p>
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{ color: current.accent }}
                        className="text-sm"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="flex flex-col justify-center p-10 md:p-14 bg-white">
                {/* Accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "3rem" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-px mb-8"
                  style={{ backgroundColor: current.accent }}
                />

                <blockquote className="font-cormorant text-[#3a2e2a] font-light text-2xl md:text-3xl lg:text-[30px] leading-[1.55] italic">
                  {'"'}
                  {current.quote}
                  {'"'}
                </blockquote>

                {/* Arrow nav */}
                <div className="flex items-center gap-4 mt-12">
                  <button
                    onClick={() =>
                      setActiveTestimonial((p) =>
                        p === 0 ? testimonials.length - 1 : p - 1,
                      )
                    }
                    className="w-10 h-10 border border-[#e8ddd5] flex items-center justify-center text-[#4a423e] hover:border-[#7A5C29] hover:text-[#7A5C29] transition-all duration-300"
                  >
                    ←
                  </button>
                  <button
                    onClick={() =>
                      setActiveTestimonial((p) =>
                        p === testimonials.length - 1 ? 0 : p + 1,
                      )
                    }
                    className="w-10 h-10 border border-[#e8ddd5] flex items-center justify-center text-[#4a423e] hover:border-[#7A5C29] hover:text-[#7A5C29] transition-all duration-300"
                  >
                    →
                  </button>
                  <span className="font-lato text-[10px] tracking-[0.2em] uppercase text-[#4a423e]/70 ml-2">
                    {activeTestimonial + 1} / {testimonials.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3 mt-14"
          >
            <div className="h-px flex-1 bg-[#e8ddd5]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#7A5C29]/40" />
            <div className="h-px flex-1 bg-[#e8ddd5]" />
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────── */}
      <section className="relative py-12 md:py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DEEP9495.JPG"
            alt="Premium luxury wedding celebration"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#3a2e2a]/30 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-[#3D4F3C]/10" />
        </div>

        {/* Corner flourishes */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#7A5C29]/25 pointer-events-none z-20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-[#7A5C29]/25 pointer-events-none z-20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-[#7A5C29]/25 pointer-events-none z-20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#7A5C29]/25 pointer-events-none z-20" />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          {/* Top ornament */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase mx-1">
              Begin Your Gifting Journey
            </span>
            <div className="h-px w-10 bg-[#C9A96E]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-cormorant font-light text-3xl sm:text-5xl md:text-6xl leading-[1.1] mb-6"
          >
            Let&rsquo;s Create Something
            <br />
            <span className="italic text-[#C9A96E]">Extraordinary</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-lato text-white/95 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12"
          >
            Whether you&rsquo;re searching for the perfect welcome hamper,
            personalised keepsakes, or a complete luxury gifting package — we
            would love to bring your vision to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="relative overflow-hidden group font-lato text-[10px] tracking-[0.25em] uppercase px-12 py-4 bg-[#7A5C29] text-white hover:shadow-xl hover:shadow-[#7A5C29]/30 transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative group-hover:text-[#3a2e2a] transition-colors duration-300">
                Start Your Order
              </span>
            </Link>
            <Link
              href="https://wa.me/16479019915"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-lato text-[10px] tracking-[0.25em] uppercase px-12 py-4 border border-white/35 text-white hover:bg-white/10 transition-all duration-300"
            >
              <span>WhatsApp Chat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-3 mt-14"
          >
            <div className="h-px w-8 bg-[#8E3B46]/50" />
            <div className="w-1 h-1 rotate-45 bg-[#8E3B46]/50" />
            <div className="h-px w-8 bg-[#4A5344]/50" />
            <div className="w-1 h-1 rotate-45 bg-[#4A5344]/50" />
            <div className="h-px w-8 bg-[#7A5C29]/50" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ───────────────────────── Gift Card Component ──────────────────── */
function GiftCard({ item }: { item: (typeof giftCategories)[0] }) {
  return (
    <motion.div variants={fadeUp}>
      <div className="group block bg-white overflow-hidden">
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>

          {/* Dark hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 z-10" />

          {/* Number */}
          <span
            className="absolute top-4 left-4 z-20 font-cormorant text-4xl font-light leading-none opacity-100 transition-opacity duration-300"
            style={{ color: `${item.accent}dd` }}
          >
            {item.number}
          </span>
        </div>

        {/* Content */}
        <div className="p-7 relative overflow-hidden">
          {/* Background fill on hover */}
          <div className="absolute inset-0 bg-[#faf8f5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

          <div className="relative z-10">
            {/* Accent line */}
            <div
              className="h-px mb-5 w-8 group-hover:w-14 transition-all duration-300"
              style={{ backgroundColor: item.accent }}
            />

            <h3 className="font-cormorant text-[#3a2e2a] font-light text-2xl leading-snug mb-3 group-hover:text-[#7A5C29] transition-colors duration-300">
              {item.title}
            </h3>

            <p className="font-lato text-[#3a2e2a] text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
