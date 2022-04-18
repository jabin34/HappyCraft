import React, { useEffect, useState } from 'react';

const CustomerReview = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
      fetch('review.json')
      .then(res=>res.json())
      .then(data =>setReviews(data));
    },[])
    return (
        <div className='container mt-2'>
            <h3 className='text-center'> My Clients Review</h3>
            <div className='d-flex p-3 mx-auto flex-md-row flex-sm-column flex-column justify-content-around'>
            {reviews.map(review=>(
                <div class="card m-2" style={{}}>
                <div class="card-body">
                  
                  
                  <p class="card-text">{review.reviews}</p>
                  <h5 class="card-title">Rating: {review.rating}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{review.time}</h6>
            
                </div>
              </div>
            ))}
            </div>
        </div>
    );
};

export default CustomerReview;