import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovieDetail(id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIE_REQUSET" });

      const movieCardDetailAPI = api.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      const creditAPI = api.get(
        `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
      );
      const genreAPI = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      const recommendationsAPI = api.get(
        `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
      )
      const reviewAPI = api.get(
        `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      const videoIdAPI = api.get(
        `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
      )
      
      let [movieCardDetail, credit, genres,recommendations,reviews,videoId,] = await Promise.all([
        movieCardDetailAPI,
        creditAPI,
        genreAPI,
        recommendationsAPI,
        reviewAPI,
        videoIdAPI,
      ]);

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          movieCardDetail: movieCardDetail.data,
          creditCast: credit.data.cast,
          creditCrew: credit.data.crew,
          genres: genres.data,
          recommendations: recommendations.data,
          reviews: reviews.data, 
          videoId: videoId.data,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIE_FAIL" });
    }
  };
}

export const getMovieDetailAction = {
  getMovieDetail,
};
