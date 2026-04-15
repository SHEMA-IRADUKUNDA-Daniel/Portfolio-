const Skills = () => {
  const skillGroups = [
    {
      title: "Front-End",
      subtitle: "Crafting fast, scalable, and polished interfaces.",
      accent: "bg-primary",
      glow: "shadow-[0_0_30px_rgba(190,242,100,0.12)]",
      skills: [
        ["React.js", 90],
        ["Next.js", 85],
        ["TypeScript", 80],
        ["Tailwind", 92],
      ],
    },
    {
      title: "Back-End",
      subtitle: "Reliable APIs, architecture, and integrations.",
      accent: "bg-violetSecondary",
      glow: "shadow-[0_0_30px_rgba(167,139,250,0.12)]",
      featured: true,
      skills: [
        ["Node.js", 85],
        ["REST API", 88],
        ["GraphQL", 78],
        ["Postman", 90],
      ],
    },
    {
      title: "Design & Tools",
      subtitle: "Turning ideas into refined product experiences.",
      accent: "bg-amberThirdly",
      glow: "shadow-[0_0_30px_rgba(251,191,36,0.12)]",
      skills: [
        ["Figma", 92],
        ["Git", 88],
        ["Vercel", 90],
        ["Illustrator", 84],
      ],
    },
  ];
  return (
    <div id="Skills" className="px-6 md:px-16 pt-10 pb-24 bg-black text-white">
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
        What I Work With
      </p>
      <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-14">
        Skills that <span className="text-primary italic">scale.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 items-start">
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

            <div className="space-y-5">
              {group.skills.map(([name, value]) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-2 text-zinc-300">
                    <span>{name}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${group.accent}`}
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
