let initialState = {
  moviePageMovies: [],
  totalPages: 1,
  moviePageMoviesTotalResults: {},
  yearFilter: [1990, 2022],
  genres: [],
  seletedGenreArr: [],
  moviepageLoading: true,
  searchingKeyword: "",
  searchMovies: {},
  currentPage: 1,
};

function moviePageReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "CURRENT_PAGE_CHANGE":
      return {...state, currentPage: payload.currentPage }
    case "ADD_KEYWORD":
      return { ...state, searchingKeyword: payload.keyword };
    case "ADD_GENRE":
      return { ...state, seletedGenreArr: payload.genre };
    case "YEAR_CHANGE":
      return { ...state, yearFilter: payload.yearFilter };
    case "GET_MOVIE_REQUSET":
      return { ...state, moviepageLoading: true };
    case "GET_MOVIE_SUCCESS":
      return {
        ...state,
        moviePageMovies: payload.moviePageMovies,
        totalPages: payload.totalPages,
        moviePageMoviesTotalResults: payload.moviePageMoviesTotalResults,
        genres: payload.genres,
        moviepageLoading: false,
      };
    case "GET_MOVIE_FAIL":
      return { ...state, moviepageLoading: true };
    default:
      return { ...state };
  }
}

export default moviePageReducer;
