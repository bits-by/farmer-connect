import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Navbar";

const Registration = () => {
  const [validated, setValidated] = useState(false);
      const handleSubmit = (e) =>{
        const form = e.currentTarget;
        if(form.checkValidity() === false){
          e.preventDefault();
          e.stopPropagation();

        }
        setValidated(true);
      }
  return (
    <>
      
    <Navbar/>

    <div className="container">
     
      <div id="main-div" className="card mt-5 mx-auto">
        <div className="card-header">
          <p className="text-center fs-2 fw-bold">Sign In</p>
        </div>
        <Form className="card-body m-3" noValidate validated={validated} onSubmit={handleSubmit}> 
          <Form.Group className="mb-3" controlId="">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder ="First Name" required />       
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" required />           
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number" required/>           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required/>        
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>

          <Form.Group className="md=3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="md=3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid" className="h6">
                Please provide a valid zip.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
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
