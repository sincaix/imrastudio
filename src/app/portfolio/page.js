"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projectList";

export default function PortfolioCollectionPage() {
  const [activeTab, setActiveTab] = useState(projects[0]?.category);
  const [selectedImage, setSelectedImage] = useState(null);

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
              className="group rounded-[36px] border border-white/10 bg-white/[0.03] overflow-hidden backdrop-blur-3xl"
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
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

                {/* gallery */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {project.gallery?.slice(0, 4).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className="relative overflow-hidden rounded-[24px] aspect-square border border-white/10"
                    >
                      <img
                        src={image}
                        alt="gallery"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </button>
                  ))}
                </div>

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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* fullscreen image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="preview"
              className="max-w-full max-h-[90vh] rounded-[32px] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}