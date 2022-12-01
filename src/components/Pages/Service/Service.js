import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import serviceCss from "./Service.module.css";
import './Service.css';

function Service() {
  return (
    
      <>
      <h1 className="text-center text-muted">Our Services</h1>
        <Container>
          <Row className="py-5">
            <Col sm>
              <div className='card-service bg-dark'>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/017.webp"
                  class="card-img"
                  alt="Stony Beach" style={{height:'400px'}}
                />
                <div className='intro-service'>
                  <h5 className=''>Card title</h5>
                  <p class='service'>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="service card-text">Last updated 3 mins ago</p>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </>
    
  );
}

export default Service;
