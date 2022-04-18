import React, { useEffect, useState } from 'react';
import { Card, CardGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
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
      <div>
         <div className='container  mt-2'>
            <h2 className='text-center'>My Services</h2>
           
<CardGroup className='w-65'>
  {
    service.map((data)=>(
  <Card key={data.id} className='m-2 border rounded '>
    <Card.Img variant="top" src={data.url} className="img-fluid h-65 w-100"/>
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
        <Footer/> 
      </div>
       
    );
};

export default Services;