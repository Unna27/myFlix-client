import React from 'react';
import PropTypes from 'prop-types'; // to check for a specific set of properties and types in props
import './movie-card.scss';

// when there is no selected movie, movie card is being displayed with the list of all available movies
class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props; // acquire the state variables from main view

        return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>{movieData.title}</div>;
    }
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
        rating: PropTypes.string,
        releaseDate: PropTypes.instanceOf(Date),
        cast: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
export { MovieCard };