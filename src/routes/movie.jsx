import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieView } from '../components/movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Movie({movieData}) {
  let params = useParams();
  console.log(movieData);
  let movie = movieData.find(
    movie => movie._id === params.id
  );
  console.log("inside movieroute" + movie._id);
  return (
    <Row>
      <Col md={8}>
       <MovieView movie={movie} />
      </Col>
    </Row>
  );
}

// define the property types of the prop acquired
Movie.PropTypes = {
  movieData: PropTypes.array.isRequired
};