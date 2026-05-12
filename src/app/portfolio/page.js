"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projectList";

export default function PortfolioCollectionPage() {
  const [activeTab, setActiveTab] = useState(projects[0]?.category);

  const categories = [
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-hidden">
      {/* background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-[160px]"
        />

        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[160px]"
        />
      </div>

      {/* navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex items-center justify-between">
          <a
            href="/"
            className="text-sm uppercase tracking-[0.4em] font-semibold"
          >
            IMRA WANA
          </a>

          <a
            href="/"
            className="px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06] transition-all"
          >
            Back Home
          </a>
        </div>
      </header>

      {/* hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-36 md:pt-44 pb-20">
        <p className="text-sm uppercase tracking-[0.3em] text-white/40">
          Portfolio Collection
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.95] max-w-5xl">
          Curated visual experiences crafted with cinematic direction.
        </h1>

        <p className="mt-8 text-white/55 max-w-2xl text-lg leading-relaxed">
          A collection of selected works spanning UI/UX systems,
          cinematic 3D visuals, interactive experiences, and modern
          digital storytelling.
        </p>
      </section>

      {/* tabs */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pb-12">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-2xl border transition-all duration-300 ${
                activeTab === category
                  ? "bg-white text-black border-white"
                  : "border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.06]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* portfolio */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pb-32">
        <div className="grid md:grid-cols-2 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative rounded-[36px] border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-3xl transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_0_80px_rgba(255,255,255,0.06)]"
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-black">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_60%)]" />
              </div>

              {/* content */}
              <div className="p-7 md:p-8">
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.2em] text-white/50">
                  {project.category}
                </span>

                <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-[-0.04em] leading-tight">
                  {project.title}
                </h2>

                <p className="mt-5 text-white/55 leading-relaxed">
                  {project.description}
                </p>

                {/* tools */}
                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tools?.map((tool, index) => (

                    <div
                      key={index}
                      className="h-10 px-4 rounded-full border border-white/10 bg-white/[0.03] flex items-center gap-2 backdrop-blur-xl"
                    >

                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-4 h-4 object-contain opacity-80"
                      />

                      <span
                        className="text-xs text-white/60"
                      >
                        {tool.name}
                      </span>

                    </div>

                  ))}

                </div>

                <Link
                  href={`/portfolio/${project.id}`}
                  className="group/button mt-8 flex items-center justify-between rounded-[24px] border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-6 py-5 transition-all duration-500 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-white/35">
                      Explore Project
                    </p>

                    <h3 className="mt-2 text-lg font-medium text-white">
                      Show Detail
                    </h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center text-xl transition-all duration-500 group-hover/button:rotate-45 group-hover/button:scale-110">
                    ↗
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}