import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <Form onSubmit={handleLogin}>
      <InputGroup className='mb-5'>
    
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
      
    

        <Form.Control type="password" placeholder="Password"   onChange={(e) => setPassword(e.target.value)}/>
    </InputGroup>
      <Button variant="outline-dark" type="submit" className='px-5'>
        Login
      </Button>
    </Form>
  );
}

export default Loginpage;
