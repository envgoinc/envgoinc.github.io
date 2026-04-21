import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const DesignovaPartnership = () => (
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
          Partnership Announcement
        </motion.span>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] md:text-[52px] leading-[1.1] font-heading font-light max-w-[860px] mb-6"
        >
          ENVGO Announces Partnership with Renowned Yacht Designer J. David Weiss for NV1 Hydrofoiling Electric Boat
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-body text-envgo-grey leading-relaxed max-w-[580px]"
        >
          Learn about ENVGO's partnership with renowned yacht designer J. David Weiss
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f5367dd3f050f46c8da6af_66fc8f0ce5da5111c7f43fd2_Concept2.png"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f5367dd3f050f46c8da6af_66fc8f0ce5da5111c7f43fd2_Concept2-p-500.png 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f5367dd3f050f46c8da6af_66fc8f0ce5da5111c7f43fd2_Concept2-p-800.png 800w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f5367dd3f050f46c8da6af_66fc8f0ce5da5111c7f43fd2_Concept2.png 856w"
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
          className="max-w-[760px] space-y-8 font-body text-base leading-relaxed"
        >
          <p>
            ENVGO, a leader in high-performance electric hydrofoiling boats, is excited to announce a landmark
            collaboration with acclaimed yacht designer J. David Weiss and his prestigious design studio, Designova.
            This partnership represents a significant step forward in the development of ENVGO's flagship electric
            hydrofoiling vessel, the NV1.
          </p>

          {/* Section: About J. David Weiss */}
          <div className="pt-4">
            <h3 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-5">About J. David Weiss and Designova</h3>

            <figure className="my-8">
              <img
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f536e0df73d5c74af7e104_66fc907c7497c288d0a5b06a_AD_4nXcGOXvG06K4BXGi3DRRih11S7aqb_Xb-oENC0q1TXu9go62pbY14B2G5BIRu-sODNR3PMPVCQB_oQrbgWw3q1kzHp-bOAuCM1U-99E5NrghdFR4cP-F5TT4ul1ovbHQ70W4duia2XHCvP5UdKMgoJvFc42W.png"
                className="w-full h-auto rounded-xl"
              />
            </figure>

            <p>
              J. David Weiss, known for his visionary approach and distinctive style, brings decades of experience in
              designing bespoke yachts that are as functional as they are visually stunning. His work with Designova
              has consistently pushed the boundaries of maritime design, blending cutting-edge technology with timeless
              elegance and elegantly splicing form with function.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground italic">
                "Partnering with David and Designova aligns perfectly with our mission to revolutionize boating with
                sustainable and exhilarating experiences. David's expertise in crafting luxurious and innovative vessels
                complements our commitment to delivering the most advanced and singular electric vessels ever. The NV1
                will offer our customers an unparalleled experience of flight over water, combined with the sleek,
                refined design that only David and his team can deliver."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Mike Peasgood, CEO of ENVGO
              </cite>
            </blockquote>

            <p>
              Through this collaboration, ENVGO is ensuring that the NV1 will set a new benchmark in the electric
              boating market — delivering not only high-performance capabilities but also an unmatched level of luxury
              and style.
            </p>
          </div>

          {/* Section: Elevating the NV1 Design */}
          <div className="pt-4">
            <h3 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-5">Elevating the NV1 Design</h3>

            <figure className="my-8">
              <img
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f536df8628eac9f2afa96c_66fc907cf7d7d2aab86be78b_AD_4nXfGsYFUHhrr0CTlhrGSSVNxtsaJk_YA7Wj8QTbwLO8PSHUYWvvIVk5DACdiNMuZSwII3A0zT3DbYagCvCqDlC71qphgZFxV4lUUEk390r0gblDiSO1YxMIv4MVYIRihgNxSBtTQiq3W7TxIeyEN7rtHZpkn.jpeg"
                className="w-full h-auto rounded-xl"
              />
            </figure>

            <p>
              The NV1, a 24-foot, six-person high performance foiling cruiser is not just a boat; it's a statement of
              exclusivity and performance. Weiss's design prowess has been instrumental in creating a vessel that not
              only brings the full capabilities of our platform to life impeccably, but also turns heads with its
              striking visual personality.
            </p>

            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground italic">
                "Our team and focus has always been on the leading edge of innovation and iconoclastic yacht design,
                and working with ENVGO on the NV1 has been a superb challenge, having a delightful team that can keep
                up with our appetite for the ultimates of possibility.
                <br /><br />
                "Together, we have created a vessel that marries advanced hydrodynamics and electric propulsion with a
                carefully sculpted design that exudes the freedom of flight harmonized with undeniable waterborne
                luxury. This partnership has allowed us to push the boundaries of what's possible in both design and
                technical execution, and we can't wait for the world to see the results."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — J. David Weiss, Designova Creative
              </cite>
            </blockquote>
          </div>

          {/* Section: A New Era */}
          <div className="pt-4">
            <h3 className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-5">A New Era in Electric Boating</h3>

            <p>
              The partnership between ENVGO and J. David Weiss signals a new era in electric boating, where
              sustainability meets unmatched luxury. The NV1's high-performance foiling technology enables it to "fly"
              over water, offering an exhilarating experience with zero emissions. Equipped with state-of-the-art
              electric propulsion, the boat is designed to be both eco-friendly and visually captivating, reflecting
              ENVGO's dedication to environmental responsibility without compromising on performance.
            </p>

            <p>
              With the NV1, ENVGO aims to cater to a niche market of forward-thinking boating enthusiasts seeking
              innovative and eco-friendly solutions. This partnership reinforces ENVGO's commitment to delivering
              premium boating experiences that transcend the conventional and embrace the future of marine
              transportation. As ENVGO continues to grow, collaborations with world-class designers like J. David
              Weiss will play a crucial role in shaping the future of electric boating.
            </p>
          </div>

          <div className="border-t border-border pt-8 mt-8" />
        </motion.div>
      </div>
    </section>
  </main>
);

export default DesignovaPartnership;