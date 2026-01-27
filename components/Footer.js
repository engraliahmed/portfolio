"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Github,
    Linkedin,
    Instagram,
    MapPin,
    Mail,
    ArrowRight,
    Youtube,
    Phone,
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();
    // Define accent colors
    const accentCyan = "text-[#06B6D4]"; // tailwind-cyan-500

    // scroll logic
    const handleFooterLinkClick = (href) => {
        // Agar user usi page par hai to smoothly top par bhej do
        if (pathname === href) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-gray-950 border-t border-gray-800 pt-0 pb-8 relative overflow-hidden">
            {/* 1. The Call to Action Strip (Premium CTA) */}
            <div className="w-full border-b border-gray-800 bg-gray-900/70 shadow-lg shadow-black/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-extrabold text-white tracking-tight">
                            Ready to build something amazing?
                        </h3>
                        <p className="text-gray-400 text-base mt-2">
                            Let's launch your next high-impact project together.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        onClick={() => handleFooterLinkClick("/contact")}
                        className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-black font-bold 
                                   hover:bg-gray-200 transition-all duration-300 shadow-xl"
                    >
                        Start a Project
                        <ArrowRight size={20} className="ml-2" />
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                {/* 2. Main Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Column 1: Brand Identity & Social */}
                    <div className="space-y-5">
                        <Link
                            href="/"
                            onClick={() => handleFooterLinkClick("/")}
                            className={`text-3xl font-extrabold text-white tracking-wide ${accentCyan}`}
                        >
                            علی احمد
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Bridging the gap between
                            <span className="text-white/80 font-medium">
                                {" "}
                                Complex AI{" "}
                            </span>
                            and
                            <span className="text-white/80 font-medium">
                                {" "}
                                User Experience
                            </span>
                            . I build software that is smart, scalable, and
                            intuitive.
                        </p>

                        {/* Social Icons with Hover */}
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://github.com/engraliahmed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-white transition-colors"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/engraliahmed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-500 hover:text-[#0077b5] transition-colors`}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://www.instagram.com/codescope_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-500 hover:text-[#0077b5] transition-colors`}
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://www.youtube.com/@Compilee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-500 hover:text-[#0077b5] transition-colors`}
                            >
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services (Refined List Style) */}
                    <div>
                        <h3
                            className={`text-white font-bold mb-6 border-l-4 border-gray-700 pl-3 uppercase tracking-wider`}
                        >
                            Expertise
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li
                                className={`text-gray-400 hover:text-white transition-colors`}
                            >
                                Generative AI Solutions
                            </li>
                            <li
                                className={`text-gray-400 hover:text-white transition-colors`}
                            >
                                Full-Stack Web Development
                            </li>
                            <li
                                className={`text-gray-400 hover:text-white transition-colors`}
                            >
                                Machine Learning Models
                            </li>
                            <li
                                className={`text-gray-400 hover:text-white transition-colors`}
                            >
                                Scalable API Design
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Navigation */}
                    <div>
                        <h3
                            className={`text-white font-bold mb-6 border-l-4 border-gray-700 pl-3 uppercase tracking-wider`}
                        >
                            Navigation
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => handleFooterLinkClick("/")}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    onClick={() =>
                                        handleFooterLinkClick("/about")
                                    }
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    About Me
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/projects"
                                    onClick={() =>
                                        handleFooterLinkClick("/projects")
                                    }
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Recent Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/certificate"
                                    onClick={() =>
                                        handleFooterLinkClick("/certificate")
                                    }
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Certifications
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info (Using Icons) */}
                    <div>
                        <h3
                            className={`text-white font-bold mb-6 border-l-4 border-gray-700 pl-3 uppercase tracking-wider`}
                        >
                            Contact
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={20}
                                    className="text-gray-500 mt-1 flex-shrink-0"
                                />
                                <span className="text-gray-400">
                                    Lahore, Pakistan
                                    <br />
                                    Available Globally (Remote)
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail
                                    size={20}
                                    className="text-gray-500 flex-shrink-0"
                                />
                                <a
                                    href="mailto:dev.aliahmedkhan@gmail.com"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    dev.aliahmedkhan@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone
                                    size={20}
                                    className="text-gray-500 flex-shrink-0"
                                />
                                <a
                                    href="https://wa.me/923148600030"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Chat On Whatsapp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Bottom Bar: Copyright & Tech Stack */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {currentYear} Ali Ahmed. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400">Built with</span>
                        {/* Chip styling refined */}
                        <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-gray-300">
                            Next.js
                        </span>
                        <span className="px-2 py-1 bg-gray-900 border border-gray-800 rounded text-gray-300">
                            Tailwind CSS
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
