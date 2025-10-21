import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Loginpage() {
  return (
    <Form>
      <InputGroup className='mb-5'>
    
        <Form.Control type="email" placeholder="Enter email" />
      
    

        <Form.Control type="password" placeholder="Password" />
    </InputGroup>
      <Button variant="outline-dark" type="submit" className='px-5'>
        Login
      </Button>
    </Form>
  );
}

export default Loginpage;
