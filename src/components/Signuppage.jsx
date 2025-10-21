import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { RiGoogleFill } from '@remixicon/react';
import './signupform.css';
function Signuppage() {
  return (
    <Form>
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
       <Button variant="outline-dark" type="submit" className='px-5'>
         <RiGoogleFill size="24px" color="black" /> Sign up with google 
      </Button>
      </Form.Group>
    </Form>
  );
}
 
export default Signuppage;
