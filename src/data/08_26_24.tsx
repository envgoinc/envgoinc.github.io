import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const sections = [
  {
    heading: "Setting a New Standard",
    body: `ENVGO, an innovative clean-tech company, is set to transform the boating industry with the introduction of their first electric hydrofoiling boat, the ENVGO NV1. Designed to address the longstanding experiential and environmental drawbacks of traditional combustion-powered boats, ENVGO offers a high-performance, sustainable alternative that redefines what it means to be on the water.

Traditional boats have long been associated with pollution, noise, and inefficiency, which not only harm the environment but also disrupt the serenity of being on the water. ENVGO tackles these issues head-on by offering a solution that combines clean energy with superior performance. The ENVGO NV1 delivers an unparalleled boating experience, whilst simultaneously minimising environmental impact by reducing the carbon footprint to zero. Focusing on a smooth, quiet, and efficient hydrofoiling design, with no emissions and no wake, the NV1 is set to greatly impact the future of boating.`,
  },
  {
    heading: "The Perfect Timing for Change",
    body: `The launch of ENVGO's solution comes at a time when global awareness of climate change and environmental responsibility is at an all-time high. Consumers are increasingly seeking sustainable alternatives in every aspect of their lives, and the leisure marine sector is no exception. As the electric vehicle revolution continues to gain momentum, the boating industry is poised to be the next frontier in the clean energy transformation.

Moreover, while many electric solutions on the market today suffer from limited range and speed, ENVGO's advanced hydrofoil technology and electric propulsion systems overcome these limitations, offering up to a fourfold increase in performance. The NV1 not only meets the demands of the luxury market but also provides a sustainable option without sacrificing exceptional performance, delivering a truly unique on-water experience.`,
  },
  {
    heading: "An Experienced Team",
    body: `The ENVGO team, lead by entrepreneur Mike Peasgood, is made up of seasoned professionals with extensive expertise in propulsion systems, hydrodynamics, flight control, and autonomy systems. The team's diverse background, spanning the aerospace, automotive, and marine industries, has given them the experience required to push the boundaries of electric boating. Their ability to integrate high-performance propulsion with intelligent autonomous systems, and the team's experience in high-stakes sectors ensures that the ENVGO NV1 not only meets but exceeds the expectations of luxury consumers.`,
  },
  {
    heading: "Strategic Investments and Partnerships",
    body: `ENVGO has secured initial investments from a group of investors who recognise the potential of electrifying the boating industry while eliminating traditional pain points such as noise, wake, pollution, and maintenance. These investors are not only financially backing the company but also bringing valuable industry connections and business acumen.

ENVGO has partnered with renowned superyacht designer David Weiss of Designova Creative and a seasoned America's Cup naval architect to ensure top-tier design and engineering. ENVGO is also exploring partnerships with leading technology providers in battery technology, marine engineering, and autonomy systems to enhance the business and drive the industry forward.`,
  },
  {
    heading: "Introducing the ENVGO NV1",
    body: `The NV1, ENVGO's inaugural electric hydrofoiling boat, is a 25-foot, 6-person luxury cruiser that combines high performance with exquisite design. The most striking feature of the ENVGO NV1 is its hydrofoiling capability, which allows the boat to "fly" above the water, drastically reducing drag and increasing efficiency. This innovative design not only enhances speed and range but also offers an unmatched smoothness in operation, as the boat glides over waves rather than ploughing through them. The NV1 also features a state-of-the-art propulsion system and an intuitive autonomous navigation system.`,
  },
  {
    heading: "Setting a New Standard in Electric Boating",
    body: `The NV1 stands out in the market due to its unique combination of hydrofoiling technology and intelligent autonomy systems. While other electric boats focus solely on sustainability, ENVGO reimagines the entire boating experience. The hydrofoiling design reduces water resistance, resulting in greater range and a smoother ride than conventional hull designs. Additionally, the integration of advanced autonomous features, inspired by the latest automotive technology, simplifies navigation and enhances safety. This blend of performance, luxury, and cutting-edge technology positions ENVGO as a leader in the next generation of boating.`,
  },
];

const NV1Feature = () => (
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
          Tech
        </motion.span>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[32px] md:text-[52px] leading-[1.1] font-heading font-light max-w-[800px] mb-6"
        >
          ENVGO Is Setting A New Standard In Electric Boating With The NV1
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-body text-envgo-grey leading-relaxed max-w-[580px]"
        >
          Learn about ENVGO, the founding team, and their innovative electric hydrofoiling boat, the ENVGO NV1
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52ef59865746d1b3295eb_66e3899f9c035b2a8dbdf420_NV1%20HERO%20with%20hand%20on%20the%20wheel-p-1600.jpeg"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52ef59865746d1b3295eb_66e3899f9c035b2a8dbdf420_NV1%20HERO%20with%20hand%20on%20the%20wheel-p-1600-p-500.jpeg 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52ef59865746d1b3295eb_66e3899f9c035b2a8dbdf420_NV1%20HERO%20with%20hand%20on%20the%20wheel-p-1600-p-800.jpeg 800w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52ef59865746d1b3295eb_66e3899f9c035b2a8dbdf420_NV1%20HERO%20with%20hand%20on%20the%20wheel-p-1600-p-1080.jpeg 1080w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/67f52ef59865746d1b3295eb_66e3899f9c035b2a8dbdf420_NV1%20HERO%20with%20hand%20on%20the%20wheel-p-1600.jpeg 1600w"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </motion.div>
      </div>
    </section>

    {/* ═══ ARTICLE BODY ═══ */}
    <section className="pb-[100px]">
      <div className="container max-w-[1100px]">
        <div className="grid md:grid-cols-[160px_1fr] gap-12">

          {/* Sticky section nav */}
          <motion.aside
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="hidden md:block sticky top-28 self-start"
          >
            <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-4">In this article</p>
            <ul className="space-y-3">
              {sections.map((s) => (
                <li key={s.heading} className="text-xs font-body text-envgo-grey leading-snug">{s.heading}</li>
              ))}
            </ul>
          </motion.aside>

          {/* Body copy */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 font-body text-base leading-relaxed"
          >
            {sections.map((s, i) => (
              <motion.div
                key={s.heading}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4">{s.heading}</h2>
                {s.body.split("\n\n").map((para, j) => (
                  <p key={j} className="mb-4 last:mb-0">{para}</p>
                ))}
              </motion.div>
            ))}

            <p>
              To learn more about ENVGO, visit:{" "}
              <a href="https://www.envgo.com/" className="text-envgo-marine hover:underline">https://www.envgo.com/</a>
            </p>

            <div className="border-t border-border pt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  </main>
);

export default NV1Feature;