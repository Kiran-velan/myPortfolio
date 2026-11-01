import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Egineer",
          "Spring Boot Developer",
          "FastAPI Developer",
          "DSA Problem Solver",
          "AI Enthusiast",
          "System Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
