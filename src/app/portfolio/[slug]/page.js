"use client";

import { use, useMemo, useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projectList";

export default function PortfolioDetailPage(props) {
  const params = use(props.params);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const project = useMemo(() => {
    return projects.find((item) => item.id === params.slug);
  }, [params.slug]);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = projects.filter((item) => {
  const matchCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory;

  const matchSearch =
    item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
    });

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Project not found.
      </main>
    );
  }

  return (
    <main className="bg-[#050505] text-white min-h-screen flex overflow-hidden">
      {/* animated bg */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-violet-500/10 blur-[160px]" />

        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-cyan-500/10 blur-[160px]" />
      </div>

      {/* sidebar */}
        <motion.aside
        initial={false}
        animate={{
            width: sidebarOpen ? 320 : 96,
        }}
        transition={{
            duration: 0.35,
            ease: "easeInOut",
        }}
        className="relative z-50 h-screen border-r border-white/10 bg-black/40 backdrop-blur-2xl overflow-hidden shrink-0"
        >

        {/* top */}
        <div className="p-5 border-b border-white/10">

            <div className="flex items-center justify-between">

            {sidebarOpen && (
                <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-white/30">
                    Portfolio
                </p>

                <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    Case Studies
                </h2>
                </div>
            )}

            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
                >
                <span className="text-lg leading-none">
                    {sidebarOpen ? "<" : ">"}
                </span>
            </button>
            </div>
        </div>

        {/* content */}
        <div className="flex-1 overflow-y-auto px-4 py-5">

            {/* search */}
            {sidebarOpen && (
            <div className="relative mb-8">

                <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/25"
                />

                <input
                type="text"
                placeholder="Search project..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                className="w-full h-13 rounded-2xl bg-white/[0.03] border border-white/10 pl-12 pr-4 text-sm outline-none placeholder:text-white/25 focus:border-white/20 transition-all"
                />
            </div>
            )}

            {/* categories */}
            {sidebarOpen && (
            <div className="flex flex-wrap gap-2 mb-8">

                {categories.map((category) => {

                const active =
                    selectedCategory === category;

                return (
                    <button
                    key={category}
                    onClick={() =>
                        setSelectedCategory(category)
                    }
                    className={`px-4 h-10 rounded-full text-[11px] uppercase tracking-[0.18em] transition-all duration-300 border ${
                        active
                            ? "bg-white text-black border-white"
                            : "bg-white/[0.03] text-white/45 border-white/10 hover:bg-white/[0.08] hover:text-white"
                    }`}
                    >
                    {category}
                    </button>
                );
                })}
            </div>
            )}

            {/* projects */}
            {sidebarOpen && (
            <div className="space-y-3">

                {filteredProjects.map((item) => {

                const active =
                    item.id === project.id;

                return (
                    <Link
                    key={item.id}
                    href={`/portfolio/${item.id}`}
                    className={`group flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 border ${
                        active
                            ? "border-white/15 bg-white/[0.06]"
                            : "border-transparent hover:border-white/10 hover:bg-white/[0.03]"
                    }`}
                    >

                    <div
                        className="overflow-hidden rounded-xl shrink-0"
                    >
                        <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-14 h-14 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    <div className="min-w-0">

                        <h3 className="font-medium text-sm truncate">
                        {item.title}
                        </h3>

                        <p className="text-white/35 text-xs mt-1 truncate">
                        {item.category}
                        </p>

                    </div>

                    </Link>
                    );
                })}

                </div>
            )}
        </div>
        </motion.aside>

      {/* content */}
      <div className="flex-1 overflow-y-auto h-screen relative z-10">
        {/* top actions */}
            <div
            className="fixed top-6 right-6 z-[120] flex items-center gap-3"
            >

            {/* home */}
            <Link
                href="/"
                className="h-12 px-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl flex items-center gap-3 text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            >
                <span className="text-lg">
                ⌂
                </span>

                <span className="text-sm">
                Home
                </span>
            </Link>

            {/* close */}
            <Link
                href="/portfolio"
                className="w-12 h-12 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            >
                ✕
            </Link>

        </div>
        {/* hero */}
        <section className="relative min-h-[24vh] overflow-hidden">

        {/* bg image */}
        <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4 }}
            src={currentImage || project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />

        {/* floating content */}
        <div
            className="absolute bottom-0 left-0 w-full z-20 px-8 md:px-16 pb-16"
        >

            <div className="max-w-7xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >

            </motion.div>

            </div>

        </div>

        </section>

        {/* details */}
        <section className="w-full px-10 md:px-24 py-20">

        <div className="w-full max-w-[1600px] mx-auto">

            {/* category */}
            <div
            className="inline-flex items-center justify-center h-11 px-5 rounded-full border border-white/10 bg-white/[0.03] text-white/60 text-sm uppercase tracking-[0.22em] backdrop-blur-xl"
            >
            {project.category}
            </div>

            {/* title */}
            <h1
            className="mt-8 text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-[0.95] max-w-6xl"
            >
            {project.title}
            </h1>

            {/* subtitle / description */}
            <p
            className="mt-8 text-xl text-white/60 leading-relaxed max-w-5xl"
            >
            {project.description}
            </p>

            {/* actions */}
            {(project.actions?.video || project.actions?.game) && (

            <div
                className="flex flex-wrap items-center gap-5 mt-10"
            >

                {/* showcase */}
                {project.actions?.video && (

                <a
                    href={project.actions.video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden h-[72px] min-w-[250px] px-6 rounded-[24px] border border-red-500/15 bg-gradient-to-b from-red-500/12 to-red-500/[0.03] flex items-center gap-5 hover:border-red-400/30 hover:from-red-500/20 hover:to-red-500/[0.08] transition-all duration-500"
                >

                    {/* glow */}
                    <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.18),transparent_55%)]"
                    />

                    {/* icon */}
                    <div
                    className="relative w-11 h-11 rounded-2xl bg-red-500 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.45)] shrink-0"
                    >

                    <span className="text-white text-sm font-bold ml-[2px]">
                        ▶
                    </span>

                    </div>

                    {/* text */}
                    <div className="relative leading-tight">

                    <p
                        className="text-white text-[16px] font-semibold"
                    >
                        {project.actions.video.label}
                    </p>

                    <p
                        className="text-red-200/45 text-sm mt-1"
                    >
                        Cinematic showcase
                    </p>

                    </div>

                </a>

                )}

                {/* game */}
                {project.actions?.game && (

                <a
                    href={project.actions.game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden h-[72px] min-w-[250px] px-6 rounded-[24px] border border-cyan-400/15 bg-gradient-to-b from-cyan-400/12 to-cyan-400/[0.03] flex items-center gap-5 hover:border-cyan-300/30 hover:from-cyan-400/20 hover:to-cyan-400/[0.08] transition-all duration-500"
                >

                    {/* glow */}
                    <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_55%)]"
                    />

                    {/* icon */}
                    <div
                    className="relative w-11 h-11 rounded-2xl bg-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.45)] shrink-0"
                    >

                    <span className="text-black text-lg">
                        🎮
                    </span>

                    </div>

                    {/* text */}
                    <div className="relative leading-tight">

                    <p
                        className="text-white text-[16px] font-semibold"
                    >
                        {project.actions.game.label}
                    </p>

                    <p
                        className="text-cyan-100/45 text-sm mt-1"
                    >
                        Interactive experience
                    </p>

                    </div>

                </a>

                )}

            </div>

            )}

            {/* separator */}
            <div className="w-full h-px bg-white/10 my-14" />

            {/* editorial overview */}
            <section className="w-full">

            <div className="w-full max-w-[1400px]">

                {/* headline */}
                <h2
                className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] leading-[1.05] max-w-[1000px]"
                >
                {project.headline}
                </h2>

                {/* content */}
                <div className="mt-10 space-y-8">

                {project.content?.map((block, index) => {

                    if (block.type === "paragraph") {
                    return (
                        <p
                        key={index}
                        className="text-white/60 text-xl leading-[2] tracking-[-0.02em] max-w-[1400px]"
                        >
                        {block.text}
                        </p>
                    );
                    }

                    if (block.type === "list") {
                    return (
                        <div
                        key={index}
                        className="grid md:grid-cols-2 gap-x-20 gap-y-7 pt-4 max-w-[1300px]"
                        >

                        {block.items.map((item, idx) => (
                            <div
                            key={idx}
                            className="flex items-start gap-4"
                            >

                            <div
                                className="w-2.5 h-2.5 rounded-full bg-cyan-400 mt-4 shrink-0 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                            />

                            <p
                                className="text-white/65 text-lg leading-[1.9] tracking-[-0.01em]"
                            >
                                {item}
                            </p>

                            </div>
                        ))}

                        </div>
                    );
                    }

                    return null;

                })}

                </div>

                {/* gallery */}
                {project.gallery?.length > 0 && (

                <section className="mt-28">

                    {/* heading */}
                    <div
                    className="flex items-end justify-between gap-10 mb-10"
                    >

                    <div>

                        <p
                        className="text-white/30 text-xs uppercase tracking-[0.3em] mb-4"
                        >
                        Visual Gallery
                        </p>

                        <h3
                        className="text-3xl md:text-5xl font-semibold tracking-[-0.04em] leading-none"
                        >
                        Creative Exploration
                        </h3>

                    </div>

                    <p
                        className="hidden md:block text-white/35 text-sm leading-relaxed max-w-sm text-right"
                    >
                        A curated visual breakdown showcasing concept direction,
                        rendering quality, atmosphere, and final execution.
                    </p>

                    </div>

                    {/* gallery grid */}
                    <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >

                    {project.gallery.map((image, index) => (

                        <div
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] aspect-[1.3/1] cursor-pointer hover:border-white/20 transition-all duration-500"
                        >

                        {/* image */}
                        <img
                            src={image}
                            alt={`${project.title} gallery ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />

                        {/* overlay */}
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* expand icon */}
                        <div
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        >

                            <div
                            className="w-14 h-14 rounded-full border border-white/15 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white text-xl"
                            >
                            +
                            </div>

                        </div>

                        {/* number */}
                        <div
                            className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl flex items-center justify-center text-white/70 text-sm"
                        >
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        </div>

                    ))}

                    </div>

                </section>

                )}

                {/* tools */}
                {project.tools?.length > 0 && (

                <div className="mt-20 pt-10 border-t border-white/10">

                    <p
                    className="text-white/30 text-xs uppercase tracking-[0.3em] mb-6"
                    >
                    Tools & Workflow
                    </p>

                    <div className="flex flex-wrap gap-4">

                    {project.tools.map((tool, index) => (

                        <div
                        key={index}
                        className="h-14 px-5 rounded-full border border-white/10 bg-white/[0.03] flex items-center gap-3 backdrop-blur-xl"
                        >

                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className="w-5 h-5 object-contain opacity-80"
                        />

                        <span
                            className="text-sm text-white/70"
                        >
                            {tool.name}
                        </span>

                        </div>

                    ))}

                    </div>

                </div>

                )}

            </div>

            </section>

        </div>

        </section>
      </div>
      
      {/* image modal */}
        <AnimatePresence>

        {selectedImage && (

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}

                onClick={() => setSelectedImage(null)}

                className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-10 cursor-pointer"
            >

            {/* close */}
            <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full border border-white/10 bg-white/[0.05] text-white text-2xl hover:bg-white/[0.1] transition-all duration-300"
            >
                ×
            </button>

            {/* image */}
            <motion.img
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}

                transition={{ duration: 0.35 }}

                src={selectedImage}
                alt="Expanded gallery"

                className="max-w-[92vw] max-h-[90vh] object-contain rounded-[28px] shadow-2xl"
            />

            </motion.div>

        )}

        </AnimatePresence>
    </main>
  );
}