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
  ];

  const projects = [
    {
      title: "AWS Enterprise Landing Zone",
      desc: "Designed and deployed a secure multi-account AWS landing zone using AWS Organizations, Service Control Policies (SCPs), IAM governance, centralized CloudWatch logging, VPC networking, and reusable Terraform modules.",
      tech: "AWS • Terraform • IAM • SCP • VPC • CloudWatch",
    },
    {
      title: "Kubernetes CI/CD Platform",
      desc: "Built an automated deployment pipeline using Docker, Kubernetes, Jenkins, and GitHub Actions to streamline application releases, infrastructure validation, and zero-downtime deployments.",
      tech: "Kubernetes • Jenkins • Docker • GitHub Actions • CI/CD",
    },
    {
      title: "Azure Identity & Security Lab",
      desc: "Implemented Microsoft Entra ID, Conditional Access, Defender XDR, and Purview compliance controls to simulate enterprise identity governance and security monitoring.",
      tech: "Azure • Entra ID • Defender XDR • Purview",
    },
    {
      title: "Windows Server Infrastructure Lab",
      desc: "Built a 3-server enterprise lab environment with Active Directory, DNS, DHCP, Hyper-V Replica, WDS, iSCSI storage, and Group Policy automation across multiple virtual machines.",
      tech: "Windows Server • AD DS • DHCP • DNS • Hyper-V • PowerShell",
    },
  ];

  const whyHireMe = [
    {
      title: "☁️ Cloud Expertise",
      text: "Hands-on projects across AWS, Azure, and GCP including landing zones, IAM governance, Terraform, Kubernetes, and cloud security.",
    },
    {
      title: "⚙️ DevOps Automation",
      text: "Experience building CI/CD pipelines, infrastructure automation, deployment workflows, and enterprise lab environments.",
    },
    {
      title: "🚀 Growth Mindset",
      text: "Continuously learning enterprise cloud technologies and applying them through hands-on labs and real-world simulations.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
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

        <p className="max-w-3xl mx-auto text-slate-400 text-lg">
          Cloud and DevOps engineer focused on building secure AWS landing zones,
          Kubernetes platforms, CI/CD pipelines, and infrastructure automation
          using Terraform, Docker, Jenkins, and GitHub Actions.
        </p>

        <p className="mt-6 text-slate-400">
          Open to Cloud, DevOps, and Infrastructure Engineering roles
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/tmeri23"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            View GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/temesgen-meri/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-600 rounded-xl hover:bg-slate-800 transition"
          >
            Connect on LinkedIn
          </a>

          <a
            href="/Temesgen_Meri_Cloud_DevOps_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-xl font-semibold hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Featured Enterprise Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:shadow-2xl transition"
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
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 transition"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <p className="text-slate-300">
            Cloud and DevOps engineer focused on AWS, Azure, GCP, Terraform,
            Kubernetes, Docker, and CI/CD automation.
          </p>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Why Hire Me</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whyHireMe.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05, y: -8 }}
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

      {/* Certifications */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Certifications & Learning
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <ul className="space-y-3 text-slate-300">
            <li>Microsoft Defender XDR Fundamentals</li>
            <li>Microsoft Purview Compliance & Data Governance</li>
            <li>AWS Bedrock Agents Learning Labs</li>
            <li>Cloud Computing Program – George Brown College</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;