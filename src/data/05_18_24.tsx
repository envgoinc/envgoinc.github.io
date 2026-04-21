import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const SDTCFunding = () => (
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
          News · Funding
        </motion.span>
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[32px] md:text-[48px] leading-[1.1] font-heading font-light"
          >
            Marine Tech startup ENVGO Secures SDTC Seed Funding for marine tech development
          </motion.h1>
          {/* Funding badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex flex-col items-center justify-center bg-card border border-border rounded-2xl p-6 min-w-[160px] text-center flex-shrink-0"
          >
            <p className="text-xs font-body font-medium uppercase tracking-[0.15em] text-envgo-marine mb-2">SDTC Grant</p>
            <p className="text-3xl font-heading font-light text-foreground">$50K–$100K</p>
            <p className="text-xs font-body text-envgo-grey mt-1">Seed Funding</p>
          </motion.div>
        </div>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg font-body text-envgo-grey leading-relaxed max-w-[580px]"
        >
          Read about how ENVGO secured SDTC funding to accelerate aerospace and AI innovation in marine tech.
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f405f8c4a8a0de9cd2d2d8_66e34dd9cf9939c6d3bc7264_SDTC-lrg-p-800.png"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f405f8c4a8a0de9cd2d2d8_66e34dd9cf9939c6d3bc7264_SDTC-lrg-p-800-p-500.png 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f405f8c4a8a0de9cd2d2d8_66e34dd9cf9939c6d3bc7264_SDTC-lrg-p-800.png 800w"
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
            ENVGO, a rising innovator in sustainable boating technology, has been awarded a grant from Sustainable
            Development Technology Canada (SDTC) to further its mission of electrifying recreational boating. The
            funding, provided through SDTC's Seed Funding stream, is aimed at early-stage companies developing
            solutions that tackle environmental challenges, with awards ranging from $50,000 to $100,000.
          </p>

          <p>
            This grant represents a significant show of confidence for ENVGO, which is at the forefront of creating
            zero-emission electric boats that use advanced hydrofoil technology and autonomous systems. ENVGO's
            technology aims to revolutionize the boating experience by offering a high performance yet eco-friendly
            alternative to traditional watercraft, reducing the environmental impact while enhancing performance and
            safety.
          </p>

          <p>
            SDTC plays a key role in supporting Canada's clean technology sector, helping companies like ENVGO push
            the boundaries of innovation. By providing crucial financial backing to startups with strong potential,
            SDTC enables these companies to bring their technologies to market faster, supporting Canada's leadership
            in sustainable development.
          </p>

          <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
            <p className="text-xl font-heading font-light leading-snug text-foreground">
              "We're thrilled to receive this funding from SDTC. This support validates the critical work we're doing
              to make recreational boating more sustainable. With SDTC's backing, we can accelerate our innovation
              and bring cleaner, high-performance boating experiences to market sooner."
            </p>
            <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
              — Mike Peasgood, CEO of ENVGO
            </cite>
          </blockquote>

          <p>
            The SDTC grant allows ENVGO to continue refining its electric propulsion and hydrofoil systems,
            positioning the company to lead in the emerging sector of zero-emission boating. ENVGO's focus on
            sustainability, performance, and safety aligns with broader efforts to combat climate change and reduce
            emissions across industries while revolutionizing the boating industry.
          </p>

          <div className="border-t border-border pt-8 mt-8" />
        </motion.div>
      </div>
    </section>
  </main>
);

export default SDTCFunding;