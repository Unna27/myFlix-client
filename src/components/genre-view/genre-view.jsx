import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
//import './genre-view.scss';

// details of a genre
export function GenreView ({genre}) {
  let navigate = useNavigate();
  return (
    <Card>
      <Card.Header>Genre View</Card.Header>
      <Card.Body>
        <Card.Title>{genre.name}</Card.Title>
        <Card.Text>{genre.description}</Card.Text>
        <Button type="button" onClick={() => {navigate(-1)}}>Back</Button>
      </Card.Body>
    </Card>
  );
}

// define the property types of the prop acquired
GenreView.propTypes = {
    genre: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
};

