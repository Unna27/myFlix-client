import React from 'react';
import PropTypes from 'prop-types'; // to check for a specific set of properties and types in props
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import './movie-card.scss';

// when there is no selected movie, movie card is being displayed with the list of all available movies
class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return (
            <Card>
             <Card.Img variant="top" src={movie.imageURL} />
             <Card.Body>
                 <Card.Title>{movie.title}</Card.Title>
                 <Card.Text>{movie.description}</Card.Text>
                 <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
             </Card.Body>
             </Card>
        );
    }
}
//<Button onClick={() => onMovieClick(movieData)} variant="link">Open</Button>
// define the property types of the prop acquired
MovieCard.propTypes = {
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
        rating: PropTypes.Number,
        releaseDate: PropTypes.instanceOf(Date),
        cast: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
export { MovieCard };
