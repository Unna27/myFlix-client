import { useParams } from 'react-router-dom';
import { GenreView } from '../components/genre-view/genre-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Genre({movieData}) {
  let params = useParams();
  let genre = movieData.find(
    movie => movie.genres.name === params.name
  ).genres;
  console.log("inside genre" + genre);
  return (
    <Row>
      <Col Col md={8}>
        <GenreView genre = {genre} />
      </Col>
    </Row>
  );
}