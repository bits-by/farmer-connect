import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Navbar from "../Navbar";
import "../style.css";
import {useForm} from "react-hook-form";


const Login = () =>{
      return (
        <div> 
          
          <h5 className="title-page">Sign In</h5>
          <div id="main-div">
            <Form>
              <div className="usertype">
                <input type="radio" value="admin" className="form-check-input me-1 " name="usertype"/>Admin
                <input type="radio" value="user" className="form-check-input ms-3 me-1" name="usertype"/>User
                <input type="radio" value="farmer" className="form-check-input ms-3 me-1" name="usertype"/>Farmer       
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="text-name"
                  placeholder="Enter email"
                  // {...register ("firstName",{required:true, maxLength:10})}
                  // {...errors.email && <p> Please enter valid Email</p>}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  className="text-name"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="text-center ">
                <button type="button" class="btn btn-success">
                  Submit
                </button>
              </div>
              <div className="link-tag">
                <a href="http://localhost:3000/Registration">New User! Create Account</a>
              </div>
            </Form>
          </div>
        </div>
      );
   
    }

export default Login;
