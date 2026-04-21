import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const TIBS2026 = () => (
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
          Press Release — January 13, 2026
        </motion.span>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] md:text-[52px] leading-[1.1] font-heading font-light max-w-[860px] mb-6"
        >
          ENVGO to Showcase the Only Hydrofoiling Boat at the 2026 Toronto International Boat Show
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-body text-envgo-grey leading-relaxed max-w-[620px]"
        >
          Poised to disrupt the industry, the innovative hydrofoiling vessel delivers world-class ride quality through flight over water, and an AI co-pilot that makes boating safe and easy to operate.
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/697010898617d0d23002c027_unnamed%20(32).jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/697010898617d0d23002c027_unnamed%20(32)-p-500.jpg 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/697010898617d0d23002c027_unnamed%20(32)-p-800.jpg 800w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/697010898617d0d23002c027_unnamed%20(32).jpg 1024w"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </motion.div>
      </div>
    </section>

    {/* ═══ ARTICLE BODY ═══ */}
    <section className="pb-[100px]">
      <div className="container max-w-[1100px]">

        {/* Event callout banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12 p-6 rounded-2xl border border-envgo-marine/30 bg-envgo-marine/5 flex flex-col md:flex-row md:items-center gap-4 justify-between"
        >
          <div>
            <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-1">Find Us at TIBS</p>
            <p className="text-lg font-heading font-light">Booth #617 — January 17–25, 2026</p>
          </div>
          <p className="text-sm font-body text-envgo-grey">Toronto International Boat Show — the only hydrofoiling boat at the show</p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_300px] gap-16 items-start">

          {/* Body copy */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 font-body text-base leading-relaxed"
          >
            <p>
              <strong>TORONTO, ON | JANUARY 13, 2026</strong> — Visitors to this year's Toronto International Boat
              Show (TIBS) will see something truly visionary: a boat that flies above the water.
            </p>

            <p>
              ENVGO, a trailblazing aerospace engineering and marine technology company, will make its TIBS debut with
              the North American launch of its flagship vessel, the NV1, the only hydrofoil boat on display at the show.
            </p>

            <p>
              Engineered with aerospace technology, the NV1 combines advanced hydrofoiling, an AI co-pilot, and a
              high-performance electric drivetrain to deliver a ride that's smooth, quiet, and up to four times more
              efficient than traditional electric boats. NV1's hydrofoils lift the hull above the water's surface,
              dramatically reducing drag and wave impact. This enables greater speed and range — two factors that have
              traditionally been difficult to achieve simultaneously in electric marine vessels.
            </p>

            <p>
              Founded to advance next-generation marine technology, ENVGO was created in response to the growing demand
              for cleaner, smarter ways to experience time on the water. With the launch of NV1, hydrofoiling moves
              beyond the experimental phase into a production-ready system, built for early adopters and visionaries
              alike. Behind this milestone is a team with a proven track record of breakthrough innovation, having
              previously built and scaled Aeryon Labs into a global drone technology leader that FLIR Systems acquired
              for $200 million in 2019.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "The NV1 represents a fundamental shift in how boats are designed and experienced. By engineering
                performance, efficiency, and ease of use together from the outset, we've created a vessel that
                drastically outperforms conventional electric boats, with a design as striking as the experience itself."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Paul Masojc, COO and co-founder of ENVGO
              </cite>
            </blockquote>

            <p>
              As a category leader and standout innovator at TIBS, ENVGO invites attendees to experience the NV1 up
              close, speak directly with the founders and engineers behind the technology, and explore how electric
              hydrofoiling boats are transitioning from concept to reality.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "There comes a moment when technology stops feeling futuristic and starts feeling real. For electric
                hydrofoiling boats, that moment is now. We're excited to unveil the NV1 on the renowned stage of the
                Toronto International Boat Show and show what the future of boating looks like."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Mike Peasgood, CEO and co-founder of ENVGO
              </cite>
            </blockquote>

            <p>
              Visit ENVGO at Booth #617 from January 17 to 25, 2026, to see the only hydrofoiling boat at the show,
              learn how the technology works, and be one of the first to bring the future of electric marine performance
              to the water.
            </p>

            <div className="border-t border-border pt-10 mt-10">
              <h3 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-4">About ENVGO</h3>
              <p>
                ENVGO is a Canadian marine technology company building the future of clean, intelligent watercraft. By
                fusing aerospace engineering with robotics and AI, ENVGO is reimagining marine transportation. Its
                flagship vessel, the NV1, is a zero-emission electric hydrofoiling cruiser offering an extraordinary
                "flight over water" experience and four times the efficiency of traditional electric boats.
              </p>
              <p className="mt-4">
                Founded by serial entrepreneur Mike Peasgood, ENVGO has deep aerospace and AI expertise from the drone
                and defence sectors. The company is building a scalable, license-ready system enabling OEM partners to
                deliver high-performance, zero-emission hydrofoiling vessels.
              </p>
              <p className="mt-4">
                Learn more at{" "}
                <a href="http://www.envgo.com" className="text-envgo-marine hover:underline">www.envgo.com</a>
                .<br />
                Media inquiries:{" "}
                <a href="mailto:sarahb@durrellcomm.com" className="text-envgo-marine hover:underline">sarahb@durrellcomm.com</a>
              </p>
            </div>

            <p className="text-center tracking-widest text-envgo-grey pt-4"># # #</p>
          </motion.div>

          {/* Sticky sidebar */}
          <motion.aside
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block sticky top-28 space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">Event Details</p>
              <div className="text-sm font-body space-y-1 text-envgo-grey">
                <p className="font-medium text-foreground">Toronto International Boat Show</p>
                <p>Booth #617</p>
                <p>January 17–25, 2026</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 space-y-3">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine">Media Contact</p>
              <div className="text-sm font-body space-y-1 text-envgo-grey">
                <a href="mailto:sarahb@durrellcomm.com" className="text-envgo-marine hover:underline block">sarahb@durrellcomm.com</a>
              </div>
            </div>
          </motion.aside>

        </div>
      </div>
    </section>
  </main>
);

export default TIBS2026;