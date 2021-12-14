import React from 'react';
import { MovieCard } from '../movie-card/movie-card';

export class MovieLists extends React.Component {
     // get books from somewhere -- a database? a json file?
     render(){
       const {movies} = this.props;
       console.log("inside list");
       return (
    <ul>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.title} />
      ))}
    </ul>
  );
     }
 
  
}