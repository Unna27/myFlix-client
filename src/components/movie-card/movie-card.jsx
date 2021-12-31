import React from 'react';
import PropTypes from 'prop-types'; // to check for a specific set of properties and types in props
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './movie-card.scss';
import { setUser } from '../../actions/actions';

// when there is no selected movie, movie card is being displayed with the list of all available movies
export function MovieCard ({movieData, isRemoveFlag}) {

const dispatch = useDispatch();
const user = useSelector(state => state.user);

const [disable, setDisable] = useState(false); // to make AddtoFavorites disabled when its already there in favorites list

useEffect(()=>{
  const favMoviesListArr = user.favoriteMovies;
  //console.log(favMoviesListArr);
  //console.log(movieData._id);
  if(favMoviesListArr.indexOf(movieData._id)>=0){
      setDisable(true);
    }
},[user])


const handleRemove = () =>{
  const token = window.localStorage.getItem('token');
  //const user = JSON.parse(window.localStorage.getItem('user'));
  const url=`https://myflix-ur.herokuapp.com/users/${user.username}/movies/${movieData._id}`;
  // send to server for updating 
  axios.delete(url, {
        headers: { Authorization: `Bearer ${token}`}
      }).then (response => {
      const data = response.data;
      console.log(data);
      //set user state with updated value
      window.localStorage.setItem('user',JSON.stringify(data));
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
      window.alert('Movie has been removed from favorite list');
      window.open(`/users/${user.username}`,'_self');
    }).catch(error =>{
      console.log("Remove failed - " + error);
    })
}

const handleAdd = () =>{
  const token = window.localStorage.getItem('token');
  //const user = JSON.parse(window.localStorage.getItem('user'));
  const url=`https://myflix-ur.herokuapp.com/users/${user.username}/movies/${movieData._id}`;
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
        dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
        //setDisable(true);
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
      
      <Button disabled={disable} className={isRemoveFlag ? 'hidden' : ''}  type="button" onClick={handleAdd}> Add to Favorites </Button>
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
    rating: PropTypes.number,
    releaseDate: PropTypes.instanceOf(Date),
    cast: PropTypes.string
  }).isRequired,
  isRemoveFlag: PropTypes.bool
};

