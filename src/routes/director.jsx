import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { DirectorView } from "../components/director-view/director-view";
import { MoviesList } from "../components/movies-list/movies-list";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Director({movieData}) {
  let params = useParams();
  let director = movieData.find(
    movie => movie.director.name === params.name
  ).director;

  let directorMoviesList = movieData.filter(
    movie => movie.director.name === params.name
  );

  console.log("inside director" + directorMoviesList);
  return (
    <>
      <Row className="justify-content-md-center">
        <Col Col md={8}>
          <DirectorView director = {director} />
        </Col>
      </Row>
      <MoviesList moviesList={directorMoviesList} />
    </>
    
  );
}

// define the property types of the prop acquired
Director.PropTypes = {
  movieData: PropTypes.array.isRequired
};