import { Shield, Eye, Radar, Zap, Volume2, Radio } from "lucide-react";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import SpecTable from "@/components/SpecTable";
import { motion } from "framer-motion";
import defenceHero from "@/assets/usv.png";

const features = [
  { icon: Volume2, title: "Low Signature", description: "Electric, low-wake architecture reduces acoustic, visual, thermal, and surface-disturbance cues for lower-observable operations." },
  { icon: Radar, title: "Autonomous ISR", description: "Fully autonomous uncrewed foiling vessels (UFV) provide ISR capabilities while keeping crew out of harm's way." },
  { icon: Eye, title: "Object Detection", description: "Automatic object detection and tracking integrates into situational awareness networks for comprehensive overwatch." },
  { icon: Zap, title: "High-Speed Transit", description: "Hydrofoil architecture breaks out of the low-speed displacement envelope, delivering tactically relevant transit speed." },
  { icon: Shield, title: "Dual-Mode Utility", description: "Sprint fast to contact, then slow down for observation, inspection, or sensing. Response speed and persistence in one vehicle." },
  { icon: Radio, title: "Distributed Sensing", description: "Deploy as a forward sensing node, relay asset, or robotic team member in distributed maritime operations." },
];

const Defence = () => (
  <main>
    <PageHero
      image={defenceHero}
      badge="Defence & Security"
      title="Uncrewed. Undetected. Unstoppable."
      subtitle="High-speed, low-signature littoral ISR and rapid-response surface vehicles designed for modern naval operations."
    />

    <section className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-semibold mb-4"
        >
          Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 section-fade">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-semibold mb-4"
          >
            Marine Defence Applications
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-heading font-semibold mt-0 mb-1">UFV1: 25' Uncrewed Foiling Vessel</h3>
              <p className="text-sm font-body font-normal text-muted-foreground">
                A TRL-7 demonstration platform for evaluation of both crew transportation and autonomous ISR in coastal operations.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-heading font-semibold mt-0 mb-1">Blackfin: 2m Micro Uncrewed Foiling Vessel</h3>
              <p className="text-sm font-body font-normal text-muted-foreground">
                A 2m uncrewed foiling vessel for autonomous ISR and mesh network communications relays.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="space-y-6">
          <SpecTable
            title="UFV1 Key Specs"
            specs={[
              { label: "Max Speed", value: "43 kt" },
              { label: "Cruise Speed", value: "20 kt" },
              { label: "Range at Cruise", value: "54 nm" },
              { label: "Acceleration", value: "0 to foiling in 7 sec" },
            ]}
          />
          <SpecTable
            title="Blackfin Micro-UFV Target Specs"
            specs={[
              { label: "Top Speed", value: "25 kt" },
              { label: "Cruise Speed", value: "15 kt" },
              { label: "Cruise Range", value: "20 nm" },
              { label: "Loiter Endurance", value: "8 hours" },
              { label: "Sea-State Handling", value: "SS2-SS3" },
            ]}
          />
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-semibold mb-6"
        >
          Primary Use Cases
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Littoral ISR & Route Reconnaissance", desc: "Rapid transit to a point of interest, collection of EO/IR or other mission data, and repositioning without exposing personnel." },
            { title: "Port & Harbor Security", desc: "Fast-response patrol, perimeter monitoring, inspection, and incident assessment in constrained or high-traffic waters." },
            { title: "Nearshore Survey & Hydrographic Recon", desc: "Quick movement between survey areas followed by slow, controlled station-keeping for data collection." },
            { title: "Distributed Sensing & Overwatch", desc: "Employment as a forward sensing node, relay asset, or robotic team member in distributed maritime operations." },
          ].map((uc) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border border-border bg-card"
            >
              <h4 className="font-heading font-semibold text-sm mb-1">{uc.title}</h4>
              <p className="text-xs font-body font-normal text-muted-foreground">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Defence;
