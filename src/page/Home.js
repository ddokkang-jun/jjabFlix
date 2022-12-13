import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../component/Banner";
import { getMovieAction } from "../redux/actions/getMovieAction";
import MovieSlider from "../component/MovieSlider";
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Home = () => {
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieAction.getMovie());
  }, []);
  

  if (loading) {
    return (
      <FadeLoader
        color='#36d7b7'
        loading={loading}
        size={150}
        cssOverride={override}
      />
    );
  }

  
  return (
    <div>
      {popularMovies ? <Banner movie={popularMovies.results[0]} /> : "Loading"}
      <h1>Popular Movies</h1>
      {popularMovies ? <MovieSlider movies={popularMovies} /> : "Loading"}  
      <h1>Top Rated Movies</h1>
      {popularMovies ? <MovieSlider movies={topRatedMovies} /> : "Loading"}  
      <h1>Upcoming Movies</h1>
      {popularMovies ? <MovieSlider movies={upcomingMovies} /> : "Loading"}  
    </div>
  );
};

export default Home;
