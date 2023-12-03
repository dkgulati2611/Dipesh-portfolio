import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import expense from "../../Assets/Projects/expense.png";
import blog from "../../Assets/Projects/blog.png";
import keeper from "../../Assets/Projects/keeper.png";
import todo from "../../Assets/Projects/todowithreact.png";
import portfolioWithhtml from "../../Assets/Projects/portfoliowithhtml.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="A shopping app for clocks and watches developed using mern stack. This is a complete MERN stack Ecommerce web application, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB as the database."
              ghLink="https://github.com/dkgulati2611/E-commerce-app"
              demoLink="https://perfect-fatigues.cyclic.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="This is a complete MERN stack expense tracker application.Developed features for recording and categorizing expenses, providing a comprehensive overview of spending patterns.Generated visual representations, such as charts and graphs, to analyze spending patterns. Ensured robust data security by implementing encryption techniques, secure authentication, and authorization mechanisms to protect sensitive user information and maintain data confidentiality."
              ghLink="https://github.com/dkgulati2611/Expense-Tracker"
              demoLink="https://expense-tracker-u5av.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blogger"
              description="This is a complete MERN stack blog application.Created an intuitive user interface that streamlines blog post creation, editing, and deletion, significantly reducing content creation time and enhancing productivity. Implemented comprehensive data validation and input sanitization measures, mitigating security vulnerabilities and protecting against common web application attacks. Designed an appealing and user-friendly interface that enhances the overall blogging experience for both content creators and readers."
              ghLink="https://github.com/dkgulati2611/BlogApp"
              demoLink="https://blog-app-bpnm.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper"
              description="Web notes app inspired by Google Keep 📝. Google Keep Clone is a web notes app inspired by Google Keep, which aims to reproduce the main aspects and features of the famous application using ReactJS."
              ghLink="https://github.com/dkgulati2611/keeper-app"
              demoLink="https://jazzy-churros-23b1a7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="It's a list of tasks where users can add and delete items, and may use multiple lists by modifying links developed using React."
              ghLink="https://github.com/dkgulati2611/ToDoListWithReact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioWithhtml}
              isBlog={false}
              title="Personal Portfolio using HTML"
              description="A personal portfolio webpage to portray technical skills, projects, achievements, interpersonal skills and career aspirations developed using html and css only."
              ghLink="https://github.com/dkgulati2611/personal_portfolio"
              demoLink="https://dkgulati2611.github.io/personal_portfolio/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
