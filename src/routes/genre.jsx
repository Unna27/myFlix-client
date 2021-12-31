import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GenreView } from '../components/genre-view/genre-view';
import { MoviesList } from '../components/movies-list/movies-list';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Genre({movieData}) {
  let params = useParams();

  let genre = movieData.find(
    movie => movie.genres.name === params.name
  ).genres;

  let genreMoviesList = movieData.filter(
    movie => movie.genres.name === params.name
  );

  console.log("inside genre" + genreMoviesList);
  return (
    <>
      <Row className="justify-content-md-center">
        <Col Col md={8}>
          <GenreView genre = {genre} />
        </Col>
      </Row>
     <MoviesList moviesList={genreMoviesList} />
    </>
  );
}


// define the property types of the prop acquired
Genre.PropTypes = {
  movieData: PropTypes.array.isRequired
};