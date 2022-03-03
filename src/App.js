import React, { Component } from "react";

import { data } from "./data";
import { addMovies, setShowFavourites } from "./actions";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));
  }

  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  onChangeTab = (value) => {
    this.props.store.dispatch(setShowFavourites(value));
  };

  render() {
    const { movies, search } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    const displayTab = showFavourites ? favourites : list;
    return (
      <div className="app">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tabs-bar ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies/TV shows
            </div>
            <div
              className={`tabs-bar ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="movie-list">
            {displayTab.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movie-${index}`}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isFavourite(movie)}
                />
              );
            })}
            {displayTab.length === 0 ? (
              <div className="empty-tab">No Movies/TV shows to display...</div>
            ) : null}
          </div>
        </div>
        <Footer displayTab={displayTab} />
      </div>
    );
  }
}

export default App;
