import { motion } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };

const PalmBeach = () => (
  <main className="bg-background">

    {/* ═══ HERO ═══ */}
    <section className="pt-[140px] pb-[60px]">
      <div className="container max-w-[1100px]">
        <div className="grid md:grid-cols-[1fr_420px] gap-12 items-end">
          <div>
            <motion.span
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.4 }}
              className="inline-block mb-5 text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine"
            >
              Press Release — March 12, 2026
            </motion.span>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[32px] md:text-[52px] leading-[1.1] font-heading font-light"
            >
              ENVGO Brings The World's First Performance-Class Electric Hydrofoil To Palm Beach
            </motion.h1>
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg font-body text-envgo-grey leading-relaxed pb-2"
          >
            A New Generation of Electric Boating Melds Speed with Spectacle
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
            src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain.png"
            alt=""
            loading="lazy"
            className="w-full h-auto"
            srcSet="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain-p-500.png 500w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain-p-800.png 800w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain-p-1080.png 1080w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain-p-1600.png 1600w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain-p-2000.png 2000w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain-p-2600.png 2600w, https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5a580d5df689793cc70_PalmBeachNewsMain.png 3132w"
            sizes="(max-width: 1100px) 100vw, 1100px"
          />
        </motion.div>
      </div>
    </section>

    {/* ═══ ARTICLE BODY ═══ */}
    <section className="pb-[100px]">
      <div className="container max-w-[1100px]">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">

          {/* Sidebar meta */}
          <motion.aside
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-xs font-body text-envgo-grey uppercase tracking-[0.15em] pt-1"
          >
            <div>
              <p className="text-envgo-marine font-medium mb-1">Media Contact</p>
              <p>Kasi Barrow</p>
              <a href="mailto:kasi@barrowco.net" className="text-envgo-marine hover:underline normal-case block">kasi@barrowco.net</a>
              <p>269 832 6317</p>
            </div>
            <div>
              <p>Maria Alexandrova</p>
              <a href="mailto:maria@envgo.com" className="text-envgo-marine hover:underline normal-case block">maria@envgo.com</a>
              <p>647 766 6642</p>
            </div>
          </motion.aside>

          {/* Body copy */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 font-body text-base leading-relaxed"
          >
            <p>
              <strong>Ontario, Canada</strong> --{" "}
              <a href="http://www.envgo.com/" className="text-envgo-marine hover:underline"><strong>ENVGO</strong></a>
              , an aerospace-driven marine technology company, will make its U.S. debut with the{" "}
              <strong>NV1 Founders Edition</strong>, at the Palm Beach International Boat Show March 25-29, 2026.
              (On display at the Superyacht Show Palm Harbor (on land), booth SYSL8). NV1 is the world's first true
              performance-class electric hydrofoiling boat, setting the benchmark for a new standard of speed,
              intelligence, and design in the emerging hydrofoil category.
            </p>

            <p>
              <strong>Following the show, a limited number of exclusive sea trials will take place in Palm Beach March 31 – April 2.</strong>{" "}
              Selected boaters will experience NV1 in its natural element, rising above the waves and gliding silently
              over the water — no crashing through chop, no engine noise, just effortless flight.
            </p>

            <p>
              NV1 was built by the team behind Aeryon Labs, creator of the SkyRanger R70 autonomous aerial system used
              in defense and mission critical environments. The company was acquired by FLIR Systems for $200M in 2019
              and that same team now brings two decades of robotics, avionics, and autonomous systems experience to the
              marine sector.
            </p>

            <p>
              ENVGO not only develops the technologies that power NV1 but can also help other boat manufacturers
              electrify their vessels and make them dramatically more efficient and intelligent. Operating in both the
              B2C and B2B sectors, boaters can depend on ENVGO's product, but builders can rely on its expertise in
              designing new electric vessels. ENVGO delivers aerospace-grade AI, 50 mph performance at a longer range
              and a superyacht design that doesn't just cruise, it <em>flies.</em>
            </p>

            <figure className="my-10">
              <img
                alt="NV1 in foiling mode"
                src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1ffff4dffec0f68cd138d_DSCF8487-crop7%20(1).jpg"
                loading="lazy"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="mt-3 text-sm text-envgo-grey">NV1 in foiling mode</figcaption>
            </figure>

            <p>
              While most electric hydrofoils require compromises between speed, range, and aesthetics, NV1 was
              engineered as a high-performance daily cruiser that delivers all three. Though the vessel can operate
              like a regular EV boat in water, in just <strong>seven seconds</strong>, NV1 autonomously lifts onto
              its computer-controlled hydrofoils, transitioning smoothly into flight at a cruise speed of 23mph (20kts).
              The 25-foot vessel with an 8.5-foot beam then glides above the water with remarkable stability and
              efficiency. NV1 reaches up to 50mph (43 knots) with a range of 54 miles, made possible by hydrofoiling
              flight that dramatically reduces drag. The performance comes from a 330 hp dual-motor electric drivetrain
              paired with an 83-kWh battery pack and DC fast charging. The result is a smoother, quieter, and
              significantly speedier and efficient ride than traditional electric boats, without sacrificing the range
              needed for daily use.
            </p>

            <p>
              There are two differentiating factors for NV1: the ENVGO AI-driven "flight control system" derived from
              decades of experience developing autonomous aerial vehicles. High-speed control algorithms continuously
              analyze sensor data and vessel motion, stabilizing hydrofoil flight and optimizing performance in real
              time with hundreds of adjustments per second. The system also enables advanced capabilities such as AI
              Co-pilot, 360° situational awareness, auto-docking assistance, and virtual anchor, built on the company's
              aerospace heritage of developing autonomous drones. Also, the newly designed hydrofoil is quieter and
              more efficient, providing longer battery range.
            </p>

            <p>
              The integration of aerospace engineering, advanced software, and luxury design into a single platform
              sets NV1 apart, enabling more autonomous navigation with built-in safety. For new boaters, these systems
              make NV1 safe and approachable, for experienced mariners — extraordinary. It is more like flying than
              boating.
            </p>

            <p>
              NV1 also stands apart through its design pedigree. The vessel's exterior was sculpted by J. David Weiss,
              of{" "}
              <a href="https://designovacreative.com/" className="text-envgo-marine hover:underline">Designova Creative</a>
              {" "}one of the world's leading superyacht designers, while naval architecture was led by{" "}
              <a href="https://stevekilling.com/americas-cup/" className="text-envgo-marine hover:underline">Steve Killing Yacht Design</a>
              , an America's Cup veteran and designer of championship C-Class hydrofoils. Unlike most hydrofoil vessels
              where the foils interrupt the profile of the boat, NV1's hydrofoil system is seamlessly integrated into
              the yacht's sculptural lines, preserving the elegance expected of a luxury craft. Seating six in a
              sculpted carbon fiber hull, NV1 is as striking at rest as it is at 50 mph.
            </p>

            <p>
              NV1 Founders Edition will be produced in limited numbers, offering early adopters the opportunity to
              experience the next generation of electric performance boating.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-envgo-marine pl-6 my-10">
              <p className="text-xl font-heading font-light leading-snug text-foreground">
                "Hydrofoils fundamentally change the dynamics of boating. Once you reduce drag dramatically, you unlock
                speed, efficiency, safety, and ride comfort at the same time. NV1 combines that advantage with
                aerospace-grade flight control and intelligent software to create a new category of performance vessel."
              </p>
              <cite className="block mt-4 text-sm font-body text-envgo-grey not-italic">
                — Mike Peasgood, CEO and co-founder of ENVGO
              </cite>
            </blockquote>

            <p>
              The ability to go fast for a longer time is increased by the efficiency, with a re-charge time of 8 hours
              using Level 2 power or 45 minutes with DC fast charging. With standard Level 1, a full charge could take
              24 hours, or while on a trailer, NV1 could be topped-up at any EV charger. ENVGO is compliant with the
              North American Charging Standard (NACS) developed by Tesla.
            </p>

            <p>
              To learn more about this new generation of intelligent, high-performance boats designed to fly above the
              water, visit{" "}
              <a href="http://www.envgo.com/" className="text-envgo-marine hover:underline">www.envgo.com</a>.
            </p>

            <div className="bg-card border border-border rounded-xl p-6 space-y-2 my-8">
              <p className="text-xs font-body font-medium uppercase tracking-[0.25em] text-envgo-marine mb-3">Media Assets</p>
              <p>
                <a href="https://drive.google.com/file/d/1ppzu2zcfyn689VsaA_cmPRrfkaHvjTiA/view" className="text-envgo-marine hover:underline">Video Link 1</a>
                {" "}— Palm Beach.
              </p>
              <p>
                <a href="https://drive.google.com/drive/folders/1NUP3zoW7YUHGJ7vPYSPv4V8Gezqhpq00" className="text-envgo-marine hover:underline">Video Link 2</a>
                {" "}— ENVGO Unveiling.
              </p>
              <p>
                For high-res photos and Media Sea Trial Reservations, March 31–April 2, contact Maria at{" "}
                <a href="mailto:maria@envgo.com" className="text-envgo-marine hover:underline">maria@envgo.com</a>
                , cell: 1647 766 6642.
              </p>
            </div>

            <figure className="my-10">
              <img
                alt=""
                src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b1e5ba39cfa4d540c3bc10_NV1%20First%20Spec%20Edition%20(1).jpg"
                loading="lazy"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="mt-3 text-sm text-envgo-grey">NV1 Can Rest &amp; Recharge at Home</figcaption>
            </figure>

            {/* About section */}
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
            </div>

            <figure className="my-10">
              <img
                alt=""
                src="https://cdn.prod.website-files.com/67c8b53d8bda1119d403429e/69b2c9385927f7f2f10d122b_ENVGO_SYSL8_Land_Palm%20Beach%20Map.png"
                loading="lazy"
                className="w-full h-auto rounded-xl"
              />
              <figcaption className="mt-3 text-sm text-envgo-grey">Palm Beach event map with ENVGO highlighted</figcaption>
            </figure>

            <p className="text-center tracking-widest text-envgo-grey pt-4"># # #</p>
          </motion.div>
        </div>
      </div>
    </section>
  </main>
);

export default PalmBeach;