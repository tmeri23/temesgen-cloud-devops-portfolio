import { motion } from "framer-motion";

export default function Portfolio() {
  const skills = {
    "Cloud Platforms": ["AWS", "Microsoft Azure", "Google Cloud Platform (GCP)"],
    "DevOps & Automation": ["Jenkins", "GitHub Actions", "Terraform", "CI/CD Pipelines", "Ansible"],
    "Containers & Orchestration": ["Docker", "Kubernetes", "Helm"],
    "Scripting & Programming": ["Python", "Bash", "PowerShell", "YAML"],
    "Systems & Networking": ["Windows Server", "Linux", "DNS", "DHCP", "VPN", "Load Balancing"],
    "Security & Governance": ["Microsoft Defender", "Microsoft Purview", "IAM", "Cloud Security"]
  };

  const projects = [
    {
      title: "Cloud DevOps Portfolio Website",
      desc: "Designed and deployed a fully responsive professional portfolio website using React, Vite, GitHub, and Vercel.",
      icon: <span>💻</span>
    },
    {
      title: "AWS Landing Zone Lab Project",
      desc: "Built a secure multi-account AWS landing zone environment with governance controls and centralized logging.",
      icon: <span>☁️</span>
    },
    {
      title: "Windows Server Infrastructure Lab",
      desc: "Configured AD DS, DNS, DHCP, Hyper-V, WSUS, and WDS services using PowerShell.",
      icon: <span>🖥️</span>
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-lg flex items-center gap-2">
            <span>✨</span>
            <span>Temesgen Portfolio</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#profile" className="hover:text-blue-400">Profile</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#education" className="hover:text-blue-400">Education</a>
          </div>
        </div>
      </nav>

      <section id="profile" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-5xl font-bold">Temesgen Meri</h1>
          <p className="text-2xl text-blue-400 mt-3">Cloud Computing Student | Future Cloud &amp; DevOps Engineer</p>
          <p className="mt-6 text-slate-300 leading-8 max-w-3xl text-lg">
            Motivated Cloud Computing student at George Brown College with a strong focus on cloud infrastructure,
            DevOps automation, and enterprise IT operations. This portfolio highlights academic preparation,
            technical skills, hands-on projects, and professional development aligned with cloud computing and
            modern DevOps practices.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-xl">
              <a href="/Temesgen_Meri_Resume.pdf" target="_blank" rel="noopener noreferrer">
  </a>
              Download Resume
            </button>
          </div>
          <div className="mt-8 flex gap-6 text-slate-300">
            <span className="text-xl">GitHub</span>
            <span className="text-xl">LinkedIn</span>
            <span className="text-xl">Email</span>
          </div>
        </motion.div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Technical Skills &amp; Resume Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.02 }}
              className="bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-800"
            >
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="px-3 py-1 rounded-full bg-slate-800 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Work Samples &amp; GitHub Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl"
            >
              <div className="mb-4 text-blue-400 text-2xl">{project.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-300">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Education, Certifications &amp; Acknowledgements</h2>
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-blue-400 text-xl">🏆</span>
            <h3 className="text-xl font-semibold">George Brown College</h3>
          </div>
          <p className="text-slate-300">Cloud Computing Program | Expected Graduation: 2027</p>
          <p className="text-slate-300 mt-4">
            Certifications include Microsoft Purview, Microsoft Defender XDR, Microsoft Learn badges, and cloud infrastructure labs.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <h2 className="text-2xl font-bold mb-4">Contact &amp; Navigation</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#profile" className="hover:text-blue-400">Profile</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Work Samples</a>
            <a href="#education" className="hover:text-blue-400">Education</a>
          </div>
          <p className="text-slate-400 mt-6">
            Designed and developed by Temesgen Meri | Cloud Computing Digital Portfolio | Prepared for academic assessment and Cloud / DevOps career opportunities
          </p>
        </div>
      </footer>
    </div>
  );
}
