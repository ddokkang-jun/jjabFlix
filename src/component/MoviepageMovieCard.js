import React from "react";
import { useNavigate } from "react-router-dom";
import { img_300, unavailable } from "../config/config";

const MoviepageMovieCard = ({ item, poster, title, date }) => {
  const navigate = useNavigate();
  const showMovieDetail = (item) => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <div className='media' onClick={() => showMovieDetail(item)}>
      <img
        className='poster'
        src={poster ? `${img_300}/${poster}` : `${unavailable}`}
        alt=''
      />
      <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success'>
        {item.vote_average}
      </span>
      <b className='title'>{title}</b>
      <span className='subTitle'>{date}</span>
    </div>
  );
};

export default MoviepageMovieCard;
