import React from 'react';
import { Carousel } from 'react-bootstrap';
import food from'../../img/salad.jpeg';
import pizza from'../../img/pizza1.png';
import slider from'../../img/slider.jpeg';
import home from'../../img/homefood.avif';
import coffe from'../../img/coffe.jpeg';
import set from'../../img/set.jpeg';
import paper from '../../img/paper-style.jpeg'
const Banner = () => {
    return (
        <div className='container-fluid p-0 m-0'>
<Carousel fade>
  <Carousel.Item style={{height:'100vh'}}>
    <img
      className="d-block w-100 "
      src={paper}
      alt="First slide"
    />
    <Carousel.Caption style={{top:"12px"}}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'100vh'}}>
    <img
      className="d-block w-100"
      src={coffe}
      alt="Second slide"
    />

    <Carousel.Caption style={{top:"12px"}}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:'100vh'}}>
    <img
      className="d-block w-100"
      src={set}
      alt="Third slide"
    />
    <Carousel.Caption  style={{top:"12px"}}>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;