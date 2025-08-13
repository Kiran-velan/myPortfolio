import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kiran </span>
            from <span className="purple"> IIT Jodhpur.</span>
            <br />
            I am currently a final year Computer Science student passionate about backend development, API design, and system architecture. 
            <br />
            I enjoy working with Spring Boot and FastAPI, and I have a keen interest in distributed systems and microservices.
            <br />
            
            <br/>
            I love turning complex problems into elegant solutions and that is exactly why i love Data Structures and Algorithms.
            <br />
            Currently Exploring:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cloud Computing
            </li>
            <li className="about-activity">
              <ImPointRight /> Artificial Intelligence
            </li>
            <li className="about-activity">
              <ImPointRight /> Autonomous Systems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I'm driven by curiosity and a love for systems that work reliably at scale. I learn best by building, breaking, and fixing real projects."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
