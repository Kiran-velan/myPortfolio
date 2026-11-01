import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I'm a Computer Science graduate from
            <span className="purple"> IIT Jodhpur (2026)</span> and a Software
            Development Engineer with experience building backend services,
            cloud-native workflows, and AI-enabled applications.
            <br /><br />
            At <span className="purple">Qure.ai</span>, I contributed to
            multi-tenant notification infrastructure used by five products,
            automated agent configuration releases across AWS environments,
            built source-grounded knowledge retrieval workflows, and published
            a reusable Python logging library for backend teams.
            <br /><br />
            I enjoy taking ambiguous engineering problems from system design
            through implementation — especially where
            <span className="purple"> reliability, scale, and useful AI</span>
            intersect.
          </p>
          <p>Areas I work across:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Backend systems, APIs, and distributed workflows
            </li>
            <li className="about-activity">
              <ImPointRight /> Cloud infrastructure, deployment, and observability
            </li>
            <li className="about-activity">
              <ImPointRight /> Applied AI, LLM applications, and retrieval systems
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
