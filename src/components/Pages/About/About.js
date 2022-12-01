import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import myImage from "../../../images/01.jpg";


function About() {
  return (
    
      <>
        <Container>
          <Row className="py-5">
            <Col sm>
              <div className="card mb-3" style={{padding: '20px'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={myImage}
                      alt="Trendy Pants and Shoes"
                      className="img-fluid rounded-start"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Eveniet nulla maxime harum
                        earum est quos, illum reprehenderit accusamus nemo
                        aliquid culpa voluptatibus eum, exercitationem minus
                        mollitia id reiciendis. Earum, blanditiis!
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <Footer></Footer> */}
      </>
    
  );
}

export default About;
