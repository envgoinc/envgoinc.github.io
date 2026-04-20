import { motion } from "framer-motion";
import { Users, Rocket, Target } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const About = () => (
  <main>
    {/* Hero */}
    <section className="pt-28 pb-16">
      <div className="container">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block px-3 py-1 mb-4 text-xs font-body font-medium uppercase tracking-[0.15em] rounded-full border border-primary/40 text-primary bg-primary/10"
        >
          About ENVGO
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[40px] md:text-[68px] leading-[1.1] font-heading font-light max-w-3xl"
        >
          Built by Pioneers in{" "}
          <span className="text-gradient">Autonomous Flight</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 text-lg font-body font-normal text-muted-foreground max-w-2xl"
        >
          ENVGO is a marine technology company providing solutions to defence, transportation, and recreation markets, making boating clean, efficient, and intelligent.
        </motion.p>
      </div>
    </section>

    {/* Mission cards */}
    <section className="py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Target}
          title="Our Mission"
          description="To become the leading provider of performance boats and integrated solutions in the marine industry, combining hydrofoil efficiency with intelligent autonomy."
          index={0}
        />
        <FeatureCard
          icon={Rocket}
          title="Our Heritage"
          description="The core team designed and built autonomous flight control systems at Aeryon Labs, an early drone industry innovator acquired by FLIR Systems for $200M in 2019."
          index={1}
        />
        <FeatureCard
          icon={Users}
          title="Our Approach"
          description="Like Aeryon, we tightly integrate system design: drivetrains, hydrofoils, batteries, and control systems engineered as a unified platform for maximum performance."
          index={2}
        />
      </div>
    </section>

    {/* Story */}
    <section className="py-20 section-fade">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-semibold mb-6"
        >
          Our Story
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 font-body font-normal text-muted-foreground leading-relaxed"
        >
          <p>
            The marine industry has faced major challenges in electrification compared to the rapid advances in the automotive sector. Traditional planing boats require about 10x the power of cars, especially at high speeds. With such high power draw, conventional electric boats are severely limited in speed or range.
          </p>
          <p>
            ENVGO was founded to solve this fundamental problem. Our hydrofoil platform lifts the boat's body out of the water as it gains speed, decreasing drag and reducing battery requirements by ⅔ compared to planing boats. Combined with the latest autonomous flight control systems, ENVGO incorporates smart control and safety capabilities, like obstacle avoidance, that aren't part of today's conventional boats.
          </p>
          <p>
            At Aeryon Labs, we learned that outperformance comes from tight system integration: payloads aware of flight dynamics, batteries designed as part of the whole system. We're applying that same philosophy to marine technology, building purpose-driven solutions across defence, transportation, and recreation markets.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Two-phase approach */}
    <section className="py-20">
      <div className="container max-w-3xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-semibold mb-6"
        >
          Go-to-Market Strategy
        </motion.h2>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="font-heading font-semibold text-primary mb-2">Phase I: Demonstrate & Validate</h3>
            <p className="text-sm font-body font-normal text-muted-foreground">
              Technology demonstration and validation platforms (USV1, FT1, NV1) enable potential customers to evaluate the benefits of electric, foiling, and autonomous marine capabilities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="font-heading font-semibold text-primary mb-2">Phase II: Purpose-Built Solutions</h3>
            <p className="text-sm font-body font-normal text-muted-foreground">
              Fit-for-purpose designs customized to end-user requirements, developed in partnership with customers and produced with marine industry manufacturing partners.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </main>
);

export default About;
