import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebse.init';
import Social from "../Social/Social";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user,loading,error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    let errorMsg ;
  if (error ) {
      errorMsg = <div> <p className='text-danger'>Error: {error?.message} </p></div> 
    }
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
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if(user){
      navigate(from,{replace:true});
  }
    
    const resetPassword =async() =>{
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    console.log(emailRef);
    toast("reset password");
    }
  return (
    <div className="container mx-auto p-5 border mt-3">
        <h3 className="text-primary">Please Login!!</h3>
      <Form onSubmit={ handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef}  type="email" placeholder="Enter email"  required/>
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  ref={passwordRef} type="password" placeholder="Password"  required/>
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Login 
        </Button>
        <Form.Text className="text-muted">
            {errorMsg}
          </Form.Text>
      </Form> 
      <p  style={{cursor:'pointer'}}> New to this?<span className="text-danger" onClick={navigateRegister}>Please register</span></p>
      
      <p  style={{cursor:'pointer'}}> Forget password?<span className="text-danger" onClick={resetPassword}>ResetPassword</span></p>
     
      <Social/>
      
      <ToastContainer />
    </div>
  );
};

export default Login;
