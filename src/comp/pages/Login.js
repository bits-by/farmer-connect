import React from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import Navbar from "../Navbar";
import "../style.css";


const Login = () =>{
      return (
        <>
        <Navbar/>
       
        <div className="container "> 
          
          
          <div id="main-div" className="card mt-5 mx-auto">
          <div className="card-header">
           <p className="text-center fs-2 fw-bold">Log In</p>
           <div className="usertype">
                <input type="radio" value="admin" className="form-check-input me-1 " name="usertype"/>Admin
                <input type="radio" value="user" className="form-check-input ms-3 me-1" name="usertype"/>User
                <input type="radio" value="farmer" className="form-check-input ms-3 me-1" name="usertype"/>Farmer       
              </div>
          </div>
          <Form className="card-body m-3"> 

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
                <a href="http://localhost:3000/Registration" >New User! Create Account</a>
          </div>
        </Form>


          </div>
        </div>
        </>
      );
   
    }

export default Login;
