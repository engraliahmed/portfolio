import React from "react";
import Image from "next/image";
import { Zap, Code, Terminal, GraduationCap, Users } from "lucide-react";

const AboutPage = () => {
    return (
        <section
            id="about"
            className="py-10 px-4 relative 
               bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
               from-secondary/10 to-black/90"
        >
            <div className="max-w-6xl mx-auto">
                {/* 1. Header: Modern Gradient Title & Integrated Status */}
                <div className="mb-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tighter">
                        About{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            My Journey
                        </span>
                    </h1>
                </div>

                {/* --- 1. SLEEK PROFILE HERO SECTION --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20 pb-16 border-b border-white/5 relative">
                    {/* Decorative Background Text - Compact */}
                    <div className="absolute -top-6 left-0 text-[8rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block uppercase tracking-tighter">
                        Journey
                    </div>

                    {/* LEFT SIDE: Narrative Quote (7 Columns) */}
                    <div className="md:col-span-7 flex flex-col justify-center order-2 md:order-1 relative z-10">
                        <div className="space-y-6">
                            {/* Minimalist Status Badge */}
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10 w-fit shadow-[0_0_10px_rgba(16,185,129,0.05)]">
                                <span className="relative flex h-1.5 w-1.5">
                                    {/* Rapid Pulse Effect for 'Live' feel */}
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-emerald-400/90 font-bold">
                                    Available now
                                </span>
                            </div>

                            {/* Typography: Bold yet Slim */}
                            <div
                                className="relative"
                                aria-label="Professional Mission"
                            >
                                <p className="text-xl md:text-2xl font-normal text-zinc-400 leading-snug tracking-tight text-left">
                                    I bridge the gap between{" "}
                                    <strong className="text-white font-black uppercase tracking-tighter decoration-primary/30 underline underline-offset-4">
                                        Artificial Intelligence
                                    </strong>{" "}
                                    and software development, building{" "}
                                    <span className="text-zinc-200 font-medium">
                                        scalable systems
                                    </span>{" "}
                                    that don't just process data they{" "}
                                    <em className="text-primary font-bold not-italic relative inline-block">
                                        understand
                                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary/20" />
                                    </em>{" "}
                                    it
                                </p>
                            </div>

                            {/* Meta Stats: Horizontal & Sleek */}
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
                                {[
                                    { label: "Role", val: "Software Engineer" },
                                    { label: "Education", val: "Lahore Garrison University" },
                                    {
                                        label: "Specialty",
                                        val: "MERN Stack, Python",
                                        color: "text-secondary",
                                    },
                                ].map((stat, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-1"
                                    >
                                        <span className="text-[8px] text-gray-500 uppercase tracking-[0.2em] font-black">
                                            {stat.label}
                                        </span>
                                        <span
                                            className={`text-xs font-mono italic ${
                                                stat.color || "text-gray-300"
                                            }`}
                                        >
                                            {stat.val}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Compact Image (5 Columns) */}
                    <div className="md:col-span-5 relative group order-1 md:order-2">
                        {/* Glow logic - Subtler */}
                        <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.1rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                        <div className="relative aspect-[4/5] w-full max-w-[320px] mx-auto md:ml-auto rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-950 ring-1 ring-white/10 shadow-2xl">
                            <Image
                                src="/aliahmedpic.png" // Aapni picture ka path yahan fix karein
                                alt="Ali Ahmed"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                                priority
                            />
                            {/* Aesthetic Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
                        </div>

                        {/* Minimal Floating Location Tag */}
                        <div className="absolute -bottom-2 right-4 md:-right-2 bg-black/90 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.1)] hidden sm:block">
                            <p className="text-[8px] font-mono text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                                <span className="relative flex h-1.5 w-1.5">
                                    {/* Ping effect for visibility */}
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                </span>
                                Lahore, PK
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Bento Grid Layout - THREE COLUMNS FOR FEATURES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
                    {/* A. Core Focus/Mission Card (2/3 columns) */}
                    <div className="md:col-span-2 bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:border-primary/50 relative overflow-hidden h-full">
                        <Zap size={32} className="text-primary mb-4" />
                        <h2 className="text-3xl font-bold text-white mb-4">
                            My Core Mission
                        </h2>
                        <p className="text-gray-400 text-base leading-relaxed">
                            I'm a Software Engineering student on a singular mission to architect intelligent, scalable systems. Currently bridging the foundation of Web Dev with a deep-dive exploration into Generative AI. My goal is to master the full lifecycle of Web Technologies with LLM integration, transforming complexity into production-ready, secure software solutions.
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                            *Current focus on leveraging Next.js/FastAPI for
                            highly optimized, interactive AI platforms.
                        </p>
                        {/* Internal Glow for depth */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
                    </div>

                    {/* B. AI Code Focus Card (1/3 column) - PULSING EFFECT */}
                    <div
                        className="md:col-span-1 bg-[#0a0a0a] border-2 border-secondary/50 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-xl shadow-secondary/20 transition-all duration-300"
                        style={{ animation: "pulse-border 2s infinite" }}
                    >
                        <div className="absolute inset-0 bg-secondary/5 opacity-80 transition-opacity pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-4 text-secondary">
                                <Terminal size={24} />
                                <span className="text-xs font-mono">
                                    rag_engine.py
                                </span>
                            </div>
                            <h2 className="text-xl font-bold text-white mb-3">
                                RAG Implementation
                            </h2>

                            {/* Stylized Code Block */}
                            <pre className="text-xs p-3 rounded-lg bg-black/50 border border-secondary/20 font-mono overflow-x-auto text-gray-300">
                                <span className="text-primary/70">def</span>{" "}
                                query_rag(prompt: str):
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;query ={" "}
                                <span className="text-cyan-300">
                                    embeddings
                                </span>
                                (prompt)
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;context ={" "}
                                <span className="text-green-300">
                                    vector_db
                                </span>
                                .search(query)
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;return{" "}
                                <span className="text-primary/70">llm</span>
                                .generate(context, prompt)
                            </pre>
                        </div>

                        {/* RAG Description - Bottom */}
                        <p className="mt-6 text-sm text-gray-500 italic border-l-2 border-secondary/50 pl-4">
                            "Optimizing context retrieval for low-latency AI
                            responses."
                        </p>
                    </div>
                </div>

                {/* DEDICATED FULL-WIDTH ACADEMIC CARD */}
                <div className="mt-6">
                    <div className="bg-[#0a0a0a] border border-primary/50 p-8 rounded-3xl relative overflow-hidden text-center shadow-xl transition-all hover:border-white/50">
                        <GraduationCap
                            size={32}
                            className="text-primary mx-auto mb-3"
                        />
                        <h2 className="text-2xl font-bold text-white mb-1">
                            Bachelor of Science in Software Engineering
                        </h2>
                        <p className="text-sm text-gray-400">
                            5th Semester, Expected Graduation [2027]
                        </p>
                        <p className="text-base font-medium text-primary mt-2">
                            Lahore Garrison University
                        </p>
                    </div>
                </div>

                {/* 3. Tech Stack/Core Skills Card (Full width) */}
                <div className="mt-6">
                    <div className="md:col-span-3 bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:border-white/50">
                        <Code size={32} className="text-white mb-4" />
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mb-6">
                            Core Technical Stack
                        </h2>

                        {/* Visual Skill Bars */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <SkillBar
                                skill="Python"
                                percentage={85}
                                color="text-yellow-400"
                            />
                            <SkillBar
                                skill="Next.js / JavaScript"
                                percentage={85}
                                color="text-cyan-400"
                            />
                            <SkillBar
                                skill="Data Structures and Algorithms (DSA)"
                                percentage={90}
                                color="text-red-400"
                            />
                            <SkillBar
                                skill="MERN"
                                percentage={80}
                                color="text-green-400"
                            />
                            <SkillBar
                                skill="DevOps & Docker"
                                percentage={70}
                                color="text-indigo-400"
                            />
                            <SkillBar
                                skill="MySQL / PostgreSQL / MongoDB"
                                percentage={80}
                                color="text-blue-400"
                            />
                        </div>
                    </div>
                </div>

                {/* 4. Leadership/Experience Summary Card (Full width) */}
                <div className="mt-6">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Leadership & Engagement
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Experience 1: AI Researcher */}
                        <ExperienceCard
                            title="AI Researcher"
                            organization="IEEE Society"
                            description="Conducting research on Retrieval-Augmented Generation (RAG) and Large Language Models to solve real-world data problems."
                            icon={Zap}
                        />

                        {/* Experience 2: Management Team */}
                        <ExperienceCard
                            title="Management Team"
                            organization="ESSE (2024-25)"
                            description="Organizing tech events and managing student engagement initiatives for the 2024-25 tenure."
                            icon={Users}
                        />

                        {/* Experience 3: Campus Ambassador */}
                        <ExperienceCard
                            title="Campus Ambassador"
                            organization="Fstivo Society"
                            description="Leading logistics and promoting tech culture within Lahore's student community."
                            icon={Terminal}
                        />
                    </div>
                </div>

                {/* 5. Call to Action */}
                <CallToAction />
            </div>
        </section>
    );
};

// --- Helper Components ---

const SkillBar = ({ skill, percentage, color }) => (
    <div className="space-y-1">
        <div className="flex justify-between items-center text-sm font-medium">
            <span className="text-white">{skill}</span>
            <span className={`${color}`}>{percentage}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-1.5">
            <div
                className={`h-1.5 rounded-full`}
                style={{
                    width: `${percentage}%`,
                    // Mapped color codes for skill bars
                    backgroundColor:
                        color === "text-yellow-400"
                            ? "#fbbf24"
                            : color === "text-cyan-400"
                              ? "#22d3ee"
                              : color === "text-red-400"
                                ? "#f87171"
                                : color === "text-green-400"
                                  ? "#4ade80"
                                  : color === "text-indigo-400"
                                    ? "#818cf8"
                                    : color === "text-blue-400"
                                      ? "#60a5fa"
                                      : "#a1a1aa",
                }}
            />
        </div>
    </div>
);

const ExperienceCard = ({ title, organization, description, icon: Icon }) => (
    <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:border-primary/50 flex flex-col">
        <div className="flex items-center mb-3">
            <Icon size={20} className="text-secondary mr-3" />
            <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-primary/80 mb-2">{organization}</p>
        <p className="text-xs text-gray-400 flex-grow">{description}</p>
    </div>
);

const CallToAction = () => (
    <div className="mt-16 p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl text-center transition-all hover:border-secondary/50">
        <h2 className="text-3xl font-bold text-white mb-4">
            Ready to see the results?
        </h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Explore my major AI and software engineering projects to see my
            skills in action.
        </p>
        <a
            href="/projects" // Link to your Projects section ID
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/50"
        >
            View Projects &rarr;
        </a>
    </div>
);

export default AboutPage;
