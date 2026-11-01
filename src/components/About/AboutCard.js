
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Kiran</span>,
            an <span className="purple">IIT Jodhpur</span> Computer Science graduate
            and Software Development Engineer.
            <br /><br />

            I enjoy building reliable, scalable backend systems
            and solving complex engineering problems. My work
            revolves around backend development, API design,
            system architecture, and distributed systems.
            <br /><br />

            Beyond traditional software engineering, I'm passionate
            about <span className="purple">Applied AI</span> and
            building intelligent applications using LLMs, RAG
            pipelines, and AI-powered workflows.
            <br /><br />

            I love breaking down complex problems, understanding
            how things work under the hood, and turning ideas
            into practical solutions.
            <br /><br />

            Areas of Interest:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Backend Engineering & Distributed Systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Applied AI & LLM Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> System Design & Scalable Architecture
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & Algorithmic Thinking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I believe the best way to understand technology is to
            build with it, push its limits, and learn from what
            breaks along the way."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
