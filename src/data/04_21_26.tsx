import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const upcomingEvents = [
  { name: "Defence and Security Innovation Forum (ACBMI)", location: "Vancouver", date: "April 21–22" },
  { name: "CANSEC", location: "Ottawa", date: "May 27–29" },
  { name: "H2O Home to Overseas", location: "Halifax", date: "June 8–10" },
  { name: "COVE Demo Day", location: "Halifax", date: "June 11" },
];

const capabilities = [
  "Extended operational range and efficiency through reduced drag and advanced propulsion",
  "Lower wake and reduced detectability for sensitive missions",
  "Integrated autonomy to enhance safety and enable uncrewed or reduced-crew operations",
  "A flexible architecture adaptable across defence, transportation, and commercial applications",
];

const DefenceExpansion = () => (
  <main className="bg-background">

    {/* ═══ HERO ═══ */}
    <section className="pt-[140px] pb-[60px]">
      <div className="container max-w-[1100px]">
        <motion.span
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          className="inline-block mb-5 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine"
        >
          Press Release — April 21, 2026
        </motion.span>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] md:text-[52px] leading-[1.1] font-heading font-light max-w-[900px] mb-6"
        >
          ENVGO Expands into Defence and Public Safety, Bringing Next-Generation Marine Capability to Canada and Allied Markets
        </motion.h1>
        {/* <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-body text-envgo-grey leading-relaxed max-w-[600px]"
        >
          ENVGO Expands into Defence and Public Safety, Bringing Next-Generation Marine Capability to Canada and Allied Markets
        </motion.p> */}
      </div>
    </section>

    {/* ═══ HERO IMAGE ═══ */}
    <section className="pb-[80px]">
      <div className="container max-w-[1100px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden"
        >
          <img
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69e7a63907c3ebc8b17dbf6e_NV1%20Stealth%20Wrap%20(1).png"
            alt=""
            loading="lazy"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>

    {/* ═══ ARTICLE BODY ═══ */}
    <section className="pb-[100px]">
      <div className="container max-w-[1100px]">
        <div className="grid md:grid-cols-[1fr_280px] gap-16 items-start">

          {/* Body copy */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 font-body text-base leading-relaxed"
          >
            <p>
              <strong>Waterloo, ON | April 21</strong> — ENVGO today announced its strategic expansion into defence
              and public safety, positioning the company at the forefront of a new generation of marine capability
              designed to meet the evolving needs of Canada and its allies.
            </p>

            <p>
              The move reflects a growing global imperative: nations must strengthen sovereign defence capabilities,
              modernize maritime infrastructure, and adopt advanced technologies that can operate effectively in
              increasingly complex environments.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "At a time when Canada is being called to do more — to defend its sovereignty, the Arctic, contribute
                meaningfully to its allies, and build capability at home — we see a clear role for a new kind of
                marine vessel. We're building on the capabilities that we've demonstrated in our showcase hydrofoiling
                platform, NV1. We're bringing together technologies that have already transformed other industries and
                applying them to one of the most important domains for Canada: the water."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Mike Peasgood, CEO of ENVGO
              </cite>
            </blockquote>

            <p>
              ENVGO's approach is rooted in the integration of proven technologies from aerospace, robotics, artificial
              intelligence, and electric vehicles into a unified marine vessel. This includes high-efficiency hydrofoil
              systems, clean electric and hybrid propulsion, and AI-native autonomy; designed to work together as an
              operating architecture.
            </p>

            <p>
              While these technologies have advanced rapidly in air and land systems, the maritime sector has lagged
              behind. ENVGO's platform addresses this gap by enabling faster, more efficient, lower-signature, and
              increasingly autonomous vessels that can operate across a wide range of missions.
            </p>

            <p>
              The company believes this capability is particularly relevant to Canada's evolving defence priorities,
              including Arctic sovereignty, coastal security, and maritime domain awareness. Recent Canadian government
              direction has emphasized the need for stronger domestic industrial capacity, modernized military
              capability, and greater strategic autonomy — areas where advanced marine systems will play a critical role.
            </p>

            {/* Capabilities list */}
            <div className="bg-card border border-border rounded-xl p-6 my-8">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-4">Platform Capabilities</p>
              <ul className="space-y-3">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex gap-3 text-sm font-body text-envgo-grey leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-envgo-marine flex-shrink-0 mt-2" />
                    {cap}
                  </li>
                ))}
              </ul>
            </div>

            <p>
              The expansion into defence will initially focus on staged demonstrations, pilot programs, and
              partnerships with government and industry at upcoming defence events, with an emphasis on nearshore
              security, port operations, and autonomous maritime systems.
            </p>

            <p>
              As part of this evolution, ENVGO will continue to offer its flagship NV1 hydrofoiling electric vessel as
              a limited, special-edition product. NV1 serves as both a high-performance showcase of the company's
              technology and a curated offering for a small number of innovators seeking to be first to experience this
              new class of marine mobility.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "Our focus is clear. Demonstrate real capability, in real environments, for real customers. Defence is
                where our platform can have the most immediate impact and where we can contribute to something bigger
                than ourselves: building the next generation of Canadian maritime capability."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Mike Peasgood, CEO of ENVGO
              </cite>
            </blockquote>

            <p>
              ENVGO's leadership team brings deep experience in autonomy, robotics, and mission-critical systems,
              including scaling advanced unmanned systems globally, with Aeryon Labs' UAS platforms across more than
              40 international defence and public safety markets, with deployments aligned with NATO requirements.
            </p>

            <p>
              The company will be engaging with government partners, the Canadian Navy, the Canadian Coast Guard,
              Fisheries and Oceans Canada (DFO), and port operators over the coming months to advance pilot programs
              and demonstration initiatives.
            </p>

            <p>
              To schedule a media briefing or meetings at the upcoming defence demonstrations in Vancouver, Ottawa, and
              Halifax, please contact{" "}
              <a href="mailto:defence@envgo.com" className="text-envgo-marine hover:underline">defence@envgo.com</a>.
            </p>

            {/* About section */}
            <div className="border-t border-border pt-10 mt-10">
              <h4 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-4">About ENVGO</h4>
              <p>
                ENVGO is a Canadian marine technology company building the future of clean, intelligent watercraft for
                defence and recreation. By fusing aerospace engineering with robotics and AI, ENVGO is reimagining
                marine transportation. Its flagship vessel, NV1, is a zero-emission electric hydrofoiling cruiser
                offering an extraordinary "flight over water" experience and four times the efficiency of traditional
                electric boats.
              </p>
              <p className="mt-4">
                Founded by serial entrepreneur Mike Peasgood, ENVGO has deep aerospace and AI expertise from the drone
                and defence sectors. The company is building a scalable, license-ready system enabling OEM partners to
                deliver high-performance, zero-emission hydrofoiling vessels.
              </p>
              <div className="mt-4 space-y-1 text-sm font-body">
                <p>
                  Learn more at{" "}
                  <a href="https://envgoinc.github.io/" target="_blank" rel="noopener noreferrer" className="text-envgo-marine hover:underline">https://envgoinc.github.io/</a>
                </p>
                <p>
                  Media Inquiries:{" "}
                  <a href="mailto:maria@envgo.com" className="text-envgo-marine hover:underline">maria@envgo.com</a>
                </p>
                <p>
                  Defence Inquiries:{" "}
                  <a href="mailto:defence@envgo.com" className="text-envgo-marine hover:underline">defence@envgo.com</a>
                </p>
                <p>
                  <a href="https://drive.google.com/drive/folders/1w82-pmt1JtZJQGsOLOVNPeLcxNgnib2R" target="_blank" rel="noopener noreferrer" className="text-envgo-marine hover:underline">Link to NV1 Showcase Materials</a>
                </p>
              </div>
            </div>

            <p className="text-center tracking-widest text-envgo-grey pt-4"># # #</p>
          </motion.div>

          {/* Sticky sidebar */}
          <motion.aside
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block sticky top-28 space-y-4"
          >
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-4">Upcoming Events</p>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.name} className="border-b border-border pb-3 last:border-0 last:pb-0">
                    <p className="text-xs font-body font-medium text-foreground leading-snug">{event.name}</p>
                    <p className="text-xs font-body text-envgo-grey mt-0.5">{event.location} · {event.date}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-2">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-3">Contact</p>
              <div className="text-xs font-body text-envgo-grey space-y-1">
                <p>Media</p>
                <a href="mailto:maria@envgo.com" className="text-envgo-marine hover:underline block">maria@envgo.com</a>
                <p className="pt-2">Defence</p>
                <a href="mailto:defence@envgo.com" className="text-envgo-marine hover:underline block">defence@envgo.com</a>
              </div>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  </main>
);

export default DefenceExpansion;