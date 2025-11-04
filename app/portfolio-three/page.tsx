"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Code, ExternalLink, Smartphone, Sparkles, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function LiquidMorphismPortfolio() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Generate blob positions once
  const blobs = useMemo(
    () => [
      { x: 20, y: 20, size: 600, color: "bg-purple-500", delay: 0 },
      { x: 70, y: 60, size: 500, color: "bg-pink-500", delay: 2 },
      { x: 50, y: 40, size: 450, color: "bg-blue-500", delay: 4 },
      { x: 80, y: 30, size: 400, color: "bg-cyan-500", delay: 6 },
    ],
    [],
  );

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);
  const projects = [
    {
      title: "Waya Clothing",
      description:
        "Modern e-commerce platform with seamless shopping experience and secure payment integration",
      tech: ["Next.js", "Stripe", "Tailwind CSS", "Vercel"],
      link: "https://wayaclothing.com/",
      gradient: "from-purple-400 via-pink-400 to-purple-600",
      icon: "🛍️",
    },
    {
      title: "Nexpaa",
      description:
        "Innovative business platform with advanced features and comprehensive integrations",
      tech: ["React", "Node.js", "MongoDB", "REST API"],
      link: "https://www.nexpaa.com/",
      gradient: "from-blue-400 via-cyan-400 to-blue-600",
      icon: "💼",
    },
    {
      title: "PayDecorder",
      description:
        "Secure payment processing platform with seamless transaction management",
      tech: ["Next.js", "Payment APIs", "PostgreSQL", "Security"],
      link: "https://www.paydecorder.com/",
      gradient: "from-green-400 via-emerald-400 to-green-600",
      icon: "💳",
    },
  ];

  const skills = [
    {
      name: "Full-Stack Development",
      level: 95,
      color: "from-purple-400 to-pink-400",
    },
    {
      name: "Payment Integration",
      level: 92,
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "System Architecture",
      level: 90,
      color: "from-green-400 to-emerald-400",
    },
    { name: "UI/UX Design", level: 88, color: "from-pink-400 to-purple-400" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Custom Cursor */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="h-full w-full rounded-full border-2 border-white"
          animate={{
            scale: cursorVariant === "hover" ? 2 : 1,
          }}
        />
      </motion.div>

      {/* Animated Gradient Blobs */}
      <div className="fixed inset-0 overflow-hidden">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute ${blob.color} rounded-full opacity-30 blur-[120px]`}
            style={{
              width: blob.size,
              height: blob.size,
              left: `${blob.x}%`,
              top: `${blob.y}%`,
            }}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              delay: blob.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Floating Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed top-6 left-1/2 z-40 -translate-x-1/2"
        >
          <div className="rounded-full border border-white/20 bg-white/10 px-8 py-4 shadow-2xl backdrop-blur-2xl">
            <div className="flex items-center gap-8">
              <motion.span
                className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent"
                whileHover={{ scale: 1.1 }}
              >
                BRIAN
              </motion.span>
              <div className="hidden gap-6 text-sm md:flex">
                <a
                  href="#about"
                  className="transition-colors hover:text-purple-400"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="transition-colors hover:text-pink-400"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="transition-colors hover:text-cyan-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-6 pt-24">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {/* Floating Avatar */}
              <motion.div
                className="relative mb-12 inline-block"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink-500 opacity-50 blur-3xl" />
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/30 bg-linear-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-xl">
                    <Sparkles className="h-16 w-16 text-purple-300" />
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 text-6xl font-bold md:text-8xl"
              >
                <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Brian
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-4 text-2xl text-gray-300 md:text-3xl"
              >
                Full-Stack Developer & Digital Craftsman
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mx-auto mb-12 max-w-2xl text-lg text-gray-400"
              >
                Turning ideas into reality with proven experience in building
                quality systems and applications tailored to your needs
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  href="tel:+256775894639"
                  className="group relative overflow-hidden rounded-full px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 opacity-100 transition-opacity group-hover:opacity-90" />
                  <span className="relative flex items-center gap-2 font-semibold">
                    <Zap className="h-5 w-5" />
                    Start Project
                  </span>
                </motion.a>

                <motion.a
                  href="https://wa.me/256758548836"
                  className="rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold backdrop-blur-xl transition-all hover:bg-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  WhatsApp
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
              >
                {[
                  { label: "Projects", value: "10+" },
                  { label: "Delivery", value: "2-4 weeks" },
                  { label: "Success Rate", value: "98%" },
                  { label: "Availability", value: "24/7" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <div className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="about" className="px-6 py-32">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                Expertise
              </h2>
              <p className="text-lg text-gray-400">
                Building with modern technologies
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <span
                      className={`bg-linear-to-r text-lg font-bold ${skill.color} bg-clip-text text-transparent`}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className={`h-full bg-linear-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 grid gap-6 md:grid-cols-3"
            >
              {[
                {
                  icon: Code,
                  title: "Web Development",
                  desc: "Full-stack applications",
                },
                {
                  icon: Smartphone,
                  title: "Payment Integration",
                  desc: "Secure transactions",
                },
                {
                  icon: Zap,
                  title: "Fast Delivery",
                  desc: "2-4 weeks timeline",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
                  whileHover={{ scale: 1.05, y: -10 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-linear-to-r from-purple-500/20 to-pink-500/20 p-4">
                    <service.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section - Bento Grid */}
        <section id="projects" className="px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="mb-4 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
                Featured Projects
              </h2>
              <p className="text-lg text-gray-400">
                Crafted with precision and passion
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
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <motion.div
                    className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
                    whileHover={{ y: -10 }}
                  >
                    {/* Gradient Glow */}
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20`}
                    />

                    {/* Icon */}
                    <div className="relative mb-6 text-6xl">{project.icon}</div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="mb-3 text-2xl font-bold transition-all group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent">
                        {project.title}
                      </h3>
                      <p className="mb-6 text-sm leading-relaxed text-gray-400">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.tech.map((tech, j) => (
                          <span
                            key={j}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-xl"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Link */}
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 bg-linear-to-r text-sm font-semibold ${project.gradient} bg-clip-text text-transparent`}
                        whileHover={{ x: 5 }}
                      >
                        View Project <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>

                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: [-200, 400] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-12 backdrop-blur-2xl md:p-16"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-500/20 blur-3xl" />

              <div className="relative text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
                >
                  Let&apos;s Build Something Amazing
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="mb-12 text-xl text-gray-300"
                >
                  Ready to turn your idea into reality? Get in touch today.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col justify-center gap-4 md:flex-row"
                >
                  <motion.a
                    href="tel:+256775894639"
                    className="rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-8 py-4 text-lg font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    Call: +256 775 894 639
                  </motion.a>

                  <motion.a
                    href="https://wa.me/256758548836"
                    className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-xl transition-all hover:bg-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    WhatsApp: +256 758 548 836
                  </motion.a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 border-t border-white/10 pt-8"
                >
                  <p className="text-gray-400">
                    ⚡ Fast Delivery: 2-4 weeks | 💰 Transparent Pricing
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 px-6 py-12">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-gray-400">
              © 2025 Brian. Crafting digital excellence.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
