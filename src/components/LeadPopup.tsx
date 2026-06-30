"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ChevronDown } from "lucide-react";

// Design tokens
const gold = "#C9A96E";

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasTriggered = useRef(false);

  useEffect(() => {
    // Function to trigger opening the popup
    const triggerPopup = () => {
      if (hasTriggered.current) return;
      hasTriggered.current = true;
      setIsOpen(true);
      
      // Cleanup listeners
      window.removeEventListener("scroll", handleScroll);
    };

    // 1. Setup 6-second timer trigger
    const timer = setTimeout(() => {
      triggerPopup();
    }, 6000);

    // 2. Setup 35% scroll trigger
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      
      const scrollPercent = (window.scrollY / scrollHeight) * 100;
      if (scrollPercent >= 35) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSending(true);

    const form = e.currentTarget;
    const formDataObj = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Minimal message required by backend contact API
    const messageDetails = `Complimentary consultation request from homepage pop-up.
Event Type: ${formDataObj.event_type || "N/A"}
Preferred Destination: ${formDataObj.destination || "N/A"}
Guest Count: ${formDataObj.guests || "N/A"}`;

    const payload = {
      name: formDataObj.name,
      email: formDataObj.email,
      phone: formDataObj.phone,
      event_type: formDataObj.event_type,
      destination: formDataObj.destination,
      guests: formDataObj.guests,
      message: messageDetails,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result?.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      form.reset();

      // Automatically close the popup after 4 seconds of success
      setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    } catch (err) {
      setError("Unable to submit request right now. Please try again.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
        >
          {/* Backdrop blur overlay */}
          <div 
            className="fixed inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-4xl bg-white shadow-2xl overflow-y-auto md:overflow-visible z-10 border border-[#e8ddd5]
                       grid grid-cols-1 md:grid-cols-[40%_60%] max-h-[90vh] md:max-h-none min-h-[500px]"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-30 p-2 text-[#9a8f8a] hover:text-[#C9A96E] transition-colors duration-300 outline-none"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Column: Visual Image & Branding */}
            <div className="relative hidden md:block overflow-hidden bg-[#3a2e2a]">
              <Image
                src="/DEEP9442.JPG"
                alt="Luxury wedding décor setup"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 bg-[#3D4F3C]/20" />
              
              {/* Corner flourishes */}
              <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-[#C9A96E]/40 pointer-events-none" />
              <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-[#C9A96E]/40 pointer-events-none" />

              {/* Text overlay */}
              <div className="absolute inset-x-8 bottom-12 text-white flex flex-col gap-3">
                <span className="font-lato text-[9px] tracking-[0.4em] uppercase text-[#C9A96E]">
                  Forever Fuzed
                </span>
                <h3 className="font-cormorant font-light text-2xl lg:text-3xl leading-snug">
                  Begin Your Journey to <span className="italic">Forever</span>
                </h3>
                <p className="font-lato text-white/60 text-[11px] leading-relaxed tracking-wide">
                  Share your dream, and let us curate a signature celebration tailored just for you.
                </p>
              </div>
            </div>

            {/* Right Column: Form content */}
            <div className="bg-[#FAF8F5] p-8 sm:p-10 flex flex-col justify-center">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-px w-10 bg-[#C9A96E]" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
                    <div className="h-px w-10 bg-[#C9A96E]" />
                  </div>
                  <h4 className="font-cormorant text-[#3a2e2a] text-2xl font-light mb-3">
                    Thank You, We&rsquo;ll Be In Touch
                  </h4>
                  <p className="font-lato text-[#6b5f5a] text-xs leading-relaxed max-w-xs mx-auto">
                    Your enquiry has been received. Our team will reach out within 24 hours to begin planning your perfect celebration.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="font-lato text-[#C9A96E] text-[9px] tracking-[0.3em] uppercase block mb-1">
                      Complimentary Consultation
                    </span>
                    <h4 className="font-cormorant text-[#3a2e2a] font-light text-2xl sm:text-3xl leading-[1.1]">
                      Craft Your <span className="italic text-[#9CA195]">Celebration</span>
                    </h4>
                  </div>

                  {error && (
                    <div className="rounded border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-800">
                      {error}
                    </div>
                  )}

                  {/* Inputs */}
                  <div className="space-y-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="popup-name" className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a]">
                        Full Name <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        id="popup-name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        className="w-full bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm placeholder:text-[#c4b8b0] outline-none focus:border-[#C9A96E] transition-colors duration-300"
                      />
                    </div>

                    {/* Email and Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="popup-email" className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a]">
                          Email Address <span className="text-[#C9A96E]">*</span>
                        </label>
                        <input
                          id="popup-email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="w-full bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm placeholder:text-[#c4b8b0] outline-none focus:border-[#C9A96E] transition-colors duration-300"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="popup-phone" className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a]">
                          Phone / WhatsApp <span className="text-[#C9A96E]">*</span>
                        </label>
                        <input
                          id="popup-phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 000 000 0000"
                          required
                          className="w-full bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm placeholder:text-[#c4b8b0] outline-none focus:border-[#C9A96E] transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Event Type & Destination Dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="popup-event_type" className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a]">
                          Type of Event
                        </label>
                        <div className="relative">
                          <select
                            id="popup-event_type"
                            name="event_type"
                            defaultValue=""
                            className="w-full appearance-none bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm outline-none focus:border-[#C9A96E] transition-colors duration-300 cursor-pointer pr-6"
                          >
                            <option value="" disabled className="text-[#c4b8b0]">Select…</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Engagement Ceremony">Engagement Ceremony</option>
                            <option value="Reception">Reception</option>
                            <option value="Destination Celebration">Destination Celebration</option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="absolute right-0 top-2 w-3.5 h-3.5 text-[#C9A96E] pointer-events-none" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label htmlFor="popup-destination" className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a]">
                          Preferred Destination
                        </label>
                        <div className="relative">
                          <select
                            id="popup-destination"
                            name="destination"
                            defaultValue=""
                            className="w-full appearance-none bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm outline-none focus:border-[#C9A96E] transition-colors duration-300 cursor-pointer pr-6"
                          >
                            <option value="" disabled className="text-[#c4b8b0]">Select…</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Goa">Goa</option>
                            <option value="Rishikesh">Rishikesh</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Delhi / NCR">Delhi / NCR</option>
                            <option value="Other">Other</option>
                            <option value="Still Deciding">Still Deciding</option>
                          </select>
                          <ChevronDown className="absolute right-0 top-2 w-3.5 h-3.5 text-[#C9A96E] pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div className="flex flex-col gap-1">
                      <label htmlFor="popup-guests" className="font-lato text-[9px] tracking-[0.2em] uppercase text-[#9a8f8a]">
                        Estimated Guest Count
                      </label>
                      <div className="relative">
                        <select
                          id="popup-guests"
                          name="guests"
                          defaultValue=""
                          className="w-full appearance-none bg-transparent border-b border-[#e8ddd5] pb-3 pt-1 font-lato text-[#3a2e2a] text-sm outline-none focus:border-[#C9A96E] transition-colors duration-300 cursor-pointer pr-6"
                        >
                          <option value="" disabled className="text-[#c4b8b0]">Select…</option>
                          <option value="Under 100">Under 100</option>
                          <option value="100 – 250">100 – 250</option>
                          <option value="250 – 500">250 – 500</option>
                          <option value="500 – 1000">500 – 1000</option>
                          <option value="1000+">1000+</option>
                        </select>
                        <ChevronDown className="absolute right-0 top-2 w-3.5 h-3.5 text-[#C9A96E] pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="relative overflow-hidden group w-full font-lato text-[10px] tracking-[0.25em] uppercase
                                 py-3.5 bg-[#3a2e2a] text-white transition-all duration-300
                                 hover:shadow-lg hover:shadow-[#3a2e2a]/15 flex items-center justify-center gap-2.5 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span className="absolute inset-0 bg-[#C9A96E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      <span className="relative flex items-center gap-2">
                        {sending ? "Sending..." : "Request Consultation"}
                        <Send className="w-3 h-3" />
                      </span>
                    </button>
                    <p className="font-lato text-[8px] text-[#9a8f8a] tracking-wide mt-3 text-center">
                      We value your privacy. Your information is never shared.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
