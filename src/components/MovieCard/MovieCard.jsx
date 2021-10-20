import React from "react";
import { Link } from "react-router-dom";
import './MovieCard.css';
const MovieCard = (props) => {
  const { movie } = props;
  return (
    <div className='movies__item'>
        <div>{movie.title}</div>
        <div>
            <Link to={`/movieDetail/${movie.id}`}>
                <img className='image' src={movie.img} alt={movie.title}/>
            </Link>
        </div>
    </div>
  );
};

export default MovieCard;