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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swarm}
              isBlog={false}
              title="ASI based Decision Making platform"
              description="I created a platform where a group of people can come together online to make decisions collectively. Everyone uses sliders to share their opinions, and the system processes those inputs using a smart algorithm to find the most agreed-upon option. It shows this agreement as a puck moving inside a circle in real time. The platform also has chat, timed questions, and generates a report at the end — all aimed at simulating swarm-like decision-making, like how bees or birds decide together."
              ghLink="https://github.com/Kiran-velan/Artificial-Swarm-Intelligence-Platform"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smartscribe}
              isBlog={false}
              title="SmartScribe"
              description="SmartScribe is an AI-powered web app that lets users upload or link videos, transcribes them using Whisper, and enables interactive Q&A through a chat interface using local LLMs like Mistral. It’s like ChatGPT, but for understanding and learning from videos. I built it using FastAPI for the backend, React for the frontend, and Appwrite for auth and database. It supports YouTube links, audio/video uploads, and uses a RAG pipeline with Hugging Face embeddings to generate context-aware answers."
              ghLink="https://github.com/Kiran-velan/SmartScribe"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api_rate}
              isBlog={false}
              title="API Rate Limiter"
              description="I built a scalable API Rate Limiting Gateway using Spring Boot and Redis to control API abuse and manage fair usage. It supports both Fixed Window and Token Bucket algorithms, with Redis for fast request tracking. I also created a real-time Admin Dashboard to visualize usage metrics. The system is modular, logged, and designed to easily plug in new strategies or auth features in the future."
              ghLink="https://github.com/Kiran-velan/API-Rate-Limiter"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
