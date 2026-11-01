import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import api_rate from "../../Assets/Projects/api_rate.png";
import swarm from "../../Assets/Projects/swarm.png";
import smartscribe from "../../Assets/Projects/smartscribe.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of systems I've built across backend engineering,
          distributed applications, and applied AI.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swarm}
              isBlog={false}
              title="ConsensusWorks"
              description="Designed a collaborative decision platform that turns group preferences into a ranked consensus using the Bradley–Terry model and adaptive multi-round questions. Supports 20 options per question; pilot testing showed a 25% improvement in consensus scores over individual pre-session preferences. Built modular Spring Boot and FastAPI services with Redis caching and WebSocket updates."
              ghLink="https://github.com/Kiran-velan/ConsensusWorks-Collective_Decision_Making_Platform"
              demoLink="https://consensusworks-production.up.railway.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartscribe}
              isBlog={false}
              title="SmartScribe"
              description="Addressed the difficulty of finding precise information in long recordings by building a searchable audio/video knowledge system. Combined Whisper transcription, Hugging Face semantic retrieval, and Mistral via Ollama for contextual Q&A; evaluation across 100 questions from 15 videos showed 30% better response relevance, 70–90% answer accuracy, and under 15-second latency on CPU-only infrastructure."
              ghLink="https://github.com/Kiran-velan/SmartScribe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api_rate}
              isBlog={false}
              title="API Rate Limiter"
              description="Built a configurable Redis-backed gateway to enforce per-user quotas across FREE and PRO plans. Implemented Fixed Window and Token Bucket algorithms behind a pluggable middleware architecture, with authentication and an admin dashboard for traffic analytics and request auditing. Stress tests reached 3,200+ requests/min with under 10 ms latency."
              ghLink="https://github.com/Kiran-velan/API-Rate-Limiter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="FinWise"
              description="Built financial research APIs that combine Yahoo Finance market data, Google News RSS, and technical indicators (RSI, MACD, SMA-20) into a single research workflow. Added Groq-powered analysis and n8n automation to support stock research, portfolio insights, personal finance, and tax guidance."
              ghLink="https://github.com/Kiran-velan/Finwise"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
