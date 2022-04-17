import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebse.init';
import Social from '../Social/Social';

const Register = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword,user,loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
        createUserWithEmailAndPassword(email, password);
    }
    const navigateLogin = ()=>{
        navigate('/login');
    }
    return (
        <div className="container mx-auto p-5 border mt-3">
        <h3 className="text-primary">Register Here!!</h3>
      <Form onSubmit={ handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef}  type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  ref={passwordRef} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
         Register
        </Button>
      </Form> 
      <p>Already have an account?<span className="text-danger" onClick={navigateLogin}>Login here</span></p>
     
      {error}
      <Social/>
      {/* 
      <ToastContainer /> */}
    </div>
    );
};

export default Register;