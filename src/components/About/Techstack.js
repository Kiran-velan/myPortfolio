
import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  DiPython,
  DiJava,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejs,
  DiGit,
  DiDocker,
  DiMysql,
  DiRedis,
  DiAws,
} from "react-icons/di";

import {
  SiSpringboot,
  SiFastapi,
  SiThymeleaf,
  SiPostgresql,
  SiMongodb,
  SiAppwrite,
  SiHuggingface,
  SiOllama,
  SiOpenai,
  SiLangchain,
  SiGithub,
  SiPostman,
  SiVisualstudiocode,
  SiIntellijidea,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiThymeleaf /></Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFastapi /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>

      {/* AI & LLM */}
      <Col xs={4} md={2} className="tech-icons"><SiOpenai /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHuggingface /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiOllama /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiLangchain /></Col>

      {/* Databases & Storage */}
      <Col xs={4} md={2} className="tech-icons"><DiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiRedis /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAppwrite /></Col>

      {/* Cloud & DevOps */}
      <Col xs={4} md={2} className="tech-icons"><DiAws /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>

      {/* Developer Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiIntellijidea /></Col>

    </Row>
  );
}

export default Techstack;
