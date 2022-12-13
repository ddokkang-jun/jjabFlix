import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovie() {
  return async (dispatch) => {
    try {
      dispatch({type:"GET_MOVIE_REQUSET"});

      const popularMovieAPI = api.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const topRatedMovieAPI = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      const upcomingMovieAPI = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
      );
      const genreAPI= api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`) 

      let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
        popularMovieAPI,
        topRatedMovieAPI,
        upcomingMovieAPI,
        genreAPI,
      ]);

      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
          genreList: genreList.data.genres,
        },
      });
    } catch (error) {
      dispatch({type: "GET_MOVIE_FAIL"});
    }
  };
}

export const getMovieAction = {
  getMovie,
};