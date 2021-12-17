import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
//import './genre-view.scss';

// details of a genre
export function GenreView ({genre}) {
  let navigate = useNavigate();
  return (
        <div className="genre-view">
            <div className="genre-title">
                <span className="label">Title: </span>
                <span className="value">{genre.name}</span>
            </div>
            <div className="genre-description">
                <span className="label">Description: </span>
                <span className="value">{genre.description}</span>
            </div>
            <button onClick={() => {navigate(-1)}}>Back</button>
        </div>
  );
}

// define the property types of the prop acquired
GenreView.propTypes = {
    genre: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
};

