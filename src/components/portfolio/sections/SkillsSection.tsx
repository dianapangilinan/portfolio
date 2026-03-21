import { skills } from "@/data/portfolio";

const SkillsSection = () => {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-5">My Skills</h2>
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-6">
          <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {items.map((skill) => (
              <div
                key={skill.name}
                className="skill-card glass-card rounded-xl px-4 py-3 flex flex-col items-center gap-2 w-24"
              >
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" loading="lazy" />
                <span className="text-xs text-white/80 font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
