import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Genres = () => {
  const { genres } = useSelector((state) => state.moviePage);
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [genre, setGenre] = useState([]);

  const handleAddGenre = (clickedGenre) => {
    setSelectedGenre([...selectedGenre, clickedGenre]);
  };

  useEffect(() => {
    dispatch({ type: "ADD_GENRE", payload: { genre: selectedGenre } });
  }, [selectedGenre]);

  return (
    <div>
      <ul className='with-genre'>
        {genres &&
          genres.map((item) => (
            <li key={item.id} onClick={() => handleAddGenre(item)}>
              <a>{item.name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Genres;
