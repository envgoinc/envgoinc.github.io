
import { motion } from "framer-motion";
import { Users, Rocket, Target } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

type TeamMember = {
  name: string;
  role: string;
  linkedin: string;
  image: string;
};

const Jerry = "/src/assets/Jerry.webp";
const April = "/src/assets/April.webp";
const Pete = "/src/assets/Pete.webp";
const Paul = "/src/assets/Paul.webp";
const Mike = "/src/assets/Mike.webp";
const Turbo = "/src/assets/Turbo.webp";

const TEAM: TeamMember[] = [
  { name: "Mike Peasgood",  role: "CEO",              linkedin: "https://www.linkedin.com/in/mike-peasgood/", image: Mike },
  { name: "Mike Tribou",    role: "CTO",              linkedin: "https://www.linkedin.com/in/michaeltribou/", image: Turbo },
  { name: "April Blaylock", role: "System Architect", linkedin: "https://www.linkedin.com/in/aprilblaylock/", image: April },
  { name: "Paul Masojc",    role: "COO",              linkedin: "https://www.linkedin.com/in/paulmasojc/", image: Paul },
  { name: "Pete Keller",    role: "VP Sales & BD",    linkedin: "https://www.linkedin.com/in/pete-keller/", image: Pete },
  { name: "Jerry Mailloux", role: "VP Engineering",   linkedin: "https://www.linkedin.com/in/jerrymailloux/", image: Jerry },
];

type Partner = {
  name: string;
  logo: string;
  url: string;
};

const PARTNERS: Partner[] = [
  { logo: "/src/assets/p0.png",url: "#", name:"" },
  { logo: "/src/assets/p1.png",url: "#", name:"" },
  { logo: "/src/assets/p2.png",  url: "#", name:"" },
  { logo: "/src/assets/p3.png",url: "#", name:"" },
  { logo: "/src/assets/p4.png",  url: "#", name:"" },
  { logo: "/src/assets/p5.png",url: "#", name:"" },
  { logo: "/src/assets/p6.png",  url: "#", name:"" },
  { logo: "/src/assets/p7.png",url: "#", name:"" }
];

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
          ENVGO provides breakthrough marine technology solutions across defence, transportation, and recreational markets, bringing intelligence, performance, and clean propulsion to the water.
        </motion.p>
      </div>
    </section>

    {/* Mission cards */}
    <section className="py-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon={Target}
          title="Our Mission"
          description="To become the global leader in next-generation marine technology, powering intelligent, autonomous, and extremely efficient vessels through high performance hydrofoils and advanced autonomy."
          index={0}
        />
        <FeatureCard
          icon={Rocket}
          title="Proven Defence Expertise"
          description="The core team designed and built autonomous flight control systems at Aeryon Labs, an early drone industry innovator acquired by FLIR Systems in 2019."
          index={1}
        />
        <FeatureCard
          icon={Users}
          title="Our Approach"
          description="To create the highest performance solutions, we tightly integrate system design: drivetrains, hydrofoils, batteries, and control systems engineered as a unified platform for maximum performance."
          index={2}
        />
      </div>
    </section>

    {/* Story */}
    <section className="py-20 section-fade">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-heading font-semibold mb-6"
        >
          We See a Different Future
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-5 font-body font-normal text-muted-foreground leading-relaxed"
        >
          <div>
            <h3 className="text-xl font-heading font-semibold text-foreground">The problem isn't the water</h3>
            <p>
              Marine design has long operated within limits that were never truly questioned: high drag, extreme energy demands, and slow progress toward intelligence, efficiency, and sustainability.
            </p>
            <p>
              While other industries became software and AI-driven, the water remained bound by convention. We saw something else: not incremental improvement, but a fundamentally different way for vessels to move, perform, and think.
            </p>
            <h3 className="text-xl font-heading font-semibold text-foreground pt-4">Intelligence meets flight</h3>
            <p>
              ENVGO was founded to bring that vision to life. We are integrating proven tech from Aerospace, Robotics, AI, and EVs to solve marine challenges:
            </p>
            <p>
              We transform boats into intelligent, high-efficiency machines, lifting them above the water, improving efficiency by a factor of 4, and enabling real-time awareness, autonomy, and safety far beyond traditional vessels. This is not refinement. It is a redefinition of marine.
            </p>
            <h3 className="text-xl font-heading font-semibold text-foreground pt-4">Proven minds, new domain</h3>
            <p>
              Built in Canada and led by serial entrepreneur Mike Peasgood, ENVGO is founded by the team behind Aeryon Labs, the creators of the SkyRanger drone, an autonomous aerial system (UAS) acquired by FLIR Systems in 2019.
            </p>
            <p>
              With deep expertise in aerospace, avionics, and AI, ENVGO is bringing battle-tested autonomy and systems engineering into a new domain: building Canadian sovereign marine technology for defence, transportation, and recreation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Founding Team */}
    <section className="py-20 section-fade">
      <div className="container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 mb-8 text-xs font-body font-medium uppercase tracking-[0.15em] rounded-full border border-primary/40 text-primary bg-primary/10"
        >
          The ENVGO Founding Team
        </motion.span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {TEAM.map(function (member: TeamMember, i: number) {
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/3] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="absolute bottom-3 right-3 flex items-center justify-center w-9 h-9 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-primary hover:border-primary hover:text-primary-foreground text-foreground"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
                <p className="text-xs font-body font-medium uppercase tracking-[0.15em] text-primary mb-1">
                  {member.role}
                </p>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {member.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
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
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent" />

<div className="group relative overflow-hidden">
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-background to-transparent" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-background to-transparent" />

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

export default About;