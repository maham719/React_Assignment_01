import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { RiGoogleFill } from '@remixicon/react';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import './signupform.css';
function Signuppage() {
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Form onSubmit={handleSignup}>
        <InputGroup className="mb-3 compact-input">
         <FloatingLabel
        controlId="floatingInput"
        label="First name"
        className='p-0'
      >
      <Form.Control  type='text' placeholder='First name'/>
      </FloatingLabel>

         <FloatingLabel
        controlId="floatingInput"
        label="Last name"
        className='p-0'

      >
      <Form.Control   type='text' placeholder='Last name'/>
      </FloatingLabel>

    </InputGroup>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
        controlId="floatingInput"
        label="Phone # "
        className='p-0'
 onChange={(e) => setEmail(e.target.value)}
      >
        <Form.Control type="tel" placeholder="Phone no" />
      </FloatingLabel>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel
        controlId="floatingInput"
        label="Enter Email"
        className='p-0'

      >
        <Form.Control type="email" placeholder="Enter email" />
      </FloatingLabel>
      </Form.Group>

<InputGroup className="mb-3 compact-input">

        <FloatingLabel
        controlId="floatingInput"
        label="Password"
        className='p-0'
 onChange={(e) => setPassword(e.target.value)}
      >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>

        <FloatingLabel
        controlId="floatingInput"
        label="Confirm  Password"
        className='p-0'

      >
        <Form.Control type="password" placeholder="Confirm Password" />
      </FloatingLabel>
</InputGroup>

<Form.Group>
      <Button variant="outline-dark" type="submit" className='px-5'>
        Signup
      </Button>
      <p>OR </p>
       <Button variant="outline-dark" type="submit" className='px-5 signupG'>
         <RiGoogleFill size="24px"  className='google-icon'/> Sign up with google 
      </Button>
      </Form.Group>
    </Form>
  );
}
 
export default Signuppage;
