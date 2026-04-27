import EquitImage from "../assets/Equity.png";
import MovieImage from "../assets/Movie.png";
import RRAImage from "../assets/RRA.png";
import MovieDBM from "../assets/MovieDBM.png";
import type { Project } from "../interface";
import { useState } from "react";
const projects: Project[] = [
  {
    title: "Equity",
    category: "Banking app",
    description:
      "UI redesign concept of the Equity mobile home screen with a premium dark-mode experience focused on clarity and trust.",
    image: EquitImage,
    tag: ["DESIGN"],
    accent: ["bg-primary text-black"],
    figma:
      "https://www.figma.com/design/2RG1lKu8MVwNLQwyAyztik/E-APP?node-id=0-1&p=f&t=NNGj3op7MQi29Z79-0",
  },

  {
    title: "Canaly Olympia",
    category: "Movie ticket app",
    description:
      "A UI/UX mobile app concept created to simplify movie booking and eliminate long cinema queues.",
    image: MovieImage,
    tag: ["FRONT-END"],
    accent: ["bg-violetSecondary text-white"],
    github:
      "https://github.com/SHEMA-IRADUKUNDA-Daniel/CanalOlympia-ticket-app",
    figma:
      "https://www.figma.com/design/Tn6OG2BpjGblYEtRNlioIK/Canal-movie-ticket-app?node-id=96-1291&t=3StCT9HOmuY0tEMn-0",
  },
  {
    title: "RRA",
    category: "Revenue app",
    description:
      "A modern redesign concept for digital tax services focused on speed, accessibility, and a cleaner flow.",
    image: RRAImage,
    tag: ["DESIGN"],
    accent: ["bg-amberThirdly text-black"],
    figma:
      "https://www.figma.com/design/3nRBsjoXXmj9rtZ4ltoVKE/RRA?t=NNGj3op7MQi29Z79-0",
  },
  {
    title: "MovieDB",
    category: "Movie Recommendation app",
    description:
      "A modern movie discovery and recommendation platform designed to help users explore trending films, view details, and find what to watch next with ease.",
    image: MovieDBM,
    tag: ["DESIGN", "FRONT-END"],
    accent: ["bg-violetSecondary text-white", "bg-primary text-black"],
    figma:
      "https://www.figma.com/design/3nRBsjoXXmj9rtZ4ltoVKE/RRA?t=NNGj3op7MQi29Z79-0",
    github:
      "https://www.figma.com/design/9PPe2jq3wwQBupOpblEyRk/Movie-Database?t=NNGj3op7MQi29Z79-0",
    live: "https://movie-database-two-kappa.vercel.app/",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tag.includes(activeFilter.toUpperCase()),
        );
  const filterColors: Record<string, string> = {
    All: "border-primary text-white",
    "Front-end": "border-violetSecondary text-white",
    Design: "border-amberThirdly text-white",
  };
  return (
    <section
      id="Projects"
      className="px-6 md:px-16 pt-5 py-10 bg-black/95 text-white"
    >
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-8">
        Selected Work
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mb-12">Projects</h2>

      <div className="flex gap-4 mb-10">
        {["All", "Front-end", "Design"].map((filter) => (
          <button
            onClick={() => setActiveFilter(filter)}
            key={filter}
            className={`px-6 py-2 cursor-pointer rounded-xl border transition ${
              activeFilter === filter
                ? filterColors[filter]
                : "border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className=" cursor-pointer rounded-4xl border border-white/10 bg-black/10 overflow-hidden hover:-translate-y-2 transition duration-300 shadow-[0_0_30px_rgba(190,242,100,0.1)]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-75 object-cover  object-top"
            />

            <div className="p-6">
              <p className="text-sm text-zinc-500 mb-2">{project.category}</p>

              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-zinc-400 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex gap-6 text-sm mb-8">
                {project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Figma design ↗
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Github ↗
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary  hover:underline transition"
                  >
                    Live ↗
                  </a>
                )}
              </div>

              <div className="flex justify-end gap-2 flex-wrap">
                {project.tag.map((tag, index) => (
                  <span
                    key={tag}
                    className={`px-4 py-2 rounded-full text-xs font-medium ${project.accent[index] || project.accent[0]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
