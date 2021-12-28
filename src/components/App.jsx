import * as React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios'; // for async opns
import { Routes, Route } from 'react-router-dom';

import Home from '../routes/Home';
import { LoginView } from './login-view/login-view';
import RegistrationView from './registration-view/registration-view';

import { setMovies, setUser } from '../actions/actions';
import { Movies } from '../routes/movies';
import Movie from '../routes/movie';
import Genre from '../routes/genre';
import Director from '../routes/director';
import Profile from '../routes/profile';
import Logout from '../routes/logout';

  const App = () => {
  
  const dispatch = useDispatch();
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
      dispatch(setMovies(response.data));
      dispatch(setUser(JSON.parse(localStorage.getItem('user'))));
      }).catch(error => {
         console.error();
      })
    }
  },[dispatch])
  
  const movies = useSelector((state) => state.movies);

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
         <Route path="users/:username" element={<Profile movies={movies} />} />
        
         <Route path="movies" element={<Movies movies={movies} />} />
         <Route path="movies/:id" element={<Movie movieData={movies} />} />                
         <Route path="genres/:name" element={<Genre movieData={movies} />} />
         <Route path="directors/:name" element={<Director movieData={movies} />} />
          <Route path="logout" element={<Logout />} />
         <Route path="*" 
                element={
                          <main style={{ padding: "1rem" }}>
                          <p>There's nothing here!</p>
                          </main>
                        }
          />
      </Route>
    </Routes>
    </>
  );
}

export default App;