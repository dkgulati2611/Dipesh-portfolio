import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dipesh K. Gulati, </span>
            a budding <span className="purple">software engineer</span> and <span className="purple">developer,</span> currently pursuing Mathematics and Computing as a final year student at NSUT, Delhi, India.
            <br />
            I am good at <span className="purple">Problem solving</span> and <span className="purple">Analytical thinking</span>. I participated in Coding Contest regularly to brush up my DSA skills, simultaneously working on my development skills to build eye-catching websites.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dipesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
