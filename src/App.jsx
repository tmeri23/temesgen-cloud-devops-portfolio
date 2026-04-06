import { motion } from "framer-motion";
import React from "react";
import profilePic from "./assets/profile.jpg";

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
    "Prometheus",
    "Grafana",
  ];

  const projects = [
    {
      title: "AWS Enterprise Landing Zone",
      desc: "Designed and deployed a secure multi-account AWS landing zone using AWS Organizations, SCPs, IAM governance, centralized CloudWatch logging, VPC networking, and reusable Terraform modules.",
      tech: "AWS • Terraform • IAM • SCP • VPC • CloudWatch",
    },
    {
      title: "Kubernetes CI/CD Platform",
      desc: "Built automated deployment pipelines using Docker, Kubernetes, Jenkins, and GitHub Actions to enable zero-downtime releases.",
      tech: "Kubernetes • Jenkins • Docker • GitHub Actions",
    },
    {
      title: "Azure Identity & Security Lab",
      desc: "Implemented Microsoft Entra ID, Conditional Access, Defender XDR, and Purview compliance controls.",
      tech: "Azure • Entra ID • Defender XDR • Purview",
    },
    {
      title: "Windows Server Infrastructure Lab",
      desc: "Built enterprise lab environment with AD DS, DNS, DHCP, Hyper-V Replica, WDS, and Group Policy automation.",
      tech: "Windows Server • AD DS • DNS • DHCP",
    },
  ];

  const whyHireMe = [
    {
      title: "☁️ Cloud Expertise",
      text: "Hands-on projects across AWS, Azure, and GCP including landing zones, IAM governance, Terraform, Kubernetes, and cloud security.",
    },
    {
      title: "⚙️ DevOps Automation",
      text: "Experience building CI/CD pipelines, infrastructure automation, and deployment workflows.",
    },
    {
      title: "🚀 Growth Mindset",
      text: "Continuously learning enterprise cloud technologies and applying them through real-world projects.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-24 px-6 border-b border-slate-800"
      >
        <img
          src={profilePic}
          alt="Temesgen Meri"
          className="w-40 h-40 rounded-full object-cover shadow-lg mx-auto mb-6 border-4 border-white"
        />

        <h1 className="text-5xl font-bold mb-4">Temesgen Meri 👋</h1>

        <h2 className="text-3xl text-slate-300 mb-6 font-light">
          Cloud & DevOps Engineer | AWS | Terraform | Kubernetes | CI/CD
        </h2>

        <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-8">
          Aspiring Cloud and DevOps Engineer with hands-on experience in AWS,
          Azure, GCP, Terraform, Docker, Kubernetes, and CI/CD automation.
          Currently building production-ready cloud solutions focused on
          scalability, security, and infrastructure automation.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/tmeri23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/temesgen-meri/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition"
          >
            LinkedIn
          </a>

          <a
            href="/Temesgen_Meri_Cloud_DevOps_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-xl font-semibold hover:scale-105 transition"
          >
            Resume
          </a>
        </div>
      </motion.section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Featured Enterprise Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.03, y: -6 }}
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

      {/* Skills */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <motion.span
              key={skill}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Education & Certifications
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <ul className="space-y-4 text-slate-300">

            <li>
              <a
                href="https://www.georgebrown.ca/programs/cloud-computing-technologies-program-postgraduate-t465"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 hover:underline transition"
              >
                George Brown College — Cloud Computing Program
              </a>
            </li>

            <li>
              <a
                href="https://besa.techcreator.io/badges?__clerk_synced=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 hover:underline transition"
              >
                AWS Bedrock Agents Learning Labs
              </a>
            </li>

            <li>
              <a
                href="https://learn.microsoft.com/en-us/training/modules/describe-threat-protection-with-microsoft-365-defender/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 hover:underline transition"
              >
                Microsoft Defender XDR Fundamentals
              </a>
            </li>

            <li>
              <a
                href="https://learn.microsoft.com/en-us/training/modules/describe-purview-risk-compliance-governance/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 hover:underline transition"
              >
                Microsoft Purview Compliance
              </a>
            </li>

            <li>
              <span className="text-slate-400">
                Kubernetes / Terraform Learning Path
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Why Hire Me</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whyHireMe.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.03, y: -6 }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800"
            >
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-slate-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>

        <p className="text-slate-400 mb-6">
          Open to Cloud Engineer, DevOps Engineer, and Infrastructure roles
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:temesgen.meri@example.com"
            className="px-6 py-3 border border-slate-600 rounded-xl"
          >
            Email Me
          </a>

          <a
            href="https://github.com/tmeri23"
            target="_blank"
            className="px-6 py-3 border border-slate-600 rounded-xl"
          >
            GitHub
          </a>
        </div>

        <p className="text-slate-600 mt-8 text-sm">
          © 2026 Temesgen Meri | Cloud & DevOps Portfolio
        </p>
      </footer>
    </div>
  );
}

export default App;