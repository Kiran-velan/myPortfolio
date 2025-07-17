import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiGit,
  DiHtml5,
  DiCss3,
  DiDocker,
  DiMysql,
} from "react-icons/di";
import {
  SiSpringboot,
  SiThymeleaf,
  SiFastapi,
  SiVisualstudiocode,
  SiPostman,
  SiAppwrite,
  SiRedis,
  SiIntellijidea,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiThymeleaf /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFastapi /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiIntellijidea /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiRedis /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAppwrite /></Col>
    </Row>
  );
}

export default Techstack;