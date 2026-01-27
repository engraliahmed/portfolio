"use client";

import React, { useState, useCallback, memo, useMemo } from "react";
import { Copy, Check } from "lucide-react";
import { highlight } from 'sugar-high';

const CodeWindow = memo(({ children, filename }) => {
    const [copied, setCopied] = useState(false);
    
    // 1. Raw code ko extraction logic (Mobile ke liye safest)
    const rawCode = useMemo(() => {
        return React.Children.toArray(children)
            .map(child => {
                // MDX structure se clean text nikalna
                const text = child.props?.children?.props?.children || child.props?.children || "";
                return typeof text === 'string' ? text : "";
            })
            .join("");
    }, [children]);

    const html = useMemo(() => highlight(rawCode), [rawCode]);

    // 2. Optimized Copy Logic for Mobile
    const handleCopy = useCallback(async () => {
        if (!rawCode) return;

        try {
            // Standard API
            await navigator.clipboard.writeText(rawCode.trim());
            setCopied(true);
        } catch (err) {
            // Fallback for older mobile browsers
            const textArea = document.createElement("textarea");
            textArea.value = rawCode.trim();
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                setCopied(true);
            } catch (copyErr) {
                console.error("Manual copy failed", copyErr);
            }
            document.body.removeChild(textArea);
        }
        
        setTimeout(() => setCopied(false), 2000);
    }, [rawCode]);

    return (
        <div className="my-6 rounded-lg overflow-hidden border border-[#30363d] bg-[#0d1117] shadow-xl group min-w-full relative">
            <div className="flex items-center justify-between bg-[#161b22] border-b border-[#30363d] h-10 pr-4">
                <div className="flex items-center h-full px-4 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    </div>
                    {filename && <span className="ml-2 text-zinc-500 text-[10px] font-black uppercase tracking-widest">{filename}</span>}
                </div>
                
                {/* 3. Larger touch target for mobile */}
                <button 
                    onClick={handleCopy} 
                    className="p-2.5 -mr-1 rounded-md hover:bg-white/5 text-gray-500 hover:text-white transition-all active:scale-95"
                    title="Copy Code"
                >
                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
            </div>

            <div className="p-4 overflow-x-auto selection:bg-primary/30 scrollbar-hide">
                <pre className="m-0 p-0 pointer-events-auto">
                    <code 
                        className="sugar-high-theme overflow-y-hidden text-[13px] leading-[1] block font-mono m-0 p-0"
                        dangerouslySetInnerHTML={{ __html: html }} 
                    />
                </pre>
            </div>
        </div>
    );
});

CodeWindow.displayName = "CodeWindow";
export default CodeWindow;