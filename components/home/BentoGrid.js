import Link from "next/link";
import { ArrowUpRight, Code, Database, Terminal } from "lucide-react";
import { projects } from "../../data/projects";

export default function BentoGrid() {
    const featuredProjects = projects.filter((p) => p.featured).slice(0, 2);

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                    <div>
                        <h2 className="text-5xl md:text-5xl font-black tracking-tighter mb-2">
                            Featured{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">
                                Work
                            </span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-md whitespace-nowrap">
                            A selection of my most impactful projects in AI and Web Development
                        </p>
                    </div>

                    <Link
                        href="/projects"
                        className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white hover:text-black transition-all duration-300 self-start md:self-auto"
                    >
                        View All Projects
                        <ArrowUpRight
                            size={18}
                            className="group-hover:rotate-45 transition-transform"
                        />
                    </Link>
                </div>

                {/* THE GRID SYSTEM */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
                    {/* Card 1: About Summary (Large Box) */}
                    <div className="md:col-span-2 row-span-1 p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 transition-all group">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                            <Terminal className="text-primary" /> About Me
                        </h3>
                        <p className="text-muted leading-relaxed text-justify">
                            I am a{" "}
                            <span className="text-white font-medium">
                                Software Engineering student{" "}
                            </span>
                            driven by a singular mission: to build intelligent,{" "}
                            <span className="text-white font-medium">
                                scalable systems
                            </span>
                            . My expertise is dedicated to bridging
                            <span className="text-white font-medium">
                                {" "}
                                complex Machine Learning models{" "}
                            </span>
                            with{" "}
                            <span className="text-white font-medium">
                                high-performance web applications
                            </span>
                            . I leverage my dual{" "}
                            <span className="text-white font-medium">OCI</span>{" "}
                            and{" "}
                            <span className="text-white font-medium">IBM</span>{" "}
                            certified expertise to architect robust, data-driven
                            solutions that solve complex, real-world problems
                        </p>
                    </div>

                    {/* Card 2: Tech Stack (Tall Box) */}
                    <div className="md:col-span-1 row-span-2 p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 transition-all">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Code className="text-secondary" /> Tech Stack
                        </h3>
                        <div className="flex flex-wrap justify-between gap-2">
                            {[
                                "Python",
                                "C++",
                                "MERN",
                                "Next.js",
                                "TensorFlow",
                                "Git",
                                "Cloud Technologies",
                                "Tailwind CSS",
                                "Docker",
                                "Postman"
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="flex-grow text-center px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/5">
                            <h4 className="text-sm font-semibold text-muted mb-2">
                                Focus Areas
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>• Full Stack Web Dev</li>
                                <li>• Generative AI</li>
                                <li>• LLM's</li>
                                <li>• Machine Learning</li>
                                <li>• Cloud Computing</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3 & 4: Dynamic Projects (Standard Boxes) */}
                    {featuredProjects.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.slug}`} // We link to the main gallery for now
                            className="md:col-span-1 row-span-1 p-6 rounded-3xl bg-surface border border-border hover:border-primary/50 transition-all group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="p-2 rounded-full bg-white/5 text-secondary">
                                        <Database size={20} />
                                    </div>
                                    <ArrowUpRight className="text-muted group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                            <div className="mt-4 flex gap-2">
                                {project.tech.slice(0, 2).map((t) => (
                                    <span
                                        key={t}
                                        className="text-xs text-gray-500"
                                    >
                                        #{t}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
