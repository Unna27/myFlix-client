import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                { _id: 1, title: "F9: The Fast Saga", description: "Dom and the crew must take on an international terrorist who turns out to be Dom and Mia's estranged brother.", genres: { name: "Adventure", description: "Adventure is a genre of film that has been designed to provide an action-filled, energetic experience for the film viewer." }, director: { name: "Justin Lin", bio: "Justin Lin is a Taiwanese-born American director, producer, and screenwriter.", birthDate: "1971-10-11", deathDate: "" }, imageURL: "https://m.media-amazon.com/images/M/MV5BMjI0NmFkYzEtNzU2YS00NTg5LWIwYmMtNmQ1MTU0OGJjOTMxXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_UX67_CR0,0,67,98_AL_.jpg", featured: "FALSE", rating: 5.2, releaseDate: "2021-06-25", language: "English", runtime: "2h 25m", cast: ["Vin Diesel", "Michelle Rodriguez", "Jordana Brewster"] },
                { _id: 2, title: "Palmer", description: "An ex-convict strikes up a friendship with a boy from a troubled home.", "genres": { "name": "Drama", "description": "Drama Films are serious presentations or stories with settings or life situations that portray realistic characters in conflict with either themselves, others, or forces of nature." }, director: { name: "Fisher Stevens", bio: "Fisher Stevens is an American actor, director, producer and writer.His most recent successes include winning the 2010 Academy Award for Best Documentary Feature for The Cove and the 2008 Independent Spirit Award for Best Documentary Feature for Crazy Love.", birthDate: "1963-11-27", deathDate: "" }, imageURL: "https://m.media-amazon.com/images/M/MV5BYTZhNzM4MDktYWUwMC00NTE1LTlkN2UtM2Y5ODIwYjZmNTA2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg", featured: "TRUE", rating: 7.3, releaseDate: "2021-01-29", language: "English", runtime: "1h 51m", cast: ["Justin Timberlake", "Juno Temple", "Alisha Wainwright"] },
                { _id: 3, title: "In the Heights", description: "A film version of the Broadway musical in which Usnavi, a sympathetic New York bodega owner, saves every penny every day as he imagines and sings about a better life.", genres: { name: "Musical", description: "Musical film is a film genre in which songs by the characters are interwoven into the narrative, sometimes accompanied by singing and dancing." }, director: { name: "Jon M.Chu", bio: "Jonathan Murray Chu is an American director and screenwriter.", birthDate: "1979-11-02", deathDate: "" }, imageURL: "https://m.media-amazon.com/images/M/MV5BMzM1ZDY0YTktZTYzZi00MjZjLTllMDMtMmNlMmM5NmY4ZjllXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_UX67_CR0,0,67,98_AL_.jpg", featured: "TRUE", rating: 7.4, releaseDate: "2021-06-10", language: "English", runtime: "2h 23m", cast: ["Anthony Ramos", "Corey Hawkins. Leslie Grace"] }
            ],
            selectedMovie: null
        }
    }
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
    render() {
        const movies = this.state.movies;
        const selectedMovie = this.state.selectedMovie;

        if (movies.length === 0)
            return <div className="main-view">The list is empty!</div>;

        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );
    }
}