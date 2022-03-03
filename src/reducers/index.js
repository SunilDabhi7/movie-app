import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_SEARCHED_MOVIE_TO_RESULT,
  ADD_SEARCHED_MOVIE_TO_LIST,
  ADD_MOVIE_TO_FAVOURITE,
  REMOVE_MOVIE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITES,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMovieState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_SEARCHED_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    case ADD_MOVIE_TO_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };
    case REMOVE_MOVIE_FROM_FAVOURITE:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.value,
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResult: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case true:
      return {
        ...state,
        result: action.movie,
      };
    case ADD_SEARCHED_MOVIE_TO_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResult: true,
      };
    case ADD_SEARCHED_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResult: false,
      };
    default:
      return state;
  }
}

export default combineReducers({
  movies,
  search,
});
