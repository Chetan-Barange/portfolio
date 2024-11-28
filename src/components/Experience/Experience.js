import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutExperience from "./AboutExperience";
import laptopImg from "../../Assets/about.png";
import homeLogo from "../../Assets/home-main.svg"


function Experience() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Where I<strong className="purple"> Learnt and Worked</strong>
            </h1>
            <AboutExperience />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          ><img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>


        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
      
      </Container>
    </Container>
  );
}

export default Experience;
