import React from "react";
// import {useState} from 'react';
import MovieCard from "./MovieCard";
import AddModal from "./addMovie";

function MovieList({ Movies, addMovie }) {
  return (
    <div>
      <div className="movieList">
        {Movies.map((el) => (
          <MovieCard Movies={el} />
        ))}
      </div>
      <AddModal addMovie={(a) => addMovie(a)} />
    </div>
  );
}

export default MovieList;
