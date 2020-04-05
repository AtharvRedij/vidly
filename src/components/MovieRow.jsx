import React from "react";
import Button from "react-bootstrap/Button";

const MovieRow = ({ movie, onDelete }) => {
  const { _id, title, genre, numberInStock, dailyRentalRate } = movie;
  const { name: genreName } = genre;
  return (
    <tr>
      <td>{title}</td>
      <td>{genreName}</td>
      <td>{numberInStock}</td>
      <td>{dailyRentalRate}</td>
      <td>
        <Button
          variant="danger"
          onClick={() => {
            onDelete(_id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default MovieRow;
