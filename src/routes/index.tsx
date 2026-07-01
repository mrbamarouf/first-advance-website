import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpLeft, Check, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import logoImage from "@/assets/first-advance-logo-light-transparent.png";

/* Premium Saudi architecture photography */
import heroKafd from "@/assets/hero-riyadh-panorama.jpg";
import boardroom from "@/assets/plate-boardroom.jpg";
import corporateTower from "@/assets/plate-corporate-tower.jpg";
import operationsCenter from "@/assets/plate-operations.jpg";
import realEstate from "@/assets/plate-realestate.jpg";
import ctaSunset from "@/assets/cta-jeddah-sunset.jpg";
import processBg from "@/assets/plate-process-bg.jpg";
import sectorBusiness from "@/assets/sector-business.jpg";
import sectorRealEstate from "@/assets/sector-realestate.jpg";
import sectorInvestment from "@/assets/sector-investment.jpg";
import sectorCommercial from "@/assets/sector-commercial.jpg";
import sectorServices from "@/assets/sector-services.jpg";
import sectorEntrepreneurs from "@/assets/sector-entrepreneurs.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "First Advance — حلول أعمال متكاملة" },
      {
        name: "description",
        content:
          "First Advance — مؤسسة سعودية متخصصة في حلول الأعمال، الخدمات التشغيلية والخدمات العقارية.",
      },
      { property: "og:title", content: "First Advance — حلول أعمال متكاملة" },
      {
        property: "og:description",
        content: "حلول متكاملة في إدارة الأعمال، التشغيل، والخدمات العقارية.",
      },
    ],
  }),
  component: Index,
});

const LOGO = logoImage;
const WHATSAPP_DISPLAY = "+966 556 882 169";
const WHATSAPP_LINK = "https://wa.me/966556882169";
const EMAIL = "info@aras.com.sa";
type Language = "ar" | "en";

const LTR_ISOLATE_START = "\u2066";
const LTR_ISOLATE_END = "\u2069";
const LTR_SKIP_KEYS = new Set(["href", "k", "n", "roman"]);

function isolateEnglishCopy<T>(value: T, key?: string): T {
  if (typeof value === "string") {
    return (
      LTR_SKIP_KEYS.has(key ?? "") ? value : `${LTR_ISOLATE_START}${value}${LTR_ISOLATE_END}`
    ) as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => isolateEnglishCopy(item)) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([entryKey, entryValue]) => [
        entryKey,
        isolateEnglishCopy(entryValue, entryKey),
      ]),
    ) as T;
  }
  return value;
}

const COPY = {
  ar: {
    location: "جدة، المملكة العربية السعودية",
    nav: {
      links: [
        { href: "#about", label: "من نحن" },
        { href: "#services", label: "خدماتنا" },
        { href: "#why", label: "لماذا نحن" },
        { href: "#industries", label: "القطاعات" },
        { href: "#process", label: "منهجيتنا" },
        { href: "#packages", label: "الباقات" },
      ],
      cta: "طلب استشارة",
      languageLabel: "اللغة",
      languageAria: "تغيير اللغة",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      title: "حلول أعمال متكاملة",
      subtitlePrefix: "تبني ",
      subtitleHighlight: "النمو",
      subtitleSuffix: " … وتدير النجاح.",
      body: "مؤسسة سعودية متخصصة في حلول الأعمال، الخدمات التشغيلية، والخدمات العقارية — نبني للمؤسسات ورواد الأعمال منظومات أكثر كفاءة واستدامة.",
      primaryCta: "ابدأ معنا",
      secondaryCta: "استكشف خدماتنا",
      ledger: [
        { k: "01", t: "حلول الأعمال", d: "استشارات وتطوير أعمال ودعم إداري." },
        { k: "02", t: "الخدمات التشغيلية", d: "إدارة العمليات ورفع الأداء." },
        { k: "03", t: "الخدمات العقارية", d: "إدارة الأصول والاستثمار العقاري." },
      ],
    },
    intro: {
      lead: "نؤمن بأن النجاح الحقيقي يبدأ من التخطيط الصحيح، والإدارة الفعالة،",
      muted: " والتنفيذ الاحترافي — ",
      tail: "ولهذا نجمع الإدارة، التشغيل، والعقار تحت منظومة واحدة تخدم عميلاً واحداً.",
    },
    about: {
      kicker: "من نحن",
      title: "حلول أعمال متكاملة تجمع الإدارة والتشغيل والعقار تحت منظومة واحدة.",
      paragraphs: [
        "First Advance مؤسسة متخصصة في تقديم حلول الأعمال المتكاملة، تجمع بين الخبرة الإدارية والتشغيلية والخدمات العقارية تحت منظومة واحدة.",
        "نعمل على تطوير بيئات الأعمال، وتحسين الكفاءة التشغيلية، وتقديم حلول عملية تساعد عملاءنا على تحقيق النمو والاستقرار والاستدامة.",
      ],
      stats: [
        { n: "03", t: "ممارسات متكاملة" },
        { n: "06", t: "قطاعات مستهدفة" },
        { n: "1:1", t: "مسؤولية موحدة" },
      ],
      imageAlt: "قاعة اجتماعات تنفيذية بإطلالة على مدينة الرياض",
      badgeLabel: "تأسست في المملكة",
      badgeText: "مؤسسة سعودية للاستشارات وحلول الأعمال المتكاملة.",
    },
    principles: {
      kicker: "مبادئنا",
      title: "رؤية واضحة، رسالة عملية — ومنهج مبني على النتائج.",
      visionLabel: "رؤيتنا",
      vision:
        "أن نكون الشريك الأول للمؤسسات في تطوير الأعمال، ورفع الكفاءة التشغيلية، وتقديم حلول متكاملة تحقق قيمة مستدامة.",
      missionLabel: "رسالتنا",
      mission:
        "تقديم خدمات احترافية تعتمد على الجودة، والابتكار، والخبرة العملية، لبناء شراكات طويلة المدى مع عملائنا وتحقيق نتائج قابلة للقياس.",
    },
    services: {
      kicker: "خدماتنا",
      title: "ثلاث ممارسات متكاملة — تُقدَّم منفصلة أو مجتمعة، بمسؤولية موحدة.",
      intro: "نعتمد منهجية تنفيذ واحدة أمام العميل، مع فرق متخصصة لكل ممارسة.",
      cards: [
        {
          n: "01",
          label: "Business Solutions",
          title: "حلول الأعمال",
          desc: "استشارات وتطوير وتخطيط لبناء أعمال أكثر كفاءة، مع دعم إداري متكامل لرفع الأداء المؤسسي.",
          items: [
            "استشارات الأعمال",
            "تطوير الأعمال",
            "الدعم الإداري",
            "تحسين العمليات",
            "التخطيط الاستراتيجي",
          ],
          alt: "برج مقر شركة سعودية · Corporate headquarters tower",
        },
        {
          n: "02",
          label: "Operational Services",
          title: "الخدمات التشغيلية",
          desc: "إدارة عمليات محكمة، تنسيق مشاريع، وتحسين مستمر للأداء والدعم التشغيلي اليومي.",
          items: [
            "إدارة العمليات",
            "تنسيق المشاريع",
            "تحسين الأداء",
            "تطوير العمليات",
            "الدعم التشغيلي",
          ],
          alt: "مركز عمليات · Operations control room",
        },
        {
          n: "03",
          label: "Real Estate Services",
          title: "الخدمات العقارية",
          desc: "إدارة عقارات وأصول باحترافية، مع تنسيق فرص الاستثمار العقاري وتقديم حلول متكاملة للمطورين والمالكين.",
          items: [
            "إدارة العقارات",
            "خدمات عقارية",
            "دعم الأصول",
            "تنسيق الاستثمار",
            "حلول عقارية متكاملة",
          ],
          alt: "مشروع عقاري تجاري متعدد الاستخدامات · Commercial development",
        },
      ],
    },
    why: {
      kicker: "لماذا First Advance",
      title: "اختيار موثوق",
      titleAccent: "لإدارة الأعمال والعمليات والعقارات.",
      quote: "«نبني علاقات طويلة المدى مع عملائنا، ونقيس نجاحنا بنجاحهم — لا بحجم مشاريعنا.»",
      items: [
        "خبرة عملية في تطوير الأعمال والإدارة والتشغيل.",
        "حلول متكاملة تحت سقف واحد.",
        "جودة تنفيذ ومعايير احترافية.",
        "مرونة في تقديم الحلول حسب احتياجات كل عميل.",
        "شراكات طويلة المدى مبنية على الثقة والنتائج.",
        "التركيز على الاستدامة والنمو الحقيقي.",
      ],
    },
    industries: {
      kicker: "القطاعات",
      title: "القطاعات التي نخدمها.",
      intro: "نعمل مع مؤسسات في قطاعات متعددة، مع تكييف الحلول وفق طبيعة النشاط ومرحلة النمو.",
      sectors: [
        { name: "قطاع الأعمال", tag: "Corporate Tower" },
        { name: "القطاع العقاري", tag: "Commercial Development" },
        { name: "قطاع الاستثمار", tag: "Financial District · KAFD" },
        { name: "القطاع التجاري", tag: "Retail & Commercial" },
        { name: "قطاع الخدمات", tag: "Infrastructure" },
        { name: "رواد الأعمال والمنشآت الناشئة", tag: "Modern Office Campus" },
      ],
    },
    process: {
      kicker: "منهجيتنا",
      title: "من الفهم إلى التنفيذ إلى التطوير.",
      intro: "منهجية موحدة بأربع مراحل تحكم كل تعاقد، بغض النظر عن حجمه أو قطاعه.",
      steps: [
        {
          n: "01",
          t: "دراسة الاحتياج",
          d: "نفهم طبيعة النشاط والأهداف والتحديات، ونضع تشخيصاً واضحاً قبل أي توصية.",
        },
        {
          n: "02",
          t: "بناء الحلول",
          d: "نصمم حلولاً عملية تناسب احتياجات العميل ومرحلته، مع خطة قابلة للتنفيذ.",
        },
        {
          n: "03",
          t: "التنفيذ",
          d: "ننفذ الخدمات باحترافية وفق جدول زمني ومسؤولية موحدة أمام العميل.",
        },
        {
          n: "04",
          t: "المتابعة والتطوير",
          d: "نقيس النتائج ونحسّن الأداء بشكل مستمر لضمان الاستدامة والنمو.",
        },
      ],
    },
    packages: {
      kicker: "باقات الخدمات",
      title: "خيارات تعاقد استشارية تلائم مرحلة كل مؤسسة.",
      intro:
        "تُقدَّم عبر عقود استشارية مخصصة، بمنهجية تنفيذ واحدة ومسؤولية موحدة أمام العميل — دون رسوم اشتراك جاهزة.",
      headers: {
        package: "الباقة",
        audience: "الفئة المستهدفة",
        content: "المحتوى",
        duration: "المدة المقترحة",
        durationShort: "المدة",
      },
      featured: "الأكثر طلباً",
      request: "طلب هذه الباقة",
      note: "* جميع الباقات مبنية على تعاقد استشاري مخصص. الأسعار تُحدَّد بعد جلسة تشخيصية مجانية مع فريق First Advance.",
      packs: [
        {
          roman: "I",
          title: "الباقة الأساسية",
          audience: "المنشآت الصغيرة والناشئة",
          desc: "حلول أساسية لدعم الأعمال وتحسين الأداء اليومي.",
          includes: ["استشارة تشخيصية", "دعم إداري أساسي", "تحسين عمليات مركّزة"],
          duration: "٣ أشهر",
        },
        {
          roman: "II",
          title: "الباقة المتقدمة",
          audience: "المؤسسات المتنامية",
          desc: "حلول تشغيلية وإدارية متكاملة للمؤسسات المتنامية.",
          includes: ["تخطيط استراتيجي", "إدارة عمليات مستمرة", "متابعة أداء دورية"],
          duration: "٦ أشهر",
          featured: true,
        },
        {
          roman: "III",
          title: "الباقة الاحترافية",
          audience: "المؤسسات الكبرى والمشاريع الاستراتيجية",
          desc: "حلول شاملة وإدارة متقدمة للمؤسسات الكبرى والمشاريع الاستراتيجية.",
          includes: ["إدارة متكاملة (أعمال · تشغيل · عقار)", "فريق مخصص", "حوكمة ومتابعة تنفيذية"],
          duration: "١٢ شهراً+",
        },
      ],
    },
    contact: {
      imageAlt: "أفق جدة عند الغروب على الكورنيش",
      imageLabel: "لنبدأ الآن",
      title: "لنبدأ رحلة نجاح",
      titleAccent: "جديدة.",
      kicker: "تواصل معنا",
      intro:
        "سواء كنت تبحث عن تطوير أعمالك، أو تحسين عملياتك التشغيلية، أو حلول عقارية متكاملة — فريق First Advance مستعد لبناء الحل المناسب لأهدافك.",
      labels: {
        whatsapp: "واتساب",
        email: "البريد الإلكتروني",
        phone: "اتصال مباشر",
        location: "المقر",
      },
      whatsappCta: "محادثة عبر واتساب",
      emailCta: "أرسل رسالة",
    },
    footer: {
      desc: "مؤسسة سعودية متخصصة في حلول الأعمال، الخدمات التشغيلية والخدمات العقارية، تجمع الخبرة والتنفيذ الاحترافي تحت منظومة واحدة.",
      linksTitle: "روابط",
      serviceTitle: "خدماتنا",
      contactTitle: "تواصل معنا",
      home: "الرئيسية",
      copyright: "جميع الحقوق محفوظة.",
    },
  },
  en: isolateEnglishCopy({
    location: "Jeddah, Kingdom of Saudi Arabia",
    nav: {
      links: [
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#why", label: "Why Us" },
        { href: "#industries", label: "Sectors" },
        { href: "#process", label: "Approach" },
        { href: "#packages", label: "Packages" },
      ],
      cta: "Request Consultation",
      languageLabel: "Language",
      languageAria: "Change language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      title: "Integrated Business Solutions",
      subtitlePrefix: "Building ",
      subtitleHighlight: "growth",
      subtitleSuffix: " and managing success.",
      body: "A Saudi firm specialized in business solutions, operational services, and real estate services, helping organizations and entrepreneurs build more efficient and sustainable systems.",
      primaryCta: "Start With Us",
      secondaryCta: "Explore Services",
      ledger: [
        {
          k: "01",
          t: "Business Solutions",
          d: "Consulting, business development, and administrative support.",
        },
        {
          k: "02",
          t: "Operational Services",
          d: "Operations management and performance improvement.",
        },
        {
          k: "03",
          t: "Real Estate Services",
          d: "Asset management and real estate investment support.",
        },
      ],
    },
    intro: {
      lead: "We believe real success starts with sound planning, effective management,",
      muted: " and professional execution. ",
      tail: "That is why we bring business, operations, and real estate under one system for one client.",
    },
    about: {
      kicker: "About Us",
      title:
        "Integrated solutions that bring business, operations, and real estate into one system.",
      paragraphs: [
        "First Advance specializes in integrated business solutions, combining administrative expertise, operational capability, and real estate services under one coordinated structure.",
        "We develop business environments, improve operational efficiency, and deliver practical solutions that help clients achieve growth, stability, and sustainability.",
      ],
      stats: [
        { n: "03", t: "Integrated Practices" },
        { n: "06", t: "Target Sectors" },
        { n: "1:1", t: "Unified Responsibility" },
      ],
      imageAlt: "Executive boardroom overlooking Riyadh",
      badgeLabel: "Founded in Saudi Arabia",
      badgeText: "A Saudi consulting firm for integrated business solutions.",
    },
    principles: {
      kicker: "Our Principles",
      title: "Clear vision, practical mission, and an approach built around results.",
      visionLabel: "Our Vision",
      vision:
        "To be the first partner for organizations seeking business development, higher operational efficiency, and integrated solutions that create sustainable value.",
      missionLabel: "Our Mission",
      mission:
        "To provide professional services grounded in quality, innovation, and practical expertise, building long-term partnerships with clients and delivering measurable outcomes.",
    },
    services: {
      kicker: "Our Services",
      title:
        "Three integrated practices, delivered separately or together with unified responsibility.",
      intro:
        "We use one delivery methodology for the client, supported by specialized teams for each practice.",
      cards: [
        {
          n: "01",
          label: "Practice 01",
          title: "Business Solutions",
          desc: "Consulting, development, and planning to build more efficient businesses, with integrated administrative support that strengthens organizational performance.",
          items: [
            "Business Consulting",
            "Business Development",
            "Administrative Support",
            "Process Improvement",
            "Strategic Planning",
          ],
          alt: "Saudi corporate headquarters tower",
        },
        {
          n: "02",
          label: "Practice 02",
          title: "Operational Services",
          desc: "Disciplined operations management, project coordination, continuous performance improvement, and day-to-day operational support.",
          items: [
            "Operations Management",
            "Project Coordination",
            "Performance Improvement",
            "Process Development",
            "Operational Support",
          ],
          alt: "Operations control room",
        },
        {
          n: "03",
          label: "Practice 03",
          title: "Real Estate Services",
          desc: "Professional property and asset management, coordination of real estate investment opportunities, and integrated solutions for developers and owners.",
          items: [
            "Property Management",
            "Real Estate Services",
            "Asset Support",
            "Investment Coordination",
            "Integrated Real Estate Solutions",
          ],
          alt: "Mixed-use commercial real estate development",
        },
      ],
    },
    why: {
      kicker: "Why First Advance",
      title: "A trusted choice",
      titleAccent: "for business, operations, and real estate management.",
      quote:
        "We build long-term relationships with our clients, and measure our success by theirs, not by the size of our projects.",
      items: [
        "Practical expertise in business development, management, and operations.",
        "Integrated solutions under one roof.",
        "High-quality execution and professional standards.",
        "Flexible solutions shaped around each client’s needs.",
        "Long-term partnerships built on trust and results.",
        "A clear focus on sustainability and real growth.",
      ],
    },
    industries: {
      kicker: "Sectors",
      title: "The sectors we serve.",
      intro:
        "We work with organizations across multiple sectors, adapting solutions to each activity, business model, and stage of growth.",
      sectors: [
        { name: "Corporate Sector", tag: "Corporate Tower" },
        { name: "Real Estate Sector", tag: "Commercial Development" },
        { name: "Investment Sector", tag: "Financial District · KAFD" },
        { name: "Commercial Sector", tag: "Retail & Commercial" },
        { name: "Services Sector", tag: "Infrastructure" },
        { name: "Entrepreneurs and Startups", tag: "Modern Office Campus" },
      ],
    },
    process: {
      kicker: "Our Approach",
      title: "From understanding to execution to continuous development.",
      intro:
        "A unified four-stage methodology governs every engagement, regardless of its size or sector.",
      steps: [
        {
          n: "01",
          t: "Needs Assessment",
          d: "We understand the nature of the business, its goals, and its challenges, then build a clear diagnosis before making any recommendation.",
        },
        {
          n: "02",
          t: "Solution Design",
          d: "We design practical solutions that fit the client’s needs and stage, supported by an actionable plan.",
        },
        {
          n: "03",
          t: "Execution",
          d: "We deliver services professionally according to a clear timeline and one accountable responsibility model.",
        },
        {
          n: "04",
          t: "Follow-up and Development",
          d: "We measure results and improve performance continuously to support sustainability and growth.",
        },
      ],
    },
    packages: {
      kicker: "Service Packages",
      title: "Consulting engagement options aligned with each organization’s stage.",
      intro:
        "Delivered through tailored consulting agreements, one execution methodology, and unified responsibility before the client, without preset subscription fees.",
      headers: {
        package: "Package",
        audience: "Target Audience",
        content: "Scope",
        duration: "Suggested Duration",
        durationShort: "Duration",
      },
      featured: "Most Requested",
      request: "Request This Package",
      note: "* All packages are based on tailored consulting engagements. Pricing is defined after a free diagnostic session with the First Advance team.",
      packs: [
        {
          roman: "I",
          title: "Essential Package",
          audience: "Small and emerging businesses",
          desc: "Core solutions to support the business and improve day-to-day performance.",
          includes: [
            "Diagnostic consultation",
            "Basic administrative support",
            "Focused process improvement",
          ],
          duration: "3 months",
        },
        {
          roman: "II",
          title: "Advanced Package",
          audience: "Growing organizations",
          desc: "Integrated operational and administrative solutions for growing organizations.",
          includes: [
            "Strategic planning",
            "Ongoing operations management",
            "Periodic performance follow-up",
          ],
          duration: "6 months",
          featured: true,
        },
        {
          roman: "III",
          title: "Professional Package",
          audience: "Large organizations and strategic projects",
          desc: "Comprehensive solutions and advanced management for large organizations and strategic projects.",
          includes: [
            "Integrated management (business · operations · real estate)",
            "Dedicated team",
            "Governance and executive follow-up",
          ],
          duration: "12+ months",
        },
      ],
    },
    contact: {
      imageAlt: "Jeddah skyline at sunset along the Corniche",
      imageLabel: "Let’s Begin",
      title: "Let’s start a new",
      titleAccent: "success journey.",
      kicker: "Contact Us",
      intro:
        "Whether you are developing your business, improving operational performance, or seeking integrated real estate solutions, the First Advance team is ready to build the right solution for your goals.",
      labels: {
        whatsapp: "WhatsApp",
        email: "Email",
        phone: "Direct Call",
        location: "Head Office",
      },
      whatsappCta: "Chat on WhatsApp",
      emailCta: "Send an Email",
    },
    footer: {
      desc: "A Saudi firm specialized in business solutions, operational services, and real estate services, combining expertise and professional execution under one integrated system.",
      linksTitle: "Links",
      serviceTitle: "Services",
      contactTitle: "Contact Us",
      home: "Home",
      copyright: "All rights reserved.",
    },
  }),
} as const;

type Copy = (typeof COPY)[Language];

function Index() {
  const [language, setLanguage] = useState<Language>("ar");
  const t = COPY[language];

  return (
    <main
      dir="rtl"
      lang={language}
      className="bg-canvas text-ink font-sans overflow-x-hidden antialiased"
    >
      <Nav t={t} language={language} setLanguage={setLanguage} />
      <Hero t={t} />
      <Intro t={t} />
      <About t={t} />
      <Principles t={t} />
      <ServicesShowcase t={t} />
      <WhyUs t={t} />
      <Industries t={t} />
      <Process t={t} />
      <Packages t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </main>
  );
}

/* ─── NAV ──────────────────────────────────────────────────── */
function Nav({
  t,
  language,
  setLanguage,
}: {
  t: Copy;
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const links = t.nav.links;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-navy-deep/85 backdrop-blur-xl border-b border-paper/10" />
      <div className="relative container-x flex h-[4.5rem] items-center justify-between text-paper md:h-[5.5rem] lg:h-24">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={LOGO}
            alt="First Advance"
            className="w-[132px] sm:w-[142px] lg:w-[180px] h-auto object-contain drop-shadow-[0_8px_22px_rgba(0,0,0,0.38)]"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-[13px] text-paper/85">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent-gold transition">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitch
            language={language}
            setLanguage={setLanguage}
            ariaLabel={t.nav.languageAria}
          />
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 border border-accent-gold text-accent-gold px-4 py-2 text-[12px] hover:bg-accent-gold hover:text-navy-deep transition"
          >
            {t.nav.cta}
          </a>
        </div>
        <button
          type="button"
          className="lg:hidden inline-flex h-12 w-12 items-center justify-center border border-paper/20 text-paper hover:border-accent-gold hover:text-accent-gold transition md:h-11 md:w-11"
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`lg:hidden absolute inset-x-3 top-[4.5rem] max-h-[calc(100svh-5.25rem)] overflow-y-auto border border-paper/10 bg-navy-deep/96 shadow-[0_22px_70px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl text-paper transition md:inset-x-4 md:top-[5.5rem] ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="grid divide-y divide-paper/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-[3.25rem] px-5 py-3.5 text-[14px] hover:bg-paper/[0.04] hover:text-accent-gold transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="min-h-[3.25rem] px-5 py-3.5 text-[14px] text-accent-gold hover:bg-paper/[0.04] transition"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.cta}
          </a>
          <div className="min-h-[3.5rem] px-5 py-3.5 flex items-center justify-between gap-4">
            <span className="text-[13px] text-paper/65">{t.nav.languageLabel}</span>
            <LanguageSwitch
              language={language}
              setLanguage={setLanguage}
              ariaLabel={t.nav.languageAria}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

function LanguageSwitch({
  language,
  setLanguage,
  ariaLabel,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
  ariaLabel: string;
}) {
  return (
    <div
      className="inline-flex h-12 w-[112px] items-center border border-paper/20 text-[11px] font-semibold text-paper/70 md:h-12 md:w-[112px] lg:h-9 lg:w-[86px]"
      role="group"
      aria-label={ariaLabel}
    >
      {(["en", "ar"] as const).map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={language === option}
          className={`h-full w-1/2 transition ${
            language === option ? "bg-accent-gold text-navy-deep" : "hover:text-accent-gold"
          }`}
          onClick={() => setLanguage(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

/* ─── HERO — full-bleed Riyadh skyline ─────────────────────── */
function Hero({ t }: { t: Copy }) {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-navy-deep text-paper md:min-h-screen"
    >
      {/* Background image */}
      <img
        src={heroKafd}
        alt="Riyadh skyline — Kingdom Centre and KAFD towers at dusk"
        loading="eager"
        className="absolute inset-0 w-full h-full object-cover object-[58%_center] md:object-center"
      />
      {/* Forest-green cinematic overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.14 0.028 168 / 0.75) 0%, oklch(0.16 0.030 168 / 0.65) 45%, oklch(0.12 0.028 168 / 0.92) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.10_0.028_168/0.55)_100%)]" />

      {/* Centered content */}
      <div className="relative z-10 min-h-[calc(100svh-4.5rem)] md:min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24 pb-12 md:pb-40">
        <img
          src={LOGO}
          alt="First Advance"
          loading="eager"
          className="w-[142px] sm:w-[170px] md:w-[215px] h-auto mb-6 md:mb-10 object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.58)]"
        />

        <div className="flex items-center justify-center gap-3 text-accent-gold text-[10px] md:text-[11px] mb-5 md:mb-8 max-w-full">
          <span className="hidden sm:block w-10 h-px bg-accent-gold" />
          <span>{t.location}</span>
          <span className="hidden sm:block w-10 h-px bg-accent-gold" />
        </div>

        <h1 className="font-semibold leading-[1.14] md:leading-[1.2] text-[clamp(1.88rem,9vw,2.55rem)] md:text-[clamp(2.05rem,5vw,4.25rem)] max-w-4xl drop-shadow-[0_4px_28px_rgba(0,0,0,0.5)]">
          {t.hero.title}
          <span className="block mt-2.5 md:mt-4 text-paper/85 font-normal text-[clamp(1.12rem,5.8vw,1.45rem)] md:text-[clamp(1.28rem,3vw,2.5rem)]">
            <bdi dir="auto">
              {t.hero.subtitlePrefix}
              <span className="text-accent-gold font-semibold">{t.hero.subtitleHighlight}</span>
              {t.hero.subtitleSuffix}
            </bdi>
          </span>
        </h1>

        <p className="mt-6 md:mt-10 text-[14px] md:text-[16px] leading-[1.85] md:leading-[2] text-paper/84 max-w-[34rem] md:max-w-2xl">
          {t.hero.body}
        </p>

        <div className="mt-7 md:mt-12 flex flex-col sm:flex-row w-full max-w-[342px] sm:max-w-none sm:w-auto gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-[3.25rem] md:min-h-12 items-center justify-center gap-3 bg-accent-gold text-navy-deep px-8 py-4 text-[13px] font-semibold hover:brightness-95 transition"
          >
            {t.hero.primaryCta} <ArrowUpLeft className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex min-h-[3.25rem] md:min-h-12 items-center justify-center gap-3 border border-paper/35 text-paper px-8 py-4 text-[13px] font-medium hover:bg-paper/10 backdrop-blur-sm transition"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>

      {/* Capabilities ledger */}
      <div className="relative md:absolute md:bottom-0 md:inset-x-0 border-t border-paper/15 bg-[oklch(0.12_0.028_168/0.72)] backdrop-blur-md z-10">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-paper/10">
          {t.hero.ledger.map((c) => (
            <a
              key={c.k}
              href="#services"
              className="px-5 py-3.5 md:px-10 md:py-6 flex items-center gap-4 md:gap-6 group hover:bg-paper/[0.05] transition"
            >
              <span className="text-[11px] text-accent-gold">{c.k}</span>
              <div className="flex-1 text-right">
                <div className="text-paper font-semibold text-[14px] md:text-[14.5px]">{c.t}</div>
                <div className="mt-0.5 md:mt-1 text-[12px] leading-[1.55] text-paper/65">{c.d}</div>
              </div>
              <ArrowUpLeft className="w-4 h-4 text-paper/40 group-hover:text-accent-gold transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── INTRO — quiet editorial preface ──────────────────────── */
function Intro({ t }: { t: Copy }) {
  return (
    <section className="bg-canvas border-b border-rule">
      <div className="container-x py-12 md:py-28 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-2 hidden md:flex items-center">
          <span className="block h-px w-full max-w-24 bg-accent-gold/55" />
        </div>
        <p className="md:col-span-10 font-serif text-[clamp(1.28rem,6.4vw,1.55rem)] md:text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.62] md:leading-[1.55] text-navy-deep">
          {t.intro.lead}
          <span className="text-muted-ink">{t.intro.muted}</span>
          {t.intro.tail}
        </p>
      </div>
    </section>
  );
}

/* ─── ABOUT — luxury boardroom ─────────────────────────────── */
function About({ t }: { t: Copy }) {
  return (
    <section id="about" className="relative bg-stone overflow-hidden">
      <div className="container-x py-12 md:py-32 grid md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-6 md:pt-10 relative z-10">
          <SectionKicker label={t.about.kicker} />
          <h2 className="mt-4 md:mt-5 text-[clamp(1.48rem,7vw,1.9rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-navy-deep">
            {t.about.title}
          </h2>
          <div className="mt-6 md:mt-8 space-y-4 md:space-y-5 text-[14.5px] md:text-[15.5px] leading-[1.9] md:leading-[2] text-ink/80 max-w-lg">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 md:mt-10 grid grid-cols-3 gap-4 md:gap-6 max-w-md border-t border-rule pt-6 md:pt-8">
            {t.about.stats.map((stat) => (
              <Stat key={stat.n} n={stat.n} t={stat.t} />
            ))}
          </div>
        </div>

        <div className="md:col-span-6 relative">
          <div className="relative h-[315px] sm:h-[420px] md:h-[720px] overflow-hidden">
            <img
              src={boardroom}
              alt={t.about.imageAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-[48%_center] md:object-center"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-navy-deep text-paper px-5 md:px-7 py-4 md:py-6 max-w-[285px] md:max-w-[300px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            <div className="text-[10px] text-accent-gold mb-2">{t.about.badgeLabel}</div>
            <div className="text-[13px] md:text-[13.5px] leading-[1.7]">{t.about.badgeText}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, t }: { n: string; t: string }) {
  return (
    <div>
      <div className="font-serif text-[1.7rem] md:text-[2rem] leading-none text-navy-deep">{n}</div>
      <div className="mt-2 text-[11px] md:text-[11.5px] text-muted-ink leading-snug">{t}</div>
    </div>
  );
}

/* ─── PRINCIPLES — Vision/Mission on dark forest band ─────── */
function Principles({ t }: { t: Copy }) {
  return (
    <section className="relative bg-navy-deep text-paper overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-20">
        <img
          src={processBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep" />

      <div className="relative container-x py-12 md:py-32">
        <div className="max-w-2xl">
          <SectionKicker label={t.principles.kicker} light />
          <h2 className="mt-4 text-[clamp(1.45rem,6.8vw,1.85rem)] md:text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.35] md:leading-[1.4] font-semibold text-paper">
            {t.principles.title}
          </h2>
        </div>

        <div className="mt-8 md:mt-16 grid md:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
          <div className="bg-navy-deep p-6 md:p-12 relative">
            <div className="absolute top-5 left-5 md:top-6 md:left-6 font-serif text-[4rem] md:text-[5rem] leading-none text-accent-gold/25 select-none">
              I
            </div>
            <div className="text-accent-gold text-[11px] mb-5 md:mb-6">
              {t.principles.visionLabel}
            </div>
            <p className="text-[clamp(1rem,4.8vw,1.12rem)] md:text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.78] md:leading-[1.85] text-paper max-w-md">
              {t.principles.vision}
            </p>
          </div>
          <div className="bg-navy-deep p-6 md:p-12 relative">
            <div className="absolute top-5 left-5 md:top-6 md:left-6 font-serif text-[4rem] md:text-[5rem] leading-none text-accent-gold/25 select-none">
              II
            </div>
            <div className="text-accent-gold text-[11px] mb-5 md:mb-6">
              {t.principles.missionLabel}
            </div>
            <p className="text-[clamp(1rem,4.8vw,1.12rem)] md:text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.78] md:leading-[1.85] text-paper max-w-md">
              {t.principles.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES — three chapters with real architecture ─────── */
function ServicesShowcase({ t }: { t: Copy }) {
  const serviceImages = [
    {
      img: corporateTower,
    },
    {
      img: operationsCenter,
    },
    {
      img: realEstate,
    },
  ];
  const services = t.services.cards.map((service, index) => ({
    ...service,
    img: serviceImages[index].img,
  }));

  return (
    <section id="services" className="bg-canvas border-t border-rule">
      <div className="container-x pt-12 md:pt-32 pb-7 md:pb-10">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="md:col-span-7">
            <SectionKicker label={t.services.kicker} />
            <h2 className="mt-4 text-[clamp(1.48rem,7vw,1.9rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-navy-deep">
              {t.services.title}
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-[14px] md:text-[14.5px] leading-[1.85] md:leading-[1.95] text-ink/70">
            {t.services.intro}
          </p>
        </div>
      </div>

      <div className="container-x pb-12 md:pb-28 space-y-4 md:space-y-3">
        {services.map((s) => (
          <article
            key={s.n}
            id={`service-${s.n}`}
            className="group relative grid md:grid-cols-12 gap-0 bg-paper border border-rule overflow-hidden"
          >
            <div className="md:col-span-1 flex md:flex-col items-center justify-between md:justify-start py-3.5 md:pt-8 md:pb-8 px-5 md:px-4 bg-navy-deep text-paper">
              <span className="text-[13px] text-accent-gold">{s.n}</span>
              <span className="hidden md:block flex-1 w-px bg-paper/15 my-6" />
            </div>
            <div className="md:col-span-5 p-6 md:p-12 md:pl-10 flex flex-col justify-between">
              <div>
                <div className="text-[10.5px] md:text-[11px] text-muted-ink mb-2.5 md:mb-3">
                  {s.label}
                </div>
                <h3 className="text-[clamp(1.32rem,6vw,1.65rem)] md:text-[clamp(1.4rem,2vw,1.8rem)] font-semibold text-navy-deep leading-[1.28] md:leading-[1.3] mb-4 md:mb-5">
                  {s.title}
                </h3>
                <p className="text-[14px] md:text-[14.5px] leading-[1.85] md:leading-[2] text-ink/75 max-w-md">
                  {s.desc}
                </p>
              </div>
              <ul className="mt-7 md:mt-10 grid grid-cols-1 gap-0 border-t border-rule">
                {s.items.map((it, j) => (
                  <li
                    key={it}
                    className="flex items-baseline gap-3 md:gap-4 py-2.5 md:py-3 border-b border-rule text-[13.5px] md:text-[14px] text-navy-deep"
                  >
                    <span className="text-[11px] text-accent-gold w-8">0{j + 1}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 relative min-h-[245px] sm:min-h-[320px] md:min-h-[560px] overflow-hidden">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-[52%_center] md:object-center transition-transform duration-[1400ms] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/15 to-transparent" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ─── WHY US — editorial manifesto on warm stone ──────────── */
function WhyUs({ t }: { t: Copy }) {
  const items = t.why.items;
  return (
    <section id="why" className="bg-stone border-t border-rule">
      <div className="container-x py-12 md:py-32 grid md:grid-cols-12 gap-8 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-24 self-start">
          <SectionKicker label={t.why.kicker} />
          <h2 className="mt-4 md:mt-5 text-[clamp(1.5rem,7vw,1.95rem)] md:text-[clamp(1.7rem,2.6vw,2.2rem)] leading-[1.28] md:leading-[1.3] font-semibold text-navy-deep">
            {t.why.title}
            <span className="block text-accent-gold">{t.why.titleAccent}</span>
          </h2>
          <div className="mt-6 md:mt-8 border-t border-rule-strong pt-5 md:pt-6 max-w-md">
            <p className="font-serif text-[15.5px] md:text-[17px] leading-[1.8] md:leading-[1.85] text-ink/85 italic">
              {t.why.quote}
            </p>
          </div>
        </div>
        <ol className="md:col-span-7 border-t border-rule-strong">
          {items.map((t, i) => (
            <li
              key={t}
              className="grid grid-cols-12 gap-3 md:gap-4 items-baseline py-[1.125rem] md:py-6 border-b border-rule"
            >
              <span className="col-span-2 font-serif text-[1.65rem] md:text-[2rem] leading-none text-accent-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="col-span-10 text-[14.5px] md:text-[16.5px] leading-[1.7] md:leading-[1.75] text-navy-deep font-medium">
                {t}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─── INDUSTRIES — Saudi architecture grid ─────────────────── */
function Industries({ t }: { t: Copy }) {
  const sectorImages = [
    sectorBusiness,
    sectorRealEstate,
    sectorInvestment,
    sectorCommercial,
    sectorServices,
    sectorEntrepreneurs,
  ];
  const sectors = t.industries.sectors.map((sector, index) => ({
    ...sector,
    img: sectorImages[index],
  }));
  return (
    <section
      id="industries"
      className="bg-navy-deep text-paper py-12 md:py-32 border-t border-paper/10"
    >
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-9 md:mb-14">
          <div className="md:col-span-7">
            <SectionKicker label={t.industries.kicker} light />
            <h2 className="mt-4 text-[clamp(1.48rem,7vw,1.9rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-paper">
              {t.industries.title}
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-[14px] md:text-[14.5px] leading-[1.85] md:leading-[1.95] text-paper/65">
            {t.industries.intro}
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {sectors.map((s, i) => (
            <article
              key={s.name}
              className="relative aspect-[4/3] min-h-[220px] sm:min-h-[240px] md:min-h-[260px] overflow-hidden group border border-paper/10"
            >
              <img
                src={s.img}
                alt={s.tag}
                className="absolute inset-0 w-full h-full object-cover object-[50%_center] transition-transform duration-[1400ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-accent-gold/60 transition" />
              <div className="relative h-full flex flex-col justify-between p-5 md:p-7">
                <span className="text-[11px] text-accent-gold">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
                <div>
                  <div className="text-[15.5px] md:text-[18px] font-semibold leading-tight text-paper">
                    {s.name}
                  </div>
                  <div className="mt-1.5 text-[12px] text-paper/60">{s.tag}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROCESS — subtle architectural background ────────────── */
function Process({ t }: { t: Copy }) {
  const steps = t.process.steps;
  return (
    <section id="process" className="relative bg-canvas border-t border-rule overflow-hidden">
      {/* subtle architectural detail — very faint */}
      <div aria-hidden className="absolute inset-0 opacity-[0.08]">
        <img
          src={processBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-canvas via-canvas/85 to-canvas"
      />

      <div className="relative container-x py-12 md:py-32">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-8 md:mb-16">
          <div className="md:col-span-6">
            <SectionKicker label={t.process.kicker} />
            <h2 className="mt-4 text-[clamp(1.48rem,7vw,1.9rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-navy-deep">
              {t.process.title}
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-[14px] md:text-[14.5px] leading-[1.85] md:leading-[1.95] text-ink/70">
            {t.process.intro}
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute right-1/2 top-0 bottom-0 w-px bg-rule"
          />
          <ol className="space-y-0 max-md:border-r max-md:border-rule max-md:pr-5">
            {steps.map((s, i) => {
              const rightSide = i % 2 === 0;
              return (
                <li key={s.n} className="relative grid md:grid-cols-2 items-stretch">
                  <span
                    aria-hidden
                    className="md:hidden absolute right-[-1.42rem] top-7 w-2.5 h-2.5 bg-accent-gold ring-4 ring-canvas"
                  />
                  <span
                    aria-hidden
                    className="hidden md:block absolute right-1/2 translate-x-1/2 top-10 w-3 h-3 bg-accent-gold ring-4 ring-canvas z-10"
                  />
                  <div
                    className={`py-6 md:py-14 ${
                      rightSide ? "md:pr-16 md:col-start-1" : "md:pl-16 md:col-start-2"
                    }`}
                  >
                    <div className={`max-w-md ${rightSide ? "md:mr-auto" : ""}`} dir="rtl">
                      <div className="flex items-baseline gap-3 md:gap-4 mb-3 md:mb-4">
                        <span className="font-serif text-[2.35rem] md:text-[3rem] leading-none text-accent-gold">
                          {s.n}
                        </span>
                      </div>
                      <h3 className="text-[1.08rem] md:text-2xl font-semibold text-navy-deep mb-2.5 md:mb-3">
                        {s.t}
                      </h3>
                      <p className="text-[14px] md:text-[14.5px] leading-[1.85] md:leading-[1.95] text-ink/75">
                        {s.d}
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─── PACKAGES — dark executive comparison ledger ─────────── */
function Packages({ t }: { t: Copy }) {
  const packs = t.packages.packs;

  return (
    <section
      id="packages"
      className="relative bg-navy-deep text-paper border-t border-paper/10 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 opacity-[0.06]">
        <img
          src={processBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/95 to-navy-deep"
      />

      <div className="relative container-x py-12 md:py-32">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-9 md:mb-14">
          <div className="md:col-span-6">
            <SectionKicker label={t.packages.kicker} light />
            <h2 className="mt-4 text-[clamp(1.48rem,7vw,1.9rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-paper">
              {t.packages.title}
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-[14px] md:text-[14.5px] leading-[1.85] md:leading-[1.95] text-paper/70">
            {t.packages.intro}
          </p>
        </div>

        <div className="hidden md:grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-0 border-t-2 border-accent-gold/70 text-[11px] text-paper/50">
          <div className="py-4">{t.packages.headers.package}</div>
          <div className="py-4">{t.packages.headers.audience}</div>
          <div className="py-4">{t.packages.headers.content}</div>
          <div className="py-4">{t.packages.headers.duration}</div>
        </div>

        <div className="border-t border-paper/15 md:border-t-0 max-md:space-y-3 max-md:border-t-0">
          {packs.map((p) => (
            <div
              key={p.roman}
              className={`grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_1fr] gap-4 md:gap-8 py-6 md:py-10 max-md:px-5 border-b border-paper/10 max-md:border max-md:border-paper/10 ${
                p.featured ? "bg-paper/[0.04]" : ""
              }`}
            >
              <div className="md:pr-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-[2.45rem] md:text-[3rem] leading-none text-accent-gold">
                    {p.roman}
                  </span>
                  <div>
                    {p.featured && (
                      <div className="text-[10px] text-accent-gold mb-1">{t.packages.featured}</div>
                    )}
                    <div className="text-[1.04rem] md:text-xl font-semibold text-paper">
                      {p.title}
                    </div>
                  </div>
                </div>
                <p className="mt-3 md:mt-4 text-[13px] md:text-[13.5px] leading-[1.8] md:leading-[1.85] text-paper/65">
                  {p.desc}
                </p>
              </div>
              <div className="md:pt-1">
                <div className="md:hidden text-[10px] text-accent-gold/80 mb-1.5">
                  {t.packages.headers.audience}
                </div>
                <div className="text-[13.5px] md:text-[14px] text-paper/90 leading-[1.75] md:leading-[1.8]">
                  {p.audience}
                </div>
              </div>
              <div className="md:pt-1">
                <div className="md:hidden text-[10px] text-accent-gold/80 mb-1.5">
                  {t.packages.headers.content}
                </div>
                <ul className="space-y-1.5 md:space-y-2">
                  {p.includes.map((it) => (
                    <li
                      key={it}
                      className="flex items-baseline gap-2 text-[13px] md:text-[13.5px] text-paper/80"
                    >
                      <Check className="w-3.5 h-3.5 text-accent-gold shrink-0" strokeWidth={2.5} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:pt-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="md:hidden text-[10px] text-accent-gold/80 mb-1.5">
                    {t.packages.headers.durationShort}
                  </div>
                  <div className="text-[13.5px] md:text-[14px] text-paper/90">{p.duration}</div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 text-[13px] font-semibold text-paper border-b border-paper hover:text-accent-gold hover:border-accent-gold transition self-start max-md:w-full max-md:border max-md:border-paper/25 max-md:px-4 max-md:py-3"
                >
                  {t.packages.request} <ArrowUpLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 md:mt-8 text-[12px] md:text-[12.5px] text-paper/50 max-w-2xl leading-[1.85] md:leading-[1.9]">
          {t.packages.note}
        </p>
      </div>
    </section>
  );
}

/* ─── CONTACT — sunset skyline ─────────────────────────────── */
function Contact({ t }: { t: Copy }) {
  return (
    <section id="contact" className="relative bg-navy-deep text-paper overflow-hidden">
      <div className="grid lg:grid-cols-12 min-h-[80vh]">
        <div className="relative lg:col-span-6 min-h-[300px] sm:min-h-[380px] lg:min-h-0">
          <img
            src={ctaSunset}
            alt={t.contact.imageAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-[50%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/86 via-navy-deep/35 to-transparent lg:bg-gradient-to-l lg:from-navy-deep/80 lg:via-navy-deep/30 lg:to-transparent" />
          <div className="absolute bottom-7 right-5 left-5 md:bottom-10 md:right-10 md:left-auto max-w-md">
            <div className="text-accent-gold text-[11px] mb-3 md:mb-4">{t.contact.imageLabel}</div>
            <h2 className="text-[clamp(1.55rem,7.2vw,2.05rem)] md:text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.18] md:leading-[1.2]">
              {t.contact.title}
              <span className="block text-accent-gold">{t.contact.titleAccent}</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-6 bg-navy px-5 md:px-14 py-12 lg:py-20 flex flex-col justify-center">
          <SectionKicker label={t.contact.kicker} light />
          <p className="mt-4 md:mt-5 max-w-md text-[14px] md:text-[15px] leading-[1.85] md:leading-[2] text-paper/75">
            {t.contact.intro}
          </p>

          <div className="mt-7 md:mt-10 divide-y divide-paper/10 border-y border-paper/10">
            <ContactRow
              icon={<MessageCircle className="w-4 h-4" />}
              label={t.contact.labels.whatsapp}
              value={WHATSAPP_DISPLAY}
              href={WHATSAPP_LINK}
            />
            <ContactRow
              icon={<Mail className="w-4 h-4" />}
              label={t.contact.labels.email}
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactRow
              icon={<Phone className="w-4 h-4" />}
              label={t.contact.labels.phone}
              value={WHATSAPP_DISPLAY}
              href={`tel:${WHATSAPP_DISPLAY.replace(/\s/g, "")}`}
            />
            <ContactRow
              icon={<MapPin className="w-4 h-4" />}
              label={t.contact.labels.location}
              value={t.location}
              href="#"
            />
          </div>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[3.25rem] md:min-h-12 w-full sm:w-auto items-center justify-center gap-3 bg-accent-gold text-navy-deep px-7 py-3.5 text-[13px] font-semibold hover:brightness-95 transition"
            >
              {t.contact.whatsappCta} <ArrowUpLeft className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-[3.25rem] md:min-h-12 w-full sm:w-auto items-center justify-center gap-3 border border-paper/25 text-paper px-7 py-3.5 text-[13px] font-medium hover:bg-paper/10 transition"
            >
              {t.contact.emailCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  const valueDirection = /[\u0600-\u06FF]/.test(value) ? "rtl" : "ltr";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="grid max-md:min-h-[4.25rem] grid-cols-[1.5rem_1fr_1rem] sm:grid-cols-12 gap-x-3 sm:gap-x-4 gap-y-1 items-center py-4 md:py-5 group"
    >
      <div className="row-span-2 sm:row-span-1 sm:col-span-1 text-accent-gold">{icon}</div>
      <div className="col-start-2 sm:col-start-auto sm:col-span-4 text-[11px] text-paper/50">
        {label}
      </div>
      <div
        className="col-start-2 sm:col-start-auto sm:col-span-6 min-w-0 break-words text-paper font-semibold text-[14px] md:text-[15px] group-hover:text-accent-gold transition-colors"
        dir={valueDirection}
      >
        {value}
      </div>
      <div className="row-span-2 col-start-3 row-start-1 sm:row-span-1 sm:col-start-auto sm:col-span-1 text-paper/40 group-hover:text-accent-gold transition-colors text-left">
        <ArrowUpLeft className="w-4 h-4 inline" />
      </div>
    </a>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────── */
function Footer({ t }: { t: Copy }) {
  return (
    <footer className="bg-[oklch(0.15_0.025_168)] text-paper/75 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-paper/10">
      <div className="container-x grid md:grid-cols-12 gap-8 md:gap-10 pb-10 md:pb-14 border-b border-paper/10">
        <div className="md:col-span-4">
          <div className="flex items-center">
            <img
              src={LOGO}
              alt="First Advance"
              className="w-[142px] md:w-[205px] h-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.32)]"
            />
          </div>
          <p className="mt-5 md:mt-6 text-[13px] md:text-[13.5px] leading-[1.85] md:leading-[1.95] text-paper/55 max-w-sm">
            {t.footer.desc}
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="text-[10px] text-accent-gold mb-4">{t.footer.linksTitle}</div>
          <ul className="space-y-1 md:space-y-2.5 text-[13.5px]">
            <li>
              <a
                href="#top"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.footer.home}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.nav.links[0].label}
              </a>
            </li>
            <li>
              <a
                href="#why"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.nav.links[2].label}
              </a>
            </li>
            <li>
              <a
                href="#industries"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.nav.links[3].label}
              </a>
            </li>
            <li>
              <a
                href="#process"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.nav.links[4].label}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] text-accent-gold mb-4">{t.footer.serviceTitle}</div>
          <ul className="space-y-1 md:space-y-2.5 text-[13.5px]">
            <li>
              <a
                href="#service-01"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.services.cards[0].title}
              </a>
            </li>
            <li>
              <a
                href="#service-02"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.services.cards[1].title}
              </a>
            </li>
            <li>
              <a
                href="#service-03"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.services.cards[2].title}
              </a>
            </li>
            <li>
              <a
                href="#packages"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.packages.kicker}
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] text-accent-gold mb-4">{t.footer.contactTitle}</div>
          <ul className="space-y-1 md:space-y-2.5 text-[13.5px]">
            <li className="flex max-lg:min-h-11 gap-2 items-center">
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              <span dir="ltr">{WHATSAPP_DISPLAY}</span>
            </li>
            <li className="flex max-lg:min-h-11 gap-2 items-center">
              <Mail className="w-3.5 h-3.5 text-accent-gold" />
              <span dir="ltr">{EMAIL}</span>
            </li>
            <li className="flex max-lg:min-h-11 gap-2 items-center">
              <MapPin className="w-3.5 h-3.5 text-accent-gold" />
              <span>{t.location}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-7 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 text-[12px] text-paper/50">
        <div>
          © {new Date().getFullYear()} First Advance. {t.footer.copyright}
        </div>
        <div>{t.location}</div>
      </div>
    </footer>
  );
}

/* ─── Shared kicker ─────────────────────────────────────── */
function SectionKicker({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2.5 md:gap-3 text-[11.5px] md:text-[12px] ${light ? "text-paper/65" : "text-muted-ink"}`}
    >
      <span className="w-8 md:w-10 h-px bg-accent-gold" />
      <span>{label}</span>
    </div>
  );
}
