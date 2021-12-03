import React from 'react';
import axios from 'axios'; // for async opns
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import './main-view.scss';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null, // flag var to set the display (either movie view or movie card)
            user: null,
            isRegistered: true
        }
    }

    // triggers after a component is rendered
    componentDidMount() {
        // local host link = http://localhost:8080/movies
        // heroku link = https://myflix-ur.herokuapp.com/movies
        axios.get("https://myflix-ur.herokuapp.com/movies").then(response => {
            this.setState({ movies: response.data });
        }).catch(error => {
            console.error();
        });
    }

    // triggers when a movie is clicked and set the state var selectedMovie with the currently selected movie
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    // triggers when a user successfully logs in and set the state var user to currently logged in username
    onLoggedIn(user) {
        this.setState({
            user: user
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

        // if there is no user, display the login view. When the user logs in, the user details are passed as prop to the loginview
        if (!user && isRegistered) return <LoginView onLoggedIn={user => { this.onLoggedIn(user) }} setRegister={register => { this.setRegister(register) }} />

        if (!isRegistered) return <RegistrationView setRegister={register => { this.setRegister(register) }} />

        if (movies.length === 0)
            return <div className="main-view" />;

        return (
            // if there is a selected movie, displays details of that movie, else displays the list of all movies
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie) }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );
    }
}