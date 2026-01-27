import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { INSIGHTS } from '@/data/insights';

// OPTIMIZATION: Metadata for SEO
export const metadata = {
  title: 'Engineering Insights | Portfolio',
  description: 'Technical documentation on RAG, AI, and Web Engineering.',
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-background text-white py-20 px-4 relative overflow-hidden selection:bg-primary/30">

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* 2. SEMANTIC HEADER: Using semantic tags for SEO */}
        <header className="mb-16 border-b border-border/50 pb-10">
          <h1 className="text-4xl md:text-5xl font-black uppercase italic">
            Tech Insights
          </h1>
          <p className="mt-4 text-muted max-w-2xl text-sm md:text-base font-medium leading-relaxed">
            Technical documentation and research on RAG pipelines, AI systems, and Software Quality Engineering.
          </p>
        </header>

        {/* 3. GRID OPTIMIZATION: Used 'memoization-ready' structure */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSIGHTS.map((post) => (
            <Link 
              key={post.id} 
              href={`/insights/${post.slug}`} 
              className="group touch-manipulation focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-xl"
              prefetch={true} // Faster navigation
            >
              <article className="h-full p-8 rounded-xl border border-border bg-surface/20 hover:bg-surface/40 hover:border-primary/50 transition-all duration-300 flex flex-col backdrop-blur-[4px] will-change-contents">
                
                {/* Meta Info */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary px-2 py-0.5 bg-primary/10 rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-muted text-[10px] font-bold uppercase">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight">
                  {post.title}
                </h2>
                
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow line-clamp-2 overflow-hidden">
                  {post.excerpt}
                </p>

                <footer className="flex items-center justify-between pt-6 border-t border-border/30">
                  <div className="flex gap-2">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-zinc-600 uppercase bg-zinc-900/50 px-2 py-0.5 rounded">#{tag}</span>
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-primary transition-all">
                    View <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </footer>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}