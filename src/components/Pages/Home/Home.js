import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import myImage from "../../../images/01.jpg";
import { Link } from "react-router-dom";

import About from "../About/About";
import Service from "../Service/Service";
import Registration from "../Registration/Registration";
import "./Home.css";

function Home() {
  return (
    <div>
      <>
        <Container>
          <Row className="align-items-center mt-5 mb-5">
            <Col>
              <div>
                <h1>
                  Lorem ipsum dolor sit amet <strong>Lorem, ipsum.</strong>
                </h1>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, maiores?
                </h2>
                <Link to="/service">
                <a href="http://marcel-pirnay.be/" class="billah">
  <svg width="277" height="62">
    <defs>
        <linearGradient id="grad1">
            <stop offset="0%" stop-color="#FF8282"/>
            <stop offset="100%" stop-color="#E178ED" />
        </linearGradient>
    </defs>
     <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
  </svg>
  
    <span>Get Started</span>
</a>
                </Link>
              </div>
              

            </Col>
            <Col className="">
              <div className="cardx">
                <div className="image-box">
                  <img src={myImage} alt="my-Image" />
                </div>
                <div className="content">
                  <h2>keep smilling</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe architecto placeat voluptates molestiae aliquid
                    quibusdam nisi deleniti doloremque magnam maxime?Lorem,
                    ipsum dolor sit amet consectetur adipisicing elit. At culpa
                    quidem aperiam sequi necessitatibus accusamus tenetur, quo
                    maiores nam nostrum?
                  </p>
                  
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        
      </>
      
    </div>
    
    
  );
}

export default Home;
