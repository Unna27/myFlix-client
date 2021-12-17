import * as React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios'; // for async opns
import { Routes, Route, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';

import Home from '../routes/Home';
import { LoginView } from './login-view/login-view';
import RegistrationView from './registration-view/registration-view';
import { Movies } from '../routes/movies';
import Movie from '../routes/movie';
import Genre from '../routes/genre';
import Director from '../routes/director';
import Profile from '../routes/profile';

export default function App() {
   const [movies, setMovies] = useState("");
  
  useEffect(()=>{
    // fetch movies list from API asynchronously
    // local host link = http://localhost:8080/movies
    // heroku link = https://myflix-ur.herokuapp.com/movies
    const token = localStorage.getItem('token');
    if(token !== null){
      axios.get("https://myflix-ur.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}`}
    }).then(response => {
      // assign the result to the state var movies
      console.log(response.data);
      setMovies(response.data);
      }).catch(error => {
         console.error();
      })
    }
  },[]);

  return(
    <>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route
          index
          element={<LoginView />}
         />
         <Route path="login" element={<LoginView />} />
         <Route path="register" element={<RegistrationView />} />
         <Route path="users/:username" element={<Profile />} />
         <Route path="movies" element={<Movies movies={movies} />} />
         <Route path="movies/:title" element={<Movie movieData={movies} />} />                
         <Route path="genres/:name" element={<Genre movieData={movies} />} />
         <Route path="directors/:name" element={<Director movieData={movies} />} />
      </Route>
    </Routes>
    </>
  );
}