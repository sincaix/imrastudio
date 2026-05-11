"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "@/data/projectList";

export default function PortfolioWebsite() {
  const [activeTab, setActiveTab] = useState("UI/UX");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["UI/UX", "3D Modelling", "Game Dev"];

  const filteredProjects = useMemo(() => {
    return projects.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <main className="bg-[#050505] text-white min-h-screen overflow-hidden selection:bg-white selection:text-black">
      {/* animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] bg-violet-500/10 blur-[150px] rounded-full"
        />

        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/10 blur-[150px] rounded-full"
        />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.15]" />
      </div>

      {/* navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex items-center justify-between">
          <h1 className="text-sm sm:text-base uppercase tracking-[0.4em] font-semibold">
            IMRA WANA
          </h1>

          <nav className="hidden md:flex items-center gap-10 text-sm text-white/60">
            <a href="#works" className="hover:text-white transition-all">
              Works
            </a>

            <a href="#services" className="hover:text-white transition-all">
              Services
            </a>

            <a href="#contact" className="hover:text-white transition-all">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl text-white/70 text-sm"
            >
              ✦ 3D Animator • Creative Designer • UI/UX
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-8 text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-[-0.05em] leading-[0.92]"
            >
              Building
              <span className="text-white/30"> immersive </span>
              visual experiences
              <span className="text-violet-300"> for modern brands.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 max-w-2xl text-base sm:text-lg text-white/55 leading-relaxed"
            >
              I create premium 3D visuals, cinematic animation, futuristic
              interfaces, and interactive digital experiences with a modern art
              direction approach.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#works"
                className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300 inline-flex"
              >
                Explore Portfolio
              </a>

              <a
                href="https://wa.me/6281234567890?text=Hello%20Imra,%20I%20am%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 text-white/80 inline-flex"
              >
                Book Collaboration
              </a>
            </motion.div>
          </div>

          {/* visual showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ rotateY: [0, 5, 0], rotateX: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] rounded-[36px] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-3xl shadow-[0_0_120px_rgba(139,92,246,0.15)]"
            >
              <img
                src="/images/hero.jpg"
                alt="hero"
                className="absolute inset-0 w-full h-full object-cover scale-110 opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
                <div className="bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl px-4 py-3">
                  <p className="text-xs text-white/40 uppercase tracking-[0.2em]">
                    Featured
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    Neo Motion Reel
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl flex items-center justify-center text-xl">
                  ✦
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4">
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Experience
                  </p>

                  <h4 className="text-3xl font-semibold mt-2">5+</h4>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4">
                  <p className="text-white/40 text-xs uppercase tracking-[0.2em]">
                    Projects
                  </p>

                  <h4 className="text-3xl font-semibold mt-2">40+</h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* marquee */}
      <section className="relative z-10 border-y border-white/10 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap py-6 text-white/20 text-3xl md:text-5xl font-semibold uppercase"
        >
          <span>3D Animation</span>
          <span>Creative Direction</span>
          <span>UI/UX Experience</span>
          <span>Game Development</span>
          <span>Blender Artist</span>
          <span>Motion Design</span>
        </motion.div>
      </section>

      {/* portfolio */}
      <section
        id="works"
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 py-24 md:py-32"
      >
        <div className="flex flex-wrap items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-4">
              Selected Works
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
              Portfolio Collection
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-2xl transition-all duration-300 border ${
                  activeTab === category
                    ? "bg-white text-black border-white"
                    : "border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.06]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <div className="rounded-[28px] border border-white/10 bg-black/40 backdrop-blur-2xl p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
                    {project.category}
                  </p>

                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight">
                      {project.title}
                    </h3>

                    <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-semibold group-hover:rotate-45 transition-transform duration-500">
                      ↗
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* services */}
      <section
        id="services"
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pb-24 md:pb-32"
      >
        <div className="mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-4">
            Expertise
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight">
            Creative services crafted for modern digital experiences.
          </h2>

          <p className="mt-6 text-white/55 text-base md:text-lg leading-relaxed max-w-2xl">
            Combining cinematic visuals, immersive interaction, and modern
            design systems to create impactful digital products and visual
            storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            "Cinematic 3D Animation",
            "Modern UI/UX Systems",
            "Interactive Game Development",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-8 md:p-10 backdrop-blur-3xl"
            >
              <div className="text-6xl font-semibold text-white/10 mb-10">
                0{index + 1}
              </div>

              <h3 className="text-3xl font-semibold leading-tight mb-5">
                {item}
              </h3>

              <p className="text-white/55 leading-relaxed">
                Premium digital craftsmanship combining aesthetics,
                interaction, cinematic motion, and modern visual systems.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pb-24 md:pb-32"
      >
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />

          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-6">
              Available Worldwide
            </p>

            <h2 className="text-4xl md:text-7xl font-semibold tracking-[-0.05em] leading-[1] max-w-5xl mx-auto">
              Let’s craft something visually unforgettable.
            </h2>

            <p className="mt-8 text-white/55 max-w-2xl mx-auto text-lg leading-relaxed">
              Open for freelance projects, creative direction, UI/UX systems,
              3D animation, branding visuals, and immersive game experiences.
            </p>

            <div className="mt-12 flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/6281234567890?text=Hello%20Imra,%20I%20am%20interested%20in%20working%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300 inline-flex"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* premium modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl flex items-center justify-center p-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[36px] border border-white/10 bg-[#0B0B0B] shadow-[0_0_120px_rgba(139,92,246,0.15)]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 z-20 w-12 h-12 rounded-2xl bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black transition-all"
              >
                ✕
              </button>

              {/* hero */}
              <div className="relative aspect-[16/8] overflow-hidden">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/30 to-transparent" />
              </div>

              <div className="p-8 md:p-12">
                <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/60 uppercase tracking-[0.2em]">
                  {selectedProject.category}
                </span>

                <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight max-w-4xl">
                  {selectedProject.title}
                </h2>

                <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-3xl">
                  {selectedProject.description}
                </p>

                {/* gallery */}
                {selectedProject.gallery && (
                  <div className="grid md:grid-cols-2 gap-6 mt-14">
                    {selectedProject.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="overflow-hidden rounded-[28px] border border-white/10"
                      >
                        <img
                          src={image}
                          alt=""
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* video */}
                {selectedProject.video && (
                  <div className="mt-14">
                    <iframe
                      src={selectedProject.video}
                      className="w-full aspect-video rounded-[28px]"
                      allowFullScreen
                    />
                  </div>
                )}

                {/* content */}
                <div className="grid md:grid-cols-2 gap-6 mt-14">
                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                      Project Overview
                    </p>

                    <p className="text-white/60 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4">
                      Tools & Workflow
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tools?.map((tool, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}