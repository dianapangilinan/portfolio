import { education } from "@/data/portfolio";

const EducationSection = () => {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-5">My Education</h2>
      <div className="flex flex-col gap-4">
        {education.map((edu, i) => (
          <div key={i} className="glass-card rounded-xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={edu.logo}
                alt={edu.school}
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm">{edu.degree}</h3>
              <p className="text-white/50 text-xs">{edu.school} · {edu.location}</p>
              {edu.details.map((d, j) => (
                <p key={j} className="text-white/40 text-xs">{d}</p>
              ))}
            </div>
            <span className="text-white/40 text-xs shrink-0">{edu.period}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
