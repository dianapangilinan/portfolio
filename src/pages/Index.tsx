import { useState, useRef } from "react";
import WindowControls from "@/components/portfolio/WindowControls";
import Sidebar from "@/components/portfolio/Sidebar";
import AboutSection from "@/components/portfolio/sections/AboutSection";
import SkillsSection from "@/components/portfolio/sections/SkillsSection";
import JobsSection from "@/components/portfolio/sections/JobsSection";
import ProjectsSection from "@/components/portfolio/sections/ProjectsSection";
import EducationSection from "@/components/portfolio/sections/EducationSection";
import CertificatesSection from "@/components/portfolio/sections/CertificatesSection";
import ParticleNetwork from "@/components/portfolio/ParticleNetwork";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    contentRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isClosed) {
    return (
      <div className="macos-gradient-bg min-h-screen flex items-center justify-center">
        <ParticleNetwork />
        <button
          onClick={() => setIsClosed(false)}
          className="relative z-10 px-6 py-3 rounded-2xl glass-window text-white/80 text-sm font-medium hover:text-white transition-colors active:scale-[0.97]"
        >
          Reopen Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="macos-gradient-bg min-h-screen flex items-center justify-center p-2 sm:p-4">
      <ParticleNetwork />
      <div
        className={`glass-window rounded-2xl flex flex-col transition-all duration-500 ease-out relative z-10 ${
          isMaximized
            ? "w-full h-screen rounded-none"
            : "w-full max-w-5xl h-[95vh] sm:h-[85vh]"
        }`}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 shrink-0">
          <div className="flex items-center gap-3">
            <WindowControls
              isMaximized={isMaximized}
              onClose={() => setIsClosed(true)}
              onMinimize={() => {}}
              onMaximize={() => setIsMaximized(!isMaximized)}
            />
            {/* Hamburger — visible only on small screens */}
            <button
              className="sm:hidden ml-2 p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
          {/* Profile photo */}
          <div className="w-9 h-9 rounded-full bg-white/15 border border-white/20 flex items-center justify-center overflow-hidden">
            <img src={profilePhoto} alt="Diana Pangilinan" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Mobile slide-down menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden shrink-0 px-4 pb-3 border-b border-white/10">
            <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} mobile />
          </div>
        )}

        {/* Body */}
        <div className="flex flex-1 min-h-0 px-4 sm:px-5 pb-4 sm:pb-5 relative">
          <ParticleNetwork
            mode="contained"
            count={40}
            lineColor="200, 200, 220"
            dotColor="200, 200, 220"
            className="rounded-b-2xl opacity-40"
          />
          {/* Sidebar — hidden on small screens */}
          <div className="hidden sm:block">
            <Sidebar activeSection={activeSection} onSectionChange={handleSectionChange} />
          </div>

          {/* Content area */}
          <main
            ref={contentRef}
            className="flex-1 overflow-y-auto custom-scrollbar sm:pl-6 space-y-8 min-w-0"
          >
            {activeSection === "about" && (
              <>
                <AboutSection />
                <SkillsSection />
                <JobsSection />
                <ProjectsSection />
                <EducationSection />
                <CertificatesSection />
              </>
            )}
            {activeSection === "skills" && <SkillsSection />}
            {activeSection === "jobs" && <JobsSection />}
            {activeSection === "projects" && <ProjectsSection />}
            {activeSection === "education" && <EducationSection />}
            {activeSection === "certificates" && <CertificatesSection />}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;