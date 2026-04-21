import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const MaRS = () => (
  <main className="bg-background">

    {/* ═══ HERO ═══ */}
    <section className="pt-[140px] pb-[60px]">
      <div className="container max-w-[1100px]">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <motion.span
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="inline-block mb-5 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine"
            >
              Tech · Community
            </motion.span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] md:text-[48px] leading-[1.1] font-heading font-light"
            >
              ENVGO Joins Exclusive MaRS Discovery District Founder Community
            </motion.h1>
          </div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-2"
          >
            <p className="text-lg font-body text-envgo-grey leading-relaxed mb-6">
              Learn about ENVGO's cleantech focused innovation and admission into the MaRS community
            </p>
            {/* Recognition badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full border border-envgo-marine/30 bg-envgo-marine/5">
              <span className="w-2 h-2 rounded-full bg-envgo-marine flex-shrink-0" />
              <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-envgo-marine">
                Canada's MaRS Discovery District — Cleantech Cohort
              </span>
            </div>
          </motion.div>
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52d5c0952f659346611bf_66e38619a2fe9b7c840c2820_MARS_DD.jpg"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52d5c0952f659346611bf_66e38619a2fe9b7c840c2820_MARS_DD-p-500.jpg 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52d5c0952f659346611bf_66e38619a2fe9b7c840c2820_MARS_DD-p-800.jpg 800w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52d5c0952f659346611bf_66e38619a2fe9b7c840c2820_MARS_DD-p-1080.jpg 1080w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52d5c0952f659346611bf_66e38619a2fe9b7c840c2820_MARS_DD.jpg 1200w"
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
          className="max-w-[720px] space-y-6 font-body text-base leading-relaxed"
        >
          <p>
            In a major endorsement of its pioneering efforts, ENVGO, a rising star in the electric boating industry,
            has been welcomed into the exclusive MaRS Discovery District founder community. This recognition places
            the company among Canada's most promising startups in the clean-tech space, particularly for its
            innovative approach to sustainable recreational boating.
          </p>

          <p>
            ENVGO, known for developing cutting-edge electric hydrofoiling boats, has been pushing the boundaries of
            what's possible in the world of sustainable watercraft. The company's zero-emission boats, which use
            advanced hydrofoil technology to "fly" above the water, offer a unique combination of efficiency, speed,
            and eco-friendliness, setting a new standard for recreational boating.
          </p>

          <p>
            By being welcomed into MaRS, ENVGO gains unparalleled access to an expansive network of mentors, industry
            leaders, and innovation resources. This support is expected to accelerate the company's growth, providing
            the tools needed to scale its business and bring its technology to a broader market.
          </p>

          <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
            <p className="text-xl font-heading font-light leading-snug text-foreground">
              "This is an incredible benefit for us. Being part of the MaRS community not only provides us with
              validation but also connects us to the resources we need to drive innovation in the boating industry.
              We're excited to collaborate with other forward-thinking companies and use MaRS' support to continue
              advancing sustainable solutions."
            </p>
            <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
              — Mike Peasgood, CEO of ENVGO
            </cite>
          </blockquote>

          <p>
            MaRS Discovery District, based in Toronto, has a strong reputation for fostering high-impact startups,
            offering everything from capital connections to business development tools. ENVGO's inclusion in this
            exclusive community underscores the company's potential to revolutionize the recreational boating market
            with its eco-friendly, high-performance boats.
          </p>

          <p>
            As the global push for zero-emission solutions continues, ENVGO's partnership with MaRS positions it at
            the forefront of a rapidly growing industry. The company's focus on sustainability and innovation aligns
            with broader efforts to reduce the environmental impact of recreational activities, making it a key player
            in the clean-tech movement.
          </p>

          <p>
            With the support of MaRS, ENVGO is poised to accelerate the development and deployment of its electric
            watercraft, contributing to a greener future for the boating industry.
          </p>

          <div className="border-t border-border pt-8 mt-8" />
        </motion.div>
      </div>
    </section>
  </main>
);

export default MaRS;