import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { RiGoogleFill } from '@remixicon/react';
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";
import './signupform.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Signuppage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // signup with googe 
const handleGoogleSignup = () => {
  const provider = new GoogleAuthProvider();

  const googlePromise = signInWithPopup(auth, provider);

  toast.promise(googlePromise, {
    pending: "Connecting to Google...",
    success: "Signed in with Google 🎉",
    error: {
      render({ data }) {
        return data.message;
      }
    }
  });

  googlePromise.catch((err) => {
    console.error(err);
  });
};

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const signupPromise = createUserWithEmailAndPassword(auth, email, password);

    toast.promise(signupPromise, {
      pending: "Creating your account...",
      success: "Account created successfully! 🎉",
      error: {
        render({ data }) {
          return data.message;
        }
      }
    });

    signupPromise.catch(() => {});
  };

  return (
    <Form onSubmit={handleSignup}>

      <InputGroup className="mb-3 compact-input">
        <FloatingLabel label="First name" className='p-0'>
          <Form.Control type='text' placeholder='First name' />
        </FloatingLabel>

        <FloatingLabel label="Last name" className='p-0'>
          <Form.Control type='text' placeholder='Last name' />
        </FloatingLabel>
      </InputGroup>

      <Form.Group className="mb-3">
        <FloatingLabel label="Enter Email" className='p-0'>
          <Form.Control 
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
      </Form.Group>

      <InputGroup className="mb-3 compact-input">
        <FloatingLabel label="Password" className='p-0'>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel label="Confirm Password" className='p-0'>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FloatingLabel>
      </InputGroup>

      <Form.Group>
        <Button variant="outline-dark" type="submit" className='px-5'>
          Signup
        </Button>
        <p>OR</p>
        <Button variant="outline-dark" className='px-5 signupG' onClick={handleGoogleSignup}>
          <RiGoogleFill size="24px" className='google-icon' /> 
          Sign up with Google
        </Button>
      </Form.Group>

    </Form>
  );
}

export default Signuppage;
