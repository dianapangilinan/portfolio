import { personalInfo } from "@/data/portfolio";
import { Download } from "lucide-react";
import aboutPhoto from "@/assets/about-photo.jpg";

const AboutSection = () => {
  return (
    <div className="about-gradient rounded-xl p-8 flex items-center gap-8 relative overflow-hidden">
      <div className="flex-1 min-w-0 relative z-[2]">
        <h1 className="text-3xl font-bold text-white leading-tight mb-3" style={{ lineHeight: "1.15" }}>
          {personalInfo.name}
        </h1>
        <p className="text-white/90 text-sm leading-relaxed mb-5 max-w-lg" style={{ textWrap: "pretty" as any }}>
          {personalInfo.about}
        </p>
        <a
          href={personalInfo.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors active:scale-[0.97]"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </div>
      <div className="hidden md:flex shrink-0 w-44 h-44 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 items-center justify-center overflow-hidden relative z-[2]">
        <img src={aboutPhoto} alt="About illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default AboutSection;
