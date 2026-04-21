import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const SeedRound = () => (
  <main className="bg-background">

    {/* ═══ HERO ═══ */}
    <section className="pt-[140px] pb-[60px]">
      <div className="container max-w-[1100px]">
        {/* Big stat callout */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-4 block">
            Press Release — June 10, 2025
          </span>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-[72px] md:text-[100px] font-heading font-light leading-none text-envgo-marine">$2M</span>
            <span className="text-xl font-body text-envgo-grey">USD Seed Round</span>
          </div>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[28px] md:text-[44px] leading-[1.1] font-heading font-light max-w-[800px] mb-6"
        >
          ENVGO Raises $2M USD Seed Round Investment To Deliver The Future of Marine Transportation
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-body text-envgo-grey leading-relaxed max-w-[600px]"
        >
          Backed by Canadian investors, ENVGO is building zero-emission "flying" boats and powering the future of homegrown marine innovation.
        </motion.p>
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1).jpeg"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1)-p-500.jpeg 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1)-p-800.jpeg 800w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1)-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1)-p-1600.jpeg 1600w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1)-p-2000.jpeg 2000w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1)-p-2600.jpeg 2600w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1)-p-3200.jpeg 3200w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/684726aad39c3460f1200889_DSCF8487-crop7%20(1).jpeg 10713w"
            sizes="(max-width: 1100px) 100vw, 1100px"
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
              <strong>WATERLOO, ON | JUNE 10, 2025</strong> — ENVGO, a Canadian company building next-generation
              "flying" boats, announced the first close of its seed round, led by Toronto-based early-stage VC firm
              Two Small Fish Ventures. The round includes follow-on investment from Garage Capital and others,
              reflecting strong continued support from early backers.
            </p>

            <p>
              Founded by serial entrepreneur Mike Peasgood and the team behind Aeryon Labs, ENVGO brings deep
              aerospace and robotics expertise to the water. The company's first product, the NV1, is a zero-emission
              electric cruiser that uses advanced hydrofoiling technology to "fly" above the surface, dramatically
              reducing drag and extending range. This breakthrough dramatically improves ride quality while making
              electric boats more efficient and environmentally sustainable.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "Electric boats have always faced a tough trade-off between performance and range. By combining
                hydrofoiling with smart systems design, we've created a vessel that cuts emissions to zero, extends
                range, boosts efficiency, and delivers a completely new boating experience."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Mike Peasgood, co-founder and CEO of ENVGO
              </cite>
            </blockquote>

            <p>
              The new funding will accelerate ENVGO's market debut of the NV1 and launch its industry partnership
              program, which offers a scalable, license-ready system to help traditional boat manufacturers transition
              to electric propulsion. This seed round is a crucial step toward scaling the technology and positioning
              ENVGO as a key enabler in the shift to cleaner, smarter marine transportation.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "ENVGO is building more than a hydrofoiling boat — they're laying the foundation for a clean,
                intelligent future in marine transportation. We are thrilled to support a team with deep technical
                expertise and a clear vision to transform an industry long overdue for disruption."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Eva Lau, General Partner at Two Small Fish Ventures
              </cite>
            </blockquote>

            <p>
              NV1 is a transformative first step in a broader strategy to revolutionize the marine industry by making
              transportation clean, safe, and cost-effective.
            </p>

            <p>
              Garage Capital, an early-stage fund based in Waterloo, led ENVGO's pre-seed round, which supported the
              development and build of the NV1 prototype.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "What ENVGO has achieved with the NV1 prototype in such a short time is remarkable. We're doubling
                down because we believe this team has the vision, execution, and technology to redefine what's possible
                in marine mobility."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Mike McCauley, Cofounder &amp; General Partner at Garage Capital
              </cite>
            </blockquote>

            <p>
              Early adopters can reserve a Founders Edition NV1 and learn more about the product at{" "}
              <a href="http://envgo.com" className="text-envgo-marine hover:underline">envgo.com</a>.
            </p>

            {/* About sections */}
            <div className="border-t border-border pt-10 mt-10 space-y-8">
              <div>
                <h3 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-3">About ENVGO</h3>
                <p>
                  ENVGO is a Canadian marine technology company building the future of clean, intelligent watercraft.
                  By fusing aerospace engineering with robotics and AI, ENVGO is reimagining marine transportation.
                  Its flagship vessel, the NV1, is a zero-emission electric hydrofoiling cruiser offering an
                  extraordinary "flight over water" experience and four times the efficiency of traditional electric
                  boats.
                </p>
                <p className="mt-3">
                  Founded by serial entrepreneur Mike Peasgood, ENVGO has deep aerospace and AI expertise from the
                  drone and defense sectors. The company is building a scalable, license-ready system enabling OEM
                  partners to deliver high-performance, zero-emission hydrofoiling vessels.
                </p>
                <p className="mt-3">
                  Learn more at{" "}
                  <a href="http://www.envgo.com" className="text-envgo-marine hover:underline">www.envgo.com</a>
                </p>
              </div>

              <div>
                <h3 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-3">About Two Small Fish Ventures</h3>
                <p>
                  Two Small Fish Ventures is a Toronto-based venture capital firm investing in early-stage, visionary
                  Canadian founders building global tech companies. Founded by Eva and Allen Lau, the firm brings deep
                  entrepreneurial experience and a founder-first approach to venture investing.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-3">About Garage Capital</h3>
                <p>
                  Garage Capital is an early-stage venture capital firm based in Waterloo, Ontario, focused on backing
                  Canada's most ambitious tech founders. Known for being among the first believers in some of Canada's
                  most iconic startups, Garage is committed to helping companies from idea to scale.
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
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">Investors</p>
              <div className="text-sm font-body space-y-2 text-envgo-grey">
                <p className="font-medium text-foreground">Two Small Fish Ventures</p>
                <p>Lead investor — Seed round</p>
                <div className="border-t border-border pt-2 mt-2">
                  <p className="font-medium text-foreground">Garage Capital</p>
                  <p>Follow-on — Pre-seed lead</p>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">Media Contact</p>
              <div className="text-sm font-body space-y-1 text-envgo-grey">
                <p>Pete Keller</p>
                <a href="mailto:media@envgo.com" className="text-envgo-marine hover:underline block">media@envgo.com</a>
              </div>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  </main>
);

export default SeedRound;