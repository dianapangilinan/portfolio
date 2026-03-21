import { certificates } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

const CertificatesSection = () => {
  return (
    <div>
      <h2 className="text-lg font-bold text-white mb-5">My Certificates</h2>
      <div className="flex flex-col gap-3">
        {certificates.map((cert, i) => (
          <div key={i} className="glass-card rounded-xl p-5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-white/60" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold text-sm">{cert.title}</h3>
              <p className="text-white/50 text-xs">{cert.issuer}</p>
            </div>
            <span className="text-white/40 text-xs shrink-0 mr-2">{cert.date}</span>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors active:scale-[0.97] shrink-0"
            >
              View
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesSection;
