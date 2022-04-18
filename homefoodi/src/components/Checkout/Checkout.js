import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';

import { useNavigate } from 'react-router-dom';
import auth from '../../firebse.init';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../Loading/Loading';

const Checkout = () => {
    const [user,loading] =useAuthState(auth);
    const navigate = useNavigate();
    if(loading){
        return<Loading/>;
    }
    if(user){
    
    }
 
    
    const thankpage =()=> {
     navigate('/thank');
    }
    return (
      <div>
<div className='container p-5 mx-auto'>
            <h3 className='text-center p-2'>Checkout your items</h3>
           <Form onSubmit={thankpage}> 
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

 
  <Button variant="primary" type="submit">
    Order
  </Button>
</Form>
        </div>
         <Footer/> 
      </div>
        
    );
};

export default Checkout;