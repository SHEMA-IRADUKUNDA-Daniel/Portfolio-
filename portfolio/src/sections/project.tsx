import { motion, AnimatePresence } from "framer-motion";
import EquitImage from "../assets/Equity.png";
import MovieImage from "../assets/Movie.png";
import RRAImage from "../assets/RRA.png";
import MovieDBM from "../assets/MovieDBM.png";
import type { Project } from "../interface";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import type { Variants } from "framer-motion";
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
    tag: ["FRONTEND"],
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
    tag: ["DESIGN", "FRONTEND"],
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
  const filters = ["All", "Frontend", "Design"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tag.includes(activeFilter.toUpperCase()),
        );
  const filterColors: Record<string, string> = {
    All: "border-primary text-white",
    Frontend: "border-violetSecondary text-white",
    Design: "border-amberThirdly text-white",
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
  return (
    <section
      id="Projects"
      className="px-6 md:px-16 pt-5 py-10 bg-black/98 text-white"
    >
      <p className="text-xs tracking-[0.25em] text-zinc-500 uppercase mb-8">
        Selected Work
      </p>

      <h2 className="text-5xl md:text-6xl font-serif mb-12">
        Projects <span className="text-primary italic">that</span>{" "}
        <span className="text-zinc-500 italic">build impact.</span>
      </h2>

      <div className="flex gap-3 flex-wrap mb-10 ">
        {filters.map((filter) => (
          <button
            onClick={() => setActiveFilter(filter)}
            key={filter}
            className={`px-5 py-2 cursor-pointer rounded-xl border transition-all duration-300 scale-105 ${
              activeFilter === filter
                ? filterColors[filter]
                : "border-white/10 text-zinc-300 hover:border-white hover:text-white/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              layout
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <ProjectCard key={project.title} project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
