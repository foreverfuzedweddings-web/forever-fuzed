import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Forever Fuzed. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
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
          Privacy <span className="italic">Policy</span>
        </h1>

        <div className="font-lato text-sm text-[#3a2e2a]/80 leading-relaxed space-y-8">
          <p>
            Effective Date: June 29, 2026
          </p>

          <p>
            At Forever Fuzed, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy describes how we collect, use, and safeguard your data when you visit our website, contact us, or hire our luxury wedding planning services.
          </p>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email address, phone number, wedding details, and any other information you provide when using our contact forms or during consultations.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to respond to your inquiries, schedule consultations, customize our wedding services to your preferences, and coordinate with vendors to deliver your event. We do not sell or lease your personal information to third parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              3. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to safeguard your personal data from unauthorized access, alteration, or disclosure. However, no electronic transmission over the internet can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              4. Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies (such as Google Analytics) to improve website performance, analyze user behavior, and optimize user experience. You can adjust your browser settings to disable cookies if desired.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-cormorant text-2xl text-[#3a2e2a] font-medium border-b border-[#e8ddd5] pb-2">
              5. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please email us at{" "}
              <a href="mailto:Foreverfusedevents@gmail.com" className="text-[#C9A96E] hover:underline">
                Foreverfusedevents@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
