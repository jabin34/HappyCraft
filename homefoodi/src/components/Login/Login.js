import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import auth from '../../firebse.init';
import Social from "../Social/Social";
const Login = () => {
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user,loading,error] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = ()=>{
        navigate('/register');
    }
    const resetPassword =async() =>{
    //  await sendPasswordResetEmail(emailRef);
    //  toast("reset password");
    }
  return (
    <div className="container mx-auto p-5 border mt-3">
        <h3 className="text-primary">Please Login!!</h3>
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
          Login 
        </Button>
      </Form> 
      <p> New to this?<span className="text-danger" onClick={navigateRegister}>Please register</span></p>
      {error}
      <p> Forget password?<span className="text-danger" onClick={resetPassword}>ResetPassword</span></p>
      {error}
      <Social/>
      {/* 
      <ToastContainer /> */}
    </div>
  );
};

export default Login;
