import React from 'react';
import './MovieCard.scss';

const MovieCard = ({ data }) => {
  console.log(data)
  return (
    <div className="card-item">
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
    </div>
  )
}

export default MovieCard