import { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from "../movie-card/movie-card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function FavMovies({favMovies}) {
  if (favMovies.length === 0)
    return <p>You have no favorite Movies</p>
  return (
     <Row className="justify-content-md-center">
        {favMovies.map(movie => (
          <Col md={3} key={movie._id} >
            <MovieCard movieData = {movie} isRemoveFlag = {true} />
          </Col>
         ))}
      </Row>
  );
}