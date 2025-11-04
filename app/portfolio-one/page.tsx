"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

// Generate stars and particles outside component
const generateStars = () =>
  Array.from({ length: 100 }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

const generateParticles = () =>
  Array.from({ length: 20 }).map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
  }));

export default function CosmicPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Use pre-generated values
  const stars = useMemo(() => generateStars(), []);
  const particles = useMemo(() => generateParticles(), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "Waya Clothing",
      description:
        "Modern e-commerce platform for fashion retail with seamless shopping experience and secure payment integration.",
      tech: ["Next.js", "E-commerce", "Stripe", "Tailwind CSS"],
      link: "https://wayaclothing.com/",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Nexpaa",
      description:
        "Innovative business platform with advanced features, real-time analytics, and comprehensive integrations.",
      tech: ["React", "Node.js", "MongoDB", "REST API"],
      link: "https://www.nexpaa.com/",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "PayDecorder",
      description:
        "Secure payment processing platform with seamless transaction management and multi-currency support.",
      tech: ["Next.js", "Payment APIs", "PostgreSQL", "Security"],
      link: "https://www.paydecorder.com/",
      color: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-[400vh] overflow-hidden bg-[#0a0118]"
    >
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              scale: star.scale,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Animated Nebula Background */}
      <motion.div
        className="fixed inset-0 opacity-30"
        style={{
          x: useTransform(scrollYProgress, [0, 1], [0, -100]),
          y: useTransform(scrollYProgress, [0, 1], [0, 200]),
        }}
      >
        <div className="absolute top-20 left-20 h-[600px] w-[600px] animate-pulse rounded-full bg-purple-500/30 blur-[120px]" />
        <div
          className="absolute right-20 bottom-20 h-[500px] w-[500px] animate-pulse rounded-full bg-blue-500/30 blur-[120px]"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[400px] w-[400px] animate-pulse rounded-full bg-pink-500/20 blur-[100px]"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* Parallax Floating Particles */}
      <div className="pointer-events-none fixed inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-linear-to-r from-purple-400 to-pink-400 blur-sm"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              x: mousePosition.x * (i * 5),
              y: mousePosition.y * (i * 5),
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              x: { type: "spring", stiffness: 50, damping: 20 },
              y: { type: "spring", stiffness: 50, damping: 20 },
              scale: { duration: 2, repeat: Infinity },
              opacity: { duration: 2, repeat: Infinity },
            }}
          />
        ))}
      </div>

      {/* Hero Section - Floating in Space */}
      <motion.section
        className="sticky top-0 flex h-screen items-center justify-center"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]),
          scale: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
        }}
      >
        <div className="z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.h1
              className="mb-6 bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-7xl font-bold text-transparent md:text-9xl"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              BRIAN
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-4 text-2xl font-light text-gray-300 md:text-4xl"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mx-auto mb-12 max-w-2xl text-lg text-gray-400 md:text-xl"
          >
            Turning ideas into reality through code.
            <br />
            Specializing in innovative systems and applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <a
              href="tel:+256775894639"
              className="group flex items-center gap-2 text-gray-300 transition-colors hover:text-purple-400"
            >
              <Phone className="h-5 w-5 group-hover:animate-pulse" />
              <span>+256 775 894 639</span>
            </a>
            <a
              href="https://wa.me/256758548836"
              className="group flex items-center gap-2 text-gray-300 transition-colors hover:text-green-400"
            >
              <Phone className="h-5 w-5 group-hover:animate-pulse" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:brian@example.com"
              className="group flex items-center gap-2 text-gray-300 transition-colors hover:text-blue-400"
            >
              <Mail className="h-5 w-5 group-hover:animate-pulse" />
              <span>Email</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-8 flex justify-center gap-4"
          >
            <motion.a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 text-gray-300" />
            </motion.a>
            <motion.a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all hover:bg-white/10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 text-gray-300" />
            </motion.a>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex h-10 w-6 justify-center rounded-full border-2 border-purple-400 p-2">
              <motion.div
                className="h-3 w-1 rounded-full bg-purple-400"
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section - Floating Card */}
      <motion.section
        className="sticky top-0 flex h-screen items-center justify-center"
        style={{
          opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]),
          scale: useTransform(
            scrollYProgress,
            [0.15, 0.25, 0.35],
            [0.8, 1, 0.8],
          ),
        }}
      >
        <motion.div
          className="z-10 mx-auto max-w-4xl px-6"
          style={{
            rotateX: mousePosition.y * 5,
            rotateY: mousePosition.x * 5,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 to-pink-500/20 blur-xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/40 p-12 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <Code2 className="h-8 w-8 text-purple-400" />
                  <h2 className="text-4xl font-bold text-white md:text-5xl">
                    About Me
                  </h2>
                </div>
                <p className="mb-6 text-lg leading-relaxed text-gray-300">
                  With proven experience and successful projects to showcase, I
                  deliver quality systems and applications tailored to your
                  needs. I specialize in building management systems, online
                  business platforms with payment integration, AI applications,
                  streaming platforms, and any custom solution based on your
                  vision.
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-6">
                    <div className="mb-2 text-3xl font-bold text-purple-400">
                      ⚡ Fast Delivery
                    </div>
                    <p className="text-gray-400">
                      Most projects completed within 2-4 weeks
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
                    <div className="mb-2 text-3xl font-bold text-blue-400">
                      💰 Transparent Pricing
                    </div>
                    <p className="text-gray-400">
                      Affordable & clear cost structure
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section - Floating Project Cards */}
      <motion.section
        className="sticky top-0 flex h-screen items-center justify-center py-20"
        style={{
          opacity: useTransform(scrollYProgress, [0.35, 0.45, 0.95], [0, 1, 1]),
        }}
      >
        <div className="z-10 mx-auto w-full max-w-7xl px-6">
          <motion.h2
            className="mb-16 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-center text-5xl font-bold text-transparent md:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                  />

                  {/* Project Image Placeholder */}
                  <div className="relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br from-purple-900/50 to-blue-900/50">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]" />
                    <Code2 className="h-20 w-20 text-purple-400/30" />
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: [-200, 400] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                    />
                  </div>

                  <div className="relative z-10 p-6">
                    <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-purple-400">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-400">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-xs text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
                      whileHover={{ x: 5 }}
                    >
                      View Live Site <ExternalLink className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 opacity-50 blur-xl" />
              <motion.a
                href="tel:+256775894639"
                className="relative inline-block cursor-pointer rounded-full bg-linear-to-r from-purple-600 to-pink-600 px-12 py-6 text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LET&apos;S TURN YOUR IDEA INTO REALITY!
              </motion.a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-gray-300">
              <a
                href="tel:+256775894639"
                className="text-lg transition-colors hover:text-purple-400"
              >
                Call: +256 775 894 639
              </a>
              <a
                href="https://wa.me/256758548836"
                className="text-lg transition-colors hover:text-green-400"
              >
                WhatsApp: +256 758 548 836
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 right-0 left-0 z-50 h-1 origin-left bg-linear-to-r from-purple-500 via-pink-500 to-blue-500"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
