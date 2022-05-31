import React, { PureComponent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const Registration = () => {
  return (
    <div>
\      <h5 className="title-page">Sign Up</h5>
      <div id="main-div">
        <Form>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="text-name">Name:</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              placeholder="Enter Name"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-name">Email address:</Form.Label>
            <Form.Control
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-name">Password:</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-name">ReEnter Password:</Form.Label>
            <Form.Control
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </Form.Group>
          <div className="text-center ">
          <button type="button" class="btn btn-success">Submit</button>
          </div>
          <div className="link-tag">

      <a href="http://localhost:3000/Login">Already Account</a>
      </div>
        </Form>
        
      </div>
     
    </div>
  );
};

export default Registration;
