import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-5">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <div key={i} className="glass-card rounded-xl p-6 flex flex-col justify-between border border-white/10">
            <div>
              <h3 className="text-white font-semibold text-base mb-2">{project.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed mb-4" style={{ textWrap: "pretty" }}>
                {project.description}
              </p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="self-end inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors active:scale-[0.97]"
            >
              Open
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
