import { motion } from "framer-motion";
import React from "react";

function App() {
  const skills = [
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Python",
    "PowerShell",
    "Linux",
  ];

  const projects = [
    {
      title: "AWS Enterprise Landing Zone",
      desc: "Designed and deployed a secure multi-account AWS landing zone using AWS Organizations, SCPs, IAM governance, centralized logging, and Terraform modules.",
      tech: "AWS • Terraform • IAM • SCP • VPC • CloudWatch",
    },
    {
      title: "Kubernetes CI/CD Platform",
      desc: "Built automated deployment pipelines using Docker, Kubernetes, Jenkins, and GitHub Actions.",
      tech: "Kubernetes • Jenkins • Docker • GitHub Actions",
    },
    {
      title: "Azure Identity & Security Lab",
      desc: "Implemented Microsoft Entra ID, Conditional Access, Defender XDR, and Purview controls.",
      tech: "Azure • Entra ID • Defender XDR • Purview",
    },
    {
      title: "Windows Server Infrastructure Lab",
      desc: "Built a 3-server enterprise lab with Active Directory, DNS, DHCP, Hyper-V, and PowerShell automation.",
      tech: "Windows Server • AD DS • DHCP • DNS • Hyper-V",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* 1. PROFILE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-24 px-6 border-b border-slate-800"
      >
        <h2 className="text-3xl font-bold mb-6">1. Profile Section</h2>
        <h1 className="text-5xl font-bold mb-4">Temesgen Meri 👋</h1>
        <h2 className="text-3xl text-slate-300 mb-6 font-light">
          Cloud & DevOps Engineer | AWS | Terraform | Kubernetes | CI/CD
        </h2>
        <p className="max-w-3xl mx-auto text-slate-400 text-lg">
          Cloud and DevOps engineer focused on building secure AWS landing zones,
          Kubernetes platforms, CI/CD pipelines, and infrastructure automation.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/tmeri23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold"
          >
            View GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/temesgen-meri/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 rounded-xl"
          >
            Connect on LinkedIn
          </a>

          <a
            href="/Temesgen_Meri_Cloud_DevOps_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-xl font-semibold"
          >
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* 2. SKILLS SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">2. Skills Section</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* 3. WORK SAMPLES SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          3. Work Samples Section
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
            >
              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4">{project.desc}</p>
              <p className="text-slate-500 text-sm">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EDUCATION & ACKNOWLEDGEMENTS */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          4. Education & Acknowledgements Section
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <ul className="space-y-3 text-slate-300">
            <li>George Brown College – Cloud Computing Program</li>
            <li>Microsoft Defender XDR Fundamentals</li>
            <li>Microsoft Purview Compliance</li>
            <li>AWS Bedrock Labs</li>
            <li>Cloud Infrastructure Projects</li>
          </ul>
        </div>
      </section>

      {/* 5. OVERALL IMPRESSION */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          5. Overall Impression
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <p className="text-slate-300">
            This digital portfolio is designed with a professional,
            modern layout, clear section structure, responsive design,
            and recruiter-ready project presentation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;