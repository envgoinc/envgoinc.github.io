import { Ship, Leaf, DollarSign, Clock, Users, Shield } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import SpecTable from "@/components/SpecTable";
import { motion } from "framer-motion";
import transportHero from "@/assets/transport-hero.png";

const features = [
  { icon: Leaf, title: "Zero Emissions", description: "Clean electric operations with no smell, no fumes, and no noise, transforming waterfront communities." },
  { icon: DollarSign, title: "Lower Operating Costs", description: "4x efficiency of hydrofoils greatly reduces operating costs compared to conventional gas-powered vessels." },
  { icon: Clock, title: "Rapid Transit", description: "Flight over waves reduces travel time significantly compared to traditional displacement hull water taxis." },
  { icon: Users, title: "Enhanced Experience", description: "Smooth flight over water provides a premium, luxurious passenger experience unlike any conventional ferry." },
  { icon: Shield, title: "Autonomous Safety", description: "Obstacle detection increases safety. Autonomous control reduces operator workload for reliable service." },
  { icon: Ship, title: "Reduced Maintenance", description: "Electric drivetrain eliminates the complex maintenance requirements of combustion engines." },
];

const Transportation = () => (
  <main>
    <PageHero
      image={transportHero}
      badge="Marine Transportation"
      title="The Future of Water Transit"
      subtitle="Zero-emission hydrofoil water taxis delivering efficient, luxurious coastal and inland transportation."
    />

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 section-fade">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-primary">Phase I: Available now</span>
            <h3 className="font-heading font-semibold text-xl mt-2 mb-2">FT1 Water Taxi</h3>
            <p className="text-sm font-body font-normal text-muted-foreground">
              A 25', 4-passenger + 2-crew luxury water taxi. Designed for inland lake transportation, sea states up to 2' waves, and distances up to 50 miles per charge.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-primary">Phase II: In development</span>
            <h3 className="font-heading font-semibold text-xl mt-2 mb-2">FT2 Coastal Ferry</h3>
            <p className="text-sm font-body font-normal text-muted-foreground">
              A 35', 12-passenger + 2-crew luxury water taxi experience. Designed for coastal transportation, sea states up to 4' waves, and distances up to 60 miles per charge.
            </p>
          </motion.div>
        </div>
        <SpecTable
          title="FT1 Key Specifications"
          specs={[
            { label: "Max Speed", value: "80 kph" },
            { label: "Cruise Speed", value: "40 kph" },
            { label: "Range at Cruise", value: "100 km" },
            { label: "Passengers", value: "4 + 2 crew" },
            { label: "Sea State", value: "Up to 2' waves" },
            { label: "Acceleration", value: "0 to foiling in 7 sec" },
          ]}
        />
      </div>
    </section>
  </main>
);

export default Transportation;
