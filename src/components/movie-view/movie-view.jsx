import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button, ListGroup } from 'react-bootstrap';
import './movie-view.scss';

// details of a single movie
export function MovieView ({movie}) {
   let navigate = useNavigate();
     console.log("inside movieview"+ movie.description);
       return (
          <Card>
            <Card.Img variant="top" src={movie.imageURL} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <span className="label">Rating: </span>
                  <span className="value">{movie.rating}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="label">ReleaseDate: </span>
                  <span className="value">{movie.releaseDate}</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="label">Cast: </span>
                  <span className="value">{movie.cast}</span>
                </ListGroup.Item>
              </ListGroup>
              <Link
                to={`/genres/${movie.genres.name}`}
              >
                <Button variant="link">Genre</Button>
              </Link>
              <Link
                to={`/directors/${movie.director.name}`}
               >
                <Button variant="link">Director</Button>
              </Link>
              <Button onClick={() => {navigate(-1)}}>Back</Button>
            </Card.Body>
          </Card>
        );
    
}

// define the property types of the prop acquired
MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        genres: PropTypes.shape({
            name: PropTypes.string.isRequired
        }),
        director: PropTypes.shape({
            name: PropTypes.string.isRequired
        }),
        cast: PropTypes.array
    }).isRequired
};
