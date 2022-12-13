import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import movieDetailReducer from './movieDetailReducer';
import moviePageReducer from './moviePageReducer';
import searchMovieReducer from './searchMovieReducer';

export default combineReducers({
  movie: movieReducer,
  movieDetail: movieDetailReducer,
  moviePage: moviePageReducer,
  searchMovies: searchMovieReducer,
});