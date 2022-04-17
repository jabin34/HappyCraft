import { sendEmailVerification } from 'firebase/auth';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebse.init';
import Social from '../Social/Social';

const Register = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword,user,loading, error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating] = useUpdateProfile(auth);
    let  errorMsg;
    if (error ) {
        errorMsg = <div> <p className='text-danger'>Error: {error?.message} </p></div> 
      }
    const nameRef =  useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
        createUserWithEmailAndPassword(email, password);
        updateProfile({displayName:name});
    }
    const navigateLogin = ()=>{
        navigate('/login');
    }
    if(user){
        navigate('/home'); 
    }
    return (
        <div className="container mx-auto p-5 border mt-3">
        <h3 className="text-primary">Register Here!!</h3>
      <Form onSubmit={ handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control ref={nameRef}  type="text" placeholder="Enter name"  required />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef}  type="email" placeholder="Enter email"  required />
         
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  ref={passwordRef} type="password" placeholder="Password"   required/>
        </Form.Group>
       
        <Button variant="primary" type="submit">
         Register
        </Button>
      </Form> 
      <p>Already have an account?<span className="text-danger"  style={{cursor:'pointer'}} onClick={navigateLogin}>Login here</span></p>
     
      {errorMsg}
      <Social/>
     
    </div>
    );
};

export default Register;