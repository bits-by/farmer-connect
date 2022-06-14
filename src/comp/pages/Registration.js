import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Navbar";

const Registration = () => {


  // const [validated, setValidated] = useState(false);
  //     const handleSubmit = (e) =>{
  //       const form = e.currentTarget;
  //       if(form.checkValidity() === false){
  //         e.preventDefault();
  //         e.stopPropagation();

  //       }
  //       setValidated(true);
  //     }

  const initailState={
    name:"",
    number:"",
    email:"",
    password:"",
    state:"",
    district:"",
    role:"",
  }
  const [fromValues, setFormValue] = useState(initailState);
  const [error, setError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    const { name, value } = event.target;
    setFormValue({ ...fromValues, [name]: value });

  };
  const handleSubmit = (event) => {

    event.preventDefault(); 
    // setError(validate(fromValues));
    setIsSubmit(true);
     console.log("User Data ",fromValues);
  }

  return (
    <>
      
    <Navbar/>

    <div className="container">
     
      <div id="main-div" className="card mt-5 mx-auto">
        <div className="card-header">
          <p className="text-center fs-2 fw-bold">Sign Up</p>
        </div>
        <Form className="card-body m-3"  onSubmit={handleSubmit}> 
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder ="Name" required name="name" onChange={handleChange}/>       
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Phone Number" required name="number" onChange={handleChange}/>           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required name="email" onChange={handleChange}/>        
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required name="password" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="md=3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="state" placeholder="State" required name="state" onChange={handleChange}/>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>District</Form.Label>
            <Form.Control type="text" placeholder="District" required name="district" onChange={handleChange}/>           
          </Form.Group>

          <Form.Group className="usertype d-flex   mb-5">
                <Form.Control type="radio" value="ADMIN" className="form-check-input me-1 " name="role" onChange={handleChange}/>Admin
                <Form.Control type="radio" value="USER" className="form-check-input ms-3 me-1" name="role" onChange={handleChange}/>User
                <Form.Control type="radio" value="FARMER" className="form-check-input ms-3 me-1" name="role" onChange={handleChange}/>Farmer       
          </Form.Group>
          

          

          

          

          {/* <Form.Group className="md=3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid" className="h6">
                Please provide a valid zip.
              </Form.Control.Feedback>
          </Form.Group> */}

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
