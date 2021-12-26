import axios from 'axios';
import Home from './Home';
import ProfileView from '../components/profile-view/profile-view';
import { FavMovies } from '../components/profile-view/favorite-movies';
import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default function Profile({movies}) {

 const [user,setUser] =useState(JSON.parse(window.localStorage.getItem('user')));

 useEffect(() => {
   setUser(JSON.parse(window.localStorage.getItem('user')))
 },[]);

const handleUnregister = () =>{
  const token = window.localStorage.getItem('token');
  console.log(user.username);
  const url=`https://myflix-ur.herokuapp.com/users/${user.username}`;
  console.log(url);
  // send to server for updating 
  axios.delete(url, {
        headers: { Authorization: `Bearer ${token}`}
      }).then (response => {
      const data = response.data;
      console.log(data);
      //set user state with updated value
      window.localStorage.clear();
      window.alert('Successfully deregistered.');
      window.open('/','_self');
    }).catch(error =>{
      console.log("Deregister failed - " + error);
    })
}
 if(!user) return <Home />
 if (movies.length === 0)
    return <p>You must be logged in to view data</p>

  const getMovie = (movie) => {
     if(favMoviesListArr.indexOf(movie._id)>=0){
      return movie;
    }
  }
  //console.log(movies);
  const favMoviesListArr = user.favoriteMovies;
  const favMoviesList = movies.filter(getMovie);
  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <ProfileView user={user} />
        </Col>
        <Col md={2}>
          <Button type="button" onClick={handleUnregister}> Unregister </Button>
        </Col>
      </Row>
      <FavMovies favMovies={favMoviesList} />
    </>
      
    );
}