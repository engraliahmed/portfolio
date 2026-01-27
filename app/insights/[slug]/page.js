import React from "react";
import { INSIGHTS } from "@/data/insights";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeWindow from "@/components/CodeWindow";
import ProgressBar from "./ProgressBar";


export async function generateStaticParams() {
    return INSIGHTS.map((post) => ({
        slug: post.slug,
    }));
}

// 1. DYNAMIC SEO ENGINE: Google friendly titles & OpenGraph
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = INSIGHTS.find((item) => item.slug === slug);
    if (!post) return { title: "Insight Not Found" };

    return {
        title: `${post.title} | Tech Insights`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["Ali Ahmed"], 
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
        },
    };
}


export default async function SingleInsight({ params }) {
    const { slug } = await params;
    const postMetadata = INSIGHTS.find((item) => item.slug === slug);

    if (!postMetadata) notFound();

    const filePath = path.join(process.cwd(), "content/insights", `${slug}.mdx`);

    // 2. ROBUST FILE HANDLING
    let fileContent;
    try {
        fileContent = fs.readFileSync(filePath, "utf8");
    } catch (err) {
        return (
            <div className="min-h-screen flex items-center justify-center text-muted italic">
                Content source is temporarily unavailable.
            </div>
        );
    }

    return (
        <>
            <ProgressBar />
            
            <main className="relative min-h-screen px-4 py-12 bg-background text-white selection:bg-primary/30 overflow-x-hidden">
                {/* 3. GPU OPTIMIZATION: will-change ensures smooth mobile scroll */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/10 blur-[120px] -z-10 pointer-events-none animate-pulse will-change-transform" />

                <div className="max-w-3xl mx-auto relative z-10">
                    {/* NAVIGATION */}
                    <nav aria-label="Breadcrumb" className="mb-12">
                        <Link
                            href="/insights"
                            className="group inline-flex items-center gap-2 text-muted hover:text-primary transition-all text-xs font-black uppercase tracking-widest outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>
                    </nav>

                    {/* ARTICLE HEADER: High SEO Semantic Tags */}
                    <header className="mb-16 border-b border-border/30 pb-10">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-full">
                                {postMetadata.category}
                            </span>
                            <div className="flex items-center gap-3 text-muted text-[10px] font-bold uppercase tracking-wider">
                                <time dateTime={postMetadata.date} className="flex items-center gap-1">
                                    <Calendar size={12} /> {postMetadata.date}
                                </time>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} /> {postMetadata.readTime}
                                </span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
                            {postMetadata.title}
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed italic">
                            {postMetadata.excerpt}
                        </p>
                    </header>

                    {/* CONTENT: Keeping your exact efficient logic */}
                    <article className="prose prose-invert prose-primary max-w-none 
                        [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-3
                        [&_code]:!bg-transparent [&_code]:!p-0
                        [&_a]:text-primary [&_a]:no-underline hover:[&_a]:underline transition-all">
                        <MDXRemote 
                            source={fileContent} 
                            components={{ CodeWindow }} 
                            
                        />
                    </article>

                    {/* FOOTER: Semantic Tag Cloud */}
                    <footer className="mt-20 pt-10 border-t border-border/40 flex flex-wrap gap-2">
                        {postMetadata.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 text-[10px] font-black text-muted hover:text-primary transition-all uppercase tracking-widest bg-surface/40 px-3 py-1.5 rounded-md border border-border/50 hover:border-primary/30"
                            >
                                <Tag size={10} /> {tag}
                            </span>
                        ))}
                    </footer>
                </div>
            </main>
        </>
    );
}
