import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">Cloud • DevOps • Platform Engineering</p>
          <h1>Temesgen Meri</h1>
          <h2>Building secure cloud infrastructure & CI/CD automation</h2>
          <p className="hero-description">
            Cloud and DevOps engineer focused on AWS, Azure, GCP, Terraform,
            Kubernetes, Docker, and GitHub Actions deployment pipelines.
          </p>

          <div className="hero-buttons">
            <a
              href="https://github.com/tmeri23"
              target="_blank"
              rel="noreferrer"
              className="btn primary"
            >
              View GitHub
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <div className="card">
            <h3>GitHub Actions CI/CD Pipeline</h3>
            <p>
              Automated enterprise pipeline with lint, test, build, and deploy
              stages using GitHub Actions and GitHub Pages.
            </p>
          </div>

          <div className="card">
            <h3>AWS Landing Zone</h3>
            <p>
              Secure multi-account AWS architecture with Organizations, SCPs,
              Transit Gateway, centralized logging, and Terraform modules.
            </p>
          </div>

          <div className="card">
            <h3>Kubernetes DevOps Lab</h3>
            <p>
              Dockerized applications deployed to Kubernetes clusters with CI/CD
              automation and monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h2>Core Technologies</h2>
        <div className="skill-badges">
          <span>AWS</span>
          <span>Azure</span>
          <span>GCP</span>
          <span>Terraform</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>GitHub Actions</span>
          <span>Python</span>
          <span>Linux</span>
        </div>
      </section>
    </div>
  );
}