import React from 'react';
import { Card, CardGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import pizza from'../../img/pizza1.png';
const Services = () => {
    const navigate = useNavigate();
   const  checkout = () =>{
    navigate('/checkout');
   }
    return (
        <div className='container  mt-2'>
            <h2 className='text-center'>Our Services</h2>
<CardGroup>
  <Card className='m-2 border rounded'>
    <Card.Img variant="top" src={pizza}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <button className='btn btn-primary' onClick={checkout}>Checkout</button>
    </Card.Body>
   
  </Card>
  <Card className='m-2 border rounded'>
  <Card.Img variant="top" src={pizza}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
      <button className='btn btn-primary' onClick={checkout}>Checkout</button>
    </Card.Body>
   
  </Card>
  <Card className='m-2 border rounded'>
  <Card.Img variant="top" src={pizza}/>
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <button className='btn btn-primary' onClick={checkout}>Checkout</button>
    </Card.Body>
   
  </Card>
</CardGroup>
        </div>
    );
};

export default Services;