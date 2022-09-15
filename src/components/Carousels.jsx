import React from "react";
import Carousel from "react-bootstrap/Carousel";

import CarouselsOne from "../assets/images/pizza-1.jpg";
import CarouselsTwo from "../assets/images/pizza-2.jpg";
import CarouselsThree from "../assets/images/pizza-3.jpg";

const Carousels = () => {
  return (
    <Carousel className="CarouselsHeight">
      <Carousel.Item>
        <img className="d-block w-100" src={CarouselsOne} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="CarouselsHeight">
        <img className="d-block w-100" src={CarouselsTwo} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="CarouselsHeight">
        <img className="d-block w-100" src={CarouselsThree} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
