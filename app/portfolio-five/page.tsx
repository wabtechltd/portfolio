"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Gamepad2, Radio, Zap } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

// Generate random stars outside component
const generateStars = () =>
  Array.from({ length: 100 }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 2,
  }));

export default function NeonPlaygroundPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [glitchActive, setGlitchActive] = useState(false);
  const stars = useMemo(() => generateStars(), []);

  // Parallax transforms
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      title: "WAYA CLOTHING",
      subtitle: "E-COMMERCE ARCADE",
      description:
        "Next-gen fashion platform with secure payment gateway and real-time inventory system",
      tech: ["NEXT.JS", "STRIPE", "TAILWIND", "VERCEL"],
      link: "https://wayaclothing.com/",
      color: "from-pink-500 to-purple-500",
      icon: "🛍️",
    },
    {
      title: "NEXPAA",
      subtitle: "BUSINESS MATRIX",
      description:
        "Advanced business intelligence platform with analytics engine and cloud integration",
      tech: ["REACT", "NODE.JS", "MONGODB", "REST API"],
      link: "https://www.nexpaa.com/",
      color: "from-cyan-500 to-blue-500",
      icon: "💼",
    },
    {
      title: "PAYDECORDER",
      subtitle: "PAYMENT VAULT",
      description:
        "Ultra-secure payment processor with encryption layer and transaction management",
      tech: ["NEXT.JS", "PAYMENT APIs", "POSTGRESQL", "SECURITY"],
      link: "https://www.paydecorder.com/",
      color: "from-yellow-500 to-orange-500",
      icon: "💳",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#0a0a1f] text-white"
    >
      {/* Animated Stars */}
      <div className="fixed inset-0 z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Gradient Sky Background */}
      <div className="fixed inset-0 z-0 bg-linear-to-b from-[#0a0a1f] via-purple-900/30 to-pink-900/30" />

      {/* Animated Sun */}
      <motion.div
        className="fixed left-1/2 z-0 -translate-x-1/2"
        style={{ y: sunY, top: "20%" }}
      >
        <div className="relative h-64 w-64">
          {/* Sun Glow */}
          <div className="absolute inset-0 rounded-full bg-linear-to-b from-yellow-500 via-orange-500 to-pink-500 opacity-50 blur-3xl" />
          {/* Sun Core */}
          <div className="absolute inset-8 rounded-full bg-linear-to-b from-yellow-400 to-pink-500" />
          {/* Sun Lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 h-32 w-1 origin-top bg-linear-to-b from-yellow-400 to-transparent"
              style={{
                transform: `rotate(${i * 18}deg) translateX(-50%)`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Perspective Grid Floor */}
      <motion.div
        className="fixed right-0 bottom-0 left-0 z-0 h-[50vh]"
        style={{ y: gridY }}
      >
        <div className="absolute inset-0" style={{ perspective: "400px" }}>
          <div
            className="absolute right-0 bottom-0 left-0 h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: "rotateX(60deg)",
            }}
          >
            {/* Horizontal Lines */}
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute right-0 left-0 h-px"
                style={{
                  bottom: `${i * 3.33}%`,
                  background: `linear-gradient(90deg, transparent, rgba(236, 72, 153, ${1 - i * 0.03}) 50%, transparent)`,
                }}
              />
            ))}
            {/* Vertical Lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px"
                style={{
                  left: `${(i - 10) * 5 + 50}%`,
                  background: `linear-gradient(180deg, transparent, rgba(139, 92, 246, ${0.5}) 50%, transparent)`,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-6 pt-20">
          <div className="w-full max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {/* VHS Effect Badge */}
              <motion.div
                className="mb-8 inline-flex items-center gap-2 border-2 border-cyan-500 bg-cyan-500/10 px-6 py-2"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Radio className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-bold tracking-widest text-cyan-400">
                  LIVE • TRANSMISSION
                </span>
              </motion.div>

              {/* Main Title with Glitch */}
              <motion.h1
                className={`mb-6 text-7xl font-black tracking-tighter md:text-9xl ${
                  glitchActive ? "glitch" : ""
                }`}
                style={{
                  textShadow:
                    "0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
                }}
              >
                <span className="bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  BRIAN
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-4 text-2xl font-bold tracking-wider md:text-4xl"
                style={{
                  textShadow: "0 0 10px rgba(6, 182, 212, 0.5)",
                }}
              >
                <span className="text-cyan-400">FULL-STACK</span>{" "}
                <span className="text-pink-500">DEVELOPER</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mx-auto mb-12 max-w-2xl text-lg text-purple-300"
              >
                Crafting digital experiences from the past, present, and future.
                <br />
                Arcade-level quality in every project.
              </motion.p>

              {/* Retro Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <motion.a
                  href="tel:+256775894639"
                  className="group relative overflow-hidden px-8 py-4 text-lg font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-pink-500" />
                  <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity group-hover:opacity-100" />
                  <motion.div
                    className="absolute inset-0 border-4 border-cyan-400"
                    animate={{
                      boxShadow: [
                        "0 0 10px rgba(6, 182, 212, 0.5)",
                        "0 0 20px rgba(6, 182, 212, 1)",
                        "0 0 10px rgba(6, 182, 212, 0.5)",
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="relative flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    START QUEST
                  </span>
                </motion.a>

                <motion.a
                  href="https://wa.me/256758548836"
                  className="border-4 border-purple-500 bg-purple-500/20 px-8 py-4 text-lg font-bold backdrop-blur-sm transition-all hover:bg-purple-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  CONNECT
                </motion.a>
              </motion.div>

              {/* Stats Arcade */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4"
              >
                {[
                  { label: "GAMES", value: "10+", icon: "🎮" },
                  { label: "SCORE", value: "98%", icon: "⭐" },
                  { label: "LEVEL", value: "PRO", icon: "🏆" },
                  { label: "TIME", value: "2-4W", icon: "⚡" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative border-4 border-pink-500 bg-black/50 p-6 backdrop-blur-sm"
                    whileHover={{ y: -5 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                        "0 0 40px rgba(236, 72, 153, 0.6)",
                        "0 0 20px rgba(236, 72, 153, 0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <div className="mb-2 text-4xl">{stat.icon}</div>
                    <div className="text-3xl font-black text-cyan-400">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs tracking-widest text-pink-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section - Arcade Cards */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <div className="mb-6 inline-flex items-center gap-3">
                <Gamepad2 className="h-8 w-8 text-pink-500" />
                <h2 className="text-5xl font-black tracking-tighter md:text-7xl">
                  <span className="bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                    HIGH SCORES
                  </span>
                </h2>
                <Gamepad2 className="h-8 w-8 text-cyan-500" />
              </div>
              <p className="text-lg text-purple-300">
                Top achievements in the digital arcade
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
                  whileHover={{ y: -10 }}
                >
                  {/* Neon Border */}
                  <motion.div
                    className={`absolute -inset-1 bg-linear-to-r ${project.color} opacity-75 blur-lg`}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="relative border-4 border-pink-500 bg-black/90 p-8 backdrop-blur-sm">
                    {/* Icon Badge */}
                    <div className="mb-4 text-6xl">{project.icon}</div>

                    {/* Project Number */}
                    <div className="mb-2 font-mono text-sm text-cyan-400">
                      GAME_{String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Title */}
                    <h3 className="mb-2 text-2xl font-black text-pink-400">
                      {project.title}
                    </h3>
                    <div className="mb-4 text-sm font-bold tracking-wide text-cyan-400">
                      {project.subtitle}
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6 grid grid-cols-2 gap-2">
                      {project.tech.map((tech, j) => (
                        <div
                          key={j}
                          className="border-2 border-purple-500 bg-purple-500/10 px-2 py-1 text-center"
                        >
                          <span className="text-xs font-bold text-purple-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Play Button */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative block w-full overflow-hidden border-4 border-cyan-400 bg-cyan-400 py-3 text-center font-black"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`absolute inset-0 bg-linear-to-r ${project.color} opacity-0 transition-opacity group-hover/btn:opacity-100`}
                      />
                      <span className="relative flex items-center justify-center gap-2 text-black transition-colors group-hover/btn:text-white">
                        PLAY NOW
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    </motion.a>

                    {/* Scanlines Effect */}
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)] opacity-20" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Outer Glow */}
              <motion.div
                className="absolute -inset-4 bg-linear-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-50 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative border-8 border-pink-500 bg-black/90 p-12 backdrop-blur-sm md:p-16">
                <div className="text-center">
                  <motion.h2
                    className="mb-6 text-4xl font-black md:text-6xl"
                    style={{
                      textShadow: "0 0 20px rgba(236, 72, 153, 0.8)",
                    }}
                  >
                    <span className="bg-linear-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                      INSERT COIN
                    </span>
                  </motion.h2>

                  <p className="mb-12 text-xl text-purple-300">
                    Ready to level up your project?
                  </p>

                  <div className="grid gap-4 md:grid-cols-2">
                    <motion.a
                      href="tel:+256775894639"
                      className="border-4 border-cyan-400 bg-cyan-400/20 p-6 font-bold transition-all hover:bg-cyan-400 hover:text-black"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="mb-2 text-xs text-cyan-400">PLAYER 1</div>
                      <div className="text-xl">+256 775 894 639</div>
                    </motion.a>

                    <motion.a
                      href="https://wa.me/256758548836"
                      className="border-4 border-pink-500 bg-pink-500/20 p-6 font-bold transition-all hover:bg-pink-500 hover:text-black"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="mb-2 text-xs text-pink-400">WHATSAPP</div>
                      <div className="text-xl">+256 758 548 836</div>
                    </motion.a>
                  </div>

                  <div className="mt-12 border-t-4 border-purple-500 pt-8">
                    <p className="font-mono text-purple-300">
                      ⚡ DELIVERY: 2-4 WEEKS | 💰 FAIR PRICING | 🎮 ARCADE
                      QUALITY
                    </p>
                  </div>
                </div>

                {/* Scanlines */}
                <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)] opacity-30" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t-4 border-pink-500 bg-black/50 px-6 py-8">
          <div className="mx-auto max-w-6xl text-center">
            <p className="mb-2 font-bold text-purple-300">
              © 2025 BRIAN RETRO STUDIOS
            </p>
            <p className="font-mono text-sm text-cyan-400">
              POWERED BY NEON DREAMS
            </p>
          </div>
        </footer>
      </div>

      {/* Global Styles for Glitch Effect */}
      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(-3px, -3px);
          }
          60% {
            transform: translate(3px, 3px);
          }
          80% {
            transform: translate(3px, -3px);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch {
          animation: glitch 0.3s infinite;
        }

        @keyframes chromatic {
          0% {
            text-shadow:
              2px 0 0 rgba(255, 0, 0, 0.7),
              -2px 0 0 rgba(0, 255, 255, 0.7);
          }
          100% {
            text-shadow:
              -2px 0 0 rgba(255, 0, 0, 0.7),
              2px 0 0 rgba(0, 255, 255, 0.7);
          }
        }
      `}</style>
    </div>
  );
}
