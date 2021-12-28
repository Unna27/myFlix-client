import PropTypes from 'prop-types';
import { MovieCard } from "../movie-card/movie-card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function FavMovies({favMovies}) {
  if (favMovies.length === 0)
    return <p>Favorite Movies List is empty</p>
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

// define the property types of the prop acquired
FavMovies.PropTypes = {
  favMovies: PropTypes.array.isRequired
};