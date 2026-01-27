import React from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    Github,
    Globe,
    ArrowLeft,
    ShieldCheck,
    CheckCircle2,
    Terminal,
    PlayCircle,
} from "lucide-react";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const project = projects.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <main className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/15 to-black/95 pt-10 pb-12 px-4 md:px-8 overflow-x-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute -top-20 left-1/4 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* 1. Navigation */}
                <Link
                    href="/projects"
                    className="inline-flex items-center text-gray-500 hover:text-white mb-10 transition-all gap-2 text-xs font-bold uppercase tracking-widest group"
                >
                    <ArrowLeft
                        size={16}
                        className="group-hover:-translate-x-1 transition-transform"
                    />
                    Back to Projects
                </Link>

                {/* 2. Compact Header */}
                <div className="mb-12">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[9px] font-black uppercase tracking-widest border border-secondary/20">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-[9px] font-black uppercase tracking-widest border border-red-500/20">
                                Featured
                            </span>
                        )}
                    </div>

                    {/* Reduced Heading Size for Sleeker Look */}
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tighter leading-tight">
                        {project.title}
                    </h1>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <div
                                key={t}
                                className="flex items-center gap-1 px-2 py-1 bg-gray-900 border border-white/5 rounded text-[10px] font-mono text-gray-400"
                            >
                                <Terminal
                                    size={10}
                                    className="text-secondary"
                                />
                                {t}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-10">
                        {/* VIDEO SECTION: Highly Optimized & Error-Resilient */}
                        <div className="w-full aspect-video bg-[#050505] rounded-xl border border-white/10 relative overflow-hidden shadow-2xl group ring-1 ring-white/5">
                            {project.video ? (
                                // Check if it's a YouTube link
                                project.video.includes("youtube.com") ||
                                project.video.includes("youtu.be") ? (
                                    <iframe
                                        src={`${project.video.replace("watch?v=", "embed/")}?rel=0&modestbranding=1&autohide=1`}
                                        title={project.title}
                                        className="w-full h-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        loading="lazy" // Page speed ke liye zaroori hai
                                    ></iframe>
                                ) : (
                                    // Standard Video Tag for MP4/WebM/Cloudinary
                                    <video
                                        key={project.video}
                                        src={project.video}
                                        controls
                                        className="w-full h-full object-cover"
                                        poster={project.image}
                                        preload="metadata" // Puri video load nahi karega, sirf thumbnail/metadata uthaye ga (Fast)
                                    >
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                )
                            ) : (
                                // Error Handling: Agar video na ho
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/20">
                                    <PlayCircle
                                        size={48}
                                        className="text-gray-700 mb-2 opacity-20 group-hover:opacity-40 transition-opacity"
                                    />
                                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
                                        Demo Video Coming Soon
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Description Section */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold flex items-center gap-2 uppercase tracking-wider text-gray-200">
                                <div className="h-4 w-1 bg-secondary rounded-full" />
                                Overview
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-base text-justify hyphens-auto">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Actions & Stats */}
                    <div className="space-y-6">
                        <div className="p-4 bg-[#0a0a0a] rounded-xl border border-white/5 relative overflow-hidden">
                            {/* Reduced margin-bottom from mb-6 to mb-4 */}
                            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-gray-400">
                                Deployment Info
                            </h3>

                            {/* Tightened space-y from 3 to 2 for a more compact UI */}
                            <div className="space-y-2 relative z-10">
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="w-full flex items-center justify-center py-2.5 rounded-md bg-white text-black font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all gap-2"
                                    >
                                        <Globe size={13} />
                                        Launch Project
                                    </a>
                                )}

                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="w-full flex items-center justify-center py-2.5 rounded-md border border-gray-800 bg-gray-950 text-white font-bold text-[10px] uppercase tracking-widest hover:border-white transition-all gap-2"
                                >
                                    <Github size={13} />
                                    Source Code
                                </a>
                            </div>
                        </div>

                        {/* Architecture Box */}
                        <div className="p-6 border border-white/5 rounded-xl bg-gray-950/30">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-4">
                                Architecture
                            </h4>
                            <ul className="space-y-3">
                                {/* Static array hata kar project.architecture use karein */}
                                {project.architecture?.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-2 text-xs font-medium text-gray-400"
                                    >
                                        <CheckCircle2
                                            size={14}
                                            className="text-secondary"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
