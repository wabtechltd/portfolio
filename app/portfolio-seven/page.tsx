"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Atom, Beaker, ExternalLink, Microscope } from "lucide-react";
import { useMemo, useRef } from "react";

// Generate bubbles outside component
const generateBubbles = () =>
  Array.from({ length: 30 }).map(() => ({
    x: Math.random() * 100,
    size: Math.random() * 40 + 20,
    duration: Math.random() * 5 + 5,
    delay: Math.random() * 3,
  }));

export default function DevelopersLabPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const bubbles = useMemo(() => generateBubbles(), []);

  // Parallax transforms
  const beakerY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const projects = [
    {
      title: "Waya Clothing",
      subtitle: "E-Commerce Specimen",
      description:
        "Fashion retail platform engineered with secure payment gateway and real-time inventory tracking systems",
      tech: ["Next.js", "Stripe", "Tailwind", "Vercel"],
      link: "https://wayaclothing.com/",
      color: "from-emerald-500 to-teal-500",
      formula: "C₁₈H₂₇NO₃",
      icon: Beaker,
    },
    {
      title: "Nexpaa",
      subtitle: "Business Intelligence Culture",
      description:
        "Advanced analytics platform with cloud integration and comprehensive business intelligence features",
      tech: ["React", "Node.js", "MongoDB", "REST API"],
      link: "https://www.nexpaa.com/",
      color: "from-blue-500 to-cyan-500",
      formula: "C₂₁H₃₀O₂",
      icon: Microscope,
    },
    {
      title: "PayDecorder",
      subtitle: "Transaction Compound",
      description:
        "Secure payment processor with advanced encryption and seamless transaction vault architecture",
      tech: ["Next.js", "Payment APIs", "PostgreSQL", "Security"],
      link: "https://www.paydecorder.com/",
      color: "from-purple-500 to-indigo-500",
      formula: "C₁₆H₂₄O₄",
      icon: Atom,
    },
  ];

  const skills = [
    { name: "Full-Stack Development", purity: 98, compound: "FS-DEV" },
    { name: "Payment Integration", purity: 95, compound: "PAY-INT" },
    { name: "System Architecture", purity: 92, compound: "SYS-ARC" },
    { name: "Database Design", purity: 90, compound: "DB-DSN" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* Bubbling Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {bubbles.map((bubble, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-emerald-500/30 bg-emerald-500/10"
            style={{
              left: `${bubble.x}%`,
              width: bubble.size,
              height: bubble.size,
              bottom: -100,
            }}
            animate={{
              y: [-100, -1000],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-size-[30px_30px]" />
      </div>

      {/* Glowing Orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - Laboratory */}
        <section className="flex min-h-screen items-center justify-center px-6 py-20">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {/* Lab Badge */}
              <motion.div
                className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-emerald-500 bg-emerald-500/10 px-6 py-3 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.3)",
                    "0 0 40px rgba(16, 185, 129, 0.6)",
                    "0 0 20px rgba(16, 185, 129, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Microscope className="h-5 w-5 text-emerald-400" />
                <span className="text-sm font-bold text-emerald-400">
                  RESEARCH LAB • ACTIVE
                </span>
              </motion.div>
              {/* Beaker Icon */}
              <motion.div style={{ y: beakerY }} className="mb-8">
                <motion.div
                  className="relative inline-block"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Beaker
                    className="mx-auto h-24 w-24 text-emerald-500"
                    strokeWidth={1.5}
                  />
                  <motion.div
                    className="absolute bottom-0 left-1/2 h-12 w-16 -translate-x-1/2 bg-emerald-500/30 blur-xl"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>{" "}
              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 text-7xl font-bold md:text-9xl"
              >
                <span className="bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  BRIAN
                </span>
              </motion.h1>
              {/* Chemical Formula Style Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-4 text-2xl font-bold text-emerald-400 md:text-4xl"
              >
                <span className="font-mono">{"{"}</span>
                FULL-STACK DEVELOPER
                <span className="font-mono">{"}"}</span>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mx-auto mb-12 max-w-2xl text-lg text-gray-400"
              >
                Experimenting with code to create innovative solutions.
                <br />
                Each project is a unique formula for digital excellence.
              </motion.p>
              {/* Lab Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  href="tel:+256775894639"
                  className="group relative overflow-hidden rounded-full border-2 border-emerald-500 bg-emerald-500/20 px-8 py-4 font-semibold backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-emerald-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="relative flex items-center gap-2 text-emerald-400 transition-colors group-hover:text-black">
                    <Atom className="h-5 w-5" />
                    Start Experiment
                  </span>
                </motion.a>

                <motion.a
                  href="https://wa.me/256758548836"
                  className="rounded-full border-2 border-cyan-500 bg-cyan-500/10 px-8 py-4 font-semibold text-cyan-400 backdrop-blur-sm transition-all hover:bg-cyan-500/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Lab Contact
                </motion.a>
              </motion.div>
              {/* Lab Specs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
              >
                {[
                  { label: "EXPERIMENTS", value: "10+", icon: Beaker },
                  { label: "PURITY RATE", value: "98%", icon: Beaker },
                  { label: "LAB STATUS", value: "ACTIVE", icon: Atom },
                  { label: "SYNTHESIS", value: "2-4W", icon: Microscope },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative rounded-2xl border-2 border-emerald-500/30 bg-slate-800/50 p-6 backdrop-blur-sm"
                    whileHover={{
                      y: -5,
                      borderColor: "rgba(16, 185, 129, 0.8)",
                    }}
                  >
                    <stat.icon
                      className="mx-auto mb-3 h-8 w-8 text-emerald-400"
                      strokeWidth={1.5}
                    />
                    <div className="text-2xl font-bold text-emerald-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills - Chemical Analysis */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="mb-6 inline-flex items-center gap-3">
                <Microscope className="h-6 w-6 text-emerald-500" />
                <h2 className="text-5xl font-bold md:text-6xl">
                  <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Compound Analysis
                  </span>
                </h2>
                <Microscope className="h-6 w-6 text-emerald-500" />
              </div>
              <p className="text-lg text-gray-400">
                Skills synthesized in the lab
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-2xl border-2 border-emerald-500/30 bg-slate-800/50 p-8 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(16, 185, 129, 0.6)",
                  }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <div className="rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1">
                      <span className="font-mono text-xs text-emerald-400">
                        {skill.compound}
                      </span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="text-gray-400">Purity Level</span>
                      <span className="font-bold text-emerald-400">
                        {skill.purity}%
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                      <motion.div
                        className="h-full rounded-full bg-linear-to-r from-emerald-500 to-cyan-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.purity}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4">
                    <Beaker
                      className="h-8 w-8 text-emerald-500/20"
                      strokeWidth={1}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects - Specimen Jars */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <div className="mb-6 inline-flex items-center gap-3">
                <Beaker className="h-6 w-6 text-emerald-500" />
                <h2 className="text-5xl font-bold md:text-6xl">
                  <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Laboratory Specimens
                  </span>
                </h2>
                <Beaker className="h-6 w-6 text-emerald-500" />
              </div>
              <p className="text-lg text-gray-400">
                Successfully synthesized projects
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative"
                >
                  {/* Jar Glow */}
                  <motion.div
                    className={`absolute -inset-2 bg-linear-to-b ${project.color} opacity-0 blur-2xl transition-opacity group-hover:opacity-30`}
                  />

                  <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/30 bg-slate-800/50 backdrop-blur-sm">
                    {/* Jar Top */}
                    <div className="h-8 border-b-2 border-emerald-500/30 bg-linear-to-b from-slate-700 to-slate-800" />

                    {/* Content */}
                    <div className="p-8">
                      {/* Icon */}
                      <div className="mb-6">
                        <project.icon
                          className={`h-16 w-16 bg-linear-to-br ${project.color} bg-clip-text text-transparent`}
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Chemical Formula */}
                      <div className="mb-4">
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                          {project.formula}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`mb-2 bg-linear-to-r text-2xl font-bold ${project.color} bg-clip-text text-transparent`}
                      >
                        {project.title}
                      </h3>
                      <div className="mb-4 text-sm text-gray-400">
                        {project.subtitle}
                      </div>

                      {/* Description */}
                      <p className="mb-6 text-sm leading-relaxed text-gray-400">
                        {project.description}
                      </p>

                      {/* Tech Grid */}
                      <div className="mb-6 grid grid-cols-2 gap-2">
                        {project.tech.map((tech, j) => (
                          <div
                            key={j}
                            className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-center"
                          >
                            <span className="text-xs font-medium text-emerald-300">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Analyze Button */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn flex w-full items-center justify-center gap-2 rounded-full border-2 border-emerald-500 bg-emerald-500/10 py-3 font-semibold transition-all hover:bg-emerald-500`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-emerald-400 transition-colors group-hover/btn:text-black">
                          Analyze Specimen
                        </span>
                        <ExternalLink className="h-4 w-4 text-emerald-400 transition-colors group-hover/btn:text-black" />
                      </motion.a>
                    </div>

                    {/* Bubbles in Jar */}
                    <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-24 overflow-hidden">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <motion.div
                          key={j}
                          className="absolute bottom-0 left-1/2 h-2 w-2 rounded-full bg-emerald-400/50"
                          animate={{
                            y: [0, -100],
                            x: [0, (j - 1) * 20],
                            opacity: [0.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: j * 0.7,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact - Lab Notes */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl border-2 border-emerald-500/30 bg-slate-800/50 p-12 backdrop-blur-sm md:p-16"
            >
              <div className="text-center">
                <Atom
                  className="mx-auto mb-8 h-16 w-16 text-emerald-500"
                  strokeWidth={1.5}
                />

                <h2 className="mb-6 text-4xl font-bold md:text-6xl">
                  <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Request Lab Access
                  </span>
                </h2>

                <p className="mb-12 text-xl text-gray-400">
                  Ready to synthesize your next project?
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <motion.a
                    href="tel:+256775894639"
                    className="group rounded-2xl border-2 border-emerald-500 bg-emerald-500/10 p-6 font-semibold transition-all hover:bg-emerald-500 hover:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="mb-2 text-xs text-emerald-400 group-hover:text-black">
                      PRIMARY CHANNEL
                    </div>
                    <div className="text-xl">+256 775 894 639</div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/256758548836"
                    className="group rounded-2xl border-2 border-cyan-500 bg-cyan-500/10 p-6 font-semibold transition-all hover:bg-cyan-500 hover:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="mb-2 text-xs text-cyan-400 group-hover:text-black">
                      WHATSAPP LAB
                    </div>
                    <div className="text-xl">+256 758 548 836</div>
                  </motion.a>
                </div>

                <div className="mt-12 border-t border-emerald-500/30 pt-8">
                  <p className="text-gray-400">
                    ⚗️ Synthesis Time: 2-4 Weeks | 🧪 Transparent Process | 🔬
                    Quality Assured
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-2 border-emerald-500/30 bg-slate-900/50 px-6 py-12">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Beaker className="h-5 w-5 text-emerald-500" />
              <span className="text-gray-400">
                © 2025 Brian&apos;s Digital Laboratory
              </span>
              <Beaker className="h-5 w-5 text-emerald-500" />
            </div>
            <p className="text-sm text-gray-500">
              Experimenting with excellence
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
