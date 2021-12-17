import React from 'react';
import PropTypes from 'prop-types'; // to check for a specific set of properties and types in props
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie-card.scss';

// when there is no selected movie, movie card is being displayed with the list of all available movies
export function MovieCard ({movieData}) {

 console.log(movieData);

        return (
            <Card>
             <Card.Img variant="top" src={movieData.imageURL} />
             <Card.Body>
                 <Card.Title>{movieData.title}</Card.Title>
                 <Card.Text>{movieData.description}</Card.Text>
                 <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`/movies/${movieData.title}`}
                 >
                  <Button variant="link">Open</Button>
                </Link>
             </Card.Body>
             </Card>
        );
   
      
    
}

// define the property types of the prop acquired
MovieCard.propTypes = {
    movieData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        genres: PropTypes.shape({
            name: PropTypes.string.isRequired
        }),
        director: PropTypes.shape({
            name: PropTypes.string.isRequired
        }),
        rating: PropTypes.Number,
        releaseDate: PropTypes.instanceOf(Date),
        cast: PropTypes.string
    }).isRequired
};

