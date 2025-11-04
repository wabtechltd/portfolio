"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function PortfoliosPage() {
  const portfolios = [
    {
      id: "two",
      title: "The Terminal Hacker",
      description:
        "Matrix-inspired cyberpunk design with boot sequences and cascading code.",
      theme: "Cyberpunk & Hacker",
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      id: "four",
      title: "The Code Canvas",
      description:
        "Interactive canvas grid that warps with mouse movement and binary rain effects.",
      theme: "Interactive Grid",
      color: "from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      id: "five",
      title: "The Neon Playground",
      description:
        "80s synthwave retro vibes with animated sunset and perspective grid floor.",
      theme: "Retro Synthwave",
      color: "from-orange-600 to-pink-600",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
    },
    {
      id: "one",
      title: "The Cosmic Developer",
      description:
        "A journey through space with parallax stars, nebula effects, and floating particles.",
      theme: "Space & Astronomy",
      color: "from-purple-600 to-blue-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },

    {
      id: "three",
      title: "The Liquid Morphism",
      description:
        "Premium glassmorphic design with morphing blobs and magnetic cursor effects.",
      theme: "Glassmorphism",
      color: "from-pink-600 to-purple-600",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
    },

    {
      id: "six",
      title: "The Minimalist Brutalist",
      description:
        "Bold typography and stark contrasts. Black and white brutalist editorial design.",
      theme: "Brutalist Minimal",
      color: "from-gray-600 to-gray-900",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
    },
    {
      id: "seven",
      title: "The Developer's Lab",
      description:
        "Science laboratory theme with bubbling animations and specimen jar project cards.",
      theme: "Science Lab",
      color: "from-emerald-600 to-teal-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="border-b border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">
              Portfolio <span className="italic">Inspirations</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-400 md:text-2xl">
              Explore different creative portfolio designs. Each one showcases a
              unique style and approach to presenting developer work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolios.map((portfolio, index) => (
              <motion.div
                key={portfolio.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group relative border-2 ${portfolio.borderColor} ${portfolio.bgColor} overflow-hidden rounded-2xl backdrop-blur-sm transition-transform hover:scale-105`}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${portfolio.color} opacity-0 transition-opacity group-hover:opacity-20`}
                />

                <div className="relative p-8">
                  {/* Theme Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block border px-3 py-1 ${portfolio.borderColor} ${portfolio.bgColor} rounded-full text-xs font-semibold`}
                    >
                      {portfolio.theme}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 text-2xl font-bold">{portfolio.title}</h2>

                  {/* Description */}
                  <p className="mb-6 leading-relaxed text-gray-400">
                    {portfolio.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Link
                      href={`/portfolio-${portfolio.id}`}
                      className={`flex flex-1 items-center justify-center gap-2 border-2 px-4 py-3 ${portfolio.borderColor} rounded-lg bg-white font-semibold text-black transition-all hover:bg-gray-100`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live
                    </Link>
                    <a
                      href="https://github.com/wabtechltd/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 border-2 px-4 py-3 ${portfolio.borderColor} hover:${portfolio.bgColor} rounded-lg font-semibold transition-all`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Source Code Section */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Code2 className="mx-auto mb-6 h-16 w-16 text-gray-400" />
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Get the Source Code
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              All portfolio designs are open source. Fork, customize, and make
              them your own.
            </p>
            <a
              href="https://github.com/wabtechltd/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:bg-gray-200"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-500">
            Built with Next.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
