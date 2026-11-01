
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiTrendingUp, FiTerminal } from "react-icons/fi";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import api_rate from "../../Assets/Projects/api_rate.png";
import swarm from "../../Assets/Projects/swarm.png";
import smartscribe from "../../Assets/Projects/smartscribe.png";

const projects = [
  {
    title: "ConsensusWorks",
    category: "COLLECTIVE INTELLIGENCE",
    hook: "Can a group converge without simply taking a vote?",
    description:
      "Most polling tools collect individual votes. ConsensusWorks models how preferences evolve across timed rounds, making group convergence visible as participants interact.",
    engineering:
      "A Bradley–Terry ranking engine with a Python intelligence microservice. Spring Boot, WebSockets, Redis and MySQL power live sessions and persistence.",
    techStack: [
      "Java 21",
      "Spring Boot",
      "WebSocket",
      "Python",
      "Bradley–Terry",
      "MySQL",
      "Redis",
      "HTML5",
    ],
    imgPath: swarm,
    ghLink:
      "https://github.com/Kiran-velan/ConsensusWorks-Collective_Decision_Making_Platform",
    demoLink: "https://consensusworks-production.up.railway.app/",
    evidenceLinks: [
      {
        label: "Screenshots & Results",
        url: "https://drive.google.com/drive/folders/12tlIK6qx-LE2EEtF-beuAYBnHJNR-p0QQKWvl7ez9S7121H1Xx6RoZ6xRPxghtiCHZvFUSab?usp=sharing",
        type: "results",
      },
      {
        label: "Project Presentation",
        url: "https://canva.link/wlu4y3xm96dhte2",
        type: "presentation",
      },
    ],
  },
  {
    title: "SmartScribe",
    category: "RAG",
    hook: "Find the answer buried inside hours of media.",
    description:
      "Long recordings are difficult to search. SmartScribe turns audio and video into a conversational knowledge source, allowing users to ask questions against the content.",
    engineering:
      "Whisper transcription feeds a retrieval pipeline using Hugging Face embeddings and local LLMs. FastAPI serves the workflow, with React and Appwrite supporting the application.",
    techStack: [
      "Python",
      "FastAPI",
      "Whisper",
      "Hugging Face",
      "RAG",
      "Appwrite",
      "Ollama",
      "React",
    ],
    imgPath: smartscribe,
    ghLink: "https://github.com/Kiran-velan/SmartScribe",
    evidenceLinks: [
      {
        label: "Screenshots & Outputs",
        url: "https://drive.google.com/drive/folders/1MSwavedTS-Gg4YRsN_bDX2OAhc3P_JZE?usp=sharing",
        type: "results",
      },
    ],
  },
  {
    title: "API Rate Limiter",
    category: "DISTRIBUTED SYSTEMS",
    hook: "How do you enforce fair API usage under load?",
    description:
      "A configurable API gateway applies per-user request policies instead of allowing one client to consume the available capacity.",
    engineering:
      "Fixed Window and Token Bucket strategies with Redis-backed request tracking, configurable user plans and a real-time analytics dashboard.",
    techStack: [
      "Java",
      "Spring Boot",
      "Redis",
      "Fixed Window",
      "Token Bucket",
    ],
    imgPath: api_rate,
    ghLink: "https://github.com/Kiran-velan/API-Rate-Limiter",
    evidenceLinks: [
      {
        label: "Screenshots & Test Results",
        url: "https://drive.google.com/drive/folders/1cc72ql3iVOV2AsKf_7V--314FwQYaEel?usp=sharing",
        type: "results",
      },
    ],
  },
  {
    title: "FinWise",
    category: "FINANCIAL RESEARCH",
    hook: "Turn fragmented market signals into a research workflow.",
    description:
      "Market prices, news, technical indicators and portfolio context are scattered across sources. FinWise brings them into one AI-assisted financial research experience.",
    engineering:
      "Combines Yahoo Finance and Google News RSS with RSI, MACD and SMA-20 indicators, Groq-powered analysis, FastAPI services and n8n workflows.",
    techStack: [
      "Python",
      "FastAPI",
      "Groq",
      "Yahoo Finance",
      "n8n",
    ],
    coverClass: "project-cover-finwise",
    coverIcon: <FiTrendingUp />,
    ghLink: "https://github.com/Kiran-velan/Finwise",
    evidenceLinks: [
      {
        label: "Screenshots & Results",
        url: "https://drive.google.com/file/d/1t0s4hEltB1k3jScX3NpCtqgdV2NFJ-HK/view?usp=sharing",
        type: "results",
      },
    ],
  },
  {
    title: "CLI Coding Support Agent",
    category: "DEVELOPER TOOLS",
    hook: "Give an LLM tools — with guardrails.",
    description:
      "A terminal coding assistant that can inspect and modify a project instead of stopping at generated suggestions.",
    engineering:
      "LiteLLM and Gemini select filesystem tools in an iterative, bounded execution loop. Shell commands require explicit user approval.",
    techStack: [
      "Python",
      "LiteLLM",
      "Gemini",
      "Tool Calling",
      "CLI",
    ],
    coverClass: "project-cover-cli",
    coverIcon: <FiTerminal />,
    ghLink: "https://github.com/Kiran-velan/my-cli-coding-support-agent",
    evidenceLinks: [
      {
        label: "Execution Examples",
        url: "https://drive.google.com/drive/folders/1_yRue2DimYMM05OSgHNcBWTCShJ2F4ew?usp=sharing",
        type: "results",
      },
    ],
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <div className="project-intro">
          <span className="project-overline">
            MY ENGINEERING WORKS
          </span>

          <h1 className="project-heading">
            Building things that <strong className="purple">solve problems.</strong>
          </h1>

          <p className="project-subtitle">
            From backend infrastructure to Full Stack Development to applied AI — a closer look
            at the problems, engineering decisions and systems behind
            my projects.
          </p>
        </div>

        <Row className="project-grid">
          {projects.map((project) => (
            <Col className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
