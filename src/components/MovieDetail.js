import React from "react";

import Card from "react-bootstrap/Card";

const MovieDetail = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.movie.poster} />
      <Card.Body>
        <Card.Title>{props.movie.name}</Card.Title>
        <Card.Text>{props.movie.description}</Card.Text>
        <Card.Subtitle>Cast: {props.movie.cast}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default MovieDetail;
