import React from "react";

const skills = [
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Figma", "JavaScript"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL"],
    },
    {
        category: "AI & ML",
        items: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    },
    {
        category: "DevOps & Cloud",
        items: ["Git", "Docker", "Oracle Cloud (OCI)", "Linux", "Kubernetes", "AWS"],
    },
];

const TechStack = () => {
    return (
        <section className="py-20 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    My <span className="text-purple-400">Tech Stack</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    The languages, frameworks, and tools I use to bring ideas to
                    life.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup) => (
                    <div
                        key={skillGroup.category}
                        className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors"
                    >
                        <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-800 pb-2">
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:text-white hover:border-purple-500/50 transition-all cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
