import { Zap, Waves, Brain, Battery, Gauge, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import { motion } from "framer-motion";
import techHero from "@/assets/tech_animation.mp4";

const pillars = [
  {
    icon: Zap,
    title: "Electric & Hybrid Drivetrains",
    description: "Electric and hybrid marine drivetrains with range extenders. Zero emissions, low noise, low thermal signature, and minimal maintenance.",
  },
  {
    icon: Waves,
    title: "High Performance Hydrofoils",
    description: "As speed increases, the hydrofoil lifts the hull, cutting drag by 75% and delivering 4× the range, ensuring smooth, stable flight with integrated control.",
  },
  {
    icon: Brain,
    title: "AI-Powered Autonomy",
    description: "From fully autonomous vessels to smart safety features like obstacle avoidance, swimmer detection, and virtual anchoring. Our flight control expertise powers intelligent marine systems.",
  },
];

const advantages = [
  { icon: Battery, title: "⅔ Less Battery", description: "Hydrofoil efficiency reduces battery requirements by two-thirds compared to traditional planing boats." },
  { icon: Gauge, title: "4x Range at Speed", description: "Low drag foiling architecture delivers four times the range at high cruise speeds." },
  { icon: Shield, title: "Smart Control", description: "Autonomous flight control systems enable capabilities not possible in conventional boats." },
];

const Technology = () => (
  <main>
    {/* Hero text + image below */}
    <section className="pt-32 pb-8">
      <div className="container">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-body font-medium uppercase tracking-[0.15em] rounded-full border border-primary/40 text-primary bg-primary/10"
        >
          Technology Platform
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[40px] md:text-[68px] leading-[1.1] font-heading font-light max-w-3xl"
        >
          AI-native marine technology
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg font-body font-normal text-muted-foreground max-w-2xl"
        >
          A modular technology platform combining electric drivetrains, hydrofoil performance, and AI autonomy to serve defence, transportation, and recreational markets.
        </motion.p>
      </div>
    </section>

<section className="pb-12">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full overflow-hidden rounded-xl bg-black"
    >
      <video
        src={techHero}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="ENVGO NV1 Flight Control System"
        className="block w-full h-auto object-cover pointer-events-none"
      >
        Your browser does not support the video tag.
      </video>
    </motion.div>
  </div>
</section>

    <section className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-semibold mb-4 text-center"
        >
          Platform <span className="text-gradient">Technology Pillars</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {pillars.map((p, i) => (
            <FeatureCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 section-fade">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-semibold mb-4 text-center"
        >
          Key Advantages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {advantages.map((a, i) => (
            <FeatureCard key={a.title} {...a} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-semibold mb-4"
        >
          Ready to learn more?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground font-body mb-8 max-w-xl mx-auto"
        >
          Connect with our team to explore how ENVGO's platform can serve your mission.
        </motion.p>
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
        >
          Get Started
        </motion.a>
      </div>
    </section>
  </main>
);

export default Technology;
