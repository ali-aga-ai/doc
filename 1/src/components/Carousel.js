import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './MyCarousel.css'; // Import custom CSS for Carousel

const MyCarousel = () => {

  const img1 = require('./mission.png')
  const img2 = require('./mis.png')
  const img3 = require('./idk.png')


  return (
    <Carousel className="custom-carousel p-6 ">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src = {img2} // Replace '...' with the path to your image
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={img1} // Replace '...' with the path to your image
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={img3}// Replace '...' with the path to your image
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
