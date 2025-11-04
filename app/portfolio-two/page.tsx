"use client";

import { motion } from "framer-motion";
import { Cpu, ExternalLink, Lock, Terminal, Zap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function TerminalHackerPortfolio() {
  const [displayText, setDisplayText] = useState("");
  const [currentLine, setCurrentLine] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  // Matrix rain characters
  const matrixChars = useMemo(
    () =>
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン".split(
        "",
      ),
    [],
  );

  // Generate matrix columns once
  const matrixColumns = useMemo(
    () =>
      Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  // Boot sequence fixed with useMemo
  const bootSequence = useMemo(
    () => [
      "INITIALIZING NEURAL INTERFACE...",
      "LOADING BIOMETRIC DATA...",
      "DECRYPTING CREDENTIALS...",
      "ACCESS GRANTED",
      "> SYSTEM READY_",
    ],
    [],
  );

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const text = bootSequence[currentLine];
      let index = 0;

      const interval = setInterval(() => {
        setDisplayText(text.substring(0, index));
        index++;

        if (index > text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
          }, 500);
        }
      }, 50);

      return () => clearInterval(interval);
    } else {
      setTimeout(() => setIsBooted(true), 500);
    }
  }, [currentLine, bootSequence]);

  const projects = [
    {
      id: "001",
      name: "WAYA_CLOTHING.exe",
      status: "OPERATIONAL",
      description:
        "E-COMMERCE PLATFORM | SECURE PAYMENT GATEWAY | REAL-TIME INVENTORY",
      tech: ["NEXT.JS", "STRIPE_API", "TAILWIND", "VERCEL"],
      link: "https://wayaclothing.com/",
      threat: "LOW",
      color: "from-green-400 to-emerald-400",
    },
    {
      id: "002",
      name: "NEXPAA.exe",
      status: "OPERATIONAL",
      description:
        "BUSINESS_INTELLIGENCE | ANALYTICS_ENGINE | CLOUD_INTEGRATION",
      tech: ["REACT", "NODE.JS", "MONGODB", "REST_API"],
      link: "https://www.nexpaa.com/",
      threat: "MEDIUM",
      color: "from-cyan-400 to-blue-400",
    },
    {
      id: "003",
      name: "PAYDECORDER.exe",
      status: "OPERATIONAL",
      description: "PAYMENT_PROCESSOR | ENCRYPTION_LAYER | TRANSACTION_VAULT",
      tech: ["NEXT.JS", "PAYMENT_APIS", "POSTGRESQL", "SECURITY"],
      link: "https://www.paydecorder.com/",
      threat: "HIGH",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  const skills = [
    { name: "FULL_STACK_DEV", level: 98 },
    { name: "SYSTEM_ARCHITECTURE", level: 95 },
    { name: "API_INTEGRATION", level: 92 },
    { name: "DATABASE_DESIGN", level: 90 },
    { name: "SECURITY_PROTOCOLS", level: 88 },
    { name: "CLOUD_DEPLOYMENT", level: 94 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-mono text-green-400">
      {/* CRT Scanlines Effect */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-10">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.1)_2px,rgba(0,255,0,0.1)_4px)]" />
      </div>

      {/* Matrix Rain Background */}
      <div className="fixed inset-0 overflow-hidden opacity-20">
        {matrixColumns.map((col, i) => (
          <motion.div
            key={i}
            className="absolute top-0 text-xs text-green-500"
            style={{ left: `${col.left}%` }}
            animate={{ y: ["0vh", "100vh"] }}
            transition={{
              duration: col.duration,
              repeat: Infinity,
              delay: col.delay,
              ease: "linear",
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j} className="opacity-70">
                {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Glitch Grid Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_49%,rgba(0,255,0,0.3)_49%,rgba(0,255,0,0.3)_51%,transparent_51%),linear-gradient(0deg,transparent_49%,rgba(0,255,0,0.3)_49%,rgba(0,255,0,0.3)_51%,transparent_51%)] bg-size-[50px_50px]" />
      </div>

      {!isBooted ? (
        // Boot Sequence
        <div className="flex min-h-screen items-center justify-center p-8">
          <div className="w-full max-w-3xl">
            <div className="border-2 border-green-500 bg-black/80 p-8 shadow-[0_0_50px_rgba(0,255,0,0.3)] backdrop-blur-sm">
              <div className="mb-8 flex items-center gap-3 border-b border-green-500/30 pb-4">
                <Terminal className="h-6 w-6" />
                <span className="text-xl">SYSTEM_BOOT.exe</span>
              </div>

              {bootSequence.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-2"
                >
                  <span className="text-green-500">{"> "}</span>
                  {i === currentLine ? displayText : line}
                  {i === currentLine && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      _
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Main Content
        <div className="relative z-10">
          {/* Header Terminal */}
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="sticky top-0 z-40 border-b-2 border-green-500 bg-black/90 backdrop-blur-sm"
          >
            <div className="mx-auto max-w-7xl px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Terminal className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">BRIAN.DEV</div>
                    <div className="text-xs text-green-500/60">
                      FULL_STACK_DEVELOPER
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Hero Section */}
          <section className="flex min-h-screen items-center justify-center px-6 py-20">
            <div className="w-full max-w-6xl">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border-2 border-green-500 bg-black/80 p-8 shadow-[0_0_80px_rgba(0,255,0,0.2)] backdrop-blur-sm md:p-12"
              >
                {/* ASCII Art */}
                <pre className="mb-8 hidden overflow-x-auto text-[8px] text-green-500/40 md:block md:text-xs">
                  {`
 ██████╗  ██████╗ ██████╗ ███████╗    ███╗   ███╗ █████╗ ███████╗████████╗███████╗██████╗ 
██╔════╝ ██╔═══██╗██╔══██╗██╔════╝    ████╗ ████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██║      ██║   ██║██║  ██║█████╗      ██╔████╔██║███████║███████╗   ██║   █████╗  ██████╔╝
██║      ██║   ██║██║  ██║██╔══╝      ██║╚██╔╝██║██╔══██║╚════██║   ██║   ██╔══╝  ██╔══██╗
╚██████╗ ╚██████╔╝██████╔╝███████╗    ██║ ╚═╝ ██║██║  ██║███████║   ██║   ███████╗██║  ██║
 ╚═════╝  ╚═════╝ ╚═════╝ ╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
`}
                </pre>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h1 className="glitch-text mb-4 text-3xl font-bold md:text-5xl">
                    {"> WELCOME TO THE MATRIX_"}
                  </h1>
                  <p className="mb-6 text-lg text-green-500/80">
                    I CRAFT DIGITAL SYSTEMS THAT BREAK BOUNDARIES
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400">{">"}</span>
                      <span>
                        PROVEN EXPERIENCE IN BUILDING ENTERPRISE-LEVEL
                        APPLICATIONS
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400">{">"}</span>
                      <span>
                        SPECIALIZED IN PAYMENT INTEGRATION & SECURE
                        ARCHITECTURES
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cyan-400">{">"}</span>
                      <span>
                        FAST DELIVERY: 2-4 WEEKS | TRANSPARENT PRICING
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-green-500/30 pt-8 md:grid-cols-4">
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        98%
                      </div>
                      <div className="text-xs text-green-500/60">
                        SUCCESS_RATE
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        24/7
                      </div>
                      <div className="text-xs text-green-500/60">
                        UPTIME_TARGET
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        10+
                      </div>
                      <div className="text-xs text-green-500/60">
                        SYSTEMS_DEPLOYED
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-cyan-400">
                        &lt;4
                      </div>
                      <div className="text-xs text-green-500/60">
                        WEEKS_DELIVERY
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Skills Matrix */}
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-2 border-green-500 bg-black/80 p-8 backdrop-blur-sm"
              >
                <div className="mb-8 flex items-center gap-3">
                  <Cpu className="h-6 w-6" />
                  <h2 className="text-2xl font-bold md:text-3xl">
                    {"> SKILL_MATRIX.db"}
                  </h2>
                </div>

                <div className="space-y-6">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="mb-2 flex justify-between">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-cyan-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 border border-green-500/30 bg-green-950">
                        <motion.div
                          className="h-full bg-linear-to-r from-green-500 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects - System Files */}
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="mb-12 flex items-center gap-3">
                  <Lock className="h-6 w-6" />
                  <h2 className="text-2xl font-bold md:text-3xl">
                    {"> DECRYPTED_PROJECTS.vault"}
                  </h2>
                </div>

                <div className="space-y-6">
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="group cursor-pointer border-2 border-green-500 bg-black/80 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,255,0,0.3)]"
                    >
                      <div className="flex flex-col justify-between gap-4 md:flex-row">
                        <div className="flex-1">
                          <div className="mb-3 flex items-center gap-4">
                            <span className="text-sm text-cyan-400">
                              FILE_{project.id}
                            </span>
                            <span
                              className={`border bg-linear-to-r px-2 py-1 text-xs ${project.color} font-bold text-black`}
                            >
                              {project.status}
                            </span>
                            <span className="border border-yellow-400/30 px-2 py-1 text-xs text-yellow-400">
                              THREAT: {project.threat}
                            </span>
                          </div>

                          <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-cyan-400 md:text-2xl">
                            {project.name}
                          </h3>

                          <p className="mb-4 text-sm text-green-500/70">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, j) => (
                              <span
                                key={j}
                                className="border border-green-500/30 bg-green-950/50 px-2 py-1 text-xs"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center">
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center gap-2 border-2 border-green-500 px-6 py-3 transition-all hover:bg-green-500 hover:text-black"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span className="text-sm font-bold">ACCESS</span>
                            <ExternalLink className="h-4 w-4" />
                          </motion.a>
                        </div>
                      </div>

                      {/* Progress bar animation */}
                      <motion.div
                        className="mt-4 h-0.5 bg-linear-to-r from-green-500 to-cyan-400"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        style={{ transformOrigin: "left" }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Terminal */}
          <section className="px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border-2 border-green-500 bg-black/80 p-8 shadow-[0_0_60px_rgba(0,255,0,0.2)] backdrop-blur-sm"
              >
                <div className="mb-8 flex items-center gap-3">
                  <Zap className="h-6 w-6" />
                  <h2 className="text-2xl font-bold md:text-3xl">
                    {"> INITIATE_CONTACT.exe"}
                  </h2>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">{">"}</span>
                    <span className="text-sm">
                      READY TO DEPLOY YOUR NEXT PROJECT?
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400">{">"}</span>
                    <span className="text-sm">
                      ESTABLISH SECURE CONNECTION NOW
                    </span>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <motion.a
                    href="tel:+256775894639"
                    className="group border-2 border-green-500 p-6 transition-all hover:bg-green-500 hover:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="mb-2 text-xs text-cyan-400">
                      VOICE_CHANNEL
                    </div>
                    <div className="text-xl font-bold">+256 775 894 639</div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/256758548836"
                    className="group border-2 border-green-500 p-6 transition-all hover:bg-green-500 hover:text-black"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="mb-2 text-xs text-cyan-400">
                      WHATSAPP_PROTOCOL
                    </div>
                    <div className="text-xl font-bold">+256 758 548 836</div>
                  </motion.a>
                </div>

                <motion.div
                  className="mt-8 border-t border-green-500/30 pt-8 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-2 text-2xl font-bold text-cyan-400 md:text-3xl">
                    LET&apos;S BUILD THE FUTURE
                  </div>
                  <div className="text-sm text-green-500/60">
                    RESPONSE_TIME: &lt; 24 HOURS | DELIVERY: 2-4 WEEKS
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t-2 border-green-500 bg-black/90 py-6 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-6 text-center">
              <div className="flex items-center justify-center gap-2 text-sm">
                <Terminal className="h-4 w-4" />
                <span>BRIAN.DEV © 2025</span>
                <span className="text-green-500/40">|</span>
                <span className="text-green-500/60">
                  CRAFTING DIGITAL EXCELLENCE
                </span>
              </div>
            </div>
          </footer>
        </div>
      )}

      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .glitch-text:hover {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </div>
  );
}
