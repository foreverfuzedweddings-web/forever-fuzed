"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Compass,
  FileCheck2,
  Sparkles,
  PlaneTakeoff,
  ArrowRight,
} from "lucide-react";

// Design tokens
const gold = "#C9A96E";
const rose = "#F2A7B0";
const sage = "#9CA195";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const destinations = [
  {
    title: "Royal Rajasthan",
    subtitle: "Udaipur & Jaipur Palaces",
    desc: "Exchange vows in authentic heritage palaces surrounded by shimmering lakes, royal courtyards, and centuries of history. We coordinate with India's most exclusive heritage hotels to give you a true royal celebration.",
    image: "/009A2075.jpg",
    accent: gold,
  },
  {
    title: "Beachside Goa",
    subtitle: "Seaside Luxury Resorts",
    desc: "A tropical paradise featuring pristine white sands, cliffside sundowners, and lush coastal landscapes. Ideal for couples seeking a relaxed yet sophisticated resort celebration with world-class hospitality.",
    image: "/DEEP7466.jpg",
    accent: rose,
  },
  {
    title: "Spiritual Rishikesh",
    subtitle: "Hills & Sacred Ganges",
    desc: "A breathtaking mountain retreat nestled in the Himalayan foothills. Perfect for an intimate, soulful pheras ceremony by the sacred river, blending ancient tradition with modern luxury.",
    image: "/DEEP8532.jpg",
    accent: sage,
  },
  {
    title: "Exotic Kerala",
    subtitle: "Backwaters & Houseboat Luxury",
    desc: "A serene, mystical setting of coconut grooves and floating lagoons. Offer your guests an immersive backwater retreat combined with traditional wellness sessions and authentic South Indian hospitality.",
    image: "/DEEP9452.jpg",
    accent: gold,
  },
];

const logisticHighlights = [
  {
    icon: PlaneTakeoff,
    title: "Flight & Visa Guidance",
    desc: "We assist your Canadian and international guests with visa queries, group flight bookings, and RSVP tracking.",
  },
  {
    icon: Users,
    title: "Airport Shadow Support",
    desc: "Hospitality desks at major airports (Delhi, Mumbai, Jaipur) to welcome guests and manage private transfers.",
  },
  {
    icon: Compass,
    title: "Custom Sightseeing",
    desc: "Curated travel itineraries and local tours for your guests to experience India's rich culture before or after the wedding.",
  },
  {
    icon: FileCheck2,
    title: "Local SIMs & Helpdesk",
    desc: "Providing pre-activated local SIM cards, 24/7 helpline, and shadow support for guest peace of mind.",
  },
];

export default function NriLuxuryWeddingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5]">
      {/* ── 1. HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative h-[80vh] md:h-screen min-h-130 md:min-h-170 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/009A2075.jpg"
            alt="NRI Luxury Palace Wedding India — Forever Fuzed"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-[#3a2e2a]/20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/40 to-transparent" />
        </div>

        {/* Corner flourishes */}
        <div className="absolute top-24 left-6 md:left-10 w-14 h-14 border-l border-t border-[#C9A96E]/40 pointer-events-none z-20" />
        <div className="absolute top-24 right-6 md:right-10 w-14 h-14 border-r border-t border-[#C9A96E]/40 pointer-events-none z-20" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-white mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.4em] uppercase">
              Designed in Canada • Celebrated in India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-cormorant font-light leading-[0.95] text-[clamp(2.5rem,7.5vw,6rem)] max-w-4xl mb-6"
          >
            NRI&rsquo;s Luxury
            <br />
            Wedding in{" "}
            <span
              className="font-cormorant italic"
              style={{ WebkitTextStroke: "1.5px #C9A96E", color: "transparent" }}
            >
              India.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.55 }}
            className="font-lato text-white/70 text-sm md:text-base leading-relaxed max-w-lg tracking-wide mb-10"
          >
            Planning a signature celebration in India shouldn&rsquo;t mean endless midnight phone calls or compromised trust. Coordinated locally from our Mississauga office, we handle every detail—styling, logistics, and vendor curation—for a flawless, stress-free return home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="relative overflow-hidden group font-lato text-[10px] tracking-[0.25em] uppercase px-10 py-4 bg-[#C9A96E] text-white transition-all duration-300 hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-[#3a2e2a] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative">Book Consultation</span>
            </Link>
            <Link
              href="https://wa.me/16479019915"
              target="_blank"
              rel="noopener noreferrer"
              className="font-lato text-[10px] tracking-[0.25em] uppercase px-10 py-4 border border-white/40 text-white hover:bg-white hover:text-[#3a2e2a] transition-all duration-300"
            >
              Chat on WhatsApp
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. THE CANADIAN NRI ADVANTAGE ───────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Copywriting */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.75 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                The Canadian NRI Advantage
              </span>
            </div>

            <h2 className="font-cormorant text-[#3a2e2a] font-light text-3xl sm:text-5xl leading-[1.05] mb-8">
              Why Canadian Couples Trust
              <br />
              <span className="italic text-[#9CA195]">Forever Fuzed Weddings</span>
            </h2>

            <div className="space-y-6 font-lato text-[#6b5f5a] text-sm md:text-base leading-relaxed">
              <p>
                Planning an overseas destination wedding presents two major barriers: 
                <strong> trust</strong> and <strong>logistics</strong>. Dealing with time zone changes (+9.5 hours from Toronto/Mississauga) makes communicating with vendors in India exhausting, and managing contracts long-distance leaves room for error.
              </p>
              <p>
                <strong>We bridge this gap.</strong> Forever Fuzed is registered in Canada with a physical meeting suite in Mississauga, Ontario, and a fully established on-ground team across major Indian destinations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#ede6df]">
                <div>
                  <h4 className="font-cormorant text-[#3a2e2a] text-xl font-normal mb-2">Local Consultations</h4>
                  <p className="text-xs text-[#8a7e78] leading-relaxed">
                    Meet us face-to-face in Mississauga to select fabrics, view styling portfolios, review decor mockups, and finalize budgets in your timezone.
                  </p>
                </div>
                <div>
                  <h4 className="font-cormorant text-[#3a2e2a] text-xl font-normal mb-2">On-Ground Execution</h4>
                  <p className="text-xs text-[#8a7e78] leading-relaxed">
                    Our execution team in India acts as your local eyes and ears, managing 5-star venue setups, catering trials, approvals, and legal licensing.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase */}
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
                src="/DEEP7482.jpg"
                alt="NRI Palace Wedding Decoration Setup — Forever Fuzed"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#3a2e2a]/5" />
            </div>
            {/* Overlay tag */}
            <div className="absolute -bottom-6 -left-6 bg-[#3a2e2a] text-white p-6 hidden sm:block max-w-xs border border-[#C9A96E]/20">
              <p className="font-cormorant italic text-lg text-[#C9A96E] mb-1">“No 2:00 AM Calls”</p>
              <p className="font-lato text-[10px] leading-relaxed text-white/70 uppercase tracking-widest">
                We handle the time-zone differences. You enjoy the planning process.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PALATIAL DESTINATIONS ───────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 bg-[#FAF8F5] border-t border-b border-[#e8ddd5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A96E]" />
              <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase mx-1">
                Luxury Destinations
              </span>
              <div className="h-px w-8 bg-[#C9A96E]" />
            </div>
            <h2 className="font-cormorant text-[#3a2e2a] font-light text-3xl sm:text-5xl leading-[1.1]">
              Signature Destination Venues
              <br />
              <span className="italic text-[#9CA195]">Across India</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                transition={{ duration: 0.75, delay: (i % 2) * 0.15 }}
                className="group flex flex-col bg-white border border-[#e8ddd5] shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                {/* Image block */}
                <div className="relative h-[280px] w-full overflow-hidden bg-[#3a2e2a]">
                  <Image
                    src={dest.image}
                    alt={`${dest.title} Destination Wedding`}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content block */}
                <div className="p-8 flex flex-col gap-3 relative">
                  {/* Color strip accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ backgroundColor: dest.accent }}
                  />
                  <span className="font-lato text-[9px] tracking-[0.25em] uppercase text-[#9a8f8a]">
                    {dest.subtitle}
                  </span>
                  <h3 className="font-cormorant text-[#3a2e2a] text-2xl font-light">
                    {dest.title}
                  </h3>
                  <p className="font-lato text-[#6b5f5a] text-xs md:text-sm leading-relaxed mt-1">
                    {dest.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. LOGISTICS & GUEST MANAGEMENT ─────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-24 items-start">
            {/* Left: Info card */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#C9A96E]" />
                <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
                  Seamless Travel
                </span>
              </div>
              <h2 className="font-cormorant text-[#3a2e2a] font-light text-3xl sm:text-5xl leading-[1.08] mb-6">
                Caring for Your
                <br />
                <span className="italic text-[#9CA195]">Canadian Guests</span>
              </h2>
              <p className="font-lato text-[#6b5f5a] text-sm md:text-base leading-relaxed mb-8">
                Your guests are traveling thousands of miles from Canada to celebrate you. We ensure they receive 5-star hospitality, seamless ground transport, and complete shadow care from the moment they land in India.
              </p>
              <div className="bg-[#FAF8F5] border border-[#e8ddd5] p-6">
                <div className="flex items-center gap-2 text-[#C9A96E] mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-lato text-[9px] tracking-widest uppercase font-bold">
                    Canadian-Friendly Host
                  </span>
                </div>
                <p className="font-lato text-[11px] leading-relaxed text-[#8a7e78]">
                  From electrical adapter kits and local sim cards to dietary specifications (gluten-free, vegan) and sightseeing guides, we coordinate everything so your Canadian guests feel right at home.
                </p>
              </div>
            </div>

            {/* Right: Grid list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              {logisticHighlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex flex-col gap-4 border-b border-[#ede6df] pb-8 sm:border-b-0 sm:pb-0"
                  >
                    <div className="w-10 h-10 border border-[#e8ddd5] flex items-center justify-center text-[#C9A96E]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-cormorant text-[#3a2e2a] text-xl font-normal">
                      {item.title}
                    </h3>
                    <p className="font-lato text-[#6b5f5a] text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CALL TO ACTION ────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/DEEP9442.JPG"
            alt="Palace wedding venue"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#3a2e2a]/85 backdrop-blur-xs" />
          <div className="absolute inset-0 bg-[#3D4F3C]/20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-[#C9A96E]" />
            <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase mx-1">
              Begin Planning
            </span>
            <div className="h-px w-10 bg-[#C9A96E]" />
          </motion.div>

          <h2 className="font-cormorant font-light text-3xl sm:text-5xl leading-[1.1] mb-6">
            Let&rsquo;s Co-Create Your
            <br />
            <span className="italic text-[#C9A96E]">Indian Dream Wedding</span>
          </h2>
          <p className="font-lato text-white/70 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12">
            Schedule a face-to-face consultation at our Mississauga office or connect with us on Zoom to review palatial venues, customized return gifting concepts, and seamless logistical planning.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="relative overflow-hidden group font-lato text-[10px] tracking-[0.25em] uppercase px-12 py-4 bg-[#C9A96E] text-white hover:shadow-xl transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative group-hover:text-[#3a2e2a] transition-colors duration-300">
                Book Consult
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
          </div>
        </div>
      </section>
    </div>
  );
}
