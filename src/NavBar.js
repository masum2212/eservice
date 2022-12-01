import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Login from "./components/Pages/Login/Login";
import Registration from "./components/Pages/Registration/Registration";
import "./Navbar.css";

function NavBar() {
  const [show, setShow] = useState(false);

  const [view, setView] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleView = () => setView(false);
  const handleClick = () => setView(true);
  return (
    <>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-5">
                  <Nav.Link
                    activeClassName="menu-active"
                    className="hover-main type2"
                    href="/"
                  >
                    
                    
                    Home
                  </Nav.Link>
                  <Nav.Link
                    activeClassName="menu-active"
                    className="hover-main type2"
                    href="/about"
                  >
                    About
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/service">
                    Service
                  </Nav.Link>
                  <Nav.Link className="hover-main type2" href="/contact">
                    Contact
                  </Nav.Link>
                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <Nav.Link
                    className="hover-main type2"
                    href="#"
                    onClick={handleClick}
                  >
                    Log in
                  </Nav.Link>
                  <Nav.Link
                    className="hover-main type2"
                    href="#"
                    onClick={handleShow}
                  >
                    Sing Up
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Registration
        handleShow={handleShow}
        handleClose={handleClose}
        show={show}
        handleClick={handleClick}
        handleView={handleView}
        view={view}
      ></Registration>
      <Login
        handleShow={handleClick}
        handleView={handleView}
        view={view}
      ></Login>
    </>
  );
}

export default NavBar;
