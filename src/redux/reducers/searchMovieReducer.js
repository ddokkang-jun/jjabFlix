let initialState = {
  searchMovies: [],
  keyword: "",
  currentPage: 1,
  totalPages: 0,
  yearFilter: [1990, 2022],
};
function searchMovieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "YEAR_CHANGE":
      return { ...state, yearFilter: payload.yearFilter };
    case "CHANGE_CURRENT_PAGE":
      return {...state, currentPage: payload.currentPage };
    case "GET_SEARCH_SUCCESS":
      return {
        ...state,
        searchMovies: payload.searchMovies,
        totalPages: payload.totalPages,
      };
    case "ADD_KEYWORD":
      return {
        ...state,
        keyword: payload.keyword,
      };
    default:
      return { ...state };
  }
}
export default searchMovieReducer;
