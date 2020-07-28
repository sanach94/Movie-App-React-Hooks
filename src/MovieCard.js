import React from "react";
import Rating from "./Rating";
import BeautyStars from "beauty-stars";
import "./App.css";

function MovieCard({ Movies }) {
  return (
    <div className="movieCard">
      <img className="imageMovie" src={Movies.image} width="220px" />
      <div>
        <p>Title: {Movies.title}</p>
        <p>Year: {Movies.year}</p>
        <div className="movieRating">
          <BeautyStars className="rate" value={Movies.rating} />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
