"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Mail,
    Linkedin,
    Github,
    MapPin,
    Calendar,
    ArrowRight,
    Sparkles,
    Loader2,
    CheckCircle,
    X,
} from "lucide-react";
import { sendInquiry } from "@/app/actions/email";

// --- Reusable Input Component (Compact Version) ---
const ThemedInput = ({
    id,
    label,
    type = "text",
    required = false,
    rows = 1,
    placeholder,
    error,
    onChange,
    autoComplete,
}) => (
    <div className="mb-4 group relative">
        {" "}
        {/* mb-6 se mb-4 kiya */}
        <label
            htmlFor={id}
            className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-1.5 transition-colors group-focus-within:text-primary"
        >
            {label} {required && <span className="text-red-500/80">*</span>}
        </label>
        {type === "textarea" ? (
            <textarea
                id={id}
                name={id}
                rows={rows}
                required={required}
                onChange={onChange}
                autoComplete={autoComplete}
                className={`w-full px-3 py-2.5 bg-white/[0.03] border rounded-lg text-white text-xs placeholder-gray-700 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm ${error ? "border-red-500/50" : "border-white/10 focus:border-primary/50"}`}
                placeholder={placeholder}
            ></textarea>
        ) : (
            <input
                id={id}
                name={id}
                type={type}
                required={required}
                onChange={onChange}
                autoComplete={autoComplete}
                className={`w-full px-3 py-2.5 bg-white/[0.03] border rounded-lg text-white text-xs placeholder-gray-700 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all duration-300 backdrop-blur-sm ${error ? "border-red-500/50" : "border-white/10 focus:border-primary/50"}`}
                placeholder={placeholder}
            />
        )}
        {error && (
            <p className="text-red-400 text-[9px] font-bold mt-1 uppercase tracking-wider">
                {error}
            </p>
        )}
    </div>
);

// --- Sidebar Link (Compact Version) ---
const SidebarLink = ({ icon: Icon, title, content, link }) => {
    const innerContent = (
        <>
            <div className="p-2.5 rounded-lg bg-white/[0.03] group-hover:bg-primary/10 border border-white/5 group-hover:border-primary/20 transition-all duration-500 mr-3">
                <Icon
                    size={16}
                    className="text-gray-400 group-hover:text-primary transition-colors"
                />
            </div>
            <div className="text-left overflow-hidden">
                <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-0.5">
                    {title}
                </span>
                <span className="block text-xs font-semibold text-white/90 group-hover:text-white transition-colors truncate">
                    {content}
                </span>
            </div>
        </>
    );

    if (!link || link === "#") {
        return (
            <div className="flex items-center p-3 rounded-xl border border-transparent transition-all duration-500">
                {innerContent}
            </div>
        );
    }

    return (
        <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center p-3 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-500"
        >
            {innerContent}
        </Link>
    );
};

export default function ContactPage() {
    const [status, setStatus] = useState("idle");
    const [errors, setErrors] = useState({});

    const config = {
        email: "dev.aliahmedkhan@gmail.com",
        location: "Lahore, Pakistan 🇵🇰",
        linkedinUrl: "https://linkedin.com/in/engraliahmed",
        githubUrl: "https://github.com/engraliahmed",
        schedulingLink: "https://calendar.app.google/cXGrzy3Y55RTW2Ro8",
        availability: "Open for strategic technical collaborations.",
    };

    async function handleAction(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        const newErrors = {};
        if (!formData.get("name")?.trim()) newErrors.name = "Required";
        if (!formData.get("email")?.trim()) newErrors.email = "Required";
        if (!formData.get("message")?.trim()) newErrors.message = "Required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus("sending");
        const result = await sendInquiry(formData);

        if (result.success) {
            setStatus("success");
            e.target.reset();
            setErrors({});
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            setStatus("error");
        }
    }

    return (
        <main
            id="contact"
            className="min-h-screen text-white py-12 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/15 to-black/95 relative overflow-hidden flex items-center justify-center"
        >
            {/* --- FIX: ZERO-FLICKER & CURSOR CSS --- */}
            <style jsx>{`
                input:-webkit-autofill,
                textarea:-webkit-autofill {
                    transition: background-color 600000s ease-in-out 0s !important;
                    -webkit-box-shadow: 0 0 0px 1000px #0a0a0a inset !important;
                    -webkit-text-fill-color: white !important;
                    caret-color: white !important;
                }
            `}</style>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="max-w-5xl mx-auto w-full relative z-10">
                {" "}
                {/* 6xl se 5xl kiya */}
                <div className="mb-10 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Sparkles size={12} className="text-primary" />
                        <span className="text-[9px] font-bold tracking-widest uppercase text-primary">
                            Available for Hire
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                        {" "}
                        {/* 7xl se 5xl kiya */}
                        Get In{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            Touch
                        </span>
                    </h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-10 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
                    {/* Left Sidebar */}
                    <div className="lg:col-span-3 p-6 space-y-6 bg-black/40 border-b lg:border-b-0 lg:border-r border-white/5">
                        <div>
                            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-4 text-left">
                                Quick Access
                            </h3>
                            <div className="space-y-2">
                                <SidebarLink
                                    icon={Calendar}
                                    title="Schedule"
                                    content="Schedule a 30-Minute Meeting"
                                    link={config.schedulingLink}
                                />
                                <SidebarLink
                                    icon={Mail}
                                    title="Email"
                                    content={config.email}
                                    link={`mailto:${config.email}`}
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <h3 className="text-[9px] font-black uppercase tracking-[0.3em] text-primary mb-4 text-left">
                                Social Proof
                            </h3>
                            <div className="space-y-2">
                                <SidebarLink
                                    icon={Linkedin}
                                    title="LinkedIn"
                                    content="Connect"
                                    rel="noopener noreferrer"
                                    link={config.linkedinUrl}
                                />
                                <SidebarLink
                                    icon={Github}
                                    title="GitHub"
                                    content="Source"
                                    rel="noopener noreferrer"
                                    link={config.githubUrl}
                                />
                                <SidebarLink
                                    icon={MapPin}
                                    title="Timezone"
                                    content={config.location}
                                    link="#"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Form Area */}
                    <div className="lg:col-span-7 p-6 md:p-10 bg-black/20 relative">
                        {" "}
                        {/* p-12 se p-10 kiya */}
                        {status === "success" && (
                            <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-500">
                                <CheckCircle
                                    size={40}
                                    className="text-emerald-500 mb-3"
                                />
                                <h3 className="text-lg font-black uppercase tracking-tighter">
                                    Inquiry Received
                                </h3>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-4 text-[9px] font-bold uppercase tracking-widest text-primary"
                                >
                                    Send another inquiry
                                </button>
                            </div>
                        )}
                        <h2 className="text-base font-bold text-white mb-8 flex items-center gap-2">
                            <div className="h-5 w-1 bg-primary rounded-full" />
                            Project Discovery Form
                        </h2>
                        <form onSubmit={handleAction} className="space-y-1">
                            {" "}
                            {/* spacing kam ki */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <ThemedInput
                                    id="name"
                                    label="Full Name"
                                    required
                                    placeholder="Ali A. Khan"
                                    autoComplete="name"
                                    error={errors.name}
                                    onChange={() =>
                                        setErrors({ ...errors, name: null })
                                    }
                                />
                                <ThemedInput
                                    id="email"
                                    label="Work Email"
                                    type="email"
                                    required
                                    placeholder="yourmail@gmail.com"
                                    autoComplete="email"
                                    error={errors.email}
                                    onChange={() =>
                                        setErrors({ ...errors, email: null })
                                    }
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <ThemedInput
                                    id="subject"
                                    label="Objective"
                                    required
                                    placeholder="Web Development"
                                    autoComplete="organization-title"
                                />
                                <ThemedInput
                                    id="company"
                                    label="Organization"
                                    placeholder="Optional"
                                    autoComplete="organization"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                <ThemedInput
                                    id="budget"
                                    label="Budget Range"
                                    required
                                    placeholder="e.g. $10k - $20k"
                                    autoComplete="off"
                                />
                                <ThemedInput
                                    id="timeline"
                                    label="Timeline"
                                    placeholder="Q4 2025"
                                    autoComplete="off"
                                />
                            </div>
                            <ThemedInput
                                id="message"
                                label="Project Details"
                                type="textarea"
                                rows={3}
                                required
                                placeholder="Briefly describe..."
                                autoComplete="off"
                                error={errors.message}
                                onChange={() =>
                                    setErrors({ ...errors, message: null })
                                }
                            />
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full group inline-flex items-center justify-center py-3 rounded-lg bg-white text-black font-bold text-xs tracking-widest uppercase transition-all duration-500 hover:bg-primary hover:text-white disabled:opacity-50"
                            >
                                {status === "sending" ? (
                                    <>
                                        <Loader2
                                            className="animate-spin mr-2"
                                            size={16}
                                        />{" "}
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Inquiry{" "}
                                        <ArrowRight
                                            size={16}
                                            className="ml-2 group-hover:translate-x-1 transition-transform"
                                        />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
