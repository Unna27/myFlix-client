import PropTypes from 'prop-types';
import { MovieCard } from "../movie-card/movie-card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function MoviesList({moviesList}) {
  if (moviesList.length === 0)
    return <p>Movies List is empty</p>
  return (
     <Row className="justify-content-md-center">
        {moviesList.map(movie => (
          <Col md={3} key={movie._id} >
            <MovieCard movieData = {movie} isRemoveFlag = {false} />
          </Col>
         ))}
      </Row>
  );
}

// define the property types of the prop acquired
MoviesList.PropTypes = {
  moviesList: PropTypes.array.isRequired
};