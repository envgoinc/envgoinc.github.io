import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const TorontoBoatShow = () => (
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
          Press Release — February 11, 2026
        </motion.span>
        <div className="max-w-[760px]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] md:text-[52px] leading-[1.1] font-heading font-light mb-6"
          >
            ENVGO builds momentum after Toronto Boat Show as first customers prepare for sea trials
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-body text-envgo-grey leading-relaxed"
          >
            NV1 Founders Edition brings high performance, clean electric propulsion, and intelligent autonomy to the next generation of boating.
          </motion.p>
        </div>
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1).jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1)-p-500.jpg 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1)-p-800.jpg 800w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1)-p-1080.jpg 1080w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1)-p-1600.jpg 1600w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1)-p-2000.jpg 2000w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1)-p-2600.jpg 2600w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1)-p-3200.jpg 3200w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/698c9a2ef0c5790c9c1cf203_PXL_20260117_141042124%20(1).jpg 4032w"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </motion.div>
      </div>
    </section>

    {/* ═══ ARTICLE BODY ═══ */}
    <section className="pb-[100px]">
      <div className="container max-w-[1100px]">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-[680px] space-y-6 font-body text-base leading-relaxed"
        >
          <p>
            <strong>Waterloo, ON | Feb 11, 2026</strong> — Last week, we welcomed the CTV News team to our Waterloo
            facility to showcase how ENVGO is redefining the future of boating. In the segment, our team shared how
            hydrofoil technology lifts the hull out of the water, dramatically reducing drag and enabling our fully
            electric boats to <em>fly above</em> the surface with greater efficiency, speed, and range.
          </p>

          <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
            <p className="text-xl font-heading font-light leading-snug text-foreground">
              "The perfect solution is to make the boat fly above the water, removing drag and delivering three to
              four times the efficiency of a traditional planing boat."
            </p>
            <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
              — Jerry Mailloux, VP of Engineering, ENVGO
            </cite>
          </blockquote>

          <p>
            Founded by robotics and aerospace engineers, ENVGO is building high-performance electric cruisers designed
            for inland lakes, with the NV1 autonomously taking flight at 35 km/h and targeting top speeds of 80 km/h.
            Following a successful Toronto International Boat Show, ENVGO's COO Paul Masojc shared that the company is
            seeing strong interest and preparing for spring sea trials with early adopters. With seed funding secured
            in June 2025, ENVGO is accelerating development and bringing the NV1 Founders Edition closer to market.
          </p>

          <div className="bg-card border border-border rounded-xl p-6 mt-8">
            <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-3">Featured Coverage</p>
            <p>
              <strong>Discover the full NV1 feature on CTV News{" "}
              <a
                href="https://www.ctvnews.ca/kitchener/video/2026/02/10/waterloo-based-company-building-electric-hydrofoil-boat/"
                className="text-envgo-marine hover:underline"
              >
                here
              </a></strong>
            </p>
          </div>

          <p className="text-center tracking-widest text-envgo-grey pt-8"># # #</p>
        </motion.div>
      </div>
    </section>
  </main>
);

export default TorontoBoatShow;