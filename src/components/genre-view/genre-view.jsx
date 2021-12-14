import React from 'react';
import PropTypes from 'prop-types';
//import './genre-view.scss';

// details of a genre
class GenreView extends React.Component {
    render() {
        const { genre } = this.props;
        return <div className="genre-view">
            <div className="genre-title">
                <span className="label">Title: </span>
                <span className="value">{genre.name}</span>
            </div>
            <div className="genre-description">
                <span className="label">Description: </span>
                <span className="value">{genre.description}</span>
            </div>
        </div>
     }
}

// define the property types of the prop acquired
GenreView.propTypes = {
    genre: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
};

export { GenreView };