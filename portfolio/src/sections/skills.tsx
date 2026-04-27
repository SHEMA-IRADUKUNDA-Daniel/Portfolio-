const Skills = () => {
  const skillGroups = [
    {
      title: "Front-End",
      subtitle: "Crafting fast, scalable, and polished interfaces.",
      accent: "text-primary",
      glow: "shadow-[0_0_30px_rgba(190,242,100,0.12)]",
      featured: false,
      skills: [
        "React.js",
        "Next.js",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "Back-End",
      subtitle: "Reliable APIs, architecture, and integrations.",
      accent: "text-violetSecondary",
      glow: "shadow-[0_0_30px_rgba(167,139,250,0.12)]",
      featured: true,
      skills: ["Node.js", "REST API", "GraphQL", "Postman"],
    },
    {
      title: "Design & Tools",
      subtitle: "Turning ideas into refined product experiences.",
      accent: "text-amberThirdly",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.12)]",
      featured: false,
      skills: ["Figma", "Git", "Vercel", "Illustrator", "Photoshop"],
    },
  ];
  return (
    <div id="Skills" className="px-6 md:px-16 py-20 pb-10 bg-black text-white">
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
        What I Work With
      </p>
      <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-14">
        Skills that <span className="text-primary italic">scale.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 ">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className={`rounded-4xl border border-white/10 bg-zinc-950/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 ${group.glow} ${
              group.featured ? "md:-mt-6" : ""
            }`}
          >
            <h3 className="text-2xl font-semibold mb-2">{group.title}</h3>
            <p className="text-zinc-400 text-sm mb-8 leading-6">
              {group.subtitle}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 ${group.accent} hover:scale-105 transition`}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-zinc-500 mb-2">Focus Area</p>

              <p className={`font-medium ${group.accent}`}>
                {group.title === "Front-End" &&
                  "Responsive UI • Performance • Accessibility"}

                {group.title === "Back-End" &&
                  "API Design • Scalability • Clean Architecture"}

                {group.title === "Design & Tools" &&
                  "UX Thinking • Visual Design • Product Systems"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
