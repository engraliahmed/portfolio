import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full pt-28 pb-20 overflow-hidden flex flex-col justify-center">
            {/* 1. Background Glow Effect */}
            <div className="absolute inset-0 w-full h-full bg-black z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,119,198,0.4)_0%,rgba(0,0,0,0)_60%)]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
                
                {/* 2. Small Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-8 animate-fade-in hover:bg-emerald-500/20 transition-colors cursor-default">
                    {/* The Pulsing Dot Animation (Pure CSS, 0ms load time) */}
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>

                    <span>Open to Work & Collaboration</span>
                </div>

                {/* 3. Main Headline */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Building the future with <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary">
                        Artificial Intelligence
                    </span>
                </h1>

                {/* 4. Sub-headline */}
                <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
                    IBM certified Full-Stack Developer and Oracle certified AI Professional I lead the development of next-generation, scalable AI solutions
                </p>

                {/* 5. Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/projects"
                        className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="https://github.com/engraliahmed"
                        target="_blank"
                        className="px-8 py-3 rounded-full border border-border bg-surface text-white hover:bg-zinc-800 transition-all"
                    >
                        GitHub Profile
                    </Link>
                </div>
            </div>
        </section>
    );
}
