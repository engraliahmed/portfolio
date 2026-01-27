import React from "react";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";
import Link from "next/link";
import {
    Github,
    ArrowRight,
    TrendingUp,
    Code,
    Star,
    ShieldCheck,
} from "lucide-react";

const ImagePlaceholder = ({ project }) => {
    const isFeatured = project.featured;
    const isAIML = project.category && project.category.includes("AI/ML");
    const Icon = isAIML ? TrendingUp : Code;
    const iconColor = isAIML ? "text-primary" : "text-secondary";

    return (
        <div className="h-44 w-full bg-gray-950 relative overflow-hidden flex items-center justify-center">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.title}
                    // No hover animation for stability
                    className="w-full h-full object-cover"
                    loading="lazy"
                    quality={75}
                />
            ) : (
                <Icon size={60} className={`${iconColor} opacity-20`} />
            )}

            {/* Red Featured Tag - Consistent with Certificates */}
            {isFeatured && (
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 backdrop-blur-md flex items-center gap-1">
                    <Star size={10} className="text-red-500 fill-red-500" />
                    <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">
                        Featured
                    </span>
                </div>
            )}

            {/* Tier Icon */}
            <div className="absolute top-3 right-3 p-1.5 bg-black/60 backdrop-blur-md rounded-md border border-white/10">
                <ShieldCheck
                    size={16}
                    className={isFeatured ? "text-red-500" : "text-gray-500"}
                />
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    const isFeatured = project.featured;
    const hoverColor = isFeatured ? "red-500" : "primary";

    return (
        <Card
            key={project.id}
            className={`group flex flex-col bg-[#0a0a0a] border rounded-xl overflow-hidden relative transition-all duration-500 
                ${isFeatured ? "border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]" : "border-white/10 hover:border-primary/50"}`}
        >
            <ImagePlaceholder project={project} />

            {/* Content Wrapper: Locked Alignment */}
            <div className="p-5 flex flex-col flex-grow min-h-[170px]">
                <div className="flex justify-between items-start mb-2">
                    <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border 
                        ${isFeatured ? "text-red-500 border-red-500/20 bg-red-500/5" : "text-secondary border-secondary/20 bg-secondary/5"}`}
                    >
                        {project.category}
                    </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {(project.tech || []).slice(0, 3).map((techItem) => (
                        <span
                            key={techItem}
                            className="text-[9px] px-2 py-0.5 bg-gray-900 border border-white/5 rounded text-gray-500 uppercase"
                        >
                            {techItem}
                        </span>
                    ))}
                </div>

                {/* Links: Firmly Locked to Bottom */}
                <div className="flex gap-3 mt-auto pt-3 border-t border-gray-800">
                    <Link
                        href={`/projects/${project.slug}`}
                        className={`flex-1 flex items-center justify-center py-2 rounded-lg font-bold text-xs transition-all duration-300 
                            ${isFeatured ? "bg-white text-black hover:bg-red-500 hover:text-white" : "bg-white text-black hover:bg-primary hover:text-white"}`}
                    >
                        View Details
                        <ArrowRight size={14} className="ml-2" />
                    </Link>

                    <a
                        href={project.github || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-9 flex items-center justify-center rounded-lg border border-gray-700 text-white hover:bg-white hover:text-black transition-all"
                    >
                        <Github size={16} />
                    </a>
                </div>
            </div>
        </Card>
    );
};

export default function ProjectsPage() {
    // Logic to pull Featured projects to the top
    const sortedProjects = [...projects].sort((a, b) =>
        b.featured === a.featured ? 0 : b.featured ? 1 : -1,
    );

    return (
        <main className="min-h-screen text-white py-10 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/15 to-black/90 relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
                        Digital{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            Products
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A prioritized showcase of high-impact AI models and
                        Full-Stack solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {sortedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </main>
    );
}
