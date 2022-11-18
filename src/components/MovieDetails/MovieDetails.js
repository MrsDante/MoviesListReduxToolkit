import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail } from '../../features/movies/movieSlice';
import { getSelectedMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetails = () => {
   const { imdbID } = useParams();
   console.log(imdbID)
   const dispatch = useDispatch();
   const data = useSelector(getSelectedMovieOrShow);
   console.log(data)

   useEffect(() => {
     dispatch(fetchAsyncMovieOrShowDetail(imdbID))
   }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
      </div>
    </div>
  )
}

export default MovieDetails