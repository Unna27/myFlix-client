import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

import './director-view.scss';

// details of a single director
export function DirectorView ({director}) {
  let navigate= useNavigate();
  let isDisplay = false;

  if(director.deathDate!== null) isDisplay = true;

  return (
    <Card>
      <Card.Header>Director View</Card.Header>
      <Card.Body>
        <Card.Title>{director.name}</Card.Title>
        <Card.Text>{director.bio}</Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
              <span className="label">Birth-Date: </span>
              <span className="value">{new Date(director.birthDate).toLocaleDateString('en-CA')}</span>
          </ListGroupItem>
          <ListGroupItem className={isDisplay ? '' : 'hidden'}>
            <span className="label">Death-Date: </span>
            <span className="value">{new Date(director.deathDate).toLocaleDateString('en-CA')}</span>
          </ListGroupItem>
        </ListGroup>
        <Button type="button" onClick={() => {navigate(-1)}}>Back</Button>
      </Card.Body>
    </Card>
  );
        
}

// define the property types of the prop acquired
DirectorView.propTypes = {
    director: PropTypes.shape({
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired
    }).isRequired
};