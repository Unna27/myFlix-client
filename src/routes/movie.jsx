import { useParams, Outlet } from 'react-router-dom';
import { MovieView } from '../components/movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Movie(props) {
  let params = useParams();
  console.log(props.movieData);
  let movie = props.movieData.find(
    movie => movie.title === params.title
  );
  console.log("inside movieroute" + movie.title);
  return (
    <Row>
      <Col md={8}>
       <MovieView movie={movie} />
      </Col>
      
    </Row>
  );
}