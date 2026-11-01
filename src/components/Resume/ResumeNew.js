import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ResumeSection({ title, children }) {
  return (
    <section style={{ textAlign: "left", margin: "28px auto", maxWidth: "960px" }}>
      <h2 className="purple" style={{ fontSize: "1.35rem", marginBottom: "14px" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={10} style={{ color: "white", padding: "25px 12px" }}>
            <h1 style={{ fontSize: "2.6em", marginBottom: "8px" }}>
              Kiran <strong className="purple">S</strong>
            </h1>
            <p style={{ marginBottom: "22px" }}>
              Software Development Engineer | Backend Systems | Applied AI
              <br />
              <a href="mailto:kiraniitj26@gmail.com">kiraniitj26@gmail.com</a>
              {" · "}+91 6380733284
              {" · "}
              <a href="https://github.com/Kiran-velan" target="_blank" rel="noreferrer">GitHub</a>
              {" · "}
              <a href="https://www.linkedin.com/in/kiran-cse/" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>

            <ResumeSection title="Professional Summary">
              <p>
                Software Development Engineer and IIT Jodhpur graduate with
                experience building scalable backend systems, cloud-native
                applications, and AI-powered platforms. Skilled in Python,
                distributed systems, AWS, and LLM-based application development.
              </p>
            </ResumeSection>

            <ResumeSection title="Professional Experience">
              <h3 style={{ fontSize: "1.05rem" }}>
                Software Development Engineer – I, LLM <span className="purple">| Qure.ai</span>
              </h3>
              <p style={{ color: "#c5b6d8" }}>Jul 2026 – Oct 2026</p>
              <ul>
                <li>
                  Engineered a shared, multi-tenant notification service adopted
                  by 5 products, handling 200+ notifications daily; developed
                  backend and frontend SDKs, idempotent ingestion, asynchronous
                  delivery using Amazon ElastiCache for Valkey, tenant-level
                  rate limiting, and Slack, SES, FCM, and in-app integrations.
                </li>
                <li>
                  Automated agent configuration promotion across Staging,
                  Preprod, UAT, and Production through release-tag-triggered
                  GitHub Actions workflows and AWS ECS deployments with
                  environment-specific configurations and secrets.
                </li>
                <li>
                  Developed an EFS-backed knowledge retrieval agent delivering
                  source-grounded answers with confidence scores and citations;
                  integrated Glean and Slack MCP for evidence-based query
                  resolution.
                </li>
                <li>
                  Published an internal Python structured-logging library
                  adopted across backend services, standardizing
                  noun.verb.outcome logs with configurable CloudWatch targets
                  and IAM-scoped publishing.
                </li>
              </ul>
            </ResumeSection>

            <ResumeSection title="Selected Projects">
              <h3 style={{ fontSize: "1.05rem" }}>ConsensusWorks — Collective Decision-Making</h3>
              <p>
                Built a real-time group decision platform using Bradley–Terry
                pairwise ranking and adaptive multi-round questioning. Supports
                20 options per question; pilot testing showed 25% better
                consensus scores versus individual pre-session preferences.
                Architected Spring Boot and FastAPI services with Redis and
                WebSocket communication.
              </p>
              <h3 style={{ fontSize: "1.05rem" }}>SmartScribe — Applied AI & Media Retrieval</h3>
              <p>
                Combined Whisper transcription, Hugging Face semantic retrieval,
                and Mistral through Ollama for audio/video Q&A. Evaluation across
                100 questions from 15 videos showed 30% better response
                relevance, 70–90% answer accuracy, and under 15-second latency
                on CPU-only infrastructure.
              </p>
              <h3 style={{ fontSize: "1.05rem" }}>API Rate Limiter — Backend Gateway</h3>
              <p>
                Built a Redis-backed gateway with Fixed Window and Token Bucket
                algorithms, per-user quotas, FREE/PRO plans, authentication,
                and pluggable middleware. Stress tests reached 3,200+ requests
                per minute at under 10 ms latency.
              </p>
              <h3 style={{ fontSize: "1.05rem" }}>FinWise — AI Financial Research</h3>
              <p>
                Developed FastAPI research APIs combining Yahoo Finance data,
                RSI/MACD/SMA-20 indicators, Groq-powered analysis, Google News
                RSS, and n8n automation for market intelligence and financial
                insights.
              </p>
            </ResumeSection>

            <ResumeSection title="Technical Skills">
              <p><strong>Languages:</strong> Python, Java, JavaScript, SQL</p>
              <p><strong>Backend & Frontend:</strong> FastAPI, Spring Boot, React, REST APIs, WebSockets, HTML5, CSS3</p>
              <p><strong>Data:</strong> PostgreSQL, MySQL, Redis, SQLite, Alembic</p>
              <p><strong>Cloud & DevOps:</strong> AWS (ECS, EFS, SES, ElastiCache, CloudWatch), Docker, GitHub Actions, CI/CD, Dokploy</p>
              <p><strong>AI & LLM Engineering:</strong> LLM Integration, RAG, AI Agents, MCP, AG-UI, Hugging Face, Ollama</p>
              <p><strong>Developer Tools:</strong> Git, GitHub, Postman, DBeaver, IntelliJ IDEA, VS Code, n8n</p>
            </ResumeSection>

            <ResumeSection title="Education">
              <h3 style={{ fontSize: "1.05rem" }}>Indian Institute of Technology, Jodhpur</h3>
              <p>B.Tech, Computer Science and Engineering | 2022–2026 | GPA: 8.25/10.00</p>
            </ResumeSection>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
