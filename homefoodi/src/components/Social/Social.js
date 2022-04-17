import React from 'react';
// import google from'../../../images/google1.png';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from'../../firebse.init'
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    let errorMsg ;
    if (error ) {
        errorMsg = <div> <p className='text-danger'>Error: {error?.message} </p></div> 
      }
      if (user) {
        navigate('/home'); 
      }
    return (
        <>
        <div className='d-flex align-items-center'>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{height:'1px'}} className='bg-primary w-50'></div>
        </div>
        {errorMsg}
       <div> 
        <button  onClick={()=>signInWithGoogle()}
        className='btn btn-primary d-block w-50 mx-auto mb-3'>
            {/* <img src={google} alt="pic" style={{width:"30px"}} /> */}
           <span className='px-2'>Google Sign In</span> 
        </button>
        
       
        </div>
        </>
        
    );
};

export default Social;