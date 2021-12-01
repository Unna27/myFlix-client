import React from 'react';

export class MovieView extends React.Component {
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
            <button onClick={() => { onBackClick(null); }}>Back</button>
        </div>
    }
}