"use client";
import React, { useState, useMemo } from "react";
import Card from "@/components/ui/Card";
import Image from "next/image";
import { certificates } from "@/data/certificates";
import certOrder from "@/data/cert-order.json";
import {
    Award,
    ExternalLink,
    ShieldCheck,
    Calendar,
    Star,
    ChevronDown,
    ChevronUp,
} from "lucide-react";

export default function CertificatesPage() {

    const sortedCerts = useMemo(() => {
        const featured = certificates.filter(c => c.featured);
        const standard = certificates.filter(c => !c.featured);

        const sortByOrder = (data, orderList) => {
            return [...data].sort((a, b) => {
                const indexA = orderList.indexOf(a.id);
                const indexB = orderList.indexOf(b.id);
                return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
            });
        };

        const sortedFeatured = sortByOrder(featured, certOrder.featuredOrder || []);
        const sortedStandard = sortByOrder(standard, certOrder.standardOrder || []);

        return [...sortedFeatured, ...sortedStandard];
    }, [certificates]);

    // 2. See More / Show Less State
    const INITIAL_COUNT = 6;
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

    const isAllShown = visibleCount >= sortedCerts.length;

    // Toggle Function: Mazeed dikhane ya wapas collapse karne ke liye
    const toggleVisible = () => {
        if (isAllShown) {
            setVisibleCount(INITIAL_COUNT);
            // Show less karne par wapas section ke start par scroll karega
            document
                .getElementById("certificates")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            setVisibleCount((prev) => prev + 6);
        }
    };

    return (
        <main
            id="certificates"
            className="min-h-screen text-white py-20 px-4 md:px-8
                       bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
                       from-secondary/15 to-black/90 relative overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
                        Verified{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                            Credentials
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A prioritized collection of professional certifications
                        validating my technical expertise.
                    </p>
                </div>

                {/* Certificates Grid: Responsive columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {sortedCerts.slice(0, visibleCount).map((cert) => (
                        <CertificateCard key={cert.id} cert={cert} />
                    ))}
                </div>

                {/* Control Button: Sirf tab dikhega jab certificates 6 se zyada hon */}
                {sortedCerts.length > INITIAL_COUNT && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={toggleVisible}
                            className="group flex items-center gap-2 px-8 py-3 rounded-full 
                                       bg-white/5 border border-white/10 hover:border-primary/50 
                                       hover:bg-white/10 transition-all duration-300 
                                       font-bold text-sm tracking-widest uppercase"
                        >
                            {isAllShown ? "Show Less" : "See More"}
                            {isAllShown ? (
                                <ChevronUp
                                    size={18}
                                    className="group-hover:-translate-y-1 transition-transform"
                                />
                            ) : (
                                <ChevronDown
                                    size={18}
                                    className="group-hover:translate-y-1 transition-transform"
                                />
                            )}
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

const CertificateCard = ({ cert }) => {
    const isFeatured = cert.featured;

    return (
        <Card
            className={`group flex flex-col bg-[#0a0a0a] border rounded-xl overflow-hidden relative transition-all duration-500
                ${
                    isFeatured
                        ? "border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.05)]"
                        : "border-white/10 hover:border-primary/50"
                }`}
        >
            {/* Image Container: Dimensions preserved as requested */}
            <div className="h-44 w-full bg-white relative overflow-hidden flex items-start justify-center">
                {cert.image ? (
                    <Image
                        src={cert.image}
                        alt={cert.title}
                        className="object-top transition-transform duration-700 group-hover:scale-105"
                        // loading="lazy"
                        // priority={isFeatured}
                        width={500} // Ye dena zaroori hai
                        height={300}
                        unoptimized={true}
                        priority={isFeatured}
                    />
                ) : (
                    <Award size={48} className="text-gray-800 opacity-20" />
                )}

                {/* Featured Tag: Lower Right */}
                {isFeatured && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-red-500/20 border border-red-500/40 backdrop-blur-md z-10">
                        <div className="flex items-center gap-1">
                            <Star
                                size={10}
                                className="text-red-500 fill-red-500"
                            />
                            <span className="text-[9px] font-black text-red-500 uppercase tracking-widest">
                                Featured
                            </span>
                        </div>
                    </div>
                )}

                {/* Status Icon: Top Right */}
                <div className="absolute top-3 right-3 p-1.5 bg-black/70 backdrop-blur-md rounded-md border border-white/10 shadow-lg z-10">
                    <ShieldCheck
                        size={16}
                        className={
                            isFeatured ? "text-red-500" : "text-gray-500"
                        }
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-grow min-h-[170px]">
                <div className="flex justify-between items-start mb-3">
                    <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border 
                        ${
                            isFeatured
                                ? "text-red-500 border-red-500/20 bg-red-500/5"
                                : "text-gray-500 border-gray-800 bg-gray-900"
                        }`}
                    >
                        {cert.issuer}
                    </span>
                    <div className="flex items-center text-[10px] text-gray-500 font-medium font-mono">
                        <Calendar size={12} className="mr-1" />
                        {cert.date}
                    </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                </h3>

                <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                    {cert.description}
                </p>

                {/* Action Link: Bottom Locked */}
                <div className="mt-auto">
                    <a
                        href={cert.verifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-full py-2 rounded-lg transition-all duration-300 text-xs font-bold gap-2 
                            ${
                                isFeatured
                                    ? "bg-white text-black hover:bg-red-500 hover:text-white border-transparent"
                                    : "border border-gray-800 bg-gray-900/50 hover:bg-white hover:text-black hover:border-white"
                            }`}
                    >
                        Verify Credential
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </Card>
    );
};
