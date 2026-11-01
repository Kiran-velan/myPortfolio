
import React from "react";
import { Container } from "react-bootstrap";
import {
  FiArrowUpRight,
  FiTrendingUp,
  FiTerminal,
  FiUsers,
  FiActivity,
  FiFileText,
} from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

import Particle from "../Particle";

import api_rate from "../../Assets/Projects/api_rate.png";
import swarm from "../../Assets/Projects/swarm.png";
import smartscribe from "../../Assets/Projects/smartscribe.png";
import finwise from "../../Assets/Projects/finwise.png";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "ConsensusWorks",
    category: "COLLABORATIVE SOFTWARE",
    icon: <FiUsers />,
    featured: true,
    image: swarm,
    description:
      "When people have different opinions, a simple vote doesn't always show where they agree. ConsensusWorks helps groups compare preferences, discuss options and see how decisions evolve over multiple rounds.",
    built:
      "A decision-making platform using the Bradley–Terry ranking model, with timed rounds, live updates, collaborative chat and reports.",
    engineering:
      "Spring Boot, WebSockets, Redis and MySQL power the application, alongside a Python intelligence service.",
    technologies: [
      "Java 21",
      "Spring Boot",
      "Python",
      "WebSockets",
      "Redis",
      "MySQL",
      "Bradley–Terry",
    ],
    github:
      "https://github.com/Kiran-velan/ConsensusWorks-Collective_Decision_Making_Platform",
    demo:
      "https://consensusworks-production.up.railway.app/",
    evidence: [
      {
        label: "Project screenshots",
        url: "https://drive.google.com/drive/folders/12tlIK6qx-LE2EEtF-beuAYBnHJNR-p0QQKWvl7ez9S7121H1Xx6RoZ6xRPxghtiCHZvFUSab?usp=sharing",
      },
      {
        label: "Presentation",
        url: "https://canva.link/wlu4y3xm96dhte2",
      },
    ],
  },
  {
    number: "02",
    title: "SmartScribe",
    category: "APPLIED AI",
    icon: <FiActivity />,
    image: smartscribe,
    description:
      "Finding one important detail in a long recording shouldn't mean listening to everything again. SmartScribe lets users upload audio, video or YouTube content and ask questions about it.",
    built:
      "A media processing pipeline that transcribes recordings, finds relevant passages and uses them to generate context-aware answers.",
    engineering:
      "Whisper, Hugging Face embeddings, retrieval, local LLMs, FastAPI, React and Appwrite.",
    technologies: [
      "Python",
      "FastAPI",
      "Whisper",
      "Hugging Face",
      "RAG",
      "Ollama",
      "React",
      "Appwrite",
    ],
    github: "https://github.com/Kiran-velan/SmartScribe",
    evidence: [
      {
        label: "Screenshots & outputs",
        url: "https://drive.google.com/drive/folders/1MSwavedTS-Gg4YRsN_bDX2OAhc3P_JZE?usp=sharing",
      },
    ],
  },
  {
    number: "03",
    title: "API Rate Limiter",
    category: "BACKEND ENGINEERING",
    icon: <FiActivity />,
    image: api_rate,
    description:
      "One client sending too many requests shouldn't affect everyone else. This project controls how frequently users can access an API through configurable rate limits.",
    built:
      "Implemented Fixed Window and Token Bucket algorithms, Redis-backed request tracking, configurable user plans and a live analytics dashboard.",
    engineering:
      "Java, Spring Boot and Redis.",
    technologies: [
      "Java",
      "Spring Boot",
      "Redis",
      "Fixed Window",
      "Token Bucket",
    ],
    github: "https://github.com/Kiran-velan/API-Rate-Limiter",
    evidence: [
      {
        label: "Screenshots & test results",
        url: "https://drive.google.com/drive/folders/1cc72ql3iVOV2AsKf_7V--314FwQYaEel?usp=sharing",
      },
    ],
  },
  {
    number: "04",
    title: "FinWise",
    category: "AI & FINANCIAL RESEARCH",
    icon: <FiTrendingUp />,
    image: finwise,
    description:
      "Stock research often means jumping between market prices, news and technical indicators. FinWise brings these sources together in one AI-assisted research application.",
    built:
      "Combines market data, financial news, RSI, MACD and SMA-20 indicators with AI-generated analysis.",
    engineering:
      "Yahoo Finance, Google News RSS, Groq, FastAPI and n8n workflows.",
    technologies: [
      "Python",
      "FastAPI",
      "Groq",
      "Yahoo Finance",
      "Technical Indicators",
      "n8n",
    ],
    github: "https://github.com/Kiran-velan/Finwise",
    evidence: [
      {
        label: "Screenshots & results",
        url: "https://drive.google.com/file/d/1t0s4hEltB1k3jScX3NpCtqgdV2NFJ-HK/view?usp=sharing",
      },
    ],
  },
  {
    number: "05",
    title: "CLI Coding Support Agent",
    category: "AI DEVELOPER TOOLS",
    icon: <FiTerminal />,
    cover: true,
    description:
      "An AI coding assistant that can do more than suggest code. It works directly with project files, helping developers inspect and modify their codebase from the terminal.",
    built:
      "Supports reading, creating, editing and writing files through an iterative tool-calling workflow. Shell commands require explicit user approval.",
    engineering:
      "Python, LiteLLM and Gemini.",
    technologies: [
      "Python",
      "LiteLLM",
      "Gemini",
      "Tool Calling",
      "Filesystem Operations",
      "CLI",
    ],
    github:
      "https://github.com/Kiran-velan/my-cli-coding-support-agent",
    evidence: [
      {
        label: "Execution examples",
        url: "https://drive.google.com/drive/folders/1_yRue2DimYMM05OSgHNcBWTCShJ2F4ew?usp=sharing",
      },
    ],
  },
];

function ProjectLinks({ project }) {
  return (
    <div className="work-links">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="work-link work-link-primary"
      >
        <BsGithub />
        Source Code
        <FiArrowUpRight />
      </a>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="work-link work-link-secondary"
        >
          Live Demo
          <FiArrowUpRight />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="work-card">
      <div className="work-card-image">
        {project.cover ? (
          <div className="work-cover">
            <div className="work-cover-icon">
              {project.icon}
            </div>
            <span>BUILT FOR THE TERMINAL</span>
            <strong>AI Coding Agent</strong>
          </div>
        ) : (
          <img src={project.image} alt={`${project.title} preview`} />
        )}

        <span className="work-number">{project.number}</span>
      </div>

      <div className="work-card-content">
        <div className="work-category">
          {project.category}
        </div>

        <h2>{project.title}</h2>

        <p className="work-description">
          {project.description}
        </p>

        <div className="work-detail">
          <span>WHAT I BUILT</span>
          <p>{project.built}</p>
        </div>

        <div className="work-detail work-engineering">
          <span>UNDER THE HOOD</span>
          <p>{project.engineering}</p>
        </div>

        <div className="work-tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        {project.evidence?.length > 0 && (
          <div className="work-evidence">
            {project.evidence.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFileText />
                {item.label}
                <FiArrowUpRight />
              </a>
            ))}
          </div>
        )}

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function Projects() {
  const featured = projects.find((project) => project.featured);
  const remaining = projects.filter((project) => !project.featured);

  return (
    <Container fluid className="project-section work-page">
      <Particle />

      <Container className="work-container">
        <header className="work-hero">
          <span className="work-overline">
            <span className="work-overline-dot" />
            SELECTED WORK
          </span>

          <h1>
            Ideas are easy.
            <br />
            <span>Building them is the interesting part.</span>
          </h1>

          <p>
            A collection of things I've built to solve practical problems.
            From backend systems to AI-powered applications, each project
            represents an idea taken beyond the drawing board.
          </p>

          <div className="work-meta">
            <span>05 PROJECTS</span>
            <span className="work-meta-divider" />
            <span>BACKEND · FULL STACK · APPLIED AI</span>
          </div>
        </header>

        {featured && (
          <section className="featured-section">
            <div className="section-heading">
              <span>01 / FEATURED PROJECT</span>
              <span>TAKE A CLOSER LOOK</span>
            </div>

            <ProjectCard project={featured} />
          </section>
        )}

        <section className="other-projects">
          <div className="section-heading">
            <span>MORE PROJECTS</span>
            <span>BUILT WITH PURPOSE</span>
          </div>

          <div className="work-grid">
            {remaining.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </section>

        <footer className="work-footer">
          <p>
            Good software starts with understanding the problem.
            That's what I try to bring to every project.
          </p>
        </footer>
      </Container>
    </Container>
  );
}

export default Projects;
