import { useParams } from "react-router-dom";
import { DirectorView } from "../components/director-view/director-view";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Director(props) {
  let params = useParams();
  let director = props.movieData.find(
    movie => movie.director.name === params.name
  ).director;
  console.log("inside director" + director);
  return (
    <Row>
      <Col Col md={8}>
        <DirectorView director = {director} />
      </Col>
    </Row>
  );
}