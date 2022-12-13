import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getSearchMovie(id, currentPage, yearFilter) {
  return async (dispatch) => {
    try {

      const searchMoviesAPI = await api.get(
        `/search/movie?api_key=${API_KEY}&language=en-US&query=${id}&page=${currentPage}&include_adult=false&primary_release_year=${yearFilter[1]}&include_video=true`
        );
      let searchMovies = searchMoviesAPI;

      dispatch({
        type: "GET_SEARCH_SUCCESS",
        payload: {
          searchMovies: searchMovies.data.results,
          totalPages: searchMovies.data.total_pages,
          searchMoviesTotalResults: searchMovies.data.total_results,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_FAIL" });
    }
  };
}

export const getSearchMovieAction = {
  getSearchMovie,
};
