"use client";

import { motion, useMotionValue } from "framer-motion";
import { Binary, Boxes, Cpu, ExternalLink, Grid3x3 } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

// Generate random values outside component to avoid impure function calls during render
const generateBinaryColumns = () =>
  Array.from({ length: 20 }).map(() => ({
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

export default function CodeCanvasPortfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Generate random values once for binary rain
  const binaryColumns = useMemo(() => generateBinaryColumns(), []);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid with wave distortion
      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)";
      ctx.lineWidth = 1;

      const spacing = 40;
      const mouseInfluence = 100;

      // Vertical lines
      for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        for (let y = 0; y <= canvas.height; y += 5) {
          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = mouseInfluence;
          const offset =
            distance < maxDistance ? (1 - distance / maxDistance) * 20 : 0;

          const lineX = x + offset;

          if (y === 0) {
            ctx.moveTo(lineX, y);
          } else {
            ctx.lineTo(lineX, y);
          }
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        for (let x = 0; x <= canvas.width; x += 5) {
          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = mouseInfluence;
          const offset =
            distance < maxDistance ? (1 - distance / maxDistance) * 20 : 0;

          const lineY = y + offset;

          if (x === 0) {
            ctx.moveTo(x, lineY);
          } else {
            ctx.lineTo(x, lineY);
          }
        }
        ctx.stroke();
      }

      // Draw particles at intersections
      ctx.fillStyle = "rgba(139, 92, 246, 0.6)";
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = mousePosition.x - x;
          const dy = mousePosition.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = mouseInfluence;

          if (distance < maxDistance) {
            const size = (1 - distance / maxDistance) * 4;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  const projects = [
    {
      title: "Waya Clothing",
      description:
        "E-commerce platform with modern architecture and secure payment gateway",
      tech: ["Next.js", "Stripe", "Tailwind", "Vercel"],
      link: "https://wayaclothing.com/",
      pattern: "010101",
    },
    {
      title: "Nexpaa",
      description:
        "Business intelligence platform with real-time analytics and cloud integration",
      tech: ["React", "Node.js", "MongoDB", "REST API"],
      link: "https://www.nexpaa.com/",
      pattern: "110011",
    },
    {
      title: "PayDecorder",
      description:
        "Payment processor with encryption layer and secure transaction vault",
      tech: ["Next.js", "Payment APIs", "PostgreSQL", "Security"],
      link: "https://www.paydecorder.com/",
      pattern: "101010",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* Interactive Grid Canvas */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
      />

      {/* Binary Rain Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-10">
        {binaryColumns.map((col, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-purple-500"
            style={{ left: `${i * 5}%` }}
            animate={{ y: ["0%", "100%"] }}
            transition={{
              duration: col.duration,
              repeat: Infinity,
              ease: "linear",
              delay: col.delay,
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j}>{j % 2 === 0 ? "1" : "0"}</div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-6 py-20">
          <div className="w-full max-w-6xl">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              {/* Geometric Icon */}
              <motion.div
                className="mb-12 inline-flex"
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="relative">
                  <Grid3x3
                    className="h-24 w-24 text-purple-500"
                    strokeWidth={1}
                  />
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Boxes
                      className="h-24 w-24 text-purple-400"
                      strokeWidth={1}
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <h1 className="text-7xl font-bold tracking-tighter md:text-9xl">
                  <span className="inline-block overflow-hidden">
                    <motion.span
                      className="block"
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      BRIAN
                    </motion.span>
                  </span>
                </h1>

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mx-auto h-1 w-64 bg-linear-to-r from-transparent via-purple-500 to-transparent"
                />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-2xl font-light tracking-wide text-gray-400 md:text-3xl"
                >
                  SYSTEM ARCHITECT | FULL-STACK DEVELOPER
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-500"
                >
                  Building systematic solutions with precision and technical
                  excellence.
                  <br />
                  Proven experience in creating enterprise-level applications.
                </motion.p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
              >
                {[
                  { value: "10+", label: "SYSTEMS", icon: Cpu },
                  { value: "98%", label: "SUCCESS", icon: Binary },
                  { value: "24/7", label: "SUPPORT", icon: Grid3x3 },
                  { value: "<4W", label: "DELIVERY", icon: Boxes },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-purple-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                    <div className="relative border border-purple-500/30 bg-black/50 p-6 backdrop-blur-sm">
                      <stat.icon
                        className="mx-auto mb-3 h-6 w-6 text-purple-500"
                        strokeWidth={1}
                      />
                      <div className="text-3xl font-bold text-purple-400">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs tracking-widest text-gray-500">
                        {stat.label}
                      </div>
                    </div>
                    <motion.div
                      className="absolute right-0 bottom-0 left-0 h-0.5 bg-purple-500"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section - Geometric Grid */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <div className="mb-6 inline-flex items-center gap-3">
                <div className="h-px w-12 bg-purple-500" />
                <Boxes className="h-6 w-6 text-purple-500" strokeWidth={1} />
                <div className="h-px w-12 bg-purple-500" />
              </div>
              <h2 className="mb-4 text-5xl font-bold tracking-tighter md:text-7xl">
                DEPLOYED SYSTEMS
              </h2>
              <p className="text-lg text-gray-500">
                Precision-engineered digital architectures
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
                  {/* Geometric Border Animation */}
                  <div className="absolute inset-0 border border-purple-500/30" />
                  <motion.div
                    className="absolute inset-0 border-2 border-purple-500"
                    initial={{ clipPath: "inset(0 100% 100% 0)" }}
                    whileInView={{ clipPath: "inset(0 0 0 0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  />

                  <div className="relative h-full bg-black/80 p-8 backdrop-blur-sm">
                    {/* Binary Pattern Header */}
                    <div className="mb-6 flex items-center justify-between">
                      <div className="font-mono text-xs tracking-widest text-purple-500">
                        [{project.pattern}]
                      </div>
                      <div className="font-mono text-xs text-purple-500">
                        SYSTEM_{String(i + 1).padStart(2, "0")}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-bold transition-colors group-hover:text-purple-400">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>

                    {/* Tech Stack Grid */}
                    <div className="mb-6 grid grid-cols-2 gap-2">
                      {project.tech.map((tech, j) => (
                        <div
                          key={j}
                          className="border border-purple-500/20 bg-purple-500/5 p-2 text-center"
                        >
                          <span className="font-mono text-xs text-purple-300">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Access Button */}
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 font-mono text-sm text-purple-400 transition-colors hover:text-purple-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="tracking-wider">ACCESS_SYSTEM</span>
                      <ExternalLink className="h-4 w-4" />
                    </motion.a>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-purple-500" />
                    <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-purple-500" />
                    <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-purple-500" />
                    <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-purple-500" />
                  </div>

                  {/* Scan Line Effect */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent via-purple-500/20 to-transparent"
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-32">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Geometric Border */}
              <div className="absolute inset-0 border-2 border-purple-500/30" />
              <motion.div
                className="absolute inset-0 border-2 border-purple-500"
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                whileInView={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />

              <div className="relative bg-black/90 p-12 backdrop-blur-sm md:p-16">
                <div className="mb-12 text-center">
                  <div className="mb-6 inline-flex items-center gap-3">
                    <div className="h-px w-16 bg-purple-500" />
                    <Binary
                      className="h-6 w-6 text-purple-500"
                      strokeWidth={1}
                    />
                    <div className="h-px w-16 bg-purple-500" />
                  </div>
                  <h2 className="mb-6 text-4xl font-bold tracking-tighter md:text-6xl">
                    INITIALIZE_CONTACT
                  </h2>
                  <p className="text-lg text-gray-400">
                    Ready to architect your next system
                  </p>
                </div>

                <div className="mx-auto grid max-w-2xl gap-6 md:grid-cols-2">
                  <motion.a
                    href="tel:+256775894639"
                    className="group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-purple-500" />
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-purple-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative border-2 border-purple-500 bg-black/50 p-6 text-center transition-colors group-hover:bg-transparent">
                      <div className="mb-2 font-mono text-xs tracking-widest text-purple-400">
                        VOICE_CHANNEL
                      </div>
                      <div className="text-lg font-bold">+256 775 894 639</div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/256758548836"
                    className="group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-purple-500/20" />
                    <div className="relative border-2 border-purple-500 bg-black/50 p-6 text-center transition-colors group-hover:bg-purple-500/10">
                      <div className="mb-2 font-mono text-xs tracking-widest text-purple-400">
                        WHATSAPP_PROTOCOL
                      </div>
                      <div className="text-lg font-bold">+256 758 548 836</div>
                    </div>
                  </motion.a>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="my-8 h-px bg-purple-500/30"
                />

                <div className="text-center">
                  <p className="font-mono text-sm text-gray-500">
                    ⚡ DELIVERY: 2-4 WEEKS | 💰 TRANSPARENT_PRICING | 🔒
                    SECURE_SYSTEMS
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-purple-500/30 px-6 py-8">
          <div className="mx-auto max-w-6xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <Grid3x3 className="h-5 w-5 text-purple-500" strokeWidth={1} />
              <span className="font-mono text-sm text-gray-400">
                © 2025 BRIAN.SYSTEMS
              </span>
              <Grid3x3 className="h-5 w-5 text-purple-500" strokeWidth={1} />
            </div>
            <p className="font-mono text-xs tracking-widest text-gray-600">
              SYSTEMATIC_EXCELLENCE
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
