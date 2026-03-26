import { MessageSquare, Atom, Briefcase, Code2, GraduationCap, Award, Linkedin, Github, Phone, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useState } from "react";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  mobile?: boolean;
}

const categories = [
  { id: "about", label: "About", icon: MessageSquare },
  { id: "skills", label: "Skills", icon: Atom },
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certificates", label: "Certificates", icon: Award },
];

const Sidebar = ({ activeSection, onSectionChange, mobile }: SidebarProps) => {
  const [showContact, setShowContact] = useState<"phone" | "email" | null>(null);

  return (
    <aside className={mobile ? "flex flex-col gap-4" : "w-56 shrink-0 flex flex-col gap-6 py-2 pr-4 border-r border-white/10"}>
      {/* Categories */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3 px-3">
          Categories
        </h3>
        <nav className="flex flex-col gap-0.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSectionChange(cat.id)}
              className={`nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 w-full text-left ${
                activeSection === cat.id ? "active text-white" : ""
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Social Links */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3 px-3">
          Social Link
        </h3>
        <nav className="flex flex-col gap-0.5">
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/80"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/80"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          {/* Phone */}
          <button
            onClick={() => setShowContact(showContact === "phone" ? null : "phone")}
            className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 w-full text-left"
          >
            <Phone className="w-4 h-4" />
            Phone
          </button>
          {showContact === "phone" && (
            <div className="mx-3 mb-1 p-3 rounded-lg glass-card text-xs text-white/90">
              <p className="font-semibold mb-1">Phone Number</p>
              <a href={`tel:${personalInfo.phone}`} className="text-sky-400 hover:underline break-all">
                {personalInfo.phone}
              </a>
            </div>
          )}

          {/* Email */}
          <button
            onClick={() => setShowContact(showContact === "email" ? null : "email")}
            className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/80 w-full text-left"
          >
            <Mail className="w-4 h-4" />
            Email
          </button>
          {showContact === "email" && (
            <div className="mx-3 mb-1 p-3 rounded-lg glass-card text-xs text-white/90">
              <p className="font-semibold mb-1">Email Address</p>
              <a href={`mailto:${personalInfo.email}`} className="text-sky-400 hover:underline break-all">
                {personalInfo.email}
              </a>
            </div>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
