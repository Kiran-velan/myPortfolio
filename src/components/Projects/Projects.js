
import React from "react";
import { Container } from "react-bootstrap";

import api_rate from "../../Assets/Projects/api_rate.png";
import swarm from "../../Assets/Projects/swarm.png";
import smartscribe from "../../Assets/Projects/smartscribe.png";
import finwise from "../../Assets/Projects/finwise.png";
import cli_agent from "../../Assets/Projects/cli_agent.png";

import "./Projects.css";

const projects = [
  {
    title: "ConsensusWorks",
    image: swarm,
    problem:
      "Simple voting doesn't always capture how strongly people feel about different options or where a group actually agrees. Reaching a decision becomes difficult when preferences differ.",
    solution:
      "Built a collaborative decision-making platform using the Bradley–Terry ranking model, allowing participants to compare preferences and reach decisions across multiple rounds.",
    engineering:
      "Implemented timed rounds, real-time updates, collaborative chat and report generation. Spring Boot handles the backend, WebSockets enable live communication, Redis supports application operations, and a Python service handles decision intelligence.",
    technologies:
      "Java 21, Spring Boot, Python, WebSockets, Redis, MySQL",
    github:
      "https://github.com/Kiran-velan/ConsensusWorks-Collective_Decision_Making_Platform",
    demo:
      "https://consensusworks-production.up.railway.app/",
    evidence: [
      {
        label: "Screenshots",
        url: "https://drive.google.com/drive/folders/12tlIK6qx-LE2EEtF-beuAYBnHJNR-p0QQKWvl7ez9S7121H1Xx6RoZ6xRPxghtiCHZvFUSab?usp=sharing",
      },
      {
        label: "Presentation",
        url: "https://canva.link/wlu4y3xm96dhte2",
      },
    ],
  },
  {
    title: "SmartScribe",
    image: smartscribe,
    problem:
      "Finding a specific piece of information in a lengthy audio or video recording often means going through the entire recording again. Traditional transcription alone doesn't make that information easy to retrieve.",
    solution:
      "Built a media understanding platform that converts audio, video and YouTube content into searchable knowledge, allowing users to ask questions about their recordings.",
    engineering:
      "Developed a media processing pipeline covering transcription, embedding generation, retrieval and context-aware answer generation using Whisper, Hugging Face, RAG and local LLMs. FastAPI handles backend services, with React and Appwrite supporting the application.",
    technologies:
      "Python, FastAPI, Whisper, Hugging Face, RAG, Ollama, React, Appwrite",
    github: "https://github.com/Kiran-velan/SmartScribe",
    evidence: [
      {
        label: "Screenshots & outputs",
        url: "https://drive.google.com/drive/folders/1MSwavedTS-Gg4YRsN_bDX2OAhc3P_JZE?usp=sharing",
      },
    ],
  },
  {
    title: "API Rate Limiter",
    image: api_rate,
    problem:
      "Uncontrolled requests from a single client can consume shared resources and affect the availability of an API for other users. Different subscription plans also require different request limits.",
    solution:
      "Built a subscription-based API rate limiter that controls request traffic using configurable limits for different users.",
    engineering:
      "Implemented Fixed Window and Token Bucket algorithms, Redis-backed request tracking, configurable user plans and a live analytics dashboard using Java and Spring Boot.",
    technologies:
      "Java, Spring Boot, Redis, Fixed Window, Token Bucket",
    github: "https://github.com/Kiran-velan/API-Rate-Limiter",
    evidence: [
      {
        label: "Screenshots & test results",
        url: "https://drive.google.com/drive/folders/1cc72ql3iVOV2AsKf_7V--314FwQYaEel?usp=sharing",
      },
    ],
  },
  {
    title: "FinWise",
    image: finwise,
    problem:
      "Financial research often requires switching between market prices, financial news and technical indicators. Bringing these sources together to understand a stock can be time-consuming.",
    solution:
      "Built an AI-assisted financial research application that combines market data, financial news and technical analysis in one place.",
    engineering:
      "Integrated Yahoo Finance and Google News RSS for market information, calculated RSI, MACD and SMA-20 indicators, and incorporated AI-generated analysis using Groq, FastAPI and n8n workflows.",
    technologies:
      "Python, FastAPI, Groq, Yahoo Finance, Technical Indicators, n8n",
    github: "https://github.com/Kiran-velan/Finwise",
    evidence: [
      {
        label: "Screenshots & results",
        url: "https://drive.google.com/file/d/1t0s4hEltB1k3jScX3NpCtqgdV2NFJ-HK/view?usp=sharing",
      },
    ],
  },
  {
    title: "CLI Coding Support Agent",
    image: cli_agent,
    problem:
      "Developers frequently need to inspect, create and modify multiple project files while working in the terminal. Repeating these operations manually interrupts the development workflow.",
    solution:
      "Built a terminal-based AI coding assistant that can interact with project files and help developers work directly with their codebase.",
    engineering:
      "Implemented file reading, creation, editing and writing through an iterative tool-calling workflow using Python, LiteLLM and Gemini. Shell commands require explicit user approval.",
    technologies:
      "Python, LiteLLM, Gemini, Tool Calling, Filesystem Operations, CLI",
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
  const links = [
    {
      label: "GitHub",
      url: project.github,
    },
    ...(project.demo
      ? [{ label: "Live Demo", url: project.demo }]
      : []),
    ...project.evidence.map((item) => ({
      label: item.label,
      url: item.url,
    })),
  ];

  return (
    <div className="work-links">
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="work-link"
        >
          {link.label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="work-card">
      <div className="work-card-image">
        <img
          src={project.image}
          alt={`${project.title} application screenshot`}
          loading="lazy"
        />
      </div>

      <div className="work-card-content">
        <h2>{project.title}</h2>

        <div className="work-detail">
          <h3>The Problem</h3>
          <p>{project.problem}</p>
        </div>

        <div className="work-detail">
          <h3>My Approach</h3>
          <p>{project.solution}</p>
        </div>

        <div className="work-detail">
          <h3>Engineering</h3>
          <p>{project.engineering}</p>
        </div>

        <div className="work-technologies">
          {project.technologies}
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section work-page">
      <Container className="work-container">
        <header className="work-hero">
          <h1>Projects</h1>
          <p>
            A collection of problems I've worked on and systems I've built.
            Each project reflects my approach to solving practical challenges
            through software engineering.
          </p>
        </header>

        <div className="work-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
