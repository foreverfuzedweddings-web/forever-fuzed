"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What wedding services do you provide?",
    answer:
      "We provide complete wedding planning, decoration, venue coordination, photography, entertainment, and event management services.",
  },
  {
    question: "Do you work with different wedding budgets?",
    answer:
      "Yes. We create customized wedding packages that fit different budgets and requirements.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 6-12 months in advance to secure your preferred dates and vendors.",
  },
  {
    question: "Do you offer destination wedding planning?",
    answer:
      "Yes. We help plan and coordinate destination weddings, including venue selection and guest arrangements.",
  },
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full text-left p-5 font-semibold flex justify-between"
              >
                {faq.question}
                <span>
                  {open === index ? "-" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="p-5 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
