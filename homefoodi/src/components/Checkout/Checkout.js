import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../../firebse.init';
import Loading from '../Loading/Loading';

const Checkout = () => {
    const [user,loading] =useAuthState(auth);
    const location = useLocation();
    if(loading){
        return<Loading/>;
    }
    if(user){
    
    }
    return (
        <div>
            this is check out route
        </div>
    );
};

export default Checkout;