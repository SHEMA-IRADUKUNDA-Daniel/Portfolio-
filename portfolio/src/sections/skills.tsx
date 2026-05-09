import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
  return (
    <section
      id="Skills"
      className="px-6 md:px-16 py-10  bg-black/98 text-white"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16 ">
          <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-4">
            Technical Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Skills <span className="text-primary italic">that</span>{" "}
            <span className="text-zinc-500 italic">scale.</span>
          </h2>
          <p className="text-zinc-400 mt-6 leading-7">
            A combination of engineering, design, and product thinking — focused
            on building real-world, scalable digital experiences.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className={`relative rounded-3xl border border-white/10 bg-black p-8 transition-all duration-300  hover:border-white/20 ${group.glow} ${
                group.featured ? "md:-mt-6" : ""
              }`}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 pointer-events-none">
                <div className={`absolute -inset-1 blur-2xl ${group.glow}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{group.title}</h3>
              <p className="text-zinc-400 text-sm mb-8 leading-6">
                {group.subtitle}
              </p>

              <div className="flex flex-wrap gap-3 mb-8 ">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-sm border border-white/10 bg-white/5 ${group.accent} hover:scale-110 transition-all duration-200 cursor-default `}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
