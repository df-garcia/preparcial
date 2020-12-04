import React from "react";
import "../Movies.css";
import Table from "react-bootstrap/Table";

import {
  FormattedDate,
  FormattedNumber,
  FormattedPlural,
  FormattedMessage,
} from "react-intl";

const MovieList = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>
            <FormattedMessage id="Name" />
          </th>
          <th>
            <FormattedMessage id="DirectedBy" />
          </th>
          <th>
            <FormattedMessage id="Country" />
          </th>
          <th>
            <FormattedMessage id="Budget" />
          </th>
          <th>
            <FormattedMessage id="Release" />
          </th>
          <th>
            <FormattedMessage id="Views" />
          </th>
        </tr>
      </thead>
      <tbody>
        {props.movies.map((movie, index) => {
          return (
            <tr key={movie.id}>
              <td>{movie.id}</td>
              <td
                className="tdHover"
                onClick={() => props.selectMovieHandler(index)}
              >
                {movie.name}
              </td>
              <td>{movie.directedBy}</td>
              <td>{movie.country}</td>
              <td>
                {movie.budget}{" "}
                <FormattedPlural
                  value={movie.budget}
                  one={<FormattedMessage id="Million" />}
                  other={<FormattedMessage id="Millions" />}
                />
              </td>
              <td>
                <FormattedDate
                  value={new Date(movie.releaseDate)}
                  year="numeric"
                  month="long"
                  day="numeric"
                  weekday="long"
                />
              </td>
              <td>
                <FormattedNumber value={movie.views} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MovieList;
