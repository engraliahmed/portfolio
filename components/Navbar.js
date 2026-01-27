"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // stop scrolling while opening menu
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    // Logo click logic
    const handleLogoClick = () => {
        setIsOpen(false);

        window.location.href = "/";
    };

    // --- UNIVERSAL SCROLL LOGIC ---
    const handleNavClick = (href) => {
        setIsOpen(false);

        if (pathname === href) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Certificates", href: "/certificate" },
        { name: "Insights", href: "/insights" },
    ];

    return (
        <>
            {/* --- 1. DARK BACKGROUND OVERLAY --- */}
            <div
                className={`fixed inset-0 z-[80] bg-black/80 backdrop-blur-md transition-opacity duration-500 md:hidden ${
                    isOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsOpen(false)} // Background click to close
            />

            <nav className="fixed top-0 inset-x-0 w-full z-[100] bg-black/50 backdrop-blur-md border-b border-white/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-[110]">
                    <div className="flex items-center justify-between h-20">
                        {/* LOGO */}
                        <button
                            onClick={handleLogoClick}
                            className="flex items-center gap-2 group focus:outline-none"
                        >
                            <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform group-hover:scale-110 duration-300">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 36px, (max-width: 1200px) 40px, 40px"
                                    priority
                                />
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
                                Ali Ahmed
                            </span>
                        </button>

                        {/* Desktop Links */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() =>
                                            handleNavClick(link.href)
                                        }
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => handleNavClick("/contact")}
                                    className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-all"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Toggle Icon */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 p-2 focus:outline-none"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- 2. TOP-DOWN SLIDE MENU (Mobile view) --- */}
                <div
                    className={`absolute inset-x-0 top-0 pt-24 pb-8 px-4 bg-[#0a0a0a] border-b border-white/10 transform transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden z-[90] ${
                        isOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
                >
                    <div className="flex flex-col space-y-3 max-w-sm mx-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 text-gray-300 font-semibold hover:text-white hover:bg-white/10 transition-all text-center"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            onClick={() => handleNavClick("/contact")}
                            className="mt-2 px-6 py-4 rounded-2xl bg-purple-600 text-white text-center font-bold shadow-xl active:scale-95 transition-transform"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
