import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import MovieTable from "./MovieTable";

class Movies extends Component {
  state = { movies: getMovies() };
  render() {
    const movies = this.state.movies;
    return movies.length !== 0 ? (
      <div className="container">
        <h1>{`Showing ${movies.length} movies from database`}</h1>
        <MovieTable movies={movies} onDelete={this.handleMovieDelete} />
      </div>
    ) : (
      <h1>There are no movies in database</h1>
    );
  }

  handleMovieDelete = (id) => {
    const movies = this.state.movies;
    const filterdMovies = movies.filter((movie) => movie._id !== id);
    this.setState({ movies: filterdMovies });
  };
}

export default Movies;
