import React from 'react';
import axios from 'axios'; // for async opns
import { BrowserRouter as Router, Routes, Route, useParams, Link} from 'react-router-dom';

import { LoginView } from '../login-view/login-view';
import RegistrationView from '../registration-view/registration-view';
import Welcome from '../../routes/welcome';
import Home from '../../routes/Home';
import { Movies } from '../../routes/movies';
import Movie from '../../routes/movie';
import Genre from '../../routes/genre';
import Director from '../../routes/director';
import Logout from '../../routes/logout';
//import './main-view.scss';

export class MainView extends React.Component {
    constructor() {
      super();
      this.state = {
        movies: [],
        selectedMovie: null, // flag var to set the display (either movie view or movie card)
        user: null,
        isRegistered: true
      }
      this.selectedMovie=this.setSelectedMovie.bind(this);
      this.onLoggedIn=this.onLoggedIn.bind(this);
      this.setRegister=this.setRegister.bind(this);
      this.getMovies=this.getMovies.bind(this);
      this.onLoggedOut=this.onLoggedOut.bind(this);
    }

    // fetch movies list from API asynchronously
    getMovies(token){
      console.log("inside movies");
      // local host link = http://localhost:8080/movies
      // heroku link = https://myflix-ur.herokuapp.com/movies
      axios.get("https://myflix-ur.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}`}
      }).then(response => {
        // assign the result to the state var movies
        console.log(response.data);
        this.setState({ movies: response.data });
        }).catch(error => {
            console.error();
        });
    }

    // triggers after a component is rendered
    componentDidMount() {
      // access the localStorage to get current user login data
      // this prevents going back to login page, if the page is being refreshed when a user is already logged-in
      let accessToken = localStorage.getItem('token');
      if(accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }

    // triggers when a movie is clicked and set the state var selectedMovie with the currently selected movie
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    // triggers when a user successfully logs in and set the state var user to currently logged in username
    onLoggedIn(authData) {
      console.log(authData);
      this.setState({
          user: authData.user.username
      });
      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.username);
      this.getMovies(authData.token);
    }

    // set localStorage to null
    onLoggedOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.setState({
        user: null
      });
      console.log("logged out");
    }

    // triggers when a user clicks on Register button and also when a user is successfully registered
    setRegister(register) {
        this.setState({
            isRegistered: register
        });
    }

    render() {
        const { user, isRegistered, movies } = this.state;

         return (
           // if there is a selected movie, displays details of that movie, else displays the list of all movies
            <Router>
              <Routes>
                <Route path="/" element={<Welcome />} >
                  <Route
                      index
                      element={<LoginView onLoggedIn={user => { this.onLoggedIn(user) }} />}
                  />
                  <Route path="login" element={<LoginView onLoggedIn={user => { this.onLoggedIn(user) }}/>} />
                  <Route path="register" element={<RegistrationView />} />
                </Route>
                <Route path="home" element={<Home />}>
                  <Route
                      index
                      element={<Movies movieData={this.state.movies}/>} 
                  />
                  <Route path="movies" element={<Movies movieData={this.state.movies}/>} />
                  <Route path="user" element={<LoginView onLoggedIn={user => { this.onLoggedIn(user) }}/>} />
                  <Route path="logout" element={<Logout onLoggedOut={()=> {this.onLoggedOut()}} />} />
                </Route>
                <Route path="movies/:title" element={<Movie movieData={this.state.movies} />} />
                <Route path="genres/:name" element={<Genre movieData={this.state.movies} />} />
                <Route path="directors/:name" element={<Director movieData={this.state.movies} />} />
                <Route path="logout" element={<Logout onLoggedOut={()=> {this.onLoggedOut()}} />} />
                <Route
                  path="*"
                  element={
                    <p>There's nothing here!</p>
                  }
                />
              </Routes>
            </Router>
        );
    }
}