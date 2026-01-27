export const projects = [
    {
        id: 1,
        slug: "skycast",
        title: "SkyCast Weather Forecaster",
        description: `SkyCast is a high-performance atmospheric dashboard engineered with Next.js 15 to deliver real-time, hyper-local weather insights through a sophisticated bento-box interface. The project’s architecture focuses on Local-First Data Persistence, utilizing a structured telemetry management system that stores user preferences and geographic coordinates directly within the browser’s local environment to eliminate unnecessary server-side data exposure. By leveraging Server-Side Rendering (SSR) for instantaneous load states and integrating Recharts for granular trend analysis, SkyCast transforms complex JSON meteorological streams into an intuitive, high-fidelity visual experience. The entire UI is built on a custom Glassmorphism framework using Tailwind CSS, ensuring a seamless, responsive transition between professional desktop analytics and mobile-ready accessibility. To explore the industry-standard clean code, modular component design, and the optimized deployment workflow, I invite you to examine the full repository on GitHub.`,

        tech: [
            "Next.js 15",
            "React",
            "Tailwind CSS",
            "Recharts",
            "OpenWeather API",
        ],
        category: "Web Dev",
        image: "/projects/skycast.png",
        github: "https://github.com/engraliahmed/sky-cast-project",
        demo: "https://skycastproject.vercel.app/",
        video: "https://www.youtube.com/embed/nIvZ6C9RwVM",
        architecture: [
            "Modular Component Design",
            "Bento-Box Layout",
            "Local Telemetry Engine",
            "Asynchronous Service Layer",
        ],
        featured: true, // This will show up on the Home Page
    },
    {
        id: 2,
        slug: "uraan",
        title: "URAAN - Travel Agency",
        description: `Uraan is a high-performance web platform designed for the ultra-luxury travel market, offering exclusive bookings for private jets, VIP Hajj packages, and global concierge services. The project focuses on delivering a seamless, "app-like" experience using a Serverless Architecture approach. Unlike standard static sites, Uraan features a fully functional custom authentication system that connects a static frontend to a dynamic cloud database without requiring a traditional backend server, ensuring high security, zero maintenance costs, and lightning-fast load times.`,

        tech: ["HTML5", "CSS3", "JavaScript", "Google Apps Script"],
        architecture: [
            "Client-Side",
            "Serverless Middleware",
            "Data Persistence",
        ],
        category: "Web Dev",
        image: "/projects/uraan.png",
        github: "https://github.com/engraliahmed/URAAN-Travel-Agency",
        demo: "https://uraanhmarysang.netlify.app/",
        featured: true,
    },
];
