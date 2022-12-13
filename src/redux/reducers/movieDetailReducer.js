let initialState = {
  movieCardDetail: {},
  creditCast: {},
  creditCrew: {},
  genreList: [],
  recommendationsList: {},
  reviews: {},
  videoId: {},
  loading: true,
};

function movieDetailReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_REQUSET":
      return {...state, loading:true,}
    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        movieCardDetail: payload.movieCardDetail,
        creditCast: payload.creditCast,
        creditCrew: payload.creditCrew,
        genreList: payload.genres,
        recommendationsList: payload.recommendations,
        reviews: payload.reviews,
        videoId: payload.videoId,
        loading:false,
      };
    case "GET_MOVIE_FAIL":
      return {...state, loading:true,}
    default:
      return { ...state };
  }
}

export default movieDetailReducer;
