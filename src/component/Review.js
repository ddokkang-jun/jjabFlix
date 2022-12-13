import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const Review = () => {
  const { reviews } = useSelector((state) => state.movieDetail);

  return (
    <Container>
      <h1>Reviews</h1>
      <div>{reviews.results[0] ? reviews.results[0].author : ""}</div>
      <div>{reviews.results[0] ? reviews.results[0].content : ""}</div>

      {reviews.results[1] ? <div className='under-line'></div> : <></>}

      <div>{reviews.results[1] ? reviews.results[1].author : ""}</div>
      <div>{reviews.results[1] ? reviews.results[1].content : ""}</div>

      {reviews.results[2] ? <div className='under-line'></div> : <></>}

      <div>{reviews.results[2] ? reviews.results[2].author : ""}</div>
      <div>{reviews.results[2] ? reviews.results[2].content : ""}</div>
    </Container>
  );
};

export default Review;
