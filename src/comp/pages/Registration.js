import React, { PureComponent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Navbar";

const Registration = () => {
  return (
    <>
    <Navbar/>

    <div className="container">
     
      <div id="main-div" className="card mt-5 mx-auto">
        <div className="card-header">
          <p className="text-center fs-2 fw-bold">Sign In</p>
        </div>
        <Form className="card-body m-3"> 
          <Form.Group className="mb-3" controlId="">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />       
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number" placeholder="Phone Number" />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />        
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div className="link-tag text-center text-info h6">
                <a href="http://localhost:3000/Login" >Already Account!</a>
          </div>
        </Form>
        
      </div>
     
    </div>
    </>
  );
};

export default Registration;
