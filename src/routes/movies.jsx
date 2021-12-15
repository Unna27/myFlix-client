import { MovieCard } from "../components/movie-card/movie-card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';

export function Movies(props) {
  let movies = props.movieData;
  console.log("inside moviesroute"+ movies);
  if (movies.length === 0)
    return <p>You must be logged in to view data</p>
  return (
      <Row className="justify-content-md-center">
        {movies.map(movie => (
          <Col md={3} key={movie._id} >
            <MovieCard movieData = {movie} />
          </Col>
         ))}
      </Row>
 
  );
}