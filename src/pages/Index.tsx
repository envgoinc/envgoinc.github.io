import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Eye, Radar, Gauge, Leaf, Ship, Zap, Battery, Sparkles } from "lucide-react";
import heroTechBg from "@/assets/hero-tech-bg.jpg";
import nv1Proof from "@/assets/nv1-proof.jpg";
import p0 from "@/assets/p0.png";
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";
import p3 from "@/assets/p3.png";
import p4 from "@/assets/p4.png";
import p5 from "@/assets/p5.png";
import p6 from "@/assets/p6.png";
import p7 from "@/assets/p7.png";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const defenceValues = [
  { icon: Eye, title: "Actionable Intelligence", desc: "Real-time AI-driven sensor fusion for battlefield-ready insights." },
  { icon: Radar, title: "Covert Surveillance", desc: "Near-zero acoustic and thermal signature for undetected ISR." },
  { icon: Shield, title: "Smaller, Safer Platforms", desc: "Compact autonomous vessels that reduce crew risk." },
];

const transportationValues = [
  { icon: Gauge, title: "4× Range & Efficiency", desc: "Dramatically lower energy consumption vs conventional hulls." },
  { icon: Leaf, title: "Zero-Emission Operations", desc: "Electric propulsion for cleaner coastal waterways." },
  { icon: Ship, title: "Intelligent Route Optimization", desc: "AI navigation adapts to sea state and energy in real-time." },
];

const recreationValues = [
  { icon: Zap, title: "Exhilarating Performance", desc: "Flight above water: smooth, silent, and thrilling at speed." },
  { icon: Battery, title: "Extended Range", desc: "Hydrofoil efficiency means more adventure per charge." },
  { icon: Sparkles, title: "Next-Gen Experience", desc: "AI-assisted stability makes high-performance boating accessible." },
];

const techSources = [
  { label: "Aerospace", color: "text-envgo-marine" },
  { label: "Robotics", color: "text-envgo-neon" },
  { label: "AI", color: "text-envgo-marine" },
  { label: "EVs", color: "text-envgo-neon" },
];

type Partner = {
  name: string;
  logo: string;
  url: string;
};

const PARTNERS: Partner[] = [
  { logo: p0, url: "https://twosmallfish.vc", name: "Two Small Fish" },
  { logo: p1, url: "https://www.graphitevc.com", name: "Graphite Ventures" },
  { logo: p2, url: "https://www.acceleratorcentre.com", name: "The Accelerator Centre" },
  { logo: p3, url: "https://designovacreative.com", name: "Design Nova" },
  { logo: p4, url: "https://www.garage.vc", name: "Garage Capital" },
  { logo: p5, url: "https://www.nventure.ca", name: "NCFDC" },
  { logo: p6, url: "https://natural-resources.canada.ca/corporate/planning-reporting/departmental-plan/rpp-2016-17/sustainable-development-technology-canada-sdtc-sd-tech-fund", name: "SDTC" },
  { logo: p7, url: "https://www.thrive-fwd.com", name: "Thrive Forward" },
];
const Index = () => (
  <main>
    {/* ═══ HERO ═══ */}
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <img
        src={heroTechBg}
        alt="Abstract technology visualization"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block mb-6 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine"
          >
            Marine Technology Platform
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] md:text-[68px] leading-[1.1] font-heading font-light"
          >
            Powering the next era of marine mobility.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg font-body font-normal text-envgo-grey max-w-[560px]"
          >
            Our ENVGO platform advances intelligent, clean, and high-performance marine systems across defence, commercial, and recreational applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <Link
              to="/contact"
              className="px-7 py-3 rounded-full bg-envgo-marine text-primary-foreground font-body font-bold text-sm uppercase tracking-wide transition-all marine-glow-hover"
            >
              Get started
            </Link>
            <Link
              to="/technology"
              className="px-7 py-3 rounded-full border border-foreground text-foreground font-body font-bold text-sm uppercase tracking-wide hover:bg-foreground/10 transition-all"
            >
              See how it works
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-envgo-marine animate-scroll-indicator" />
      </motion.div>
    </section>

    {/* ═══ TECHNOLOGY CONVERGENCE ═══ */}
    <section className="py-[100px] bg-background">
      <div className="container max-w-[1100px]">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
          <span className="block mb-4 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">
            Technology Convergence
          </span>
          <h2 className="text-3xl md:text-[42px] leading-tight font-heading font-light">
            We bring proven tech from{" "}
            {techSources.map((s, i) => (
              <span key={s.label}>
                {i > 0 && (i === techSources.length - 1 ? ", and " : ", ")}
                <span className={s.color}>{s.label}</span>
              </span>
            ))}
          </h2>
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-lg font-body font-normal text-envgo-grey max-w-[620px] mx-auto">
            to solve the marine industry's hardest challenges, and accelerate the move toward smarter, more efficient systems.
          </motion.p>
        </motion.div>
      </div>
    </section>

    {/* ═══ WHAT OUR TECH UNLOCKS ═══ */}
    <section className="py-[100px] bg-section-alt">
      <div className="container max-w-[1100px]">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <span className="block mb-4 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">
            What Our Tech Unlocks
          </span>
          <h2 className="text-3xl md:text-[42px] leading-tight font-heading font-light">
            Built for those that demand more.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SectorColumn title="Defence" linkTo="/defence" values={defenceValues} delay={0} />
          {/* <SectorColumn title="Transportation" linkTo="/transportation" values={transportationValues} delay={0.15} /> */}
          <SectorColumn title="Recreation" linkTo="/recreation" values={recreationValues} delay={0.3} />
        </div>
      </div>
    </section>

    {/* ═══ PROOF POINT — NV1 ═══ */}
    <section className="relative min-h-[550px] flex items-end overflow-hidden">
      <img
        src={nv1Proof}
        alt="NV1 hydrofoil electric boat in flight"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={720}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />

      <div className="container relative z-10 pb-16 pt-40 max-w-[1100px]">
        <motion.span variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block mb-4 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">
          Proven on the Water
        </motion.span>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-3xl md:text-[42px] leading-tight font-heading font-light max-w-2xl">
          NV1 is the proof: all of these technologies, integrated and working today.
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-4 text-base font-body font-normal text-envgo-grey max-w-[520px] leading-relaxed">
          The world's first high-performance hydrofoiling electric boat. Every system available for licensing is operating aboard NV1 today, proven in real-world conditions.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-body uppercase tracking-wide text-envgo-grey">
          {["80 km/h", "100 km range", "7 sec to flight", "Zero emissions"].map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              {i > 0 && <span className="w-px h-4 bg-envgo-marine/60" />}
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <Link to="/recreation" className="inline-flex items-center gap-2 mt-6 text-sm font-body font-medium text-envgo-marine hover:underline">
            Experience NV1 take flight <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ═══ WE'VE BUILT THIS BEFORE ═══ */}
    <section className="py-[100px] bg-background">
      <div className="container max-w-[1100px]">
        <div className="max-w-2xl">
          <motion.span variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block mb-4 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">
            From Air to Sea
          </motion.span>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-2xl md:text-[36px] leading-tight font-heading font-light mb-6">
            We are building what marine has never seen before.
          </motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="space-y-4 text-base font-body font-normal text-envgo-grey leading-relaxed">
            <p>
              Aerospace precision, engineered in Canada. Obsession in every detail. Designed to redefine what vessels should be.
            </p>
            <p className="italic">
              Built by a team with deep roots in aerospace, AI, and defense.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-6">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-body font-medium text-envgo-marine hover:underline">
              Our Philosophy <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    

    {/* ═══ FINAL CTA ═══ */}
    <section className="py-[120px] bg-envgo-cruise/20">
      <div className="container max-w-[1100px] text-center">
        <motion.span variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="block mb-4 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">
          Get Started with ENVGO
        </motion.span>
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-3xl md:text-[52px] leading-tight font-heading font-light max-w-3xl mx-auto">
          Unlock what's possible with us.
        </motion.h2>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-6 text-lg font-body font-normal text-envgo-grey max-w-[520px] mx-auto">
          We hold the technology platform that makes the next generation of marine vessels possible.
        </motion.p>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link
            to="/contact"
            className="px-7 py-3 rounded-full bg-envgo-marine text-primary-foreground font-body font-bold text-sm uppercase tracking-wide marine-glow-hover transition-all"
          >
            Get started
          </Link>
        </motion.div>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.5 }} className="mt-6 text-[13px] font-body text-envgo-grey">
          ENVGO. The platform powering the next generation of marine vessels.
        </motion.p>
      </div>
    </section>

      {/* Partners */}
    <section className="py-16 section-fade overflow-hidden">
      <div className="container mb-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 text-xs font-body font-medium uppercase tracking-[0.15em] rounded-full border border-primary/40 text-primary bg-primary/10"
        >
          Our Partners
        </motion.span>
      </div>
  {/* <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent" /> */}

<div className="group relative overflow-hidden">
<div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent hidden md:block" />
<div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent hidden md:block" />

  <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
    {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
      <a
        // key={`${partner.name}-${i}`}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center justify-center mr-28 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-24 w-auto object-contain"
        />
      </a>
    ))}
  </div>
  </div>
    </section>
  </main>
);

/* ─── Sector Column Component ─── */
interface ValueItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const SectorColumn = ({ title, linkTo, values, delay }: { title: string; linkTo: string; values: ValueItem[]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="p-6 rounded-xl bg-card border border-border"
  >
    <h3 className="text-lg font-heading font-semibold mb-6 text-envgo-marine">{title}</h3>
    <div className="space-y-5">
      {values.map((v) => (
        <div key={v.title} className="flex gap-3 items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-envgo-marine/10 flex items-center justify-center">
            <v.icon className="w-4 h-4 text-envgo-marine" />
          </div>
          <div>
            <h4 className="text-sm font-heading font-semibold mb-0.5">{v.title}</h4>
            <p className="text-xs font-body font-normal text-envgo-grey leading-relaxed">{v.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <Link to={linkTo} className="inline-flex items-center gap-2 mt-6 text-sm font-body font-medium text-envgo-marine hover:underline">
      Explore {title} <ArrowRight size={14} />
    </Link>
  </motion.div>
);

export default Index;
