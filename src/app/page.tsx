"use client";

import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  Globe2,
  Layers,
  Link2,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { AnimatedBackground } from "@/components/site/AnimatedBackground";
import { Navbar } from "@/components/site/Navbar";
import { Section, SectionHeading } from "@/components/site/Section";

const brandGradient = "from-[#f5f5f5] via-[#dcdcdc] to-[#9e9e9e]";

const services = [
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Product Engineering",
    desc: "Rapid prototyping, MVPs, and scale-ready platforms for web and mobile.",
    tags: ["Next.js", "React Native", "CI/CD"],
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "ERP & CRM",
    desc: "End-to-end process automation, role-based access, and smart workflows.",
    tags: ["ERP", "CRM", "Custom workflows"],
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Mobile Experiences",
    desc: "Intuitive iOS & Android apps with offline-first patterns and analytics.",
    tags: ["React Native", "Expo"],
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Managed Services",
    desc: "24/7 monitoring, SRE practices, and resilience tuned to your SLAs.",
    tags: ["SRE", "Observability", "Security"],
  },
];

const products = [
  {
    name: "Cafe & Restaurant Suite",
    desc: "POS, KDS, inventory, menu engineering, and loyalty built-in.",
    pill: "Arabica Cafe live",
  },
  {
    name: "School Management ERP",
    desc: "Admissions, academics, transport, finance, and parent portals.",
    pill: "Ready to deploy",
  },
  {
    name: "General ERP Core",
    desc: "Finance, HR, procurement, approvals, and audit trails out-of-box.",
    pill: "Modular & API-first",
  },
];

const solutions = [
  {
    title: "Web & Platform Engineering",
    body: "Modern frontends with Next.js and cloud-native backends that scale globally.",
    icon: <Globe2 className="h-5 w-5" />,
  },
  {
    title: "Custom Management Systems",
    body: "Workflow engines for operations, approvals, and granular permissions.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    title: "Data & Insights",
    body: "Event pipelines, dashboards, and AI-assisted ops to guide decisions.",
    icon: <Sparkles className="h-5 w-5" />,
  },
];

const uiShowcases = [
  {
    title: "Enterprise ERP Control",
    desc: "Role-based dashboards with approvals, spend insights, and audit-ready history.",
    tags: ["ERP UI", "Approvals", "Analytics"],
    accent: "from-[#f5f5f5]/70 via-[#dcdcdc]/60 to-[#9e9e9e]/55",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    title: "Cafe Ops Workspace",
    desc: "KDS, POS, and inventory in one tabbed workspace with real-time orders and staff KPIs.",
    tags: ["POS", "Inventory", "Staffing"],
    accent: "from-[#e6e6e6]/75 via-[#cfcfcf]/60 to-[#a0a0a0]/50",
    icon: <MonitorSmartphone className="h-5 w-5" />,
  },
  {
    title: "School ERP Experience",
    desc: "Academics, transport, finance, and parent comms with clear journeys and notifications.",
    tags: ["Academics", "Billing", "Portals"],
    accent: "from-[#f2f2f2]/75 via-[#d9d9d9]/60 to-[#b0b0b0]/50",
    icon: <Palette className="h-5 w-5" />,
  },
];

const caseShots = [
  {
    title: "E‑commerce growth",
    subtitle: "Storefront + OMS with 99.95% uptime",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    tag: "Retail",
  },
  {
    title: "Healthcare portal",
    subtitle: "HIPAA-aware patient journeys and billing",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    tag: "Health",
  },
  {
    title: "Fintech mobile app",
    subtitle: "KYC, payouts, and realtime balances",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    tag: "Fintech",
  },
];

const visualShots = [
  {
    title: "Fintech performance dashboard",
    subtitle: "MRR, churn, and cohorts at a glance.",
    image:
      "https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1600&q=80",
    tag: "Software UI",
  },
  {
    title: "Coin & payments flow",
    subtitle: "Wallet balances, payout schedules, and FX view.",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46e6?auto=format&fit=crop&w=1600&q=80",
    tag: "Fintech",
  },
  {
    title: "Product design system",
    subtitle: "Components, spacing, and typography tokens.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    tag: "Design",
  },
  {
    title: "Crypto ops console",
    subtitle: "Coin prices, order books, and treasury split by chain.",
    image:
      "https://images.unsplash.com/photo-1612178537253-5790d4dc5a72?auto=format&fit=crop&w=1600&q=80",
    tag: "Crypto",
  },
  {
    title: "Analytics cockpit",
    subtitle: "Funnels, heatmaps, and alerts prioritized by impact.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tag: "Analytics",
  },
  {
    title: "Mobile product UI",
    subtitle: "Hand-off ready mobile screens with component specs.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    tag: "Mobile",
  },
];

const industries = [
  "Real Estate",
  "Logistics",
  "E-commerce",
  "Government",
  "Healthcare",
  "Education",
  "Oil & Gas",
  "Hospitality",
];

const evaluationPoints = [
  "Discovery, risks, and success metrics captured early.",
  "Architecture review with security, scale, and observability in mind.",
  "UX flow maps with component libraries for fast build-out.",
  "Roadmap with weekly demos and measurable milestones.",
];

const caseStudies = [
  { title: "E‑Commerce Platform", detail: "Scalable storefront + OMS", badge: "Launch-ready" },
  { title: "Healthcare Website", detail: "HIPAA-aware patient journeys", badge: "Compliance" },
  { title: "Fintech Mobile App", detail: "Secure onboarding + KYC", badge: "Mobile-first" },
];

const teamMembers = [
  { name: "James Carter", role: "Product Lead" },
  { name: "Michael Thompson", role: "Engineering" },
  { name: "Daniel Wilson", role: "Delivery" },
];

const clients = [
  {
    name: "Hum-safar.com",
    detail: "Matrimonial platform engineered for reliability and trust at scale.",
    badge: "Platform partner",
  },
  {
    name: "Arabica Cafe",
    detail: "Live cafe management suite with POS, inventory, and staff ops.",
    badge: "Cafe suite",
  },
  {
    name: "Enterprise Cloud",
    detail: "Confidential client using our managed cloud + observability stack.",
    badge: "Cloud & SRE",
  },
];

const faqs = [
  {
    q: "How fast can we start?",
    a: "Discovery in 48 hours, a scoped roadmap in 5–7 days, and first usable build inside 3 weeks.",
  },
  {
    q: "Do you support existing systems?",
    a: "Yes. We modernize, extend APIs, refactor monoliths, and set up observability without downtime.",
  },
  {
    q: "Can you host and manage?",
    a: "We provide cloud landing zones, FinOps, backups, and 24/7 monitoring so you can focus on your product.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.07,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Home() {
  const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const { scrollYProgress } = useScroll();
  const scrollWidth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.3,
  });

  return (
    <div id="top" className="relative min-h-screen overflow-hidden text-white">
      <motion.div
        className={`fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r ${brandGradient}`}
        style={{ scaleX: scrollWidth }}
      />
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10 pb-24">
        <Section className="pt-16 sm:pt-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-6 sm:p-10 shadow-[0_30px_140px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-60 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur"
                >
                  <Sparkles className="h-4 w-4 text-white/80" />
                  Modern IT solutions for teams that move fast
                </motion.div>
                  <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
                  className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                >
                  Asxora builds the software, cloud, and systems that power{" "}
                  <span className="relative inline-flex">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
                      className={`absolute inset-x-0 bottom-1 h-3 rounded-full bg-gradient-to-r ${brandGradient} origin-left opacity-80`}
                    />
                    <span className="relative">bold businesses.</span>
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                  className="max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
                >
                  From bespoke ERPs and CRMs to mobile apps and cloud-native platforms, we design, ship, and run
                  reliable technology that scales with you.
                </motion.p>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -2, scale: 1.01, boxShadow: "0 15px 45px rgba(255,255,255,0.25)" }}
                    whileTap={{ scale: 0.99 }}
                    className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${brandGradient} px-5 py-3 text-sm font-semibold text-black transition`}
                  >
                    Start a project
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                  <motion.a
                    href="#solutions"
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                  >
                    View solutions
                    <Link2 className="h-4 w-4" />
                  </motion.a>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white/70 backdrop-blur">
                    <ShieldCheck className="h-4 w-4 text-white/80" />
                    SLA-backed delivery
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {["Web & Mobile", "ERP / CRM", "Cloud & DevOps"].map((item, i) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      custom={i}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 backdrop-blur shadow-[0_12px_48px_rgba(0,0,0,0.35)]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0d]/80 shadow-[0_24px_120px_rgba(0,0,0,0.55)]">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    minHeight: "420px",
                    backgroundImage:
                      "linear-gradient(135deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1600&q=80')",
                  }}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-black/55" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/85 backdrop-blur">
                    Device preview
                  </div>
                  <p className="text-lg font-semibold text-white">Ship fast with production-ready UIs.</p>
                  <p className="text-sm text-white/75">
                    Dashboard, mobile, and marketing experiences delivered with component libraries and design systems ready for handoff.
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/70">
                    <CheckCircle2 className="h-4 w-4 text-white/85" />
                    Weekly demos · QA&apos;d builds · Analytics wired
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="mt-12">
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { label: "Years building", value: "12+" },
              { label: "Projects shipped", value: "150+" },
              { label: "Deployments & releases", value: "2,554+" },
              { label: "Industries served", value: "10+" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5 p-4 text-center shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-white/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="mt-16">
          <SectionHeading
            eyebrow="Evaluation & Design"
            title="Your vision, our code."
            description="Upfront evaluation, architecture, and UI flows so delivery moves fast and stays predictable."
          />
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f]/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-40 blur-2xl" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80">
                  <CheckCircle2 className="h-4 w-4" />
                  Evaluation track
                </div>
                <p className="text-lg font-semibold text-white">Evaluation & Design</p>
                <p className="text-sm text-white/70">
                  We clarify goals, guardrails, and UI patterns before we write the first line of code—reducing rework and keeping
                  stakeholders aligned.
                </p>
                <div className="grid gap-2 text-sm text-white/80">
                  {evaluationPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/80" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f]/70 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-transparent to-white/6 opacity-40 blur-2xl" />
              <div className="relative grid gap-3 text-sm text-white/80">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.12em] text-white/60">Solutions for every industry</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold text-white/70">
                    Configurable
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {industries.map((sector, i) => (
                    <motion.div
                      key={sector}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-white"
                    >
                      {sector}
                      <ArrowRight className="h-4 w-4 text-white/70" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="services" className="mt-16">
          <SectionHeading
            eyebrow="What we do"
            title="Strategy, engineering, and operations in one team."
            description="We build software that is delightful for users, pragmatic for operators, and measurable for leadership."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 transition group-hover:opacity-100" />
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/70">{service.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="solutions" className="mt-20">
          <SectionHeading
            eyebrow="Solutions"
            title="From product builds to ready-to-use systems."
            description="Choose full-cycle engineering or deploy our accelerators to go live faster."
          />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.title}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{sol.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{sol.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f0f12] via-[#0c0c0f] to-[#080808] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.1),transparent_30%)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                  Ready-to-use products
                </div>
                <h3 className="mt-3 text-2xl font-semibold text-white">Deploy and go live fast.</h3>
                <p className="mt-2 text-sm text-white/75">
                  Prebuilt, API-first accelerators you can launch immediately and extend with custom modules.
                </p>
                <div className="mt-5 grid gap-3">
                  {products.map((product, i) => (
                    <motion.div
                      key={product.name}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="flex items-start justify-between gap-3 rounded-2xl border border-white/15 bg-black/35 p-4"
                    >
                      <div>
                        <p className="text-sm font-semibold text-white">{product.name}</p>
                        <p className="text-xs text-white/70">{product.desc}</p>
                      </div>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white/90">
                        {product.pill}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  Cafe, School, General ERP – plug and play.
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="mt-20">
          <SectionHeading
            eyebrow="Why choose us"
            title="Leadership + squads aligned on outcomes."
            description="Senior leads with embedded squads, working in weekly demos and measurable milestones."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 rounded-3xl border border-white/12 bg-[#0b0b0f]/70 p-4 backdrop-blur"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{member.name}</p>
                  <p className="text-xs text-white/60">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="mt-20">
          <SectionHeading
            eyebrow="Industries"
            title="Solutions for every industry."
            description="Configurable flows and modules tailored to how your teams already operate."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((sector, i) => (
              <motion.div
                key={sector}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className={`flex items-center justify-between rounded-2xl border border-white/12 bg-gradient-to-r ${brandGradient} px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(255,255,255,0.15)]`}
              >
                {sector}
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            ))}
        </div>
        </Section>

        <Section className="mt-20">
          <SectionHeading
            eyebrow="Case studies"
            title="Proof in delivery."
            description="Recent launches that balanced usability, resilience, and speed."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative overflow-hidden rounded-3xl border border-white/12 bg-[#0c0c10] p-4 shadow-[0_16px_60px_rgba(0,0,0,0.45)] backdrop-blur"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(200,200,200,0.14),transparent_30%)]" />
                <div className="relative space-y-3">
                  <div className="h-28 rounded-2xl border border-white/10 bg-gradient-to-br from-white/15 via-white/5 to-transparent" />
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white">{cs.title}</p>
                    <p className="text-sm text-white/70">{cs.detail}</p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                    {cs.badge}
                  </span>
                </div>
              </motion.div>
            ))}
        </div>
        </Section>

        <Section id="cases" className="mt-20">
          <SectionHeading
            eyebrow="Case studies"
            title="Software, dashboards, and mobile shipped to production."
            description="A snapshot of recent deliveries across commerce, health, and fintech."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {caseShots.map((shot, i) => (
              <motion.div
                key={shot.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/50 shadow-[0_18px_80px_rgba(0,0,0,0.4)]"
              >
                <div
                  className="h-48 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.65)), url('${shot.image}')`,
                  }}
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/25 to-black/50" />
                <div className="relative p-4 space-y-2">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                    {shot.tag}
                  </span>
                  <p className="text-base font-semibold text-white">{shot.title}</p>
                  <p className="text-sm text-white/70">{shot.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="designs" className="mt-20">
          <SectionHeading
            eyebrow="Design snapshots"
            title="Interfaces that feel premium and stay practical."
            description="UI explorations for ERPs, POS, and web apps that reduce cognitive load and surface the right data."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {uiShowcases.map((ui, i) => (
              <motion.div
                key={ui.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02, rotate: -0.3 }}
                transition={{ type: "spring", stiffness: 220, damping: 16 }}
                className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/5 p-5 backdrop-blur"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${ui.accent} opacity-70 blur-3xl transition duration-300 group-hover:opacity-85`}
                />
                <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/15 blur-3xl" />
                <div className="absolute right-6 top-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-white/35 to-white/5 blur-xl opacity-70" />
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                    {ui.icon}
                    Preview
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/35 p-4 shadow-[0_15px_80px_rgba(0,0,0,0.35)]">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <span>Dashboard</span>
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/80">
                        Interactive
                      </span>
                    </div>
                    <div className="mt-3 grid gap-2 text-[11px] text-white/75">
                      <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-white/80" />
                        Status summary, SLA, and live metrics
                      </div>
                      <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-white/70" />
                        Cards, tables, and modals with clear hierarchy
                      </div>
                      <div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-white/60" />
                        Contextual actions and keyboard-friendly flow
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-white">{ui.title}</p>
                    <p className="text-sm text-white/75">{ui.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-white/80">
                    {ui.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
        </Section>

        <Section id="gallery" className="mt-20">
          <SectionHeading
            eyebrow="Visuals"
            title="Dashboards, coins, and product design in action."
            description="A few real-world visuals we deliver: finance dashboards, payment flows, and component-driven design."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {visualShots.map((shot, i) => (
              <motion.div
                key={shot.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/50 shadow-[0_18px_80px_rgba(0,0,0,0.4)]"
              >
                <div
                  className="h-52 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.55)), url('${shot.image}')`,
                  }}
                />
                <div className="absolute inset-0 pointer-events-none opacity-60 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
                <div className="relative p-4 space-y-2">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                    {shot.tag}
                  </span>
                  <p className="text-base font-semibold text-white">{shot.title}</p>
                  <p className="text-sm text-white/70">{shot.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="clients" className="mt-20">
          <SectionHeading
            eyebrow="Clients"
            title="Trusted by operators who demand stability."
            description="We partner closely—from roadmap to launch to day-2 operations."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {clients.map((client, i) => (
              <motion.div
                key={client.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-white">{client.name}</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80">
                    {client.badge}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/70">{client.detail}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white/70">
                  <Sparkles className="h-4 w-4 text-white/80" />
                  Delivered by Asxora
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="cloud" className="mt-20">
          <SectionHeading
            eyebrow="Cloud & Reliability"
            title="Secure, observable, and cost-aware cloud foundations."
            description="Landing zones, IaC, Kubernetes, and managed services tailored for uptime, performance, and spend visibility."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Cloud Landing Zone",
                desc: "Best-practice guardrails, SSO, VPC design, backups, and policy-as-code.",
                icon: <Cloud className="h-5 w-5" />,
              },
              {
                title: "Observability",
                desc: "Dashboards, alerts, tracing, and SLOs mapped to business outcomes.",
                icon: <Server className="h-5 w-5" />,
              },
              {
                title: "Performance & FinOps",
                desc: "Load testing, autoscaling, caching, and spend controls with monthly reports.",
                icon: <Building2 className="h-5 w-5" />,
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="faq" className="mt-20">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before we kick off."
            description="No fluff—how we work, how we ship, and how we keep you in control."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {faqs.map((item, i) => (
              <motion.div
                key={item.q}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-white/80 backdrop-blur"
              >
                <p className="text-base font-semibold text-white">{item.q}</p>
                <p className="mt-2">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#0f0f12] via-[#0c0c10] to-[#070708] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.12),transparent_30%)]" />
            <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white/80 backdrop-blur">
                  <Image src="/icons/logo-icon-white.svg" alt="Asxora logo" width={16} height={16} />
                  asxora.io
                </div>
                <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/80">
                  Let&apos;s build together
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Tell us about your product, platform, or the operations you want to streamline.
                </h3>
                <p className="mt-2 text-sm text-white/75">
                  We respond within one business day with next steps and a lightweight plan.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2">
                    <Sparkles className="h-4 w-4 text-white/80" />
                    Strategy + Delivery
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2">
                    <ShieldCheck className="h-4 w-4 text-white/80" />
                    SLA-backed
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-2">
                    <Cloud className="h-4 w-4 text-white/80" />
                    Cloud-first
                  </span>
                </div>
              </div>

              <form
                className="grid gap-3 rounded-2xl border border-white/15 bg-black/40 p-5 text-sm text-white/80 backdrop-blur"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const payload = {
                    name: formData.get("name"),
                    email: formData.get("email"),
                    company: formData.get("company"),
                    budget: formData.get("budget"),
                    project: formData.get("project"),
                  };
                  try {
                    setLeadStatus("loading");
                    const res = await fetch("/api/leads", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });
                    if (!res.ok) throw new Error("Failed");
                    setLeadStatus("sent");
                    e.currentTarget.reset();
                  } catch {
                    setLeadStatus("error");
                  }
                }}
              >
                <div className="flex items-center gap-3">
                  <Image src="/icons/logo-icon-white.svg" alt="Asxora logo" width={18} height={18} />
                  <div className="text-xs uppercase tracking-[0.14em] text-white/70">Start a project</div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="space-y-1">
                    <span className="text-[11px] uppercase tracking-[0.08em] text-white/60">Name</span>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-0 focus:border-white/30"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-[11px] uppercase tracking-[0.08em] text-white/60">Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-0 focus:border-white/30"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="space-y-1">
                    <span className="text-[11px] uppercase tracking-[0.08em] text-white/60">Company</span>
                    <input
                      name="company"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-0 focus:border-white/30"
                      placeholder="Company / team"
                    />
                  </label>
                  <label className="space-y-1">
                    <span className="text-[11px] uppercase tracking-[0.08em] text-white/60">Budget</span>
                    <input
                      name="budget"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-0 focus:border-white/30"
                      placeholder="e.g. $20k - $60k"
                    />
                  </label>
                </div>
                <label className="space-y-1">
                  <span className="text-[11px] uppercase tracking-[0.08em] text-white/60">Project</span>
                  <textarea
                    name="project"
                    rows={3}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white outline-none ring-0 focus:border-white/30"
                    placeholder="What do you want to build or improve?"
                  />
                </label>
                <button
                  type="submit"
                  disabled={leadStatus === "loading"}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px] hover:bg-white/90 disabled:opacity-70"
                >
                  {leadStatus === "loading" ? "Sending..." : leadStatus === "sent" ? "Sent!" : "Send request"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {leadStatus === "error" ? (
                  <p className="text-xs text-red-200">Something went wrong. Try again.</p>
                ) : null}
              </form>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
