import React from 'react';
import axios from 'axios'; // for async opns
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginView } from '../login-view/login-view';
import RegistrationView from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
            this.setState({ movies: response.data });
           console.log(response.data);
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
      console.log("mount");
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
    }

    // triggers when a user clicks on Register button and also when a user is successfully registered
    setRegister(register) {
        this.setState({
            isRegistered: register
        });
    }

    render() {
        const { user, isRegistered, movies, selectedMovie } = this.state;
   
        if (!user && isRegistered) return (
        <Row>
          <Col>
            <LoginView onLoggedIn={user => { this.onLoggedIn(user) }} setRegister={register => { this.setRegister(register) }} />
          </Col>
        </Row>
        );

        if (!isRegistered) return (
        <Row>
          <Col>
            <RegistrationView setRegister={register => { this.setRegister(register) }} />
          </Col>
        </Row>
        );

        if (movies.length === 0)
            return <div className="main-view" />;
                
        return (
        <Router>
          <Row className="main-view justify-content-md-center">
              <Route exact path="/" render={() => {
              return movies.map(m => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }} />
            <Route path="/movies/:movieId" render={({ match }) => {
              return <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} />
              </Col>
            }} />
          </Row>
        </Router>
      );

    }
}