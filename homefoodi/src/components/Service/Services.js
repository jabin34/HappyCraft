import React, { useEffect, useState } from 'react';
import { Card, CardGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Services = () => {
  const [service,setService] = useState([]);
  useEffect(()=>{
    fetch('service.json')
    .then(res=>res.json())
    .then(data =>setService(data));
  },[])

    const navigate = useNavigate();
   const  checkout = () =>{
    navigate('/checkout');
   }
    return (
        <div className='container  mt-2'>
            <h2 className='text-center'>My Services</h2>
           
<CardGroup>
  {
    service.map((data)=>(
  <Card key={data.id} className='m-2 border rounded'>
    <Card.Img variant="top" src={data.url} className="img-fluid"/>
    <Card.Body>
      <Card.Title>{data.name}</Card.Title>
      <Card.Text>
       {data.des}
      </Card.Text>
      <Card.Text>
       <h5>{data.price}Taka</h5>
      </Card.Text>
     <div ><button className='checkout-btn' onClick={checkout}>Checkout</button></div> 
    </Card.Body>
  </Card>
    ))
  }
  

  
</CardGroup>
        </div>
    );
};

export default Services;