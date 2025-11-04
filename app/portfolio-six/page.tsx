"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import { useRef } from "react";

export default function MinimalistBrutalistPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Parallax text transforms
  const nameY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  const projects = [
    {
      id: "01",
      title: "WAYA CLOTHING",
      category: "E-COMMERCE",
      year: "2024",
      description:
        "Elegant platform for African fashion celebrating locally made products. Features product browsing, cart management, secure checkout, and real-time order tracking with mobile app.",
      link: "https://wayaclothing.com/",
      image: "🧥",
    },
    {
      id: "02",
      title: "NEXPAA",
      category: "SUBSCRIPTION PLATFORM",
      year: "2024",
      description:
        "Affordable access to premium online services and subscriptions at cheaper prices. Automated order processing with instant digital delivery and seamless payment integration.",
      link: "https://www.nexpaa.com/",
      image: "💳",
    },
    {
      id: "03",
      title: "PAYDECORDER",
      category: "DIGITAL SERVICES",
      year: "2024",
      description:
        "Web service for renewing digital decoders and subscriptions. Instant decoder recharge with automated verification, order tracking, and product sales.",
      link: "https://www.paydecorder.com/",
      image: "📺",
    },
    {
      id: "04",
      title: "APCA CONFERENCE 2025",
      category: "CONFERENCE PLATFORM",
      year: "2025",
      description:
        "International conference website for the 8th African Palliative Care Conference in Botswana. Features abstract submission, payment integration, voting system, and AI chatbot.",
      link: "https://conference.africanpalliativecare.org/",
      image: "🌍",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden bg-white text-black"
    >
      {/* Hero Section - Massive Typography */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20">
        <div className="w-full max-w-7xl">
          {/* Massive Name */}
          <motion.div style={{ y: nameY }} className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[12vw] leading-none font-black tracking-tighter md:text-[15vw]"
            >
              BRIAN
            </motion.h1>
          </motion.div>

          {/* Title */}
          <motion.div style={{ y: titleY }} className="relative mt-4">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold md:text-6xl"
            >
              SOFTWARE DEVELOPER
            </motion.h2>
          </motion.div>

          {/* Jump to Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-3 border-4 border-black bg-black px-8 py-4 text-lg font-black text-white transition-all hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>JUMP TO CLIENT PROJECTS</span>
              <ArrowUpRight className="h-6 w-6" />
            </motion.a>
          </motion.div>

          {/* Info Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 grid max-w-4xl gap-8 md:grid-cols-3"
          >
            <div>
              <div className="mb-2 text-sm font-bold">LOCATION</div>
              <div className="text-2xl font-black">UGANDA</div>
            </div>
            <div>
              <div className="mb-2 text-sm font-bold">AVAILABILITY</div>
              <div className="text-2xl font-black">OPEN</div>
            </div>
            <div>
              <div className="mb-2 text-sm font-bold">DELIVERY</div>
              <div className="text-2xl font-black">2-4 WEEKS</div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-6 flex items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Circle className="h-6 w-6" />
            </motion.div>
            <span className="text-sm font-bold">SCROLL</span>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex min-h-screen items-center px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 text-sm font-bold">ABOUT</div>
              <h3 className="mb-8 text-5xl leading-tight font-black md:text-7xl">
                TURNING IDEAS INTO REALITY
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed">
                With proven experience and successful client projects to
                showcase, I deliver quality systems and applications tailored to
                your needs.
              </p>
              <p className="text-xl leading-relaxed">
                Specializing in management systems, online business platforms
                with payment integration, AI applications, and custom solutions
                based on your vision.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="border-l-4 border-black pl-4">
                  <div className="text-4xl font-black">98%</div>
                  <div className="mt-2 text-sm font-bold">SUCCESS RATE</div>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <div className="text-4xl font-black">10+</div>
                  <div className="mt-2 text-sm font-bold">PROJECTS</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="mb-4 text-sm font-bold">SERVICES</div>
            <h3 className="text-5xl font-black md:text-7xl">WHAT I DO</h3>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                name: "MANAGEMENT SYSTEMS",
                desc: "Enterprise-level system architecture",
              },
              {
                name: "PAYMENT INTEGRATION",
                desc: "Secure transaction processing",
              },
              { name: "WEB APPLICATIONS", desc: "Full-stack development" },
              { name: "AI APPLICATIONS", desc: "Custom intelligent solutions" },
              { name: "CUSTOM DEVELOPMENT", desc: "Tailored to your needs" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer border-t border-white/20 py-8 transition-colors hover:bg-white hover:text-black"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="mb-2 text-3xl font-black md:text-5xl">
                      {service.name}
                    </div>
                    <div className="text-lg opacity-60">{service.desc}</div>
                  </div>
                  <ArrowUpRight className="h-12 w-12 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Bold Layout */}
      <section id="projects" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="mb-4 text-sm font-bold">
              SELECTED SUCCESSFUL WORK
            </div>
            <h3 className="text-5xl font-black md:text-7xl">CLIENT PROJECTS</h3>
          </motion.div>

          <div className="space-y-0">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block border-t-4 border-black py-8 transition-all hover:bg-black hover:text-white md:py-12"
              >
                <div className="flex flex-col gap-6 px-4 md:flex-row md:items-start md:justify-between md:gap-8 md:px-0">
                  {/* Thumbnail Icon */}
                  <div className="shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center border-4 border-black bg-white text-3xl transition-all group-hover:border-white group-hover:bg-black md:h-24 md:w-24 md:text-5xl">
                      {project.image}
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    {/* Project Number */}
                    <div className="mb-2 text-xs font-bold opacity-60 md:mb-4 md:text-sm">
                      {project.id} / {project.year}
                    </div>

                    {/* Project Title */}
                    <h4 className="mb-3 text-2xl font-black transition-transform group-hover:translate-x-2 md:mb-4 md:text-4xl md:group-hover:translate-x-4 lg:text-6xl">
                      {project.title}
                    </h4>

                    {/* Category */}
                    <div className="mb-4 text-base font-bold opacity-60 md:mb-6 md:text-xl">
                      {project.category}
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed opacity-80 md:text-lg">
                      {project.description}
                    </p>

                    {/* Visit Site Button */}
                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 border-2 border-black bg-transparent px-6 py-3 text-sm font-bold transition-all group-hover:border-white group-hover:bg-white group-hover:text-black">
                        VISIT SITE
                        <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="shrink-0 self-end md:mt-8 md:self-start"
                    whileHover={{ scale: 1.2, rotate: 45 }}
                  >
                    <ArrowUpRight
                      className="h-10 w-10 md:h-16 md:w-16"
                      strokeWidth={2}
                    />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Bold CTA */}
      <section className="flex min-h-screen items-center bg-black px-6 py-32 text-white">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="mb-8 text-sm font-bold">GET IN TOUCH</div>
            <h2 className="text-6xl leading-none font-black md:text-9xl">
              LET&apos;S
              <br />
              WORK
              <br />
              TOGETHER
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid max-w-7xl gap-8 md:grid-cols-3"
          >
            {/* Phone */}
            <motion.a
              href="tel:+256775894639"
              className="group border-4 border-white p-8 transition-all hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-4 text-sm font-bold opacity-60">CALL</div>
              <div className="mb-2 text-2xl font-black md:text-3xl">
                +256 775 894 639
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold">
                <span>CALL NOW</span>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/256758548836"
              className="group border-4 border-white p-8 transition-all hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-4 text-sm font-bold opacity-60">WHATSAPP</div>
              <div className="mb-2 text-2xl font-black md:text-3xl">
                +256 758 548 836
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold">
                <span>MESSAGE NOW</span>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:brian@wabtech.tech"
              className="group border-4 border-white p-8 transition-all hover:bg-white hover:text-black"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="mb-4 text-sm font-bold opacity-60">EMAIL</div>
              <div className="mb-2 text-xl font-black break-all md:text-2xl lg:text-3xl">
                brian@wabtech.tech
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm font-bold">
                <span>SEND EMAIL</span>
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 border-t border-white/20 pt-12"
          >
            <div className="grid gap-8 text-sm font-bold md:grid-cols-3">
              <div>
                <div className="mb-2 opacity-60">RESPONSE TIME</div>
                <div className="text-2xl">&lt; 24 HOURS</div>
              </div>
              <div>
                <div className="mb-2 opacity-60">PROJECT DELIVERY</div>
                <div className="text-2xl">2-4 WEEKS</div>
              </div>
              <div>
                <div className="mb-2 opacity-60">PRICING</div>
                <div className="text-2xl">TRANSPARENT</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="border-t-4 border-black px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="mb-8 text-4xl font-black md:text-7xl">
              NEED YOUR OWN
              <br />
              INSPIRATIONAL
              <br />
              PORTFOLIO?
            </h3>
            <p className="mx-auto mb-12 max-w-2xl text-xl opacity-80">
              Explore different creative portfolio designs. Each showcases a
              unique style and approach.
            </p>
            <motion.a
              href="/portfolios"
              className="inline-flex items-center gap-4 border-4 border-black bg-black px-12 py-6 text-2xl font-black text-white transition-all hover:bg-white hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>VIEW PORTFOLIO GALLERY</span>
              <ArrowUpRight className="h-8 w-8" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-3xl font-black">BRIAN</div>
            <div className="text-sm font-bold">© 2025 ALL RIGHTS RESERVED</div>
          </div>
        </div>
      </footer>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 right-0 left-0 z-50 h-2 origin-left bg-black"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
