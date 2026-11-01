import React from "react";

function ProjectCard({ project }) {
  return (
    <article className="work-card">
      <div className="work-card-image">
        {project.coverClass ? (
          <div className={`work-cover ${project.coverClass}`}>
            <div className="work-cover-icon">{project.coverIcon}</div>
            <span>BUILT FOR THE TERMINAL</span>
            <strong>AI Coding Agent</strong>
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        )}
      </div>

      <div className="work-card-content">
        <h2>{project.title}</h2>

        <div className="work-detail">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>

        <div className="work-detail">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>

        <div className="work-detail">
          <h3>Engineering</h3>
          <p>{project.engineering}</p>
        </div>

        <p className="work-tech">{project.technologies}</p>

        <div className="work-card-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-link"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;