import React, { Component } from "react";

import { handleSearch, addMovieToSearchList } from "./actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      display: "none",
      closeFlag: false,
    };
  }
  handleInputField = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleSearch = () => {
    const { searchText } = this.state;
    this.props.dispatch(handleSearch(searchText));
  };
  addMovieToList = () => {
    const { result: movie } = this.props.search;
    this.props.dispatch(addMovieToSearchList(movie));
  };
  handleNavClose = () => {
    if (this.state.closeFlag === false) {
      this.setState({
        display: "none",
        closeFlag: true,
      });
    } else {
      this.setState({
        display: "inline-block",
        closeFlag: false,
      });
    }
  };
  handleMenu = () => {
    this.setState({
      display: "inline-block",
    });
  };

  render() {
    const { Poster, Title, Genre, Year, Plot, Rated, imdbRating } =
      this.props.search.result;
    const { showSearchResult } = this.props.search;
    return (
      <div className="navbar">
        <div className="left-nav">
          <div
            className="hidden-menu"
            style={{
              display: this.state.display,
            }}
          >
            <span className="nav-close-btn" onClick={this.handleNavClose}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/889/889590.png"
                alt="icn"
              />
            </span>
            <div style={{ borderBottom: "1px solid white", height: 30 }}>
              Navigation
            </div>
            <ul>
              <li>Home</li>
              <li>Movies</li>
              <li>TV Shows</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
            <div className="nav-scl-icn">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174883.png"
                  alt="icn"
                />
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                  alt="icn"
                />
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
                  alt="icn"
                />
              </div>
            </div>
          </div>
          <div className="q-menu" onClick={this.handleMenu}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/130/130918.png"
              alt="menu"
            />
          </div>
          <div>
            <ul className="menu-list">
              <li style={{ display: "inline" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/777/777242.png"
                  alt="logo"
                />
              </li>
              <li style={{ color: "grey" }}>Home</li>
              <li>Movies</li>
              <li>TV Shows</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="right-nav">
          <div className="search-cont">
            <div className="inp-field">
              <input
                placeholder="Enter Movie or TV..."
                onChange={this.handleInputField}
              />
            </div>
            <div className="src-btn" onClick={this.handleSearch}>
              Search
            </div>
          </div>
        </div>
        {showSearchResult && (
          <div className="search-result">
            <div className="search-result-poster">
              <img src={Poster} alt="poster"></img>
            </div>
            <div className="search-result-details">
              <div className="heading">
                <h4 style={{ marginTop: 0, marginBottom: 0 }}>{Title}</h4>
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: 0,
                    fontSize: 12,
                    color: "blue",
                  }}
                >
                  {Genre}
                </p>
                <p
                  style={{
                    marginTop: 0,
                    marginBottom: 3,
                    fontSize: 12,
                    color: "red",
                  }}
                >
                  {Year}
                </p>
                <p className="plotDetails">{Plot}</p>
                <div className="search-rating">
                  <span
                    style={{
                      backgroundColor: "black",
                      padding: 3,
                      color: "white",
                    }}
                  >
                    {Rated}
                  </span>
                  <span
                    style={{
                      marginLeft: 5,
                      backgroundColor: "yellow",
                      padding: 3,
                    }}
                  >
                    {imdbRating}
                  </span>
                  <span
                    style={{
                      marginLeft: 20,
                      backgroundColor: "green",
                      padding: 5,
                      fontSize: 14,
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={this.addMovieToList}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
