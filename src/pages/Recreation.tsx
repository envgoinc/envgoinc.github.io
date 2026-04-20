import { Sparkles, Battery, Gauge, ShieldCheck, Anchor, Waves, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ImageCarousel from "@/components/ImageCarousel";
import SpecTable from "@/components/SpecTable";

import nv1Foiling from "@/assets/nv1-foiling-city.jpg";
import nv1Lifestyle from "@/assets/nv1-lifestyle.jpg";
import nv1PalmBeach from "@/assets/nv1-palmbeach-lifestyle.png";
import nv1Dimensions from "@/assets/nv1-dimensions.png";
import nv1FlightDiagram from "@/assets/nv1-flight-diagram-clean.png";
import nv1ConceptSketches from "@/assets/nv1-concept-sketches.jpg";
import nv1Magenta from "@/assets/nv1-magenta-edition.jpg";
import nv1Interior from "@/assets/nv1-interior-luxury.jpg";

const carouselImages = [
  { src: nv1Foiling, alt: "NV1 foiling above water with city skyline" },
  { src: nv1PalmBeach, alt: "NV1 at Palm Beach lifestyle showcase" },
  { src: nv1Magenta, alt: "NV1 Magenta Edition at sunset dock" },
  { src: nv1Interior, alt: "NV1 luxury interior with quilted leather seats" },
];

const features = [
  { icon: Sparkles, title: "Flight experience", desc: "Rise above the waves. Smooth, silent flight delivers a sensation unlike any conventional boat." },
  { icon: Battery, title: "All-day range", desc: "4× efficiency makes electric range practical for a full day on the water. No range anxiety." },
  { icon: Gauge, title: "0 to flight in 7 sec", desc: "Max speed 80 kph. Performance without the noise, fumes, or compromise." },
  { icon: ShieldCheck, title: "Smart safety", desc: "Swimmer detection, virtual bumpers, and obstacle avoidance — safer and easier than ever." },
  { icon: Anchor, title: "Virtual anchor", desc: "AI-powered position hold. No traditional anchoring needed. Perfect for swimming and relaxation." },
  { icon: Waves, title: "Zero maintenance", desc: "No oil changes. No winterization. Electric simplicity means more time on the water." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Recreation = () => (
  <main>
    {/* ── HERO ── */}
    <section className="relative h-[60vh] min-h-[420px] flex items-end">
      <img
        src={nv1Foiling}
        alt="NV1 hydrofoil flying above water"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="container relative z-10 pb-10">
        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="inline-block px-3 py-1 mb-3 text-[10px] font-body font-medium uppercase tracking-[0.15em] rounded-full border border-primary/40 text-primary bg-primary/10"
        >
          NV1 Founders Edition
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[28px] md:text-[44px] leading-[1.1] font-heading font-light max-w-2xl"
        >
          This isn't boating; it's flight.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-base md:text-lg font-body text-muted-foreground max-w-xl"
        >
          The world's first performance-class electric hydrofoil, engineered for those who see the future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-5 flex items-center gap-5"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:brightness-110 transition-all"
          >
            Request a sea trial <ArrowRight className="w-4 h-4" />
          </Link>
          <span className="text-[11px] font-body font-medium tracking-[0.2em] text-primary/70 uppercase">
            Silent · Smooth · Elevated
          </span>
        </motion.div>
      </div>
    </section>

    {/* ── WHAT FLIGHT FEELS LIKE ── */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-primary">The experience</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-light leading-tight">
              This is what flight feels like.
            </h2>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed">
              NV1 doesn't push through water. It rises above it. At 20 knots, the hydrofoils autonomously deploy. The hull lifts. Drag disappears. What replaces it is something closer to flight than anything the marine world has produced before.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              An advanced flight control system executes more than 250 micro-adjustments per second — the same discipline that guided autonomous aerial systems in defence environments. You feel none of the work. Only the result.
            </p>
            <p className="mt-6 font-body font-semibold text-foreground tracking-wide">
              Silent. Smooth. Elevated.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <img
              src={nv1FlightDiagram}
              alt="NV1 hydrofoil side profile"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── LIFESTYLE CAROUSEL ── */}
    <section className="pb-24">
      <div className="container">
        <motion.div {...fadeUp}>
          <ImageCarousel images={carouselImages} interval={6000} />
        </motion.div>
      </div>
    </section>

    {/* ── KEY STATS ── */}
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div {...fadeUp} className="flex justify-center mb-12">
          <img
            src={nv1FlightDiagram}
            alt="NV1 hydrofoil side profile"
            className="w-full max-w-4xl"
          />
        </motion.div>
        <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-10 md:gap-16 text-center">
          {[
            { val: "43 kt", label: "Top speed (50 mph)" },
            { val: "54 nmi", label: "Range (62 mi)" },
            { val: "7 sec", label: "0 to flight" },
            { val: "4×", label: "Efficiency gain" },
          ].map((s, i) => (
            <div key={s.label} className={`${i > 0 ? "border-l border-primary/30 pl-10 md:pl-16" : ""}`}>
              <div className="text-2xl md:text-3xl font-heading font-semibold text-foreground">{s.val}</div>
              <div className="text-xs font-body text-muted-foreground uppercase tracking-wider mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── FEATURES ── */}
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-primary">Engineered for the extraordinary</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-light">
            Every detail, reimagined
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 glow-border"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── DIMENSIONS & SPECS ── */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <img
              src={nv1Dimensions}
              alt="NV1 dimensions and design"
              className="w-full rounded-xl"
            />
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <SpecTable
              title="NV1 Specifications"
              specs={[
                { label: "Length", value: "25 ft" },
                { label: "Beam", value: "8.5 ft" },
                { label: "Draft (foils retracted)", value: '32"' },
                { label: "Draft (foils deployed)", value: '60"' },
                { label: "Max Speed", value: "80 kph" },
                { label: "Cruise Speed", value: "40 kph" },
                { label: "Range at Cruise", value: "100 km" },
                { label: "Acceleration", value: "0 to foiling in 7 sec" },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── WORLD-CLASS DESIGN ── */}
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-primary">World-Class Design</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-light leading-tight">
              Built for Those Who Recognize Excellence
            </h2>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed">
              NV1 is the fusion of elite design and uncompromising performance.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              Superyacht designer <span className="text-foreground font-semibold">J. David Weiss</span> sculpted its presence — refined, striking, and unmistakably refined.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              America's Cup naval architect <span className="text-foreground font-semibold">Steve Killing</span> engineered its edge, delivering the precision and responsiveness of championship racing.
            </p>
            <p className="mt-6 font-body font-semibold text-foreground tracking-wide">
              This is performance, elevated to art.
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <img
              src={nv1ConceptSketches}
              alt="ENVGO NV1 concept design sketches"
              className="w-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── FINAL CTA ── */}
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="container relative z-10 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-3xl md:text-5xl font-heading font-light">
            Fly above.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground font-body max-w-xl mx-auto">
            NV1 Founders Edition. A first and final founding allocation offered to those who recognize the beginning of something new.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:brightness-110 transition-all"
            >
              Request a sea trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/technology"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/40 text-primary font-body font-semibold text-sm hover:bg-primary/10 transition-all"
            >
              Explore the technology
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

export default Recreation;
