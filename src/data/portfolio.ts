import pupLogo from "@/assets/pup-logo.png";
import ueLogo from "@/assets/ue-logo.png";

export const personalInfo = {
  name: "Diana C. Pangilinan",
  title: "L2 Application Support / SQL IT Support",
  email: "dianapangilinann@gmail.com",
  phone: "(+63) 970-302-3333",
  location: "Makati City, Philippines",
  linkedIn: "https://linkedin.com/in/dianapangilinan",
  github: "https://github.com/dianapangilinan",
  resumeLink: "https://docs.google.com/document/d/18Ent9t55PEszvNDZ97cExps9rIdOn2-4/edit?usp=sharing&ouid=116405380296379916303&rtpof=true&sd=true",
  about:
    "Application Support Engineer with hands-on experience in infrastructure deployments, database troubleshooting, and building internal automation tools. Skilled in deep-dive investigations across BigQuery, MongoDB, and MySQL, with a background in SQL IT Support and web development.",
};

export interface Job {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    company: "Flexicon Solution Inc.",
    role: "L2 Application Support",
    location: "Makati City, PH",
    period: "June 2025 – Present",
    bullets: [
      "Manages L2 infrastructure deployments and system health using ArgoCD and K8s within Google Cloud Platform (GCP), performing deep-dive investigations in BigQuery, MongoDB, and MySQL to resolve critical issues.",
      "Architects custom internal systems and automation tools using JavaScript, Puppeteer, and OpenAI APIs to streamline L1 Support workflows, while utilizing Postman for API testing and managing complex documentation via Jira and Confluence.",
      "Engineers proactive monitoring and alerting frameworks by developing Telegram bots that aggregate data from Grafana, Google Error Reporting, and CronJobs, ensuring rapid incident identification and resolution.",
    ],
  },
  {
    company: "Conduent Philippines",
    role: "SQL IT Support",
    location: "Pasay City, PH",
    period: "December 2022 – June 2025",
    bullets: [
      "Executed advanced database troubleshooting and query optimization across Microsoft SQL Server (SSMS) and Azure SQL to pinpoint technical errors and resolve complex data retrieval issues.",
      "Managed the full incident lifecycle within ServiceNow (SNow), leveraging Azure Monitoring, Postman for mobile API testing, and LINQPad to proactively identify bottlenecks and ensure seamless data processing.",
      "Administered critical document imaging and retrieval systems for a global shipping enterprise, utilizing VMware and remote access protocols to maintain 24/7 system availability and operational efficiency.",
    ],
  },
  {
    company: "SMESoft Inc.",
    role: "Web Developer Intern",
    location: "Makati City, PH",
    period: "August 2021 – September 2021",
    bullets: [
      "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and PHP, ensuring cross-browser compatibility and optimized user experiences.",
      "Implemented custom WordPress solutions and managed content delivery, translating project requirements into functional web features for internal stakeholders.",
    ],
  },
];

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export const skills: Skill[] = [
  // Databases
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Databases" },
  { name: "BigQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Databases" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Databases" },
  { name: "MS SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", category: "Databases" },
  { name: "Azure SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Databases" },
  { name: "MS Access", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", category: "Databases" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", category: "Databases" },

  // Development & Automation
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Development & Automation" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Development & Automation" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", category: "Development & Automation" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Development & Automation" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Development & Automation" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "Development & Automation" },
  { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg", category: "Development & Automation" },
  { name: "OpenAI API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openal/openal-original.svg", category: "Development & Automation" },
  { name: "LINQPad", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", category: "Development & Automation" },
  { name: "Vue", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", category: "Development & Automation" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Development & Automation" },

  // Testing & Monitoring
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", category: "Testing & Monitoring" },
  { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", category: "Testing & Monitoring" },
  { name: "Google Error Reporting", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg", category: "Testing & Monitoring" },
  { name: "Telegram Bot API", icon: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", category: "Testing & Monitoring" },
  { name: "Azure Monitoring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Testing & Monitoring" },

  // Cloud & Infrastructure
  { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", category: "Cloud & Infrastructure" },
  { name: "Google Kurbenetes Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Cloud & Infrastructure" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "Cloud & Infrastructure" },
  { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud & Infrastructure" },
  { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg", category: "Cloud & Infrastructure" },
  { name: "k8s", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Cloud & Infrastructure" },
  { name: "VMware", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vsphere/vsphere-original.svg", category: "Cloud & Infrastructure" },

  // Professional Tools
  { name: "ServiceNow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-original.svg", category: "Professional Tools" },
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", category: "Professional Tools" },
  { name: "Confluence", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg", category: "Professional Tools" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "Professional Tools" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Professional Tools" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "Professional Tools" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", category: "Professional Tools" },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Commissioned Website Redesign for POEA",
    description: "Commissioned by the POEA to lead an official website redesign, I resolved critical accessibility and usability gaps at poea.gov.ph. I overhauled the site's information architecture to organize scattered content and integrated clear call-to-action buttons for improved user engagement. To ensure inclusivity, I standardized typography for better readability and conducted a thorough data audit to update contact information, providing a reliable and professional digital interface for all stakeholders.",
    link: "https://drive.google.com/file/d/1kiXjlJqfkjC88kJOVu_lR6HWjQoPRgPS/view?usp=sharing",
  },
  {
    title: ".SHP (Custom Programming Language)",
    description: "A lexical analyzer for SHP, a custom programming language developed as a university project. It reads a .SHP source file and scans each token, classifying them into categories such as identifiers, keywords, operators, delimiters, and numeric values. The output is a generated symbol table that maps every recognized token — forming the foundational first phase of a compiler or interpreter.",
    link: "#",
  },
  {
    title: "BaybaySalin",
    description: "BaybaySalin is a multi-dialect Baybayin image-to-text converter that recognizes and translates handwritten Baybayin characters from three Philippine scripts — Tagalog, Tagbanwa, and Hanunuo — into their equivalent Filipino text. Built using SURF for feature detection and a Convolutional Neural Network for classification, the system achieved an overall dialect recognition accuracy of 80.86%, trained on over 263,000 image datasets.",
    link: "#",
  },
  {
    title: "Project Gamma",
    description: "A data pipeline tool that extracts, transforms, and loads records from legacy databases into modern cloud-based storage solutions.",
    link: "#",
  },
  {
    title: "Project Delta",
    description: "A data pipeline tool that extracts, transforms, and loads records from legacy databases into modern cloud-based storage solutions.",
    link: "#",
  },
  {
    title: "Project Delta",
    description: "A data pipeline tool that extracts, transforms, and loads records from legacy databases into modern cloud-based storage solutions.",
    link: "#",
  },
];

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string[];
  logo: string;
}

export const education: Education[] = [
  {
    degree: "BS Computer Science (Major in Database Administration)",
    school: "Polytechnic University of the Philippines",
    location: "Manila City, PH",
    period: "2018 – 2022",
    details: ["Cumulative GPA: 1.63 / 1.00", "Final Year GPA: 1.29"],
    logo: pupLogo,
  },
  {
    degree: "Senior High School (Science, Technology, Engineering, Mathematics)",
    school: "University of the East",
    location: "Caloocan City, PH",
    period: "2016 – 2018",
    details: [],
    logo: ueLogo,
  },
  {
    degree: "Junior High School",
    school: "University of the East",
    location: "Caloocan City, PH",
    period: "2015",
    details: [],
    logo: ueLogo,
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export const certificates: Certificate[] = [
  { title: "OpenAI API Coding with JavaScript", issuer: "Codecademy", date: "July 2025", link: "https://drive.google.com/file/d/1vayneB1-XJ5_dyqF9_0q76t60--2mShH/view?usp=sharing" },
  { title: "Create a Back-End App with JavaScript Skill Path", issuer: "Codecademy", date: "May 2025", link: "https://drive.google.com/file/d/1-egUMJpIQDwjDPHbQYMtp91NgZdebYV6/view?usp=sharing" },
  { title: "Defending Node Applications from SQL Injection, XSS, & CSRF", issuer: "Codecademy", date: "July 2025", link: "" },
  { title: "How to Analyze Business Metrics with SQL Course", issuer: "Codecademy", date: "July 2025", link: "https://drive.google.com/file/d/1cjUxxva1rtfTZGzlMwoa700TB2dAhVB9/view?usp=sharing" }, 
  { title: "Intro to Cloud Computing Course", issuer: "Codecademy", date: "July 2025", link: "https://drive.google.com/file/d/1RFwNufMim_ME_N1KQkIiaZhpKTq7QphE/view?usp=sharing" }, 
  { title: "Google Associate Cloud Engineer: Configuring Google Cloud, Managing Cloud Storage", issuer: "Codecademy", date: "July 2025", link: "https://drive.google.com/file/d/1_hvb5t5HDZ1rbzQZWfq4yqPOEYFo2_Lz/view?usp=sharing" },
  { title: "Visual Studio Code Ultimate Course", issuer: "Udemy", date: "August 2024", link: "https://drive.google.com/file/d/1SzK45zx4_MAyNUWLT-4mF707T8XvxN_Z/view?usp=sharing" },
  { title: "Installing and Configuring Computer Systems", issuer: "TESDA", date: "April 2024", link: "https://drive.google.com/file/d/1RtBJNE1H9O8NS5lNcmmRpp1UgC5UR0Mo/view?usp=sharing" },
  { title: "Setting Up Computer Networks", issuer: "TESDA", date: "March 2026", link: "https://drive.google.com/file/d/13CS7LgjqgQTd0hG24UWIX-nYu-crWuKG/view?usp=sharing" },
];
