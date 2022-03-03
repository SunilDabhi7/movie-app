export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_SEARCHED_MOVIE_TO_RESULT = "ADD_SEARCHED_MOVIE_TO_RESULT";
export const ADD_SEARCHED_MOVIE_TO_LIST = "ADD_SEARCHED_MOVIE_TO_LIST";
export const ADD_MOVIE_TO_FAVOURITE = "ADD_MOVIE_TO_FAVOURITE";
export const REMOVE_MOVIE_FROM_FAVOURITE = "REMOVE_MOVIE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function handleSearch(movie) {
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=d9561ff2&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("Search result: ", movie);
        // to add movie in the store we need to dispatch action
        dispatch(addMovieToSearchResult(movie));
      });
  };
}

export function addMovieToSearchResult(movie) {
  return {
    type: ADD_SEARCHED_MOVIE_TO_RESULT,
    movie,
  };
}

export function addMovieToSearchList(movie) {
  return {
    type: ADD_SEARCHED_MOVIE_TO_LIST,
    movie,
  };
}

export function addMovieToFavourite(movie) {
  return {
    type: ADD_MOVIE_TO_FAVOURITE,
    movie,
  };
}

export function removeMovieFromFavourite(movie) {
  return {
    type: REMOVE_MOVIE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavourites(value) {
  return {
    type: SET_SHOW_FAVOURITES,
    value,
  };
}
