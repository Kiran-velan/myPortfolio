import React from "react";
import { Col, Row } from "react-bootstrap";

function SkillGroup({ title, skills }) {
  return (
    <Col md={6} className="mb-4">
      <h3 className="purple">{title}</h3>
      <p style={{ color: "white", lineHeight: "1.9", marginBottom: 0 }}>
        {skills}
      </p>
    </Col>
  );
}

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", padding: "10px 0 50px" }}>
      <SkillGroup title="Languages" skills="Python · Java · JavaScript · SQL" />
      <SkillGroup
        title="Backend & APIs"
        skills="FastAPI · Spring Boot · REST APIs · WebSockets · React"
      />
      <SkillGroup
        title="Data & Messaging"
        skills="PostgreSQL · MySQL · Redis · SQLite · Alembic"
      />
      <SkillGroup
        title="Cloud & Delivery"
        skills="AWS (ECS, EFS, SES, ElastiCache, CloudWatch) · Docker · GitHub Actions · CI/CD · Dokploy"
      />
      <SkillGroup
        title="Applied AI"
        skills="LLM Integration · RAG · AI Agents · MCP · AG-UI · Hugging Face · Ollama"
      />
      <SkillGroup
        title="Developer Tools"
        skills="Git · GitHub · Postman · DBeaver · IntelliJ IDEA · VS Code · n8n"
      />
    </Row>
  );
}

export default Techstack;
