import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMoviepageMovies(sortBy,currentPage, yearFilter, genreForURLid,) {
  return async (dispatch) => {
    try {
      const moviePageAPI = api.get(
        `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sortBy}&page=${currentPage}&primary_release_year=${yearFilter[0]}%2C${yearFilter[1]}&with_genres=${genreForURLid}&include_video=true`
      );
      
      const genreAPI = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      let [moviePageMovies, genres] = await Promise.all([
        moviePageAPI,
        genreAPI,
      ]);
      dispatch({
        type: "GET_MOVIE_SUCCESS",
        payload: {
          moviePageMovies: moviePageMovies.data.results,
          totalPages: moviePageMovies.data.total_pages,
          moviePageMoviesTotalResults: moviePageMovies.data.total_results,
          genres: genres.data.genres,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_FAIL" });
    }
  };
}

export const getMoviepageAction = {
  getMoviepageMovies,
};
