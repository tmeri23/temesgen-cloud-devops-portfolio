import { motion } from "framer-motion";
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

  return (
    <div className="min-h-screen bg-slate-950 text-white">


      {/* About */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="bg-slate-900 rounded-2xl p-8 shadow-lg border border-slate-800">
          <p className="text-slate-300">
            Cloud and DevOps engineer focused on AWS, Azure, GCP,
            Terraform, Kubernetes, Docker, and CI/CD automation.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 hover:bg-slate-700 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Certifications & Learning</h2>
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <ul className="space-y-3 text-slate-300">
            <li>Microsoft Defender XDR Fundamentals</li>
            <li>Microsoft Purview Compliance & Data Governance</li>
            <li>AWS Bedrock Agents Learning Labs</li>
            <li>Cloud Computing Program – George Brown College</li>
          </ul>
        </div>
      </section>
      {/* Flagship Case Study */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Flagship Case Study: AWS Enterprise Landing Zone
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Business Problem</h3>
            <p className="text-slate-400">
              Organizations need secure multi-account cloud environments with
              governance, centralized logging, and network isolation to support
              scalable workloads and compliance requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Solution Architecture</h3>
            <p className="text-slate-400">
              Designed a secure AWS landing zone using AWS Organizations,
              SCPs, IAM governance, VPC segmentation, Transit Gateway,
              centralized CloudWatch logging, and Terraform modules.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Key Technologies</h3>
            <p className="text-slate-400">
              AWS Organizations • SCP • IAM • Terraform • CloudWatch • VPC
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Impact</h3>
            <p className="text-slate-400">
              Improved governance readiness, reduced manual cloud provisioning,
              and established a scalable enterprise foundation for future
              application deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Visual */}
      <section className="max-w-6xl mx-auto py-10 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Solution Architecture
        </h2>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <div className="grid md:grid-cols-5 gap-4 text-center text-slate-300">
            <div className="bg-slate-800 rounded-xl p-6">
              👥
              <p className="mt-2 font-semibold">Users</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              🌐
              <p className="mt-2 font-semibold">Load Balancer</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              ☁️
              <p className="mt-2 font-semibold">VPC</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              ⚙️
              <p className="mt-2 font-semibold">EKS / EC2</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              📊
              <p className="mt-2 font-semibold">CloudWatch</p>
            </div>
          </div>

          <p className="text-center text-slate-500 mt-6">
            Secure multi-account AWS landing zone with centralized monitoring and governance
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-10 px-6">
        <div className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700">
          <p className="text-lg font-semibold">AWS Architecture Flow</p>
          <p className="text-slate-400 mt-4">
            Users → Load Balancer → VPC → EC2 / EKS → CloudWatch → S3 Logs
          </p>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Why Hire Me
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">
              ☁️ Cloud Expertise
            </h3>
            <p className="text-slate-400">
              Hands-on projects across AWS, Azure, and GCP including landing zones,
              IAM governance, Terraform, Kubernetes, and cloud security.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">
              ⚙️ DevOps Automation
            </h3>
            <p className="text-slate-400">
              Experience building CI/CD pipelines, infrastructure automation,
              deployment workflows, and enterprise lab environments.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-4">
              🚀 Growth Mindset
            </h3>
            <p className="text-slate-400">
              Continuously learning enterprise cloud technologies and applying
              them through hands-on labs, projects, and real-world simulations.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      {/* Projects */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Featured Enterprise Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          {/* Project 1 */}
          <motion.div
            whileHover={{ scale: 1.08, y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">
              AWS Enterprise Landing Zone
            </h3>
            <p className="text-slate-400 mb-4">
              Designed and deployed a secure multi-account AWS landing zone
              using AWS Organizations, Service Control Policies (SCPs),
              IAM governance, centralized CloudWatch logging, VPC networking,
              and reusable Terraform modules.
            </p>
            <p className="text-slate-500 text-sm">
              AWS • Terraform • IAM • SCP • VPC • CloudWatch
            </p>
          </motion.div>

          {/* Project 2 */}
          {/* Project 2 */}
          <motion.div
            whileHover={{ scale: 1.08, y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">
              Kubernetes CI/CD Platform
            </h3>
            <p className="text-slate-400 mb-4">
              Built an automated deployment pipeline using Docker,
              Kubernetes, Jenkins, and GitHub Actions to streamline
              application releases, infrastructure validation,
              and zero-downtime deployments.
            </p>
            <p className="text-slate-500 text-sm">
              Kubernetes • Jenkins • Docker • GitHub Actions • CI/CD
            </p>
          </motion.div>

          {/* Project 3 */}
          {/* Project 3 */}
          <motion.div
            whileHover={{ scale: 1.08, y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">
              Azure Identity & Security Lab
            </h3>
            <p className="text-slate-400 mb-4">
              Implemented Microsoft Entra ID, Conditional Access,
              Defender XDR, and Purview compliance controls to simulate
              enterprise identity governance and security monitoring.
            </p>
            <p className="text-slate-500 text-sm">
              Azure • Entra ID • Defender XDR • Purview
            </p>
          </motion.div>
          {/* Project 4 */}
          {/* Project 4 */}
          <motion.div
            whileHover={{ scale: 1.08, y: -10 }}
            whileTap={{ scale: 0.98 }}
            className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">
              Windows Server Infrastructure Lab
            </h3>
            <p className="text-slate-400 mb-4">
              Built a 3-server enterprise lab environment with Active Directory,
              DNS, DHCP, Hyper-V Replica, WDS, iSCSI storage, and Group Policy
              automation across multiple virtual machines.
            </p>
            <p className="text-slate-500 text-sm">
              Windows Server • AD DS • DHCP • DNS • Hyper-V • PowerShell
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;