import React, { Component } from "react";

class testComp extends Component {
  render() {
    return (
      <div>
        <div className="upper-part">
          <div className="card-poster">
            <img src={movie.Poster} alt="poster"></img>
          </div>
          <div className="card-details">
            <h3>{movie.Title}</h3>
            <p style={{ color: "blue", fontSize: 12 }}>{movie.Genre}</p>
            <p style={{ color: "purple", fontSize: 12 }}>{movie.Year}</p>
            <p style={{ color: "grey", fontSize: 12 }}>
              <span style={{ color: "orange", textDecoration: "underline" }}>
                Actors:{" "}
              </span>
              {movie.Actors}
            </p>
            <p style={{ color: "grey", fontSize: 12 }}>
              <span style={{ color: "orange", textDecoration: "underline" }}>
                Director:{" "}
              </span>
              {movie.Director}
            </p>
            <p style={{ color: "grey", fontSize: 12 }}>
              <span style={{ color: "orange", textDecoration: "underline" }}>
                Box Office:{" "}
              </span>
              {movie.BoxOffice}
            </p>
            <p style={{ color: "grey", fontSize: 12 }}>
              <span style={{ color: "orange", textDecoration: "underline" }}>
                Awards:{" "}
              </span>
              {movie.Awards}
            </p>
            <p style={{ color: "grey", fontSize: 12 }}>
              <span style={{ color: "orange", textDecoration: "underline" }}>
                Country:{" "}
              </span>
              {movie.Country}
            </p>
            {movie.Production && (
              <span
                style={{
                  color: "white",
                  fontSize: 12,
                  backgroundColor: "forestgreen",
                  padding: 4,
                }}
              >
                {movie.Production}
              </span>
            )}
            <div className="card-rating">{movie.Rated}</div>
          </div>
        </div>
        <div className="border-line"></div>
        <div className="lower-part">
          <span
            style={{
              pading: 3,
              fontSize: 14,
              marginLeft: 5,
            }}
          >
            Plot:
          </span>
          <div className="movie-plot">{movie.Plot}</div>
        </div>
        <div className="imdb-ratings">
          <span style={{ backgroundColor: "red", color: "white" }}>
            {movie.Type.toUpperCase()}
          </span>
          <span style={{ backgroundColor: "yellow" }}>{movie.imdbRating}</span>
        </div>
        <div className="liking">
          {isFavourite ? (
            <button
              className="unfavourite-btn"
              onClick={this.handleUnfavouriteClick}
            >
              Unfavourite
            </button>
          ) : (
            <button
              className="favourite-btn"
              onClick={this.handleFavouriteClick}
            >
              Favourite
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default testComp;
