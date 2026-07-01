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
const LOCATION = "جدة، المملكة العربية السعودية";

function Index() {
  return (
    <main dir="rtl" className="bg-canvas text-ink font-sans overflow-x-hidden antialiased">
      <Nav />
      <Hero />
      <Intro />
      <About />
      <Principles />
      <ServicesShowcase />
      <WhyUs />
      <Industries />
      <Process />
      <Packages />
      <Contact />
      <Footer />
    </main>
  );
}

/* ─── NAV ──────────────────────────────────────────────────── */
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#about", label: "من نحن" },
    { href: "#services", label: "خدماتنا" },
    { href: "#why", label: "لماذا نحن" },
    { href: "#industries", label: "القطاعات" },
    { href: "#process", label: "منهجيتنا" },
    { href: "#packages", label: "الباقات" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="absolute inset-0 bg-navy-deep/85 backdrop-blur-xl border-b border-paper/10" />
      <div className="relative container-x flex h-[4.75rem] items-center justify-between text-paper md:h-[5.5rem] lg:h-24">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={LOGO}
            alt="First Advance"
            className="w-[124px] sm:w-[142px] lg:w-[180px] h-auto object-contain drop-shadow-[0_8px_22px_rgba(0,0,0,0.38)]"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-[13px] text-paper/85">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent-gold transition">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex min-h-11 items-center gap-2 border border-accent-gold text-accent-gold px-4 py-2 text-[12px] hover:bg-accent-gold hover:text-navy-deep transition"
        >
          طلب استشارة
        </a>
        <button
          type="button"
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-paper/20 text-paper hover:border-accent-gold hover:text-accent-gold transition"
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-controls="mobile-nav"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`lg:hidden absolute inset-x-4 top-[4.75rem] border border-paper/10 bg-navy-deep/95 backdrop-blur-xl text-paper transition ${
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
              className="min-h-12 px-5 py-3 text-[14px] hover:bg-paper/[0.04] hover:text-accent-gold transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="min-h-12 px-5 py-3 text-[14px] text-accent-gold hover:bg-paper/[0.04] transition"
            onClick={() => setIsOpen(false)}
          >
            طلب استشارة
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ─── HERO — full-bleed Riyadh skyline ─────────────────────── */
function Hero() {
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
        className="absolute inset-0 w-full h-full object-cover"
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
      <div className="relative z-10 min-h-[100svh] md:min-h-screen flex flex-col items-center justify-center px-6 text-center pt-24 pb-14 md:pb-40">
        <img
          src={LOGO}
          alt="First Advance"
          loading="eager"
          className="w-[148px] sm:w-[170px] md:w-[215px] h-auto mb-8 md:mb-10 object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.58)]"
        />

        <div className="flex items-center justify-center gap-3 text-accent-gold text-[10px] md:text-[11px] mb-7 md:mb-8 max-w-full">
          <span className="hidden sm:block w-10 h-px bg-accent-gold" />
          <span>{LOCATION}</span>
          <span className="hidden sm:block w-10 h-px bg-accent-gold" />
        </div>

        <h1 className="font-semibold leading-[1.18] md:leading-[1.2] text-[clamp(2.05rem,5vw,4.25rem)] max-w-4xl drop-shadow-[0_4px_28px_rgba(0,0,0,0.5)]">
          حلول أعمال متكاملة
          <span className="block mt-3 md:mt-4 text-paper/85 font-normal text-[clamp(1.28rem,3vw,2.5rem)]">
            تبني <span className="text-accent-gold font-semibold">النمو</span> … وتدير النجاح.
          </span>
        </h1>

        <p className="mt-8 md:mt-10 text-[14.5px] md:text-[16px] leading-[1.95] md:leading-[2] text-paper/84 max-w-2xl">
          مؤسسة سعودية متخصصة في حلول الأعمال، الخدمات التشغيلية، والخدمات العقارية — نبني للمؤسسات
          ورواد الأعمال منظومات أكثر كفاءة واستدامة.
        </p>

        <div className="mt-9 md:mt-12 flex flex-col sm:flex-row w-full sm:w-auto gap-3 justify-center">
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-3 bg-accent-gold text-navy-deep px-8 py-4 text-[13px] font-semibold hover:brightness-95 transition"
          >
            ابدأ معنا <ArrowUpLeft className="w-4 h-4" />
          </a>
          <a
            href="#services"
            className="inline-flex min-h-12 items-center justify-center gap-3 border border-paper/35 text-paper px-8 py-4 text-[13px] font-medium hover:bg-paper/10 backdrop-blur-sm transition"
          >
            استكشف خدماتنا
          </a>
        </div>
      </div>

      {/* Capabilities ledger */}
      <div className="relative md:absolute md:bottom-0 md:inset-x-0 border-t border-paper/15 bg-[oklch(0.12_0.028_168/0.72)] backdrop-blur-md z-10">
        <div className="container-x grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-paper/10">
          {[
            { k: "01", t: "حلول الأعمال", d: "استشارات وتطوير أعمال ودعم إداري." },
            { k: "02", t: "الخدمات التشغيلية", d: "إدارة العمليات ورفع الأداء." },
            { k: "03", t: "الخدمات العقارية", d: "إدارة الأصول والاستثمار العقاري." },
          ].map((c) => (
            <a
              key={c.k}
              href="#services"
              className="px-6 py-4 md:px-10 md:py-6 flex items-center gap-5 md:gap-6 group hover:bg-paper/[0.05] transition"
            >
              <span className="text-[11px] text-accent-gold">{c.k}</span>
              <div className="flex-1 text-right">
                <div className="text-paper font-semibold text-[14.5px]">{c.t}</div>
                <div className="mt-1 text-[12px] text-paper/65">{c.d}</div>
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
function Intro() {
  return (
    <section className="bg-canvas border-b border-rule">
      <div className="container-x py-16 md:py-28 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-2 hidden md:flex items-center">
          <span className="block h-px w-full max-w-24 bg-accent-gold/55" />
        </div>
        <p className="md:col-span-10 font-serif text-[clamp(1.35rem,2.2vw,1.9rem)] leading-[1.55] text-navy-deep">
          نؤمن بأن النجاح الحقيقي يبدأ من التخطيط الصحيح، والإدارة الفعالة،
          <span className="text-muted-ink"> والتنفيذ الاحترافي — </span>
          ولهذا نجمع الإدارة، التشغيل، والعقار تحت منظومة واحدة تخدم عميلاً واحداً.
        </p>
      </div>
    </section>
  );
}

/* ─── ABOUT — luxury boardroom ─────────────────────────────── */
function About() {
  return (
    <section id="about" className="relative bg-stone overflow-hidden">
      <div className="container-x py-16 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-6 md:pt-10 relative z-10">
          <SectionKicker label="من نحن" />
          <h2 className="mt-5 text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.35] font-semibold text-navy-deep">
            حلول أعمال متكاملة تجمع الإدارة والتشغيل والعقار تحت منظومة واحدة.
          </h2>
          <div className="mt-8 space-y-5 text-[15.5px] leading-[2] text-ink/80 max-w-lg">
            <p>
              First Advance مؤسسة متخصصة في تقديم حلول الأعمال المتكاملة، تجمع بين الخبرة الإدارية
              والتشغيلية والخدمات العقارية تحت منظومة واحدة.
            </p>
            <p>
              نعمل على تطوير بيئات الأعمال، وتحسين الكفاءة التشغيلية، وتقديم حلول عملية تساعد
              عملاءنا على تحقيق النمو والاستقرار والاستدامة.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md border-t border-rule pt-8">
            <Stat n="03" t="ممارسات متكاملة" />
            <Stat n="06" t="قطاعات مستهدفة" />
            <Stat n="1:1" t="مسؤولية موحدة" />
          </div>
        </div>

        <div className="md:col-span-6 relative">
          <div className="relative h-[390px] sm:h-[520px] md:h-[720px] overflow-hidden">
            <img
              src={boardroom}
              alt="قاعة اجتماعات تنفيذية بإطلالة على مدينة الرياض"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 bg-navy-deep text-paper px-6 md:px-7 py-5 md:py-6 max-w-[300px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
            <div className="text-[10px] text-accent-gold mb-2">تأسست في المملكة</div>
            <div className="text-[13.5px] leading-[1.7]">
              مؤسسة سعودية للاستشارات وحلول الأعمال المتكاملة.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, t }: { n: string; t: string }) {
  return (
    <div>
      <div className="font-serif text-[2rem] leading-none text-navy-deep">{n}</div>
      <div className="mt-2 text-[11.5px] text-muted-ink leading-snug">{t}</div>
    </div>
  );
}

/* ─── PRINCIPLES — Vision/Mission on dark forest band ─────── */
function Principles() {
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

      <div className="relative container-x py-16 md:py-32">
        <div className="max-w-2xl">
          <SectionKicker label="مبادئنا" light />
          <h2 className="mt-4 text-[clamp(1.5rem,2.2vw,1.9rem)] leading-[1.4] font-semibold text-paper">
            رؤية واضحة، رسالة عملية — ومنهج مبني على النتائج.
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-paper/10 border border-paper/10">
          <div className="bg-navy-deep p-8 md:p-12 relative">
            <div className="absolute top-6 left-6 font-serif text-[5rem] leading-none text-accent-gold/25 select-none">
              I
            </div>
            <div className="text-accent-gold text-[11px] mb-6">رؤيتنا</div>
            <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.85] text-paper max-w-md">
              أن نكون الشريك الأول للمؤسسات في تطوير الأعمال، ورفع الكفاءة التشغيلية، وتقديم حلول
              متكاملة تحقق قيمة مستدامة.
            </p>
          </div>
          <div className="bg-navy-deep p-8 md:p-12 relative">
            <div className="absolute top-6 left-6 font-serif text-[5rem] leading-none text-accent-gold/25 select-none">
              II
            </div>
            <div className="text-accent-gold text-[11px] mb-6">رسالتنا</div>
            <p className="text-[clamp(1.05rem,1.4vw,1.25rem)] leading-[1.85] text-paper max-w-md">
              تقديم خدمات احترافية تعتمد على الجودة، والابتكار، والخبرة العملية، لبناء شراكات طويلة
              المدى مع عملائنا وتحقيق نتائج قابلة للقياس.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES — three chapters with real architecture ─────── */
function ServicesShowcase() {
  const services = [
    {
      n: "01",
      ar: "حلول الأعمال",
      en: "Business Solutions",
      desc: "استشارات وتطوير وتخطيط لبناء أعمال أكثر كفاءة، مع دعم إداري متكامل لرفع الأداء المؤسسي.",
      items: [
        "استشارات الأعمال",
        "تطوير الأعمال",
        "الدعم الإداري",
        "تحسين العمليات",
        "التخطيط الاستراتيجي",
      ],
      img: corporateTower,
      alt: "برج مقر شركة سعودية · Corporate headquarters tower",
    },
    {
      n: "02",
      ar: "الخدمات التشغيلية",
      en: "Operational Services",
      desc: "إدارة عمليات محكمة، تنسيق مشاريع، وتحسين مستمر للأداء والدعم التشغيلي اليومي.",
      items: [
        "إدارة العمليات",
        "تنسيق المشاريع",
        "تحسين الأداء",
        "تطوير العمليات",
        "الدعم التشغيلي",
      ],
      img: operationsCenter,
      alt: "مركز عمليات · Operations control room",
    },
    {
      n: "03",
      ar: "الخدمات العقارية",
      en: "Real Estate Services",
      desc: "إدارة عقارات وأصول باحترافية، مع تنسيق فرص الاستثمار العقاري وتقديم حلول متكاملة للمطورين والمالكين.",
      items: [
        "إدارة العقارات",
        "خدمات عقارية",
        "دعم الأصول",
        "تنسيق الاستثمار",
        "حلول عقارية متكاملة",
      ],
      img: realEstate,
      alt: "مشروع عقاري تجاري متعدد الاستخدامات · Commercial development",
    },
  ];

  return (
    <section id="services" className="bg-canvas border-t border-rule">
      <div className="container-x pt-16 md:pt-32 pb-10">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <SectionKicker label="خدماتنا" />
            <h2 className="mt-4 text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.35] font-semibold text-navy-deep">
              ثلاث ممارسات متكاملة — تُقدَّم منفصلة أو مجتمعة، بمسؤولية موحدة.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-[14.5px] leading-[1.95] text-ink/70">
            نعتمد منهجية تنفيذ واحدة أمام العميل، مع فرق متخصصة لكل ممارسة.
          </p>
        </div>
      </div>

      <div className="container-x pb-16 md:pb-28 space-y-3">
        {services.map((s) => (
          <article
            key={s.n}
            id={`service-${s.n}`}
            className="group relative grid md:grid-cols-12 gap-0 bg-paper border border-rule overflow-hidden"
          >
            <div className="md:col-span-1 flex md:flex-col items-center justify-between md:justify-start py-4 md:pt-8 md:pb-8 px-6 md:px-4 bg-navy-deep text-paper">
              <span className="text-[13px] text-accent-gold">{s.n}</span>
              <span className="hidden md:block flex-1 w-px bg-paper/15 my-6" />
            </div>
            <div className="md:col-span-5 p-8 md:p-12 md:pl-10 flex flex-col justify-between">
              <div>
                <div className="text-[11px] text-muted-ink mb-3">{s.en}</div>
                <h3 className="text-[clamp(1.4rem,2vw,1.8rem)] font-semibold text-navy-deep leading-[1.3] mb-5">
                  {s.ar}
                </h3>
                <p className="text-[14.5px] leading-[2] text-ink/75 max-w-md">{s.desc}</p>
              </div>
              <ul className="mt-10 grid grid-cols-1 gap-0 border-t border-rule">
                {s.items.map((it, j) => (
                  <li
                    key={it}
                    className="flex items-baseline gap-4 py-3 border-b border-rule text-[14px] text-navy-deep"
                  >
                    <span className="text-[11px] text-accent-gold w-8">0{j + 1}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 relative min-h-[380px] md:min-h-[560px] overflow-hidden">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
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
function WhyUs() {
  const items = [
    "خبرة عملية في تطوير الأعمال والإدارة والتشغيل.",
    "حلول متكاملة تحت سقف واحد.",
    "جودة تنفيذ ومعايير احترافية.",
    "مرونة في تقديم الحلول حسب احتياجات كل عميل.",
    "شراكات طويلة المدى مبنية على الثقة والنتائج.",
    "التركيز على الاستدامة والنمو الحقيقي.",
  ];
  return (
    <section id="why" className="bg-stone border-t border-rule">
      <div className="container-x py-16 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-24 self-start">
          <SectionKicker label="لماذا First Advance" />
          <h2 className="mt-5 text-[clamp(1.7rem,2.6vw,2.2rem)] leading-[1.3] font-semibold text-navy-deep">
            اختيار موثوق
            <span className="block text-accent-gold">لإدارة الأعمال والعمليات والعقارات.</span>
          </h2>
          <div className="mt-8 border-t border-rule-strong pt-6 max-w-md">
            <p className="font-serif text-[17px] leading-[1.85] text-ink/85 italic">
              «نبني علاقات طويلة المدى مع عملائنا، ونقيس نجاحنا بنجاحهم — لا بحجم مشاريعنا.»
            </p>
          </div>
        </div>
        <ol className="md:col-span-7 border-t border-rule-strong">
          {items.map((t, i) => (
            <li
              key={t}
              className="grid grid-cols-12 gap-4 items-baseline py-6 border-b border-rule"
            >
              <span className="col-span-2 font-serif text-[2rem] leading-none text-accent-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="col-span-10 text-[15.5px] md:text-[16.5px] leading-[1.75] text-navy-deep font-medium">
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
function Industries() {
  const sectors = [
    { name: "قطاع الأعمال", tag: "Corporate Tower", img: sectorBusiness },
    { name: "القطاع العقاري", tag: "Commercial Development", img: sectorRealEstate },
    { name: "قطاع الاستثمار", tag: "Financial District · KAFD", img: sectorInvestment },
    { name: "القطاع التجاري", tag: "Retail & Commercial", img: sectorCommercial },
    { name: "قطاع الخدمات", tag: "Infrastructure", img: sectorServices },
    {
      name: "رواد الأعمال والمنشآت الناشئة",
      tag: "Modern Office Campus",
      img: sectorEntrepreneurs,
    },
  ];
  return (
    <section
      id="industries"
      className="bg-navy-deep text-paper py-16 md:py-32 border-t border-paper/10"
    >
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <SectionKicker label="القطاعات" light />
            <h2 className="mt-4 text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.35] font-semibold text-paper">
              القطاعات التي نخدمها.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-[14.5px] leading-[1.95] text-paper/65">
            نعمل مع مؤسسات في قطاعات متعددة، مع تكييف الحلول وفق طبيعة النشاط ومرحلة النمو.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {sectors.map((s, i) => (
            <article
              key={s.name}
              className="relative aspect-[4/3] min-h-[260px] overflow-hidden group border border-paper/10"
            >
              <img
                src={s.img}
                alt={s.tag}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-accent-gold/60 transition" />
              <div className="relative h-full flex flex-col justify-between p-6 md:p-7">
                <span className="text-[11px] text-accent-gold">
                  {String(i + 1).padStart(2, "0")} / 06
                </span>
                <div>
                  <div className="text-[16px] md:text-[18px] font-semibold leading-tight text-paper">
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
function Process() {
  const steps = [
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
  ];
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

      <div className="relative container-x py-16 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16">
          <div className="md:col-span-6">
            <SectionKicker label="منهجيتنا" />
            <h2 className="mt-4 text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.35] font-semibold text-navy-deep">
              من الفهم إلى التنفيذ إلى التطوير.
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-[14.5px] leading-[1.95] text-ink/70">
            منهجية موحدة بأربع مراحل تحكم كل تعاقد، بغض النظر عن حجمه أو قطاعه.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="hidden md:block absolute right-1/2 top-0 bottom-0 w-px bg-rule"
          />
          <ol className="space-y-0">
            {steps.map((s, i) => {
              const rightSide = i % 2 === 0;
              return (
                <li key={s.n} className="relative grid md:grid-cols-2 items-stretch">
                  <span
                    aria-hidden
                    className="hidden md:block absolute right-1/2 translate-x-1/2 top-10 w-3 h-3 bg-accent-gold ring-4 ring-canvas z-10"
                  />
                  <div
                    className={`py-10 md:py-14 ${
                      rightSide ? "md:pr-16 md:col-start-1" : "md:pl-16 md:col-start-2"
                    }`}
                  >
                    <div className={`max-w-md ${rightSide ? "md:mr-auto" : ""}`} dir="rtl">
                      <div className="flex items-baseline gap-4 mb-4">
                        <span className="font-serif text-[3rem] leading-none text-accent-gold">
                          {s.n}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-navy-deep mb-3">
                        {s.t}
                      </h3>
                      <p className="text-[14.5px] leading-[1.95] text-ink/75">{s.d}</p>
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
function Packages() {
  const packs = [
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
  ];

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

      <div className="relative container-x py-16 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-6">
            <SectionKicker label="باقات الخدمات" light />
            <h2 className="mt-4 text-[clamp(1.6rem,2.5vw,2.15rem)] leading-[1.35] font-semibold text-paper">
              خيارات تعاقد استشارية تلائم مرحلة كل مؤسسة.
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-[14.5px] leading-[1.95] text-paper/70">
            تُقدَّم عبر عقود استشارية مخصصة، بمنهجية تنفيذ واحدة ومسؤولية موحدة أمام العميل — دون
            رسوم اشتراك جاهزة.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-[1.1fr_1fr_1fr_1fr] gap-0 border-t-2 border-accent-gold/70 text-[11px] text-paper/50">
          <div className="py-4">الباقة</div>
          <div className="py-4">الفئة المستهدفة</div>
          <div className="py-4">المحتوى</div>
          <div className="py-4">المدة المقترحة</div>
        </div>

        <div className="border-t border-paper/15 md:border-t-0">
          {packs.map((p) => (
            <div
              key={p.roman}
              className={`grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_1fr] gap-6 md:gap-8 py-8 md:py-10 border-b border-paper/10 ${
                p.featured ? "bg-paper/[0.04]" : ""
              }`}
            >
              <div className="md:pr-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-[3rem] leading-none text-accent-gold">
                    {p.roman}
                  </span>
                  <div>
                    {p.featured && (
                      <div className="text-[10px] text-accent-gold mb-1">الأكثر طلباً</div>
                    )}
                    <div className="text-lg md:text-xl font-semibold text-paper">{p.title}</div>
                  </div>
                </div>
                <p className="mt-4 text-[13.5px] leading-[1.85] text-paper/65">{p.desc}</p>
              </div>
              <div className="md:pt-1">
                <div className="md:hidden text-[10px] text-paper/50 mb-2">الفئة المستهدفة</div>
                <div className="text-[14px] text-paper/90 leading-[1.8]">{p.audience}</div>
              </div>
              <div className="md:pt-1">
                <div className="md:hidden text-[10px] text-paper/50 mb-2">المحتوى</div>
                <ul className="space-y-2">
                  {p.includes.map((it) => (
                    <li key={it} className="flex items-baseline gap-2 text-[13.5px] text-paper/80">
                      <Check className="w-3.5 h-3.5 text-accent-gold shrink-0" strokeWidth={2.5} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:pt-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="md:hidden text-[10px] text-paper/50 mb-2">المدة</div>
                  <div className="text-[14px] text-paper/90">{p.duration}</div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold text-paper border-b border-paper hover:text-accent-gold hover:border-accent-gold transition self-start"
                >
                  طلب هذه الباقة <ArrowUpLeft className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[12.5px] text-paper/50 max-w-2xl leading-[1.9]">
          * جميع الباقات مبنية على تعاقد استشاري مخصص. الأسعار تُحدَّد بعد جلسة تشخيصية مجانية مع
          فريق First Advance.
        </p>
      </div>
    </section>
  );
}

/* ─── CONTACT — sunset skyline ─────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="relative bg-navy-deep text-paper overflow-hidden">
      <div className="grid lg:grid-cols-12 min-h-[80vh]">
        <div className="relative lg:col-span-6 min-h-[360px] sm:min-h-[420px] lg:min-h-0">
          <img
            src={ctaSunset}
            alt="أفق جدة عند الغروب على الكورنيش"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-deep/80 via-navy-deep/30 to-transparent" />
          <div className="absolute bottom-10 right-10 max-w-md">
            <div className="text-accent-gold text-[11px] mb-4">لنبدأ الآن</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.2]">
              لنبدأ رحلة نجاح
              <span className="block text-accent-gold">جديدة.</span>
            </h2>
          </div>
        </div>
        <div className="lg:col-span-6 bg-navy px-6 md:px-14 py-16 lg:py-20 flex flex-col justify-center">
          <SectionKicker label="تواصل معنا" light />
          <p className="mt-5 max-w-md text-[15px] leading-[2] text-paper/75">
            سواء كنت تبحث عن تطوير أعمالك، أو تحسين عملياتك التشغيلية، أو حلول عقارية متكاملة — فريق
            First Advance مستعد لبناء الحل المناسب لأهدافك.
          </p>

          <div className="mt-10 divide-y divide-paper/10 border-y border-paper/10">
            <ContactRow
              icon={<MessageCircle className="w-4 h-4" />}
              label="واتساب"
              value={WHATSAPP_DISPLAY}
              href={WHATSAPP_LINK}
            />
            <ContactRow
              icon={<Mail className="w-4 h-4" />}
              label="البريد الإلكتروني"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            <ContactRow
              icon={<Phone className="w-4 h-4" />}
              label="اتصال مباشر"
              value={WHATSAPP_DISPLAY}
              href={`tel:${WHATSAPP_DISPLAY.replace(/\s/g, "")}`}
            />
            <ContactRow
              icon={<MapPin className="w-4 h-4" />}
              label="المقر"
              value={LOCATION}
              href="#"
            />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-3 bg-accent-gold text-navy-deep px-7 py-3.5 text-[13px] font-semibold hover:brightness-95 transition"
            >
              محادثة عبر واتساب <ArrowUpLeft className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-3 border border-paper/25 text-paper px-7 py-3.5 text-[13px] font-medium hover:bg-paper/10 transition"
            >
              أرسل رسالة
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
      className="grid grid-cols-[1.5rem_1fr_1rem] sm:grid-cols-12 gap-x-3 sm:gap-x-4 gap-y-1 items-center py-5 group"
    >
      <div className="row-span-2 sm:row-span-1 sm:col-span-1 text-accent-gold">{icon}</div>
      <div className="col-start-2 sm:col-start-auto sm:col-span-4 text-[11px] text-paper/50">
        {label}
      </div>
      <div
        className="col-start-2 sm:col-start-auto sm:col-span-6 min-w-0 break-words text-paper font-semibold text-[15px] group-hover:text-accent-gold transition-colors"
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
function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.025_168)] text-paper/75 pt-16 md:pt-20 pb-10 border-t border-paper/10">
      <div className="container-x grid md:grid-cols-12 gap-10 pb-14 border-b border-paper/10">
        <div className="md:col-span-4">
          <div className="flex items-center">
            <img
              src={LOGO}
              alt="First Advance"
              className="w-[150px] md:w-[205px] h-auto object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.32)]"
            />
          </div>
          <p className="mt-6 text-[13.5px] leading-[1.95] text-paper/55 max-w-sm">
            مؤسسة سعودية متخصصة في حلول الأعمال، الخدمات التشغيلية والخدمات العقارية، تجمع الخبرة
            والتنفيذ الاحترافي تحت منظومة واحدة.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="text-[10px] text-accent-gold mb-4">روابط</div>
          <ul className="space-y-2.5 text-[13.5px]">
            <li>
              <a href="#top" className="hover:text-accent-gold">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent-gold">
                من نحن
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-accent-gold">
                لماذا نحن
              </a>
            </li>
            <li>
              <a href="#industries" className="hover:text-accent-gold">
                القطاعات
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-accent-gold">
                منهجيتنا
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] text-accent-gold mb-4">خدماتنا</div>
          <ul className="space-y-2.5 text-[13.5px]">
            <li>
              <a href="#service-01" className="hover:text-accent-gold">
                حلول الأعمال
              </a>
            </li>
            <li>
              <a href="#service-02" className="hover:text-accent-gold">
                الخدمات التشغيلية
              </a>
            </li>
            <li>
              <a href="#service-03" className="hover:text-accent-gold">
                الخدمات العقارية
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-accent-gold">
                باقات الخدمات
              </a>
            </li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] text-accent-gold mb-4">تواصل معنا</div>
          <ul className="space-y-2.5 text-[13.5px]">
            <li className="flex gap-2 items-center">
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              <span dir="ltr">{WHATSAPP_DISPLAY}</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="w-3.5 h-3.5 text-accent-gold" />
              <span dir="ltr">{EMAIL}</span>
            </li>
            <li className="flex gap-2 items-center">
              <MapPin className="w-3.5 h-3.5 text-accent-gold" />
              <span>{LOCATION}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-paper/50">
        <div>© {new Date().getFullYear()} First Advance. جميع الحقوق محفوظة.</div>
        <div>{LOCATION}</div>
      </div>
    </footer>
  );
}

/* ─── Shared kicker ─────────────────────────────────────── */
function SectionKicker({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 text-[12px] ${light ? "text-paper/65" : "text-muted-ink"}`}
    >
      <span className="w-10 h-px bg-accent-gold" />
      <span>{label}</span>
    </div>
  );
}
