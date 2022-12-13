import React from "react";
import CreditCard from "./CreditCard";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CreditSlider = () => {
  const { creditCast } = useSelector((state) => state.movieDetail);
  return (
    <Container className='credit-slider-container'>
      <div className='credit-slider'>
        <h1>Crews</h1>
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          {creditCast.map((item, index) => (
            <CreditCard key={index} item={item} />
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

export default CreditSlider;
