import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import TechStack from "@/components/home/TechStack";
import ContactForm from "@/components/home/ContactForm";
import Experience from "@/components/home/Experience";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden w-full relative">
            <Hero />
            <BentoGrid />
            <TechStack />
            <Experience />
            <ContactForm />
        </main>
    );
}
