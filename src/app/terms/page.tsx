import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Forever Fuzed. Please read these terms carefully before using our services.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-[#FAF8F5] min-h-screen pt-32 pb-20 px-6 lg:px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#C9A96E]" />
          <span className="font-lato text-[#C9A96E] text-[10px] tracking-[0.35em] uppercase">
            Legal
          </span>
        </div>
        
        <h1 className="font-cormorant text-[#3a2e2a] text-4xl sm:text-5xl md:text-6xl font-light mb-10 leading-tight">
          Terms of <span className="italic">Service</span>
        </h1>

        <div className="font-lato text-sm text-[#3a2e2a]/80 leading-relaxed space-y-8">
          <p>
            Effective Date: June 29, 2026
          </p>

          <p>
            Welcome to Forever Fuzed. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service. Please review them carefully.
          </p>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              1. Scope of Services
            </h2>
            <p>
              Forever Fuzed provides luxury wedding and event planning, styling, design, vendor curation, and logistics management services. All agreements for planning packages are subject to formal contracts signed separately by both parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              2. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, designs, images, logos, graphics, and portfolio displays, is the property of Forever Fuzed and is protected by copyright and intellectual property laws. You may not copy, reproduce, or reuse any content without our express written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              3. User Conduct
            </h2>
            <p>
              You agree to use this website only for lawful purposes related to researching or hiring our services. You are prohibited from using the site to submit false information, spam our contact forms, or attempt to compromise website security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              4. Disclaimer of Warranties
            </h2>
            <p>
              While we strive to provide accurate and up-to-date information, our website content is provided on an "as is" basis without warranties of any kind. We do not guarantee that the website will be uninterrupted or error-free.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              5. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the Province of Ontario and the laws of Canada applicable therein, without regard to conflict of law principles.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
