import React from "react";
import Table from "react-bootstrap/Table";
import MovieRow from "./MovieRow";

const MovieTable = ({ movies, onDelete }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Stock</th>
          <th>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <MovieRow key={movie._id} movie={movie} onDelete={onDelete} />
        ))}
      </tbody>
    </Table>
  );
};

export default MovieTable;
