import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";
import VisualD3 from "./VisualD3";

const URL_es =
  "https://gist.githubusercontent.com/josejbocanegra/f784b189117d214578ac2358eb0a01d7/raw/2b22960c3f203bdf4fac44cc7e3849689218b8c0/data-es.json";

const URL_en =
  "https://gist.githubusercontent.com/josejbocanegra/8b436480129d2cb8d81196050d485c56/raw/48cc65480675bf8b144d89ecb8bcd663b05e1db0/data-en.json";

const Main = () => {
  const userLang = navigator.language || navigator.userLanguage;

  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("movies") !== null) {
        setMovies(JSON.parse(localStorage.getItem("movies")));
      }
    } else {
      if (userLang.includes("es")) {
        axios.get(URL_es).then((response) => {
          setMovies(response.data);
          localStorage.setItem("movies", JSON.stringify(response.data));
        });
      } else {
        axios.get(URL_en).then((response) => {
          setMovies(response.data);
          localStorage.setItem("movies", JSON.stringify(response.data));
        });
      }
    }
  }, [userLang]);

  const selectMovieHandler = (index) => {
    setSelectedMovie(movies[index]);
  };

  return (
    <Container>
      <br />
      <Row>
        <Col xs={12} lg={7}>
          <MovieList movies={movies} selectMovieHandler={selectMovieHandler} />
        </Col>
        {selectedMovie != null ? (
          <Col xs={12} lg={5}>
            <MovieDetail movie={selectedMovie} />
          </Col>
        ) : null}
      </Row>
      {movies !== [] ? (
        <Row>
          <Col xs={12}>
            <VisualD3 movies={movies} />
          </Col>
        </Row>
      ) : null}
    </Container>
  );
};

export default Main;
