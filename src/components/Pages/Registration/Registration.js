import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import './Registration.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Registration(props) {
  // console.log(props);
  

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton className="text-center">
          <Modal.Title className="text-center">Registration</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='p-4'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Box>
            </Form.Group>
            <Form.Group>
            <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Box>
            </Form.Group>
            <Form.Group>
            <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </Box>
            </Form.Group>
            <Form.Group>
            <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                />
              </Box>
            </Form.Group>
            Already have an account <a role='button' view={props.view}onClick={props.handleClick} onHide={props.handleClose}>Login</a>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Registration;
