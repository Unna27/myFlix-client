import { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from '../components/movie-card/movie-card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import VisibilityFilterInput from '../components/visibility-filter-input/visibility-filter-input_old';

export function Movies({movies}) {
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  
  if (movies.length === 0)
    return <p>Data is being loaded...</p>
  
  let filteredMovies = movies;

  if (visibilityFilter !== '') {
    filteredMovies = movies.filter(m => m.title.toLowerCase().includes(visibilityFilter.toLowerCase()));
  }

  console.log("inside moviesroute"+ filteredMovies);

  return (
      <Row className="justify-content-md-center">
        <Col md={12} style={{ margin: '1em'}} >
          <VisibilityFilterInput visibilityFilter={visibilityFilter} />
        </Col>
        {filteredMovies.map(movie => (
          <Col md={3} key={movie._id} >
            <MovieCard movieData = {movie} isRemoveFlag = {false} />
          </Col>
         ))}
      </Row>
  );
}