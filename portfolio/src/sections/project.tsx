import EquitImage from "../assets/Equity.png";
import MovieImage from "../assets/Movie.png";
import RRAImage from "../assets/RRA.png";

const projects = [
  {
    title: "Equity",
    category: "Banking app",
    description:
      "UI redesign concept of the Equity mobile home screen with a premium dark-mode experience focused on clarity and trust.",
    image: EquitImage,
    tag: "DESIGN",
    accent: "bg-lime-300 text-black",
  },

  {
    title: "Canaly Olympia",
    category: "Movie ticket app",
    description:
      "A UI/UX mobile app concept created to simplify movie booking and eliminate long cinema queues.",
    image: MovieImage,
    tag: "FRONT-END",
    accent: "bg-violetSecondary text-white",
  },
  {
    title: "RRA",
    category: "Revenue app",
    description:
      "A modern redesign concept for digital tax services focused on speed, accessibility, and a cleaner flow.",
    image: RRAImage,
    tag: "DESIGN",
    accent: "bg-amberThirdly text-black",
  },
];

const Projects = () => {
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
            key={filter}
            className="px-6 py-2 rounded-xl border border-white/10 text-zinc-300 hover:border-lime-300/30 transition"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
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
                <a href="#" className="text-primary hover:underline">
                  Live site ↗
                </a>
                <a href="#" className="text-primary hover:underline">
                  Github ↗
                </a>
              </div>

              <div className="flex justify-end">
                <span
                  className={`px-4 py-2 rounded-full text-xs font-medium ${project.accent}`}
                >
                  {project.tag}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
