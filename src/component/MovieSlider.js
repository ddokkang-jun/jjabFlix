import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import FadeLoader from "react-spinners/FadeLoader";

// Carousel 수정하기
//https://codepen.io/joshhunt/pen/LVQZRa

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
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

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const MovieSlider = ({ movies }) => {
  const { loading } = useSelector((state) => state.movie);

  return (
    <div>
      {movies.results ? (
        <Carousel responsive={responsive} autoPlay={true} infinite={true}>
          {movies.results.map((item, index) => (
            <MovieCard key={index} item={item} />
          ))}
        </Carousel>
      ) : (
        <FadeLoader
          color='#36d7b7'
          loading={loading}
          size={150}
          cssOverride={override}
        />
      )}
    </div>
  );
};

export default MovieSlider;
