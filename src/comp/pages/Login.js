import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import Navbar from "../Navbar";
import "../style.css";



const Login = () =>{
  
  const initailState={
    role:"",
    email:"",
    password:""
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
      //  const form = e.currentTarget;
      //   if(form.checkValidity() === false){
      //     e.preventDefault();
      //     console.log(form)
      //   }
        // setValidated(true);
        // console.log(e.currentTarget.value)
    
      // const onSubmit = (data) => {
      //   // const newUser = Json.parse(data)
      //   axios.post('',data)
      //   .then(response => console.log(response))
      //   .catch(error => {
      //     this.setState({errorMessage: error.message });
      //     console.error('there was an error!',error);
      //   });
      //   console.log(data);
      // }
      // const onSubmit = (data) => {
      //   console.log(data)
      //   console.log({
      //     email: data['email'],
      //     password: data['password'],
      //     role: data['type']
      //   });
      // }


      return (
        <>
        <Navbar/>
       
        <div className="container "> 
          
          
          <div id="main-div" className="card mt-5 mx-auto">
          <div className="card-header">
           <p className="text-center fs-2 fw-bold">Log In</p>
           
          </div>
          <Form className="card-body m-3 " onSubmit={handleSubmit} > 
          <Form.Group className="usertype d-flex   mb-5">
                <Form.Control type="radio" value="ADMIN" className="form-check-input me-1 " name="role" onChange={handleChange}/>Admin
                <Form.Control type="radio" value="USER" className="form-check-input ms-3 me-1" name="role" onChange={handleChange}/>User
                <Form.Control type="radio" value="FARMER" className="form-check-input ms-3 me-1" name="role" onChange={handleChange}/>Farmer       
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required name="email" onChange={handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required name="password" onChange={handleChange}/>

          </Form.Group>

          
          <Button variant="primary" type="submit">
            Submit
          </Button>
         
        </Form>

        <div className="link-tag text-center text-info h6">
                <a href="http://localhost:3000/Registration" >New User! Create Account</a>
          </div>
          </div>
        </div>
        </>
      );
   
      }

export default Login;
