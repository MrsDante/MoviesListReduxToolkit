import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail } from '../../features/movies/movieSlice';
import { getSelectedMovieOrShow } from '../../features/movies/movieSlice';
import { removeSelectedMovieOtShow } from '../../features/movies/movieSlice';

import './MovieDetails.scss';

const MovieDetails = () => {
   const { imdbID } = useParams();
   console.log(imdbID)
   const dispatch = useDispatch();
   const data = useSelector(getSelectedMovieOrShow);
   console.log(data)

   useEffect(() => {
     dispatch(fetchAsyncMovieOrShowDetail(imdbID));
     return () => {
       dispatch(removeSelectedMovieOtShow());
     }
   }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thimbs-up"></i> : {data.imdbRating}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <span>Director</span>
          <span>{data.Director}</span>
        </div>
        <div className="movie-info">
          <span>Stars</span>
          <span>{data.Actors}</span>
        </div>
        <div className="movie-info">
          <span>Generes</span>
          <span>{data.Genre}</span>
        </div>
        <div className="movie-info">
          <span>Languages</span>
          <span>{data.Language}</span>
        </div>
        <div className="movie-info">
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>
      </div>
      <div className="section-right">
         <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  )
}

export default MovieDetails