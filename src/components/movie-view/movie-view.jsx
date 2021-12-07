import React from 'react';
import PropTypes from 'prop-types';
//import './movie-view.scss';

// details of a single movie
export class MovieView extends React.Component {
    // function to log the key pressed
    keypressCallback(event) {
        console.log(event.key);
    }

    componentDidMount() {
        // this listener logs all key press events in the console.
        document.addEventListener('keypress', this.keypressCallback);
    }

    componentWillUnmount() {
        // Remove the keypress listener when unmounting this component, else it will be actively listening for this event.
        document.removeEventListener('keypress', this.keypressCallback);
    }

    render() {
        const { movie, onBackClick } = this.props;
        return <div className="movie-view">
            <div className="movie-poster">
                <img src={movie.imageURL} />
            </div>
            <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.title}</span>
            </div>
            <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.description}</span>
            </div>
            <div className="movie-genre">
                <span className="label">Genre: </span>
                <span className="value">{movie.genres.name}</span>
            </div>
            <div className="movie-director">
                <span className="label">Director: </span>
                <span className="value">{movie.director.name}</span>
            </div>
            <div className="movie-rating">
                <span className="label">Rating: </span>
                <span className="value">{movie.rating}</span>
            </div>
            <div className="movie-releasedate">
                <span className="label">ReleaseDate: </span>
                <span className="value">{movie.releaseDate}</span>
            </div>
            <div className="movie-cast">
                <span className="label">Cast: </span>
                <span className="value">{movie.cast}</span>
            </div>
            <button onClick={() => { onBackClick(null); }}>Back</button>
        </div>
    }
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
        rating: PropTypes.Number,
        releaseDate: PropTypes.instanceOf(Date),
        cast: PropTypes.string
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};