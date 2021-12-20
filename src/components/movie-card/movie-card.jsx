import React from 'react';
import PropTypes from 'prop-types'; // to check for a specific set of properties and types in props
import axios from 'axios';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie-card.scss';

// when there is no selected movie, movie card is being displayed with the list of all available movies
export function MovieCard ({movieData, isRemoveFlag}) {

const handleRemove = () =>{
  const token = window.localStorage.getItem('token');
  const user = JSON.parse(window.localStorage.getItem('user'));
  console.log(user.username);
  const url=`https://myflix-ur.herokuapp.com/users/${user.username}/movies/${movieData._id}`;
  console.log(url);
  // send to server for updating 
  axios.delete(url, {
        headers: { Authorization: `Bearer ${token}`}
      }).then (response => {
      const data = response.data;
      console.log(data);
      //set user state with updated value
      window.localStorage.setItem('user',JSON.stringify(data));
      window.alert('Movie has been removed from favorite list');
      window.open(`/users/${user.username}`,'_self');
    }).catch(error =>{
      console.log("Remove failed - " + error);
    })
}

const handleAdd = () =>{
  const token = window.localStorage.getItem('token');
  const user = JSON.parse(window.localStorage.getItem('user'));
  console.log(user.username);
  const url=`https://myflix-ur.herokuapp.com/users/${user.username}/movies/${movieData._id}`;
  console.log(url);
  // send to server for updating 
  
axios({
      method: 'post',
      url: url,
      headers: {
        "Authorization": `Bearer ${token}`
      }
   }).then (response => {
      const data = response.data;
      console.log(data);
      //set user state with updated value
      window.localStorage.setItem('user',JSON.stringify(data));
      window.alert('Movie has been added to favorite list');
      //window.open('/movies','_self');
    }).catch(error =>{
      console.log("Add failed - " + error);
    })
/*
  axios.post(url, {
        headers: { Authorization: `Bearer ${token}`}
      }).then (response => {
      const data = response.data;
      console.log(data);
      //set user state with updated value
      window.localStorage.setItem('user',JSON.stringify(data));
      window.alert('Movie has been added to favorite list');
      //window.open('/movies','_self');
    }).catch(error =>{
      console.log("Add failed - " + error);
    })
    */
}

 console.log(movieData);

        return (
            <Card>
             <Card.Img variant="top" src={movieData.imageURL} />
             <Card.Body>
                 <Card.Title>{movieData.title}</Card.Title>
                 <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`/movies/${movieData._id}`}
                 >
                  <Button variant="link">Open</Button>
                </Link>
                <Button className={isRemoveFlag ? '' : 'hidden'}  type="button" onClick={handleRemove}> Remove </Button>
                <Button className={isRemoveFlag ? 'hidden' : ''}  type="button" onClick={handleAdd}> Add to Favorites</Button>
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

