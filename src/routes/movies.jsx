import { Outlet, NavLink } from "react-router-dom"; 
import { MovieCard } from "../components/movie-card/movie-card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';

export function Movies(props) {
  let movies = props.movieData;
  console.log("inside moviesroute"+ movies);
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