"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
    Linkedin,
    Github,
    Youtube,
    Instagram,
    MessageCircle,
    Loader2,
    Send,
    CheckCircle,
} from "lucide-react";
import { sendInquiry } from "@/app/actions/email";

const ContactForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState("Select a Topic");
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const dropdownRef = useRef(null);

    const topics = [
        "Project Inquiry",
        "Hiring / Job Opportunity",
        "General Question",
        "Other",
    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formElement = e.target;
        const formData = new FormData(formElement);

        const newErrors = {};
        if (!formData.get("name").trim()) newErrors.name = "Name is required";
        if (!formData.get("email").trim())
            newErrors.email = "Email is required";
        if (!formData.get("message").trim())
            newErrors.message = "Message cannot be empty";
        if (selectedTopic === "Select a Topic")
            newErrors.topic = "Please select a subject";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus("sending");
        try {
            formData.append("subject", selectedTopic);
            const result = await sendInquiry(formData);

            if (result.success) {
                setStatus("success");
                formElement.reset();
                setSelectedTopic("Select a Topic");
                setErrors({});
                setTimeout(() => setStatus("idle"), 2000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const clearError = (field) => {
        if (errors[field]) setErrors({ ...errors, [field]: null });
    };

    return (
        <section
            id="contact"
            className="py-20 px-4 relative flex items-center justify-center"
        >
            {/* 1. CSS UPDATED FOR CURSOR & POINTER EVENTS */}
            <style jsx>{`
                /* 1. Autofill State Lock */
                input:-webkit-autofill,
                textarea:-webkit-autofill,
                input:-webkit-autofill:hover,
                input:-webkit-autofill:focus,
                input:-webkit-autofill:active {
                    /* Ye line background color ke flick ko 100% block kar degi */
                    transition: background-color 600000s ease-in-out 0s;

                    -webkit-box-shadow: 0 0 0px 1000px #1a1a1a inset !important;
                    -webkit-text-fill-color: white !important;
                    caret-color: white !important;
                }

                /* 2. Selection & Cursor Fix */
                input,
                textarea {
                    caret-color: #5eead4 !important; /* Cursor ka color blinking lock karne ke liye */
                    transition: none !important; /* Edit karte waqt koi bhi layout animation na ho */
                }
            `}</style>

            {/* 2. GLOW DIV PUSHED BACK (-z-20) & POINTER-EVENTS-NONE ADDED */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-20 pointer-events-none" />

            <div className="w-full max-w-4xl relative z-10">
                <div className="mb-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Let's{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            Collaborate
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
                        Turning complex ideas into high-performance code.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-1 flex flex-col gap-4">
                        <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl">
                            <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                                Current Status
                            </h3>
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-white text-sm font-bold">
                                    Available for Work
                                </span>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-3">
                                    Drop a line
                                </h3>
                                <p className="text-sm font-bold text-white break-all">
                                    dev.aliahmedkhan@gmail.com
                                </p>
                            </div>
                            <div className="mt-6 pt-3 border-t border-white/10 flex gap-4">
                                <Link
                                    href="https://github.com/engraliahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white transition-colors"
                                >
                                    <Github size={20} />
                                </Link>

                                <Link
                                    href="https://linkedin.com/in/engraliahmed"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-secondary transition-colors"
                                >
                                    <Linkedin size={18} />
                                </Link>

                                <Link
                                    href="https://www.youtube.com/@Compilee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-secondary transition-colors"
                                >
                                    <Youtube size={18} />
                                </Link>
                                
                                <Link
                                    href="https://www.instagram.com/codescope_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-secondary transition-colors"
                                >
                                    <Instagram size={18} />
                                </Link>

                                <Link
                                    href="https://www.whatsapp.com/channel/0029VbAHPsE5vKAIXTvJqX3h"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-secondary transition-colors"
                                >
                                    <MessageCircle size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl">
                            <h3 className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">
                                Location
                            </h3>
                            <p className="text-white text-sm font-medium">
                                Lahore, Pakistan 🇵🇰
                            </p>
                            <p className="text-[10px] text-gray-500 mt-1">
                                Remote Available (UTC+5)
                            </p>
                        </div>                        
                    </div>

                    <div className="lg:col-span-2 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 relative">
                        <form
                            className="relative z-10 space-y-4"
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                        Name{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        placeholder="your name"
                                        autoComplete="name"
                                        onChange={() => clearError("name")}
                                        className={`w-full bg-[#1a1a1a] border rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 transition-all ${errors.name ? "border-red-500/50" : "border-white/10 focus:border-primary"}`}
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-[10px] mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                        Email{" "}
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="ali@gmail.com"
                                        autoComplete="email"
                                        onChange={() => clearError("email")}
                                        className={`w-full bg-[#1a1a1a] border rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 transition-all ${errors.email ? "border-red-500/50" : "border-white/10 focus:border-primary"}`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-[10px] mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div
                                className="space-y-1 relative"
                                ref={dropdownRef}
                            >
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                    Subject
                                </label>                                
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(!isOpen)}
                                    className={`w-full bg-[#1a1a1a] border rounded-lg px-3 py-2.5 text-left text-sm flex justify-between items-center ${errors.topic ? "border-red-500/50" : "border-white/10"}`}
                                >
                                    <span
                                        className={
                                            selectedTopic === "Select a Topic"
                                                ? "text-gray-500"
                                                : "text-white"
                                        }
                                    >
                                        {selectedTopic}
                                    </span>
                                    <Send
                                        size={14}
                                        className={`text-gray-500 ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {isOpen && (
                                    <div className="absolute z-50 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-xl overflow-hidden">
                                        {topics.map((topic) => (
                                            <div
                                                key={topic}
                                                onClick={() => {
                                                    setSelectedTopic(topic);
                                                    setIsOpen(false);
                                                    clearError("topic");
                                                }}
                                                className="px-4 py-3 text-sm text-gray-300 hover:bg-white/10 cursor-pointer border-b border-white/5 last:border-0"
                                            >
                                                {topic}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                                    Message{" "}
                                    <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="How can I help you?"
                                    onChange={() => clearError("message")}
                                    className={`w-full bg-[#1a1a1a] border rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-1 transition-all resize-none ${errors.message ? "border-red-500/50" : "border-white/10 focus:border-primary"}`}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-400 text-[10px] mt-1">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full py-3 bg-white text-black font-bold text-sm rounded-lg hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {status === "sending" ? (
                                    <>
                                        <Loader2
                                            className="animate-spin"
                                            size={16}
                                        />{" "}
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            {status === "success" && (
                                <div className="flex items-center justify-center gap-2 text-emerald-500 font-bold text-xs mt-3 tracking-wide">
                                    <CheckCircle size={14} /> Message delivered successfully!
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
