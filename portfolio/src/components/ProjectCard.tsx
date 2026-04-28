import type { ProjectCardProps } from "../interface";

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="cursor-pointer rounded-4xl border border-white/10 bg-black/10 overflow-hidden hover:-translate-y-2 transition duration-300 shadow-[0_0_30px_rgba(190,242,100,0.1)]">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-75 object-cover object-top"
      />
      <div className="p-6">
        <p className="text-sm text-zinc-500 mb-2">{project.category}</p>

        <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

        <p className="text-zinc-400 leading-7 mb-6">{project.description}</p>

        <div className="flex gap-6 text-sm mb-8 flex-wrap">
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Figma Design ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub ↗
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Live ↗
            </a>
          )}
        </div>

        <div className="flex justify-end gap-2 flex-wrap">
          {project.tag.map((tag, index) => (
            <span
              key={tag}
              className={`px-4 py-2 rounded-full text-xs font-medium ${
                project.accent[index] || project.accent[0]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
