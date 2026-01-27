import React from "react";

const timelineData = [
  {
    id: 1,
    type: "work",
    yearOfJoin: "2025",
    date: "2025 - Present",
    title: "AI Researcher",
    company: "IEEE Student Branch - LGU",
    description:
      "Spearheading research on Retrieval-Augmented Generation (RAG). Developing synthetic data pipelines to optimize Large Language Models.",
    skills: ["Python", "NLP", "RAG"],
  },
  {
    id: 2,
    type: "work",
    yearOfJoin: "2025",
    date: "2025 - Present",
    title: "Campus Ambassador",
    company: "Fstivo",
    description:
      "Leading logistics for major hackathons. promoting a culture of innovation and tech entrepreneurship within the university.",
    skills: ["Logistics", "Public Speaking"],
  },
{
    id: 3,
    type: "work",
    yearOfJoin: "2025", 
    date: "June 2025 (6 weeks)",
    title: "Summer Intern",
    company: "Inter-Services Public Relations (ISPR)",
    description:
      "Selected for a prestigious national-level program focusing on strategic communication and narrative building. Gained hands-on exposure to the strategic intersection of technology and national security.",
    skills: [
      "Strategic Communication",
      "National Security Dynamics",
      "Public Relations",
      "Disciplined Leadership",
    ],
  },

  {
    id: 4,
    type: "work",
    yearOfJoin: "2024",
    date: "2024 - 2025",
    title: "Management Team",
    company: "ESSE",
    description:
      "Orchestrating large-scale tech summits. bridging the gap between students and industry leaders through strategic event management.",
    skills: ["Leadership", "Management"],
  },
  {
    id: 5,
    type: "education",
    yearOfJoin: "2023",
    date: "2023 - 2027 (Expected)",
    title: "BS Software Engineering",
    company: "Lahore Garrison University",
    description:
      "Specializing in Software Development. Consistently maintaining a high GPA while managing multiple leadership roles.",
    skills: [
      "Software Development",
      "AI/ML",
      "System Design",
      "Generative AI",
      "Full Stack Web-Dev",
    ],
  },
  {
    id: 6,
    type: "work",
    yearOfJoin: "2023",
    date: "2023 (6 months)",
    title: "Telesales Executive",
    company: "Alpha and Omega Technologies",
    description:
      "Mastered high-impact communication and strategic client management to consistently exceed performance benchmarks. Leveraged persuasive negotiation skills to build strong client relationships and drive business results.",
    skills: [
      "Client Acquisition",
      "CRM Management",
      "Market Analysis",
      "Revenue Optimization",
      "Interpersonal Communication",
    ],
  },
  {
    id: 7,
    type: "education",
    yearOfJoin: "2021",
    date: "2021 - 2023",
    title: "FSc Pre Engineering",
    company: "Superior Group of Colleges",
    description:
      "Achieved an A Grade while developing a rigorous analytical mindset and problem-solving framework that laid the foundation for advanced engineering studies.",
    skills: [
      "Advanced Mathematics",
      "Analytical Problem Solving",
      "Scientific Reasoning",
      "Quantitative Analysis",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5 backdrop-blur-md">
            <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
              Career Path
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
            From academic foundations to leading AI research. Here
            is the timeline of my growth in the tech industry.
          </p>
        </div>

        {/* The Neural Timeline */}
        <div className="relative">
          {/* The Glowing Central Line (Desktop) */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 md:translate-x-0 hidden md:block"></div>

          {/* Mobile Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gray-800 to-transparent md:hidden"></div>

          <div className="space-y-12 md:space-y-24">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } group`}
              >
                {/* 1. The Date/Label (Desktop only - Opposite side) */}
                <div className="hidden md:flex w-1/2 items-center justify-end px-10">
                  <span
                    className={`text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-black group-hover:from-gray-500 group-hover:to-gray-800 transition-all duration-500 ${index % 2 === 0
                        ? "text-left translate-x-1/2"
                        : "text-right -translate-x-1"
                      }`}
                  >
                    {item.yearOfJoin}
                  </span>
                </div>

                {/* 2. The Central Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center z-20">
                  {/* Outer Ring Pulse */}
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:scale-150 transition-transform duration-500"></div>
                  {/* The Node Itself */}
                  <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-gray-600 group-hover:border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)]"></div>
                </div>

                {/* 3. The Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-10">
                  <div
                    className={`relative p-6 rounded-2xl bg-[#0a0a0a] border transition-all duration-500 overflow-hidden
      ${item.type === "education"
                        ? "border-secondary/40" // Pink/Purple border for Education
                        : "border-white/10 group-hover:border-primary/30" // Gray/Primary for Work
                      }`}
                  >
                    {/* Subtle Inner Glow */}
                    {item.type === "education" && (
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
                    )}

                    {/* Hover Overlay */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br 
      ${item.type === "education" ? "from-secondary/10" : "from-primary/5"} to-transparent`}
                    />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          {/* Milestone Label */}
                          {item.type ===
                            "education" && (
                              <div className="flex items-center gap-1.5 mb-2">
                                <div className="w-1 h-1 rounded-full bg-secondary animate-pulse" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-secondary/80">
                                  Academic
                                  Milestone
                                </span>
                              </div>
                            )}

                          <h3
                            className={`text-xl font-bold mb-1 transition-colors
            ${item.type === "education" ? "text-white group-hover:text-secondary" : "text-white group-hover:text-primary"}`}
                          >
                            {item.title}
                          </h3>

                          <span
                            className={`text-xs font-semibold mb-1 block
            ${item.type === "education" ? "text-secondary/80" : "text-primary/70"}`}
                          >
                            {item.date}
                          </span>

                          <p className="text-sm font-medium text-gray-400">
                            {item.company}
                          </p>
                        </div>
                      </div>

                      <p
                        className={`text-gray-400 text-sm leading-relaxed mb-4 border-l-2 pl-3 transition-colors
        ${item.type === "education" ? "border-secondary/30 group-hover:border-secondary" : "border-white/5 group-hover:border-primary/50"}`}
                      >
                        {item.description}
                      </p>

                      {/* Skills Row */}
                      <div className="flex gap-2 flex-wrap">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded transition-colors
              ${item.type === "education"
                                ? "text-secondary/90 bg-secondary/10 border border-secondary/10"
                                : "text-gray-500 bg-white/5"
                              }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
