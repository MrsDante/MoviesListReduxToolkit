import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = ({ data }) => {
  console.log(data)
  console.log(data.imdbID)
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
      <div className="catd-inner">
        <div className="card-top">
          <img src={ data.Poster } alt="MOVIE POSTERRRRRRRR" />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{ data.Title }</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard