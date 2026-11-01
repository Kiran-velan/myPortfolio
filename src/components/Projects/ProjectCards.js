
import React from "react";
import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img
          variant="top"
          src={props.imgPath}
          alt={`${props.title} project preview`}
        />
      ) : (
        <div
          className={`project-cover ${props.coverClass || ""}`}
          aria-hidden="true"
        >
          <div className="project-cover-icon">
            {props.coverIcon}
          </div>
          <span className="project-cover-label">
            {props.category}
          </span>
          <span className="project-cover-title">
            {props.title}
          </span>
        </div>
      )}

      <Card.Body>
        <div className="project-category">
          {props.category}
        </div>

        <Card.Title as="h2">
          {props.title}
        </Card.Title>

        <h3 className="project-hook">
          {props.hook}
        </h3>

        <p className="project-description">
          {props.description}
        </p>

        <div className="project-engineering">
          <span className="engineering-label">
            ENGINEERING
          </span>
          <p>{props.engineering}</p>
        </div>

        <div className="project-tech-stack">
          {(props.techStack || []).map((tech) => (
            <span className="project-tech-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        {props.evidenceLinks?.length > 0 && (
          <div className="project-evidence">
            <span className="engineering-label">
              EXPLORE THE WORK
            </span>

            {props.evidenceLinks.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="evidence-link"
              >
                <span>
                  {item.type === "presentation" ? "↗" : "▧"}
                </span>
                {item.label}
                <span className="evidence-arrow">↗</span>
              </a>
            ))}
          </div>
        )}

        <div className="project-links">
          <a
            className="project-action project-action-primary"
            href={props.ghLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${props.title} source code on GitHub`}
          >
            <BsGithub />
            <span>Source Code</span>
            <span aria-hidden="true">↗</span>
          </a>

          {props.demoLink && (
            <a
              className="project-action project-action-secondary"
              href={props.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Explore ${props.title} demo`}
            >
              <CgWebsite />
              <span>Live Demo</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
