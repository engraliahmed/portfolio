import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Ali Ahmed",
    description: "Software Engineer & AI Researcher",

    // FAVICON & APP ICONS CONFIGURATION
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            {
                url: "/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        other: [
            {
                rel: "icon",
                url: "/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                rel: "icon",
                url: "/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    },

    // Manifest linking for Android/PWA support
    manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
    return (
        // suppressHydrationWarning added (extensions error)
        <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
            <body
                className={`${inter.className} antialiased overflow-x-hidden w-full relative`}
                suppressHydrationWarning={true}
            >
                <Navbar />
                {/* Adds padding-top so content isn't hidden behind the fixed Navbar */}
                <main className="pt-20 min-h-screen">{children}</main>

                <Footer />
            </body>
        </html>
    );
}
