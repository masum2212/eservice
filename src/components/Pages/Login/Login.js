import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import './Registration.css';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import './Login.css';

function Login(props) {
//   console.log(props);

  return (
    <>
      <Modal show={props.view} onHide={props.handleView}>
        <Modal.Header closeButton className="text">
          <Modal.Title className="text">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
                  label="Outlined"
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
                  label="Outlined"
                  variant="outlined"
                />
              </Box>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleView}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleView}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
