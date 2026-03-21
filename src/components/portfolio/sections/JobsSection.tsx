import { jobs } from "@/data/portfolio";
import { Building2 } from "lucide-react";

const JobsSection = () => {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-5">My Jobs</h2>
      <div className="flex flex-col gap-4">
        {jobs.map((job, i) => (
          <div key={i} className="glass-card rounded-xl p-6">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">{job.company}</h3>
                  <p className="text-white/50 text-xs">{job.role} · {job.location}</p>
                </div>
              </div>
              <span className="text-white/40 text-xs shrink-0 pt-0.5">{job.period}</span>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {job.bullets.map((b, j) => (
                <li key={j} className="text-white/70 text-xs leading-relaxed">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsSection;
