// No "use client" or "use server" — importable by both server and client components

export type ServiceData = {
  number: string;
  title: string;
  tagline: string;
  accent: string;
  heroImage: string;
  overviewImage: string;
  intro: string;
  paragraphs: string[];
  detailSections?: { heading: string; body: string }[];
  highlights: string[];
  galleryImages: { src: string; alt: string; category: string }[];
  ctaHeading: string;
  ctaItalic: string;
  ctaSubtext: string;
  ctaBgImage: string;
  nextSlug: string;
  nextTitle: string;
};

export const servicesData: Record<string, ServiceData> = {
  "wedding-styling": {
    number: "01",
    title: "Wedding Styling & Design",
    tagline: "Where Vision Meets Artistry",
    accent: "#9CA195",
    heroImage: "/DEEP7090.jpg",
    overviewImage: "/DEEP7089.jpg",
    intro:
      "We craft visually stunning wedding experiences that reflect your story, culture, and aesthetic.",
    paragraphs: [
      "From concept to execution, every element—color palettes, décor, floral artistry, tablescapes, and ambiance—is thoughtfully curated to create a seamless and luxurious setting.",
      "Our approach blends modern elegance with timeless traditions, ensuring every celebration feels personal, immersive, and unforgettable.",
    ],
    detailSections: [
      {
        heading: "Design, Décor & Visual Storytelling",
        body: "Your wedding should look and feel like you — not like every other wedding on Instagram. We create fully custom design concepts for each event, whether it is your Mehndi, Haldi, Sangeet, Wedding, or Reception. From mood boards and colour palettes to floral installations, mandap design, stage setups, lighting, and experiential décor — every visual element is crafted to reflect your personalities, your cultures, and your love story.",
      },
      {
        heading: "Wardrobe, Styling & Personal Shopping",
        body: "Looking and feeling your best on your wedding day requires more than just choosing an outfit. We guide the bride, groom, and family through complete wardrobe planning — from outfit curation across all events to custom designing with top Indian designers, jewellery selection, accessories, and styling direction. For couples visiting India, we provide personal shoppers and shadow assistants who accompany you on shopping trips, ensuring the experience is enjoyable and stress-free.",
      },
    ],
    highlights: [
      "Custom color palette & mood board creation",
      "Floral artistry & statement installations",
      "Tablescape & centrepiece design",
      "Ceremony & reception ambiance styling",
      "Cultural tradition integration",
      "On-day styling supervision",
    ],
    galleryImages: [
      { src: "/DEEP7085.jpg", alt: "Wedding decor", category: "Décor" },
      { src: "/DEEP7084.jpg", alt: "Floral arrangement", category: "Florals" },
      { src: "/DEEP7089.jpg", alt: "Reception styling", category: "Reception" },
      { src: "/DEEP7059.jpg", alt: "Ceremony setup", category: "Ceremony" },
      { src: "/009A0511.jpg", alt: "Couple portrait", category: "Portraits" },
      { src: "/_UB_2694.jpg", alt: "Table setting", category: "Details" },
      { src: "/_UB_1459.jpg", alt: "Ceremony aisle", category: "Ceremony" },
      { src: "/009A0514.jpg", alt: "Wedding details", category: "Details" },
    ],
    ctaHeading: "Your Wedding, Designed",
    ctaItalic: "to Perfection",
    ctaSubtext:
      "Let us craft a visual world that tells your unique story — every petal, every candle, every moment.",
    ctaBgImage: "/009A2081.jpg",
    nextSlug: "luxury-gifting",
    nextTitle: "Luxury Gifting & Wedding Hampers",
  },

  "luxury-gifting": {
    number: "02",
    title: "Luxury Gifting & Wedding Hampers",
    tagline: "Gifting That Leaves an Impression",
    accent: "#F2A7B0",
    heroImage: "/009A2302.jpg",
    overviewImage: "/009A2350.jpg",
    intro:
      "We design bespoke gifting experiences that leave a lasting impression.",
    paragraphs: [
      "From curated welcome hampers to elegant wedding favors, each piece is tailored to your theme and thoughtfully sourced. Expect premium packaging, personalized details, and globally inspired concepts.",
      "Every gift reflects sophistication and gratitude for your guests—crafted to be remembered long after the celebrations end.",
    ],
    detailSections: [
      {
        heading: "Gifting, Hampers & Guest Experience",
        body: "The details your guests experience from the moment they arrive to the moment they leave define how they remember your wedding. We curate welcome hampers, personalized return gifts, event-specific favours, and VIP guest experiences that reflect the warmth and thoughtfulness of your celebration. Whether you need gifting for 50 guests or 500, we bring the same care and attention to every piece.",
      },
    ],
    highlights: [
      "Bespoke welcome hampers for guests",
      "Custom-branded luxury packaging",
      "Globally inspired gifting concepts",
      "Wedding favors & take-home mementos",
      "Personalized notes & monogramming",
      "Bulk ordering & logistics coordination",
    ],
    galleryImages: [
      { src: "/009A2341.jpg", alt: "Gift hamper", category: "Hampers" },
      { src: "/009A2353.jpg", alt: "Luxury packaging", category: "Packaging" },
      { src: "/009A2360.jpg", alt: "Gift boxes", category: "Gifts" },
      { src: "/009A2365.jpg", alt: "Wedding favors", category: "Favors" },
      { src: "/DEEP7480.jpg", alt: "Ribbons & details", category: "Details" },
      { src: "/DEEP8535.jpg", alt: "Couple with gifts", category: "Moments" },
      { src: "/DEEP9500.jpg", alt: "Gift details", category: "Details" },
      { src: "/DEEP7059.jpg", alt: "Styled gifting", category: "Styling" },
    ],
    ctaHeading: "Leave a Lasting",
    ctaItalic: "Impression",
    ctaSubtext:
      "Thoughtfully curated gifts that speak louder than words — because gratitude deserves to be beautiful.",
    ctaBgImage: "/009A2350.jpg",
    nextSlug: "entertainment",
    nextTitle: "Curated Entertainment Experiences",
  },

  entertainment: {
    number: "03",
    title: "Curated Entertainment Experiences",
    tagline: "Moments That Captivate",
    accent: "#C9A96E",
    heroImage: "/009A2087.jpg",
    overviewImage: "/009A0518.jpg",
    intro:
      "We bring your celebrations to life with carefully curated entertainment that captivates and engages.",
    paragraphs: [
      "From live performers and celebrity artists to immersive cultural acts and high-energy productions, we design moments that elevate every event.",
      "Each experience is tailored to your audience, ensuring energy, elegance, and unforgettable memories that resonate for years to come.",
    ],
    detailSections: [
      {
        heading: "Entertainment & Performances",
        body: "From intimate family moments to grand celebration stages, we bring your events to life. We coordinate DJs, live bands, folk artists, Bollywood-style background dancers, celebrity performers, and professional emcees. We also plan family choreography for the Sangeet, surprise performances, special entries for the bride and groom, fireworks, cold pyros, and everything in between — ensuring every event has energy, joy, and moments your guests will never forget.",
      },
      {
        heading: "Special Experiences",
        body: "Some moments in a wedding deserve to be completely extraordinary. We plan and execute proposal setups, family surprise dances, personalized couple entries, private dinners, after-parties, luxury car and vintage car arrangements, and once-in-a-lifetime experiences that elevate your celebration far beyond the ordinary.",
      },
    ],
    highlights: [
      "Live performers & celebrity artist booking",
      "Immersive cultural & folk acts",
      "High-energy dance & choreography",
      "Themed entertainment productions",
      "Interactive guest experiences",
      "Seamless AV & stage coordination",
    ],
    galleryImages: [
      {
        src: "/009A2089.jpg",
        alt: "Live performance",
        category: "Performance",
      },
      { src: "/009A2090.jpg", alt: "Stage production", category: "Production" },
      { src: "/DEEP7067.jpg", alt: "Concert lights", category: "Lighting" },
      { src: "/DEEP7464.jpg", alt: "Dance performance", category: "Dance" },
      {
        src: "/DEEP7490.jpg",
        alt: "Celebration energy",
        category: "Celebration",
      },
      { src: "/DEEP8524.jpg", alt: "Cultural act", category: "Cultural" },
      { src: "/DEEP9445.jpg", alt: "Guest experience", category: "Guests" },
      { src: "/DEEP9491.jpg", alt: "Show details", category: "Details" },
    ],
    ctaHeading: "Bring Your Celebration",
    ctaItalic: "to Life",
    ctaSubtext:
      "From the first beat to the last bow — we create entertainment that your guests will never forget.",
    ctaBgImage: "/DEEP9441.jpg",
    nextSlug: "event-logistics",
    nextTitle: "Seamless Event Logistics & Guest Management",
  },

  "event-logistics": {
    number: "04",
    title: "Seamless Event Logistics & Guest Management",
    tagline: "Precision Behind Every Perfect Moment",
    accent: "#9CA195",
    heroImage: "/DEEP9447.JPG",
    overviewImage: "/DEEP9443.JPG",
    intro: "Behind every flawless celebration is precise planning.",
    paragraphs: [
      "We manage all logistical elements—from guest coordination and transportation to timelines and on-ground execution—ensuring everything flows effortlessly.",
      "Our team ensures a stress-free experience, allowing you and your guests to enjoy every moment without concern.",
    ],
    detailSections: [
      {
        heading: "Logistics, Travel & On-Ground Management",
        body: "Managing a multi-day wedding in India from abroad involves layers of coordination that can quickly become overwhelming. We handle everything from flight and group booking assistance to airport pickups, hotel coordination, transportation between venues, hospitality desks, and in-between visit arrangements for families. Our on-ground team ensures every event runs smoothly, every vendor is supervised, and every moment unfolds exactly as planned.",
      },
      {
        heading: "On-Ground Shadow Support",
        body: "For our Platinum and Diamond couples, we go beyond planning and become a personal presence throughout every event. Our dedicated shadows accompany the bride, groom, and mothers — managing wardrobe, assisting with outfit changes and touch-ups, providing calm and emotional support, and ensuring you are fully present in every moment without worrying about a single thing behind the scenes.",
      },
    ],
    highlights: [
      "End-to-end guest coordination",
      "Transportation & accommodation logistics",
      "Detailed event timeline management",
      "On-ground execution team",
      "RSVP & guest communication",
      "Day-of operations & contingency planning",
    ],
    galleryImages: [
      { src: "/DEEP9441.jpg", alt: "Venue coordination", category: "Venue" },
      { src: "/DEEP9439.jpg", alt: "Event setup", category: "Setup" },
      { src: "/DEEP8532.jpg", alt: "Guest arrival", category: "Guests" },
      { src: "/DEEP9463.jpg", alt: "Ceremony flow", category: "Ceremony" },
      { src: "/DEEP7489.jpg", alt: "Reception setup", category: "Reception" },
      { src: "/DEEP8511.jpg", alt: "Guest experience", category: "Experience" },
      { src: "/DEEP7480.jpg", alt: "Event moments", category: "Moments" },
      { src: "/009A2076.jpg", alt: "Celebration", category: "Celebration" },
    ],
    ctaHeading: "Flawless From",
    ctaItalic: "Start to Finish",
    ctaSubtext:
      "Leave every detail to us so you can be fully present — in every laugh, every dance, every memory.",
    ctaBgImage: "/009A2077.jpg",
    nextSlug: "vendor-curation",
    nextTitle: "Premium Vendor Curation & Management",
  },

  "vendor-curation": {
    number: "05",
    title: "Premium Vendor Curation & Management",
    tagline: "Only the Best, Every Time",
    accent: "#F2A7B0",
    heroImage: "/009A2077.jpg",
    overviewImage: "/009A0506.jpg",
    intro:
      "We collaborate with a trusted network of top-tier vendors across India and Canada to deliver exceptional quality.",
    paragraphs: [
      "From venues and décor to catering and production, every partner is carefully selected to align with our luxury standards.",
      "We handle sourcing, negotiation, and coordination—ensuring excellence, reliability, and a cohesive event experience.",
    ],
    detailSections: [
      {
        heading: "Planning & Strategy",
        body: "Every beautiful wedding begins with a clear, thoughtful plan. We build your complete wedding roadmap from day one — covering date selection, timeline creation, budget structuring, and family alignment on both sides. Whether you are planning 12 months or 18 months in advance, we ensure nothing is left to chance. We work across time zones, stay available for unlimited consultations, and make sure you always feel in control — no matter where in the world you are.",
      },
      {
        heading: "Venue & Hospitality",
        body: "Finding the right venue is one of the most important decisions you will make, and we handle it entirely on your behalf. We research, shortlist, and visit properties across India — from luxury five-star hotels to heritage palaces and boutique resort destinations — and bring everything to you through virtual tours, detailed comparisons, and honest recommendations. We also manage all guest logistics including room allocations, airport transfers, check-in coordination, and hospitality throughout the celebration.",
      },
      {
        heading: "Catering & Culinary Experience",
        body: "Food is one of the most remembered parts of any celebration. We curate thoughtful, multi-cuisine menus across all your events — working with trusted catering teams to bring Indian regional flavours, global cuisines, live counters, specialty chefs, and signature bar experiences to your table. We manage food tastings, coordinate with in-house or external catering teams, and ensure every guest from every corner of the world is genuinely taken care of.",
      },
      {
        heading: "Photography, Videography & Storytelling",
        body: "Your wedding deserves to be remembered in the most beautiful, authentic way possible. We plan and direct your entire photography and film experience — from pre-wedding shoot concepts and location scouting to guiding photographers on emotional moments, narrative angles, and storytelling direction. For our Platinum and Diamond couples, we go further — creating a personalized song composed from your love story, recorded by professional singers, and released on platforms like Spotify and Apple Music, alongside a cinematic Bollywood-style music video that becomes your legacy.",
      },
      {
        heading: "Rituals, Traditions & Cultural Coordination",
        body: "For NRI couples and mixed-culture families, honouring traditions while keeping celebrations modern requires a delicate balance. We coordinate with pandits and priests, plan rituals for both families, and ensure every ceremony is handled with cultural sensitivity, respect, and clarity. Whether your wedding blends two religions, two nationalities, or two sets of very different family expectations — we navigate it all with grace.",
      },
      {
        heading: "Premium Bespoke Services",
        body: "Not every couple needs full-scale planning — and we respect that. For couples who already have elements in place and need expert support in specific areas, we offer a fully flexible, customizable service option. You choose exactly what you need, and we step in where we are needed most — with the same expertise, care, and quality that defines everything we do.",
      },
    ],
    highlights: [
      "Curated vendor network across India & Canada",
      "Venue sourcing & site visits",
      "Catering & culinary partner selection",
      "Contract negotiation & management",
      "Quality assurance & oversight",
      "Multi-vendor coordination on the day",
    ],
    galleryImages: [
      { src: "/_UB_1459.jpg", alt: "Premium venue", category: "Venue" },
      {
        src: "/009A0514.jpg",
        alt: "Culinary excellence",
        category: "Catering",
      },
      { src: "/009A2088.jpg", alt: "Event production", category: "Production" },
      { src: "/009A2365.jpg", alt: "Vendor styling", category: "Styling" },
      { src: "/DEEP7459.JPG", alt: "Décor vendor", category: "Décor" },
      { src: "/009A2089.jpg", alt: "Venue setup", category: "Venue" },
      { src: "/009A2099.jpg", alt: "Floral vendor", category: "Florals" },
      { src: "/009A2353.jpg", alt: "Guest experience", category: "Experience" },
    ],
    ctaHeading: "Only the Best",
    ctaItalic: "for Your Big Day",
    ctaSubtext:
      "Every vendor hand-picked, every partnership carefully managed — because your celebration deserves nothing less.",
    ctaBgImage: "/DEEP8513.jpg",
    nextSlug: "wedding-styling",
    nextTitle: "Wedding Styling & Design",
  },
};
