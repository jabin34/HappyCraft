import React from 'react';
import './Banner.css';

import paper from '../../img/paper-style.jpeg'
const Banner = () => {
    return (
        <div className='container-fluid p-0 m-0 position-relative'>
           <img
      className="d-block w-100 "
      src={paper}
      alt="First slide"
    />
    <div className='position-absolute top-0 p-5 m-2 responsive'>
      <h2 className='p-2'>Welcome To <span className='text-danger'>Happy Crafts</span> </h2>
      <h5>Where I'll post and take orders for projects that I enjoy doing soo much!! I'm currently learning a lot of new techniques and excited to be able to make quality, handmade crafts.</h5>
    </div>
 
        </div>
    );
};

export default Banner;