import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ENGINEERING <span className="purple">THAT SCALES</span>
            </h1>
            <p className="home-about-body">
              I build software across <b className="purple">backend engineering</b>,
              <b className="purple"> cloud infrastructure</b>, and
              <b className="purple"> applied AI</b> — from reliable APIs and
              event-driven services to LLM-powered knowledge workflows.
              <br /><br />
              At <b className="purple">Qure.ai</b>, I worked on shared
              multi-tenant notification infrastructure, agent release
              automation, evidence-grounded knowledge retrieval, and reusable
              observability tooling.
              <br /><br />
              My independent projects explore different engineering problems:
              collaborative consensus with ranking models, rate limiting with
              Redis, retrieval-based understanding of audio/video, and
              AI-assisted financial research.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Developer illustration" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>LET'S CONNECT</h1>
            <p>
              Find my work on <span className="purple">GitHub</span> or connect
              with me on <span className="purple">LinkedIn</span>.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Kiran-velan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub profile"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kiran-cse/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
