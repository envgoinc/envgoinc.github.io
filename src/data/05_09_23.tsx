import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const ACStudio = () => (
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
            Marine Technology startup ENVGO secures grant in AC:Studio Program
          </motion.h1>

          {/* Grant badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex flex-col items-center justify-center bg-card border border-border rounded-2xl p-6 min-w-[160px] text-center flex-shrink-0"
          >
            <p className="text-xs font-body font-medium uppercase tracking-[0.15em] text-envgo-marine mb-2">AC:Studio Grant</p>
            <p className="text-3xl font-heading font-light text-foreground">$100K</p>
            <p className="text-xs font-body text-envgo-grey mt-1">Top 25 of Canada</p>
          </motion.div>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg font-body text-envgo-grey leading-relaxed max-w-[580px]"
        >
          Marine Technology startup ENVGO secures grant in AC:Studio Program
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f3e6451b40bf1c9b5f17b7_66e34698e4156c8cf0b94f80_ACStudioShowCase%20website%20post-p-800.webp"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f3e6451b40bf1c9b5f17b7_66e34698e4156c8cf0b94f80_ACStudioShowCase%20website%20post-p-800-p-500.webp 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f3e6451b40bf1c9b5f17b7_66e34698e4156c8cf0b94f80_ACStudioShowCase%20website%20post-p-800.webp 800w"
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
            ENVGO Inc., a leader in electrifying the boating industry, proudly announces its selection into the final
            phase of the prestigious AC:Studio program, cementing its status among Canada's top emerging startups.
            Selected as one of only 25 elite companies, ENVGO has been awarded $100,000 in grants through this
            program, along with personalized mentorship and workshops.
          </p>

          <p>
            Launched in 2022, the AC:Studio program, backed by the Federal Economic Development Agency for Southern
            Ontario (FedDev Ontario), combines the benefits of traditional business incubators with a venture studio
            model. This hybrid approach offers comprehensive support to rapidly accelerate growth and successfully
            scale companies.
          </p>

          <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
            <p className="text-xl font-heading font-light leading-snug text-foreground">
              "This is a monumental step for us. The AC:Studio program has provided invaluable resources, mentorship,
              and support, which have been instrumental in driving the development of our first product, the ENVGO
              NV1. We're grateful for this opportunity and excited to contribute to the future of sustainable boating."
            </p>
            <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
              — Mike Peasgood, CEO of ENVGO Inc.
            </cite>
          </blockquote>

          <p>
            This achievement marks a major milestone for ENVGO as it positions itself as a key player in both the
            tech and clean energy sectors, advancing its mission to revolutionize the boating industry with its
            high-performance, environmentally friendly solutions.
          </p>

          <div className="border-t border-border pt-8 mt-8" />
        </motion.div>
      </div>
    </section>
  </main>
);

export default ACStudio;