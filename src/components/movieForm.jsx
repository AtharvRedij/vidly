import React from "react";

const MovieForm = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Movie Form {props.match.params.id}</h1>
      <div
        className="btn btn-primary"
        onClick={() => {
          props.history.push("/movies");
        }}
      >
        Save
      </div>
    </div>
  );
};

export default MovieForm;
