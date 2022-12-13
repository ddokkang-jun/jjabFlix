import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  const navigate = useNavigate();

  const showMovieDetail = (item) => {
    navigate(`/movies/${item.id}`);
  }

  return (
    <div
      className='movie-card'
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}` +
          ")",
      }}
      onClick={() => showMovieDetail(item)}
      >
      <div className='movie-info'>
        <h4>{item.title}</h4>
        <div>
          {item.genre_ids.map((itemGenreId, index) => (
            <Badge className='movie-info-badge' bg='danger' key={index}>
              {genreList.find((genreId) => genreId.id === itemGenreId).name}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
