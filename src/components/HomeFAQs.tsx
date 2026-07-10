"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

const homeFaqs = [
  {
    question: "1. Can NRI couples get married in India?",
    answer: "Yes. NRI couples can legally get married in India by following the applicable marriage laws and submitting the required documents. Whether you're planning a traditional ceremony or a civil marriage, our team can guide you through the planning process while creating a seamless destination wedding experience.",
  },
  {
    question: "2. Can foreign citizens or OCI card holders get married in India?",
    answer: "Yes. Foreign nationals and OCI card holders can marry in India, provided they meet the legal requirements and documentation guidelines. We help overseas couples coordinate their wedding celebrations while ensuring every detail is professionally managed.",
  },
  {
    question: "3. How much does a luxury destination wedding in India cost?",
    answer: "The cost depends on the destination, venue, guest count, décor, hospitality, entertainment, and personalization. Luxury destination weddings in India typically range from ₹20 lakh to several crores depending on your vision and requirements.",
  },
  {
    question: "4. Is ₹20 lakh enough for a destination wedding in India?",
    answer: "A budget of ₹20 lakh can create a beautiful destination wedding for an intimate guest list. The final cost depends on the venue, location, accommodation, food, décor, entertainment, and hospitality services you choose.",
  },
  {
    question: "5. How do I choose the best destination wedding planner in India?",
    answer: "Look for a planner with experience in destination weddings, strong vendor partnerships, transparent communication, creative design expertise, and end-to-end wedding management services. Choosing the right planner ensures a stress-free and memorable celebration.",
  },
  {
    question: "6. Which are the best destinations in India for NRI weddings?",
    answer: "Popular destinations include Udaipur, Jaipur, Jodhpur, Goa, Mussoorie, Kerala, Rishikesh, and luxury resorts across India. The ideal destination depends on your wedding style, guest count, and overall experience you want to create.",
  },
  {
    question: "7. What services are included in destination wedding planning?",
    answer: "A professional destination wedding planner typically manages venue selection, wedding vendor coordination, guest logistics, travel arrangements, hospitality management, décor styling, entertainment, timeline planning, and complete on-site execution.",
  },
  {
    question: "8. How far in advance should we start planning a destination wedding?",
    answer: "For the best venue availability and vendor selection, it's recommended to begin planning 8–12 months before your wedding date. Larger or international weddings may benefit from even earlier planning.",
  },
  {
    question: "9. How do you manage guests traveling from different countries?",
    answer: "We coordinate accommodation, airport transfers, transportation, welcome experiences, room allocations, itinerary planning, and guest hospitality to ensure everyone enjoys a smooth and comfortable wedding experience.",
  },
  {
    question: "10. Why should NRI couples hire a wedding management company in India?",
    answer: "Hiring an experienced Wedding Management Services team saves time, reduces stress, and ensures professional coordination of every wedding detail. With an on-ground team managing vendors, logistics, hospitality, and execution, NRI couples can enjoy their celebrations without worrying about planning from abroad.",
  },
];

export default function HomeFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const accent = "#C9A96E";

  return (
    <section className="bg-[#FAF8F5] py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10" style={{ backgroundColor: accent }} />
            <span
              className="font-lato text-[10px] tracking-[0.35em] uppercase"
              style={{ color: accent }}
            >
              Have Questions?
            </span>
            <div className="h-px w-10" style={{ backgroundColor: accent }} />
          </div>
          <h2 className="font-cormorant text-[#3a2e2a] font-light text-4xl md:text-5xl leading-tight">
            FA
            <span className="italic" style={{ color: accent }}>
              Qs
            </span>
          </h2>
        </motion.div>

        <div className="border-t border-[#e8ddd5]">
          {homeFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-b border-[#e8ddd5] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left transition-colors duration-300 group hover:bg-[#faf8f5]/50"
                >
                  <span className="font-cormorant text-[#3a2e2a] text-xl md:text-2xl font-light pr-8">
                    {faq.question}
                  </span>
                  <div
                    className="w-10 h-10 rounded-full border border-[#e8ddd5] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-transparent"
                    style={{
                      backgroundColor: isOpen ? `${accent}15` : "transparent",
                    }}
                  >
                    <ChevronDown
                      className="w-5 h-5 transition-transform duration-500 ease-in-out"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        color: isOpen ? accent : "#9a8f8a",
                      }}
                    />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="pb-8 pr-12 md:pr-24">
                        <p className="font-lato text-[#6b5f5a] text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
