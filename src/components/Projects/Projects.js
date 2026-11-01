import React from "react";
import { Container } from "react-bootstrap";
import { FiTerminal } from "react-icons/fi";

import ProjectCard from "./ProjectCards";
import "./Projects.css";

import api_rate from "../../Assets/Projects/api_rate.png";
import swarm from "../../Assets/Projects/swarm.png";
import smartscribe from "../../Assets/Projects/smartscribe.png";
import finwise from "../../Assets/Projects/finwise.png";

const projects = [
  {
    title: "ConsensusWorks",
    image: swarm,
    problem:
      "Simple voting can miss how strongly people feel about different options. When preferences differ, reaching a decision that reflects the group's overall opinion becomes difficult.",
    solution:
      "Built a collaborative decision-making platform that uses the Bradley–Terry pairwise-ranking model to compare preferences across multiple rounds and help groups reach more informed decisions.",
    engineering:
      "Implemented timed voting rounds, real-time updates, collaborative chat, and report generation. Used Spring Boot for core application logic, WebSockets for live communication, Redis for application operations, and a separate Python decision-intelligence service.",
    technologies:
      "Java 21 · Spring Boot · Python · WebSockets · Redis · MySQL",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Kiran-velan/ConsensusWorks-Collective_Decision_Making_Platform",
      },
      {
        label: "Live Demo",
        url: "https://consensusworks-production.up.railway.app/",
      },
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
      "Finding a specific piece of information in a lengthy recording often means reviewing the audio or video again. A transcript alone does not make that information easy to retrieve.",
    solution:
      "Built a media understanding platform that turns audio, video, and YouTube content into searchable knowledge, allowing users to ask questions and retrieve relevant information from their recordings.",
    engineering:
      "Developed the pipeline for transcription, embedding generation, retrieval, and context-aware answer generation using Whisper, Hugging Face models, and RAG. Built the backend with FastAPI and the interface with React, with Appwrite supporting application services.",
    technologies:
      "Python · FastAPI · Whisper · Hugging Face · RAG · Ollama · React · Appwrite",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Kiran-velan/SmartScribe",
      },
      {
        label: "Screenshots",
        url: "https://drive.google.com/drive/folders/1MSwavedTS-Gg4YRsN_bDX2OAhc3P_JZE?usp=sharing",
      },
    ],
  },
  {
    title: "API Rate Limiter",
    image: api_rate,
    problem:
      "Uncontrolled requests from a single client can consume shared resources and affect service availability. Different subscription plans also need different request limits.",
    solution:
      "Built a subscription-based API rate limiter that enforces configurable request limits and helps protect backend services from excessive traffic.",
    engineering:
      "Implemented Fixed Window and Token Bucket algorithms with Redis-backed request tracking. Added configurable subscription plans and a live analytics dashboard to monitor API usage.",
    technologies:
      "Java · Spring Boot · Redis · Fixed Window · Token Bucket",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Kiran-velan/API-Rate-Limiter",
      },
      {
        label: "Screenshots",
        url: "https://drive.google.com/drive/folders/1cc72ql3iVOV2AsKf_7V--314FwQYaEel?usp=sharing",
      },
    ],
  },
  {
    title: "FinWise",
    image: finwise,
    problem:
      "Researching a stock often involves switching between price data, market news, and technical indicators. Bringing these pieces together makes financial research time-consuming.",
    solution:
      "Built an AI-assisted financial research platform that brings market data, news, technical analysis, and AI-generated insights into one application.",
    engineering:
      "Integrated Yahoo Finance data and Google News RSS, calculated indicators including RSI, MACD, and SMA-20, and connected Groq for AI-powered analysis. Used FastAPI for backend services and n8n for workflow automation.",
    technologies:
      "Python · FastAPI · Groq · Yahoo Finance · Technical Indicators · n8n",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Kiran-velan/Finwise",
      },
      {
        label: "Project Preview",
        url: "https://drive.google.com/file/d/1t0s4hEltB1k3jScX3NpCtqgdV2NFJ-HK/view?usp=sharing",
      },
    ],
  },
  {
    title: "CLI Coding Support Agent",
    coverClass: "project-cover-cli",
    coverIcon: <FiTerminal />,
    problem:
      "Working with project files from the terminal often involves repetitive tasks such as reading, creating, and modifying files. Switching between tools for these operations can interrupt a developer's workflow.",
    solution:
      "Built a terminal-based AI coding assistant that can interact with project files and help developers perform common coding tasks through natural-language instructions.",
    engineering:
      "Implemented an iterative tool-calling workflow using Python, LiteLLM, and Gemini. Added filesystem operations for reading, creating, editing, and writing files, with shell command execution requiring explicit user approval.",
    technologies:
      "Python · LiteLLM · Gemini · Tool Calling · Filesystem Operations · CLI",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/Kiran-velan/my-cli-coding-support-agent",
      },
      {
        label: "Screenshots",
        url: "https://drive.google.com/drive/folders/1_yRue2DimYMM05OSgHNcBWTCShJ2F4ew?usp=sharing",
      },
    ],
  },
];

function Projects() {
  return (
    <section className="projects-section">
      <Container>
        <div className="projects-header">
          <h1>Projects</h1>
          <p>
            A collection of things I've built, problems I've worked on, and
            engineering ideas I've explored.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;