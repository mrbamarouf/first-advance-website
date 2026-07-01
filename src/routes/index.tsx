import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpLeft, ArrowUpRight, Check, Mail, Menu, MessageCircle, X } from "lucide-react";
import logoImage from "@/assets/first-advance-logo-light-transparent.png";

/* Premium Saudi architecture photography */
import heroKafd from "@/assets/hero-riyadh-panorama.jpg";
import boardroom from "@/assets/plate-boardroom.jpg";
import corporateTower from "@/assets/plate-corporate-tower.jpg";
import operationsCenter from "@/assets/plate-operations.jpg";
import realEstate from "@/assets/plate-realestate.jpg";
import ctaSunset from "@/assets/cta-jeddah-sunset.jpg";
import sectorBusiness from "@/assets/sector-business.jpg";
import sectorRealEstate from "@/assets/sector-realestate.jpg";
import sectorInvestment from "@/assets/sector-investment.jpg";

const PAGE_META = {
  ar: {
    title: "First Advance، حلول أعمال متكاملة وشراكات تصنع النجاح",
    description:
      "مؤسسة المتقدم الأول لخدمات الأعمال منشأة سعودية متخصصة في تقديم حلول الأعمال والخدمات الإدارية والتشغيلية والخدمات العقارية المرخصة.",
    ogDescription: "حلول أعمال متكاملة وشراكات تصنع النجاح.",
  },
  en: {
    title: "First Advance, Integrated business solutions and partnerships that create success",
    description:
      "Al-Mutakadem Al-Awwal Business Services is a Saudi company specializing in business solutions, administrative and operational services, and licensed real estate services.",
    ogDescription: "Integrated business solutions and partnerships that create success.",
  },
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_META.ar.title },
      {
        name: "description",
        content: PAGE_META.ar.description,
      },
      { property: "og:title", content: PAGE_META.ar.title },
      {
        property: "og:description",
        content: PAGE_META.ar.ogDescription,
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

const COPY = {
  ar: {
    location: "حلول أعمال متكاملة وشراكات تصنع النجاح",
    nav: {
      links: [
        { href: "#about", label: "مقدمة" },
        { href: "#services", label: "خدماتنا" },
        { href: "#why", label: "ما يميزنا" },
        { href: "#values", label: "قيمنا" },
        { href: "#audience", label: "جمهورنا" },
        { href: "#process", label: "أسلوب العمل" },
        { href: "#packages", label: "عروضنا" },
      ],
      cta: "Whats App",
      languageLabel: "اللغة",
      languageAria: "تغيير اللغة",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    hero: {
      title: "حلول أعمال متكاملة وشراكات تصنع النجاح",
      subtitlePrefix: "",
      subtitleHighlight: "First Advance",
      subtitleSuffix: "",
      body: "مؤسسة المتقدم الأول لخدمات الأعمال هي منشأة سعودية متخصصة في تقديم حلول الأعمال والخدمات الإدارية والتشغيلية، إلى جانب تقديم الخدمات العقارية المرخصة، بهدف تمكين الأفراد وقطاع الأعمال من الوصول إلى حلول متكاملة تساهم في رفع الكفاءة وتحقيق النمو المستدام.",
      primaryCta: "Whats App",
      secondaryCta: "خدماتنا",
      ledger: [
        { k: "01", t: "القطاع العقاري", d: "الوساطة والتسويق العقاري." },
        { k: "02", t: "القطاع التشغيلي", d: "إدارة وتشغيل المشاريع." },
        { k: "03", t: "قطاع خدمات الأعمال والإدارة", d: "الاستشارات الإدارية." },
      ],
    },
    intro: {
      lead: "نحن نوفر لك الوقت والجهد. ",
      muted: "بدلًا من البحث عن - مساعد - إداري - متخصص - استشاري، ",
      tail: "لدينا كل ذلك تحت سقف واحد من الفكرة إلى التسليم.",
    },
    about: {
      kicker: "مقدمة",
      title: "مؤسسة المتقدم الأول لخدمات الأعمال",
      paragraphs: [
        "مؤسسة المتقدم الأول لخدمات الأعمال هي منشأة سعودية متخصصة في تقديم حلول الأعمال والخدمات الإدارية والتشغيلية، إلى جانب تقديم الخدمات العقارية المرخصة، بهدف تمكين الأفراد وقطاع الأعمال من الوصول إلى حلول متكاملة تساهم في رفع الكفاءة وتحقيق النمو المستدام.",
        "نعمل وفق رؤية تقوم على تقديم خدمات احترافية تجمع بين الخبرة الإدارية والتشغيلية والعقارية، من خلال فريق عمل مؤهل وشراكات استراتيجية متخصصة، بما يضمن تقديم قيمة حقيقية لعملائنا وتحقيق أعلى مستويات الجودة والموثوقية.",
        "نؤمن بأن نجاح الأعمال يبدأ من وجود شريك موثوق قادر على فهم احتياجات العملاء وتحويل التحديات إلى فرص، ولذلك نسعى إلى تقديم حلول متكاملة تدعم التطور والنمو وتحقق الاستدامة.",
      ],
      stats: [],
      imageAlt: "قاعة اجتماعات تنفيذية بإطلالة على مدينة الرياض",
    },
    principles: {
      kicker: "رؤيتنا ورسالتنا",
      title: "رؤيتنا ورسالتنا",
      visionLabel: "رؤيتنا",
      vision:
        "أن نكون الخيار الأول للخدمات الإدارية المتكاملة في المملكة وخارجها، من خلال حلول تركز على الجودة والتكنولوجيا والكفاءة.",
      missionLabel: "رسالتنا",
      mission:
        "نحن نقدم خدمات إدارية متطورة تساعد المؤسسات على تحقيق أهدافها من خلال أنظمة مرنة واحترافية عالية وتقنيات حديثة.",
    },
    services: {
      kicker: "خدماتنا",
      title: "خدماتنا",
      intro: "",
      cards: [
        {
          n: "01",
          title: "القطاع العقاري",
          desc: "",
          items: [
            "الوساطة والتسويق العقاري.",
            "الخدمات العقارية المرخصة.",
            "الاستشارات العقارية.",
            "إدارة العلاقات مع المستثمرين والعملاء.",
            "التسويق والترويج العقاري.",
            "تقديم الحلول العقارية من خلال الشراكات المتخصصة.",
          ],
          alt: "مشروع عقاري تجاري متعدد الاستخدامات",
        },
        {
          n: "02",
          title: "القطاع التشغيلي",
          desc: "",
          items: [
            "إدارة وتشغيل المشاريع.",
            "إدارة المواقع والفرق الميدانية.",
            "متابعة الأداء والتقارير التشغيلية.",
            "تطوير العمليات وتحسين الكفاءة.",
          ],
          alt: "مركز عمليات",
        },
        {
          n: "03",
          title: "قطاع خدمات الأعمال والإدارة",
          desc: "",
          items: [
            "الاستشارات الإدارية.",
            "تطوير الأعمال.",
            "إعداد السياسات والإجراءات.",
            "الهيكلة التنظيمية.",
            "إدارة الموارد البشرية.",
            "تطوير الأنظمة الإدارية.",
            "خدمات التشغيل والدعم الإداري.",
            "إدارة المشاريع.",
          ],
          alt: "برج مقر شركة سعودية",
        },
      ],
    },
    why: {
      kicker: "ما يميزنا",
      title: "ما يميزنا",
      titleAccent: "",
      quote: "نحن نوفر لك الوقت والجهد.",
      items: [
        "تكامل الخدمات.",
        "حلول إدارية وعقارية تحت سقف واحد.",
        "شراكات استراتيجية متخصصة.",
        "سرعة الاستجابة وإنجاز الأعمال.",
        "الالتزام بالأنظمة والتشريعات.",
        "مرونة في تقديم الحلول حسب احتياج العميل.",
        "فريق يمتلك خبرات تشغيلية وإدارية متنوعة.",
        "تقديم خدمات مبنية على الجودة والاحترافية.",
        "فهم احتياجات قطاع الأعمال والسوق العقاري.",
        "التركيز على بناء علاقات طويلة الأمد مع العملاء.",
      ],
    },
    values: {
      kicker: "قيمنا الأساسية",
      title: "قيمنا الأساسية",
      items: ["الاحترافية", "الابتكار", "المرونة", "الشفافية", "الالتزام", "التعاون"],
    },
    industries: {
      kicker: "جمهورنا المستهدف",
      title: "جمهورنا المستهدف",
      intro: "",
      sectors: [
        { name: "المنشآت الصغيرة", tag: "" },
        { name: "المنشآت المتوسطة", tag: "" },
        { name: "منشآت النمو", tag: "" },
      ],
    },
    process: {
      kicker: "أسلوب العمل",
      title: "أسلوب العمل",
      intro:
        "نعتمد في مؤسسة المتقدم الأول لخدمات الأعمال على منهجية عمل احترافية تضمن تقديم خدمات عالية الجودة وتحقيق أفضل النتائج لعملائنا، وذلك من خلال:",
      steps: [
        {
          n: "01",
          t: "دراسة احتياجات العميل وفهم أهدافه.",
          d: "",
        },
        {
          n: "02",
          t: "تحليل الوضع الحالي وتحديد الفرص والتحديات.",
          d: "",
        },
        {
          n: "03",
          t: "إعداد الحلول المناسبة والخطط التنفيذية.",
          d: "",
        },
        {
          n: "04",
          t: "تنفيذ الأعمال وفق معايير واضحة ومؤشرات أداء.",
          d: "",
        },
        {
          n: "05",
          t: "المتابعة المستمرة وقياس النتائج.",
          d: "",
        },
        {
          n: "06",
          t: "تطوير الحلول وتحسين الأداء بشكل مستمر.",
          d: "",
        },
      ],
      note: "ونؤمن بأن الشراكة الحقيقية مع العميل لا تنتهي عند تقديم الخدمة بل تستمر من خلال المتابعة والدعم وتحقيق النتائج المستدامة.",
    },
    packages: {
      kicker: "عروضنا",
      title: "عروضنا",
      intro: "",
      headers: {
        package: "الباقة",
        audience: "رقم الباقة",
        content: "التفاصيل",
        duration: "التواصل",
        durationShort: "التواصل",
      },
      featured: "",
      request: "Whats App",
      note: "يتم تحديد سعر الباقة المختارة بعد دراسة وتحليل المنشأة",
      packs: [
        {
          title: "باقة أساسية",
          audience: "Package No.1",
          desc: "",
          includes: [
            "ربع سنوي - سنوي",
            "الشهادات الدورية - الدعم المؤقت",
            "الحفاظ على الاستمرارية",
          ],
          duration: "",
        },
        {
          title: "باقة متقدمة",
          audience: "Package No.2",
          desc: "",
          includes: [
            "سنوي - الشهادات الدورية",
            "الدعم المستمر - المسؤولية",
            "الدعم الإداري والاقتراحات",
          ],
          duration: "",
          featured: true,
        },
        {
          title: "باقة احترافية",
          audience: "Package No.3",
          desc: "",
          includes: [
            "سنوي - تقديم المشورة التفصيلية",
            "الدعم المستمر - الخطط الاستراتيجية",
            "الدعم المالي",
          ],
          duration: "",
        },
      ],
    },
    contact: {
      imageAlt: "أفق جدة عند الغروب على الكورنيش",
      title: "شكراً لكم",
      titleAccent: "",
      kicker: "Contact Us Via",
      intro:
        "بدلًا من البحث عن - مساعد - إداري - متخصص - استشاري، لدينا كل ذلك تحت سقف واحد من الفكرة إلى التسليم.",
      labels: {
        whatsapp: "Whats App",
        email: "Our Only Email",
      },
      whatsappCta: "Whats App",
      emailCta: "Our Only Email",
    },
    footer: {
      desc: "حلول أعمال متكاملة وشراكات تصنع النجاح",
      linksTitle: "روابط",
      serviceTitle: "خدماتنا",
      contactTitle: "Contact Us Via",
      home: "الرئيسية",
      copyright: "جميع الحقوق محفوظة.",
    },
  },
  en: {
    location: "Integrated business solutions and partnerships that create success",
    nav: {
      links: [
        { href: "#about", label: "Introduction" },
        { href: "#services", label: "Services" },
        { href: "#why", label: "What Sets Us Apart" },
        { href: "#values", label: "Core Values" },
        { href: "#audience", label: "Target Audience" },
        { href: "#process", label: "Work Approach" },
        { href: "#packages", label: "Packages" },
      ],
      cta: "Whats App",
      languageLabel: "Language",
      languageAria: "Change language",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      title: "Integrated business solutions and partnerships that create success",
      subtitlePrefix: "",
      subtitleHighlight: "First Advance",
      subtitleSuffix: "",
      body: "Al-Mutakadem Al-Awwal Business Services is a Saudi company specializing in providing business solutions, administrative and operational services, and licensed real estate services. Our aim is to empower individuals and businesses by providing integrated solutions that contribute to increased efficiency and sustainable growth.",
      primaryCta: "Whats App",
      secondaryCta: "Services",
      ledger: [
        {
          k: "01",
          t: "Real estate sector",
          d: "Licensed real estate services.",
        },
        {
          k: "02",
          t: "Operational sector",
          d: "Project management and operation.",
        },
        {
          k: "03",
          t: "Business M.S.S",
          d: "Management consulting.",
        },
      ],
    },
    intro: {
      lead: "We Save Your Time And Energy. ",
      muted: "Instead of searching for an assistant, administrator, specialist, or consultant - ",
      tail: "we bring all of that under one roof, with one unified challenge: from concept to delivery",
    },
    about: {
      kicker: "Introduction",
      title: "Al-Mutakadem Al-Awwal Business Services",
      paragraphs: [
        "Al-Mutakadem Al-Awwal Business Services is a Saudi company specializing in providing business solutions, administrative and operational services, and licensed real estate services. Our aim is to empower individuals and businesses by providing integrated solutions that contribute to increased efficiency and sustainable growth.",
        "We operate according to a vision of delivering professional services that combine administrative, operational, and real estate expertise through a qualified team and specialized strategic partnerships. This ensures we deliver genuine value to our clients and achieve the highest levels of quality and reliability.",
        "We believe that business success begins with a reliable partner capable of understanding client needs and transforming challenges into opportunities. Therefore, we strive to provide integrated solutions that support development, growth, and sustainability.",
      ],
      stats: [],
      imageAlt: "Executive boardroom overlooking Riyadh",
    },
    principles: {
      kicker: "Our Vision And Mission",
      title: "Our Vision And Mission",
      visionLabel: "Our Vision",
      vision:
        "To be the leading provider of integrated administrative services in the Kingdom and beyond, through quality, technology-driven, and efficient solutions.",
      missionLabel: "Our Mission",
      mission:
        "We provide advanced administrative services that help organizations achieve their goals through flexible, highly professional systems and modern technologies.",
    },
    services: {
      kicker: "Our Services",
      title: "Our Services",
      intro: "",
      cards: [
        {
          n: "01",
          title: "Real estate sector",
          desc: "",
          items: [
            "Real estate brokerage and marketing.",
            "Licensed real estate services.",
            "Real estate consulting.",
            "Investor and client relationship management.",
            "Real estate marketing and promotion.",
            "Providing real estate solutions through specialized partnerships.",
          ],
          alt: "Mixed use commercial real estate development",
        },
        {
          n: "02",
          title: "Operational sector",
          desc: "",
          items: [
            "Project management and operation.",
            "Site and field team management.",
            "Performance monitoring and operational reporting.",
            "Process development and efficiency improvement.",
          ],
          alt: "Operations control room",
        },
        {
          n: "03",
          title: "Business M.S.S",
          desc: "",
          items: [
            "Management consulting.",
            "Business development.",
            "Policy and procedure development.",
            "Organizational structuring.",
            "Human resource management.",
            "Administrative systems development.",
            "Operational and administrative support services.",
            "Project management.",
          ],
          alt: "Saudi corporate headquarters tower",
        },
      ],
    },
    why: {
      kicker: "What Sets Us Apart",
      title: "What Sets Us Apart",
      titleAccent: "",
      quote: "We Save Your Time And Energy.",
      items: [
        "Integrated services.",
        "Administrative and real estate solutions under one roof.",
        "Specialized strategic partnerships.",
        "Rapid response and efficient work completion.",
        "Compliance with regulations and legislation.",
        "Flexible solutions tailored to client needs.",
        "A team with operational and administrative expertise.",
        "Providing services based on quality and professionalism.",
        "Understanding the needs of the business sector.",
        "Focus on building long-term client relationships.",
      ],
    },
    values: {
      kicker: "Our Core Values",
      title: "Our Core Values",
      items: [
        "Professionalism",
        "Innovation",
        "Flexibility",
        "Transparency",
        "Commitment",
        "Cooperation",
      ],
    },
    industries: {
      kicker: "Our Target Audience",
      title: "Our Target Audience",
      intro: "",
      sectors: [
        { name: "Small Businesses", tag: "" },
        { name: "Medium Businesses", tag: "" },
        { name: "Business Growth", tag: "" },
      ],
    },
    process: {
      kicker: "Work Approach",
      title: "Work Approach",
      intro:
        "At Al-Mutakadem Al-Awwal Business Services, we rely on a professional work methodology that ensures the delivery of high quality services and the achievement of optimal results for our clients. This is accomplished through:",
      steps: [
        {
          n: "01",
          t: "Studying client needs and understanding their objectives.",
          d: "",
        },
        {
          n: "02",
          t: "Analyzing the current situation and identifying opportunities and challenges.",
          d: "",
        },
        {
          n: "03",
          t: "Developing appropriate solutions and implementation plans.",
          d: "",
        },
        {
          n: "04",
          t: "Executing work according to clear standards and performance indicators.",
          d: "",
        },
        {
          n: "05",
          t: "Continuous monitoring and measurement of results.",
          d: "",
        },
        {
          n: "06",
          t: "Continuously developing solutions and improving performance.",
          d: "",
        },
      ],
      note: "We believe that a true partnership with a client does not end with the delivery of the service but continues through follow-up, support, and the achievement of sustainable results.",
    },
    packages: {
      kicker: "Our Packages",
      title: "Our Packages",
      intro: "",
      headers: {
        package: "Package",
        audience: "Package No.",
        content: "Details",
        duration: "Contact",
        durationShort: "Contact",
      },
      featured: "",
      request: "Whats App",
      note: "The pricing of each selected package is customized following a careful analysis of your business and operational needs.",
      packs: [
        {
          title: "Baisc",
          audience: "Package No.1",
          desc: "",
          includes: [
            "Quarterly - Yearly",
            "Periodic Certificates - Temporary Support",
            "Maintaining Continuity",
          ],
          duration: "",
        },
        {
          title: "Premium",
          audience: "Package No.2",
          desc: "",
          includes: [
            "Yearly - Periodic Certificates",
            "Continuous Support - Responsible",
            "Support And Suggestions",
          ],
          duration: "",
          featured: true,
        },
        {
          title: "Professional",
          audience: "Package No.3",
          desc: "",
          includes: [
            "Yearly - Providing Detailed Advice",
            "Continuous Support - Strategic Plans",
            "Financial Support",
          ],
          duration: "",
        },
      ],
    },
    contact: {
      imageAlt: "Jeddah skyline at sunset along the Corniche",
      title: "Thank You",
      titleAccent: "",
      kicker: "Contact Us Via",
      intro:
        "Instead of searching for an assistant, administrator, specialist, or consultant - we bring all of that under one roof, with one unified challenge: from concept to delivery",
      labels: {
        whatsapp: "Whats App",
        email: "Our Only Email",
      },
      whatsappCta: "Whats App",
      emailCta: "Our Only Email",
    },
    footer: {
      desc: "Integrated business solutions and partnerships that create success",
      linksTitle: "Links",
      serviceTitle: "Our Services",
      contactTitle: "Contact Us Via",
      home: "Home",
      copyright: "All rights reserved.",
    },
  },
} as const;

type Copy = (typeof COPY)[Language];
type LocalizedSectionProps = { t: Copy; language: Language };

function mobileEnglishFlow(language: Language) {
  return language === "en" ? "max-md:[direction:ltr] max-md:text-left" : "";
}

function mobileEnglishMenuFlow(language: Language) {
  return language === "en" ? "max-lg:[direction:ltr] max-lg:text-left" : "";
}

function ActionArrow({ language, className }: { language: Language; className?: string }) {
  const Icon = language === "en" ? ArrowUpRight : ArrowUpLeft;
  return <Icon className={className} />;
}

function Index() {
  const [language, setLanguage] = useState<Language>("ar");
  const t = COPY[language];

  useEffect(() => {
    const meta = PAGE_META[language];
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.ogDescription);
  }, [language]);

  return (
    <main
      dir={language === "en" ? "ltr" : "rtl"}
      lang={language}
      className="bg-canvas text-ink font-sans overflow-x-hidden antialiased"
    >
      <Nav t={t} language={language} setLanguage={setLanguage} />
      <Hero t={t} language={language} />
      <Intro t={t} language={language} />
      <About t={t} language={language} />
      <Principles t={t} language={language} />
      <ServicesShowcase t={t} language={language} />
      <WhyUs t={t} language={language} />
      <CoreValues t={t} language={language} />
      <Industries t={t} language={language} />
      <Process t={t} language={language} />
      <Packages t={t} language={language} />
      <Contact t={t} language={language} />
      <Footer t={t} language={language} />
    </main>
  );
}

/* Nav */
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
  const englishMobileMenu = mobileEnglishMenuFlow(language);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-navy-deep/85 backdrop-blur-xl border-b border-paper/10" />
      <div
        className={`relative container-x flex h-[4.5rem] items-center justify-between text-paper md:h-[5.5rem] lg:h-24 ${englishMobileMenu}`}
      >
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
        className={`lg:hidden absolute inset-x-3 top-[4.5rem] max-h-[calc(100svh-5.25rem)] overflow-y-auto border border-paper/10 bg-navy-deep/96 shadow-[0_22px_70px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl text-paper transition md:inset-x-4 md:top-[5.5rem] ${englishMobileMenu} ${
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
  const optionLabels =
    language === "en" ? { en: "English", ar: "Arabic" } : { en: "إنجليزي", ar: "عربي" };

  return (
    <div
      className="inline-flex h-12 w-[140px] items-center border border-paper/20 text-[11px] font-semibold text-paper/70 md:h-12 md:w-[140px] lg:h-9 lg:w-[124px]"
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
          {optionLabels[option]}
        </button>
      ))}
    </div>
  );
}

/* Hero, full bleed Riyadh skyline */
function Hero({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-navy-deep text-paper md:min-h-screen"
    >
      {/* Background image */}
      <img
        src={heroKafd}
        alt="Riyadh skyline, Kingdom Centre and KAFD towers at dusk"
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
      <div
        className={`relative z-10 min-h-[calc(100svh-4.5rem)] md:min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24 pb-12 md:pb-40 ${
          language === "en" ? "max-md:items-start max-md:text-left max-md:[direction:ltr]" : ""
        }`}
      >
        <img
          src={LOGO}
          alt="First Advance"
          loading="eager"
          className="w-[142px] sm:w-[170px] md:w-[215px] h-auto mb-6 md:mb-10 object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.58)]"
        />

        <div
          className={`flex items-center justify-center gap-3 text-accent-gold text-[10px] md:text-[11px] mb-5 md:mb-8 max-w-full ${
            language === "en" ? "max-md:justify-start" : ""
          }`}
        >
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

        <div
          className={`mt-7 md:mt-12 flex flex-col sm:flex-row w-full max-w-[342px] sm:max-w-none sm:w-auto gap-3 justify-center ${
            language === "en" ? "max-md:[direction:ltr]" : ""
          }`}
        >
          <a
            href="#contact"
            className="inline-flex min-h-[3.25rem] md:min-h-12 items-center justify-center gap-3 bg-accent-gold text-navy-deep px-8 py-4 text-[13px] font-semibold hover:brightness-95 transition"
          >
            {t.hero.primaryCta} <ActionArrow language={language} className="w-4 h-4" />
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
        <div
          className={`container-x grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-paper/10 ${
            language === "ar" ? "md:divide-x-reverse" : ""
          }`}
        >
          {t.hero.ledger.map((c) => (
            <a
              key={c.k}
              href="#services"
              className={`px-5 py-3.5 md:px-10 md:py-6 flex items-center gap-4 md:gap-6 group hover:bg-paper/[0.05] transition ${englishMobile}`}
            >
              <span className="text-[11px] text-accent-gold">{c.k}</span>
              <div className={`flex-1 ${language === "en" ? "text-left" : "text-right"}`}>
                <div className="text-paper font-semibold text-[14px] md:text-[14.5px]">{c.t}</div>
                <div className="mt-0.5 md:mt-1 text-[12px] leading-[1.55] text-paper/65">{c.d}</div>
              </div>
              <ActionArrow
                language={language}
                className="w-4 h-4 text-paper/40 group-hover:text-accent-gold transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Intro, quiet editorial preface */
function Intro({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);

  return (
    <section className="bg-canvas border-b border-rule">
      <div className="container-x py-10 md:py-28 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-2 hidden md:flex items-center">
          <span className="block h-px w-full max-w-24 bg-accent-gold/55" />
        </div>
        <p
          className={`md:col-span-10 font-serif text-[clamp(1.24rem,6.1vw,1.48rem)] md:text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.62] md:leading-[1.55] text-navy-deep max-md:border max-md:border-rule max-md:bg-paper/70 max-md:px-5 max-md:py-6 ${englishMobile}`}
        >
          <span aria-hidden className="mb-5 block h-px w-16 bg-accent-gold md:hidden" />
          {t.intro.lead}
          <span className="text-muted-ink">{t.intro.muted}</span>
          {t.intro.tail}
        </p>
      </div>
    </section>
  );
}

/* About, luxury boardroom */
function About({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);

  return (
    <section id="about" className="relative bg-stone overflow-hidden">
      <div className="container-x py-12 md:py-32 grid md:grid-cols-12 gap-8 md:gap-16">
        <div
          className={`md:col-span-6 md:pt-10 relative z-10 max-md:border max-md:border-rule max-md:bg-paper/65 max-md:p-5 ${englishMobile}`}
        >
          <SectionKicker label={t.about.kicker} />
          <h2 className="mt-3.5 md:mt-5 text-[clamp(1.46rem,6.8vw,1.84rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-navy-deep">
            {t.about.title}
          </h2>
          <div className="mt-5 md:mt-8 space-y-3.5 md:space-y-5 text-[14.5px] md:text-[15.5px] leading-[1.85] md:leading-[2] text-ink/80 max-w-lg">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
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
        </div>
      </div>
    </section>
  );
}

/* Principles, vision and mission on dark forest band */
function Principles({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);

  return (
    <section className="relative bg-navy-deep text-paper overflow-hidden">
      <div className="relative container-x py-10 md:py-32">
        <div className={`max-w-2xl ${englishMobile}`}>
          <SectionKicker label={t.principles.kicker} light />
          <h2 className="mt-3.5 text-[clamp(1.42rem,6.6vw,1.78rem)] md:text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.34] md:leading-[1.4] font-semibold text-paper">
            {t.principles.title}
          </h2>
        </div>

        <div className="mt-6 md:mt-16 grid md:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
          <div className={`bg-navy-deep p-6 md:p-12 relative overflow-hidden ${englishMobile}`}>
            <div className="relative z-10 text-accent-gold text-[11px] mb-4 md:mb-6">
              {t.principles.visionLabel}
            </div>
            <p className="relative z-10 text-[clamp(1rem,4.8vw,1.12rem)] md:text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.76] md:leading-[1.85] text-paper max-w-md">
              {t.principles.vision}
            </p>
          </div>
          <div className={`bg-navy-deep p-6 md:p-12 relative overflow-hidden ${englishMobile}`}>
            <div className="relative z-10 text-accent-gold text-[11px] mb-4 md:mb-6">
              {t.principles.missionLabel}
            </div>
            <p className="relative z-10 text-[clamp(1rem,4.8vw,1.12rem)] md:text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.76] md:leading-[1.85] text-paper max-w-md">
              {t.principles.mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services, three chapters with real architecture */
function ServicesShowcase({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);
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
      <div className="container-x pt-10 md:pt-32 pb-6 md:pb-10">
        <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-end">
          <div className={`md:col-span-7 ${englishMobile}`}>
            <SectionKicker label={t.services.kicker} />
            <h2 className="mt-3.5 text-[clamp(1.46rem,6.8vw,1.84rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-navy-deep">
              {t.services.title}
            </h2>
          </div>
          <p
            className={`md:col-span-4 md:col-start-9 text-[14px] md:text-[14.5px] leading-[1.8] md:leading-[1.95] text-ink/70 max-md:border-t max-md:border-rule max-md:pt-4 ${englishMobile}`}
          >
            {t.services.intro}
          </p>
        </div>
      </div>

      <div className="container-x pb-12 md:pb-28 space-y-4 md:space-y-3">
        {services.map((s) => (
          <article
            key={s.n}
            id={`service-${s.n}`}
            className={`group relative grid md:grid-cols-12 gap-0 bg-paper border border-rule overflow-hidden ${englishMobile}`}
          >
            <div className="md:col-span-1 flex md:flex-col items-center justify-between md:justify-start py-3.5 md:pt-8 md:pb-8 px-5 md:px-4 bg-navy-deep text-paper">
              <span className="text-[13px] text-accent-gold">{s.n}</span>
              <span className="hidden md:block flex-1 w-px bg-paper/15 my-6" />
            </div>
            <div className="md:col-span-5 p-6 md:p-12 md:pl-10 flex flex-col justify-between">
              <div>
                <h3 className="text-[clamp(1.32rem,6vw,1.65rem)] md:text-[clamp(1.4rem,2vw,1.8rem)] font-semibold text-navy-deep leading-[1.28] md:leading-[1.3] mb-4 md:mb-5">
                  {s.title}
                </h3>
                {s.desc && (
                  <p className="text-[14px] md:text-[14.5px] leading-[1.85] md:leading-[2] text-ink/75 max-w-md">
                    {s.desc}
                  </p>
                )}
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

/* Why us, editorial manifesto on warm stone */
function WhyUs({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);
  const items = t.why.items;
  return (
    <section id="why" className="bg-stone border-t border-rule">
      <div className="container-x py-10 md:py-32 grid md:grid-cols-12 gap-6 md:gap-16">
        <div
          className={`md:col-span-5 md:sticky md:top-24 self-start max-md:border max-md:border-rule max-md:bg-paper/70 max-md:p-5 ${englishMobile}`}
        >
          <SectionKicker label={t.why.kicker} />
          <h2 className="mt-3.5 md:mt-5 text-[clamp(1.46rem,6.8vw,1.86rem)] md:text-[clamp(1.7rem,2.6vw,2.2rem)] leading-[1.28] md:leading-[1.3] font-semibold text-navy-deep">
            {t.why.title}
            <span className="block text-accent-gold">{t.why.titleAccent}</span>
          </h2>
          <div className="mt-5 md:mt-8 border-t border-rule-strong pt-4 md:pt-6 max-w-md">
            <p className="font-serif text-[15px] md:text-[17px] leading-[1.76] md:leading-[1.85] text-ink/85 italic">
              {t.why.quote}
            </p>
          </div>
        </div>
        <ol
          className={`md:col-span-7 border-t border-rule-strong max-md:border max-md:border-rule max-md:bg-canvas max-md:px-5 ${englishMobile}`}
        >
          {items.map((t, i) => (
            <li
              key={t}
              className="grid grid-cols-12 gap-3 md:gap-4 items-baseline py-4 md:py-6 border-b border-rule"
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

/* Core values from the official profile */
function CoreValues({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);

  return (
    <section id="values" className="bg-canvas border-t border-rule">
      <div className="container-x py-10 md:py-28">
        <div className={`max-w-2xl mb-7 md:mb-12 ${englishMobile}`}>
          <SectionKicker label={t.values.kicker} />
          <h2 className="mt-3.5 text-[clamp(1.46rem,6.8vw,1.84rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-navy-deep">
            {t.values.title}
          </h2>
        </div>
        <ul
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule ${englishMobile}`}
        >
          {t.values.items.map((item) => (
            <li key={item} className="bg-paper px-5 py-5 md:px-8 md:py-7">
              <div className="h-px w-10 bg-accent-gold mb-4" />
              <div className="text-[1.05rem] md:text-xl font-semibold text-navy-deep">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* Industries, Saudi architecture grid */
function Industries({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);
  const cardTextAlign = language === "en" ? "items-start text-left" : "items-end text-right";
  const sectorImages = [sectorBusiness, sectorRealEstate, sectorInvestment];
  const sectors = t.industries.sectors.map((sector, index) => ({
    ...sector,
    img: sectorImages[index],
  }));
  return (
    <section
      id="audience"
      className="bg-navy-deep text-paper py-10 md:py-32 border-t border-paper/10"
    >
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-end mb-8 md:mb-14">
          <div className={`md:col-span-7 ${englishMobile}`}>
            <SectionKicker label={t.industries.kicker} light />
            <h2 className="mt-3.5 text-[clamp(1.46rem,6.8vw,1.84rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-paper">
              {t.industries.title}
            </h2>
          </div>
          <p
            className={`md:col-span-4 md:col-start-9 text-[14px] md:text-[14.5px] leading-[1.8] md:leading-[1.95] text-paper/65 max-md:border-t max-md:border-paper/10 max-md:pt-4 ${englishMobile}`}
          >
            {t.industries.intro}
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {sectors.map((s) => (
            <a
              key={s.name}
              href="#contact"
              className="group relative aspect-[4/3] min-h-[240px] sm:min-h-[260px] md:min-h-[300px] overflow-hidden border border-paper/10 bg-navy-deep focus-visible:outline-accent-gold"
              aria-label={s.name}
            >
              <img
                src={s.img}
                alt={s.tag}
                className="absolute inset-0 w-full h-full object-cover object-[50%_center] transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/92 via-navy-deep/36 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <div className={`flex flex-col ${cardTextAlign}`}>
                  <span aria-hidden className="mb-3 h-px w-10 bg-accent-gold" />
                  <h3 className="text-[1.08rem] md:text-[1.25rem] font-semibold leading-tight text-paper">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-[17rem] text-[12px] md:text-[12.5px] leading-[1.6] text-paper/72">
                    {s.tag}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Process, subtle architectural background */
function Process({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);
  const mobileTimeline =
    language === "en"
      ? "max-md:border-l max-md:border-r-0 max-md:pl-5 max-md:pr-0"
      : "max-md:border-r max-md:pr-5";
  const mobileMarker =
    language === "en"
      ? "md:hidden absolute left-[-1.42rem] top-7 w-2.5 h-2.5 bg-accent-gold ring-4 ring-canvas"
      : "md:hidden absolute right-[-1.42rem] top-7 w-2.5 h-2.5 bg-accent-gold ring-4 ring-canvas";
  const centerRail =
    language === "en"
      ? "hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-rule"
      : "hidden md:block absolute right-1/2 translate-x-1/2 top-0 bottom-0 w-px bg-rule";
  const centerMarker =
    language === "en"
      ? "hidden md:block absolute left-1/2 -translate-x-1/2 top-10 w-3 h-3 bg-accent-gold ring-4 ring-canvas z-10"
      : "hidden md:block absolute right-1/2 translate-x-1/2 top-10 w-3 h-3 bg-accent-gold ring-4 ring-canvas z-10";
  const steps = t.process.steps;
  return (
    <section id="process" className="relative bg-canvas border-t border-rule overflow-hidden">
      <div className="relative container-x py-10 md:py-32">
        <div
          className={`grid md:grid-cols-12 gap-5 md:gap-10 items-end mb-6 md:mb-16 max-md:border max-md:border-rule max-md:bg-paper/70 max-md:p-5 ${englishMobile}`}
        >
          <div className="md:col-span-6">
            <SectionKicker label={t.process.kicker} />
            <h2 className="mt-3.5 text-[clamp(1.46rem,6.8vw,1.84rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-navy-deep">
              {t.process.title}
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-[14px] md:text-[14.5px] leading-[1.8] md:leading-[1.95] text-ink/70 max-md:border-t max-md:border-rule max-md:pt-4">
            {t.process.intro}
          </p>
        </div>

        <div className="relative">
          <div aria-hidden className={centerRail} />
          <ol className={`space-y-0 max-md:border-rule ${mobileTimeline} ${englishMobile}`}>
            {steps.map((s, i) => {
              const rightSide = i % 2 === 0;
              const itemPlacement =
                language === "en"
                  ? rightSide
                    ? "md:pr-16 md:col-start-1"
                    : "md:pl-16 md:col-start-2"
                  : rightSide
                    ? "md:pr-16 md:col-start-1"
                    : "md:pl-16 md:col-start-2";
              const itemAlignment =
                language === "en" && rightSide
                  ? "md:ml-auto"
                  : language === "ar" && rightSide
                    ? "md:mr-auto"
                    : "";
              return (
                <li key={s.n} className="relative grid md:grid-cols-2 items-stretch">
                  <span aria-hidden className={mobileMarker} />
                  <span aria-hidden className={centerMarker} />
                  <div className={`py-5 md:py-14 ${itemPlacement}`}>
                    <div
                      className={`max-w-md ${itemAlignment} ${englishMobile}`}
                      dir={language === "en" ? "ltr" : "rtl"}
                    >
                      <div className="flex items-baseline gap-3 md:gap-4 mb-2.5 md:mb-4">
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

/* Packages, dark executive comparison ledger */
function Packages({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);
  const packs = t.packages.packs;

  return (
    <section
      id="packages"
      className="relative bg-navy-deep text-paper border-t border-paper/10 overflow-hidden"
    >
      <div className="relative container-x py-10 md:py-32">
        <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-end mb-7 md:mb-14">
          <div className={`md:col-span-6 ${englishMobile}`}>
            <SectionKicker label={t.packages.kicker} light />
            <h2 className="mt-3.5 text-[clamp(1.46rem,6.8vw,1.84rem)] md:text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.32] md:leading-[1.35] font-semibold text-paper">
              {t.packages.title}
            </h2>
          </div>
          <p
            className={`md:col-span-5 md:col-start-8 text-[14px] md:text-[14.5px] leading-[1.8] md:leading-[1.95] text-paper/70 max-md:border-t max-md:border-paper/10 max-md:pt-4 ${englishMobile}`}
          >
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
              key={p.title}
              className={`relative grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_1fr] gap-4 md:gap-8 py-5 md:py-10 max-md:overflow-hidden max-md:px-5 border-b border-paper/10 max-md:border max-md:border-paper/10 ${
                "featured" in p && p.featured ? "bg-paper/[0.04]" : ""
              } ${englishMobile}`}
            >
              <div className="relative z-10 md:pr-6">
                <div className="relative z-10">
                  {"featured" in p && p.featured && t.packages.featured && (
                    <div className="text-[10px] text-accent-gold mb-1">{t.packages.featured}</div>
                  )}
                  <div className="text-[1.04rem] md:text-xl font-semibold text-paper">
                    {p.title}
                  </div>
                </div>
                {p.desc && (
                  <p className="mt-3 md:mt-4 text-[13px] md:text-[13.5px] leading-[1.8] md:leading-[1.85] text-paper/65">
                    {p.desc}
                  </p>
                )}
              </div>
              <div className="relative z-10 md:pt-1">
                <div className="md:hidden text-[10px] text-accent-gold/80 mb-1.5">
                  {t.packages.headers.audience}
                </div>
                <div className="text-[13.5px] md:text-[14px] text-paper/90 leading-[1.75] md:leading-[1.8]">
                  {p.audience}
                </div>
              </div>
              <div className="relative z-10 md:pt-1">
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
              <div className="relative z-10 md:pt-1 flex flex-col justify-between gap-4">
                {p.duration && (
                  <div>
                    <div className="md:hidden text-[10px] text-accent-gold/80 mb-1.5">
                      {t.packages.headers.durationShort}
                    </div>
                    <div className="text-[13.5px] md:text-[14px] text-paper/90">{p.duration}</div>
                  </div>
                )}
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 text-[13px] font-semibold text-paper border-b border-paper hover:text-accent-gold hover:border-accent-gold transition self-start max-md:w-full max-md:border max-md:border-paper/25 max-md:px-4 max-md:py-3"
                >
                  {t.packages.request} <ActionArrow language={language} className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p
          className={`mt-6 md:mt-8 text-[12px] md:text-[12.5px] text-paper/50 max-w-2xl leading-[1.85] md:leading-[1.9] ${englishMobile}`}
        >
          {t.packages.note}
        </p>
      </div>
    </section>
  );
}

/* Contact, sunset skyline */
function Contact({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);

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
        </div>
        <div
          className={`lg:col-span-6 bg-navy px-5 md:px-14 py-12 lg:py-20 flex flex-col justify-center ${englishMobile}`}
        >
          <SectionKicker label={t.contact.kicker} light />
          <h2 className="mt-4 md:mt-5 text-[clamp(1.55rem,7.2vw,2.05rem)] md:text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.18] md:leading-[1.2]">
            {t.contact.title}
            <span className="block text-accent-gold">{t.contact.titleAccent}</span>
          </h2>
          <p className="mt-5 md:mt-6 max-w-md text-[14px] md:text-[15px] leading-[1.85] md:leading-[2] text-paper/75">
            {t.contact.intro}
          </p>

          <div className="mt-7 md:mt-10 divide-y divide-paper/10 border-y border-paper/10">
            <ContactRow
              icon={<MessageCircle className="w-4 h-4" />}
              label={t.contact.labels.whatsapp}
              value={WHATSAPP_DISPLAY}
              href={WHATSAPP_LINK}
              language={language}
            />
            <ContactRow
              icon={<Mail className="w-4 h-4" />}
              label={t.contact.labels.email}
              value={EMAIL}
              href={`mailto:${EMAIL}`}
              language={language}
            />
          </div>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[3.25rem] md:min-h-12 w-full sm:w-auto items-center justify-center gap-3 bg-accent-gold text-navy-deep px-7 py-3.5 text-[13px] font-semibold hover:brightness-95 transition"
            >
              {t.contact.whatsappCta} <ActionArrow language={language} className="w-4 h-4" />
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
  language,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  language: Language;
}) {
  const englishMobile = mobileEnglishFlow(language);
  const valueDirection = /[\u0600-\u06FF]/.test(value) ? "rtl" : "ltr";
  const arrowAlign = language === "en" ? "text-right" : "text-left";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`grid max-md:min-h-[4.25rem] grid-cols-[1.5rem_1fr_1rem] sm:grid-cols-12 gap-x-3 sm:gap-x-4 gap-y-1 items-center py-4 md:py-5 group ${englishMobile}`}
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
      <div
        className={`row-span-2 col-start-3 row-start-1 sm:row-span-1 sm:col-start-auto sm:col-span-1 text-paper/40 group-hover:text-accent-gold transition-colors ${arrowAlign}`}
      >
        <ActionArrow language={language} className="w-4 h-4 inline" />
      </div>
    </a>
  );
}

/* Footer */
function Footer({ t, language }: LocalizedSectionProps) {
  const englishMobile = mobileEnglishFlow(language);

  return (
    <footer
      className={`bg-[oklch(0.15_0.025_168)] text-paper/75 pt-12 md:pt-20 pb-8 md:pb-10 border-t border-paper/10 ${englishMobile}`}
    >
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
                href="#values"
                className="max-lg:min-h-11 max-lg:min-w-11 max-lg:flex max-lg:items-center hover:text-accent-gold"
              >
                {t.nav.links[3].label}
              </a>
            </li>
            <li>
              <a
                href="#audience"
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
              <MessageCircle className="w-3.5 h-3.5 text-accent-gold" />
              <span dir="ltr">{WHATSAPP_DISPLAY}</span>
            </li>
            <li className="flex max-lg:min-h-11 gap-2 items-center">
              <Mail className="w-3.5 h-3.5 text-accent-gold" />
              <span dir="ltr">{EMAIL}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-7 md:mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-4 text-[12px] text-paper/50">
        <div>
          {new Date().getFullYear()} First Advance. {t.footer.copyright}
        </div>
        <div>{t.location}</div>
      </div>
    </footer>
  );
}

/* Shared kicker */
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
