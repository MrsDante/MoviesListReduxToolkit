import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/APIs/movieAPI';
//import { APIKey } from '../../common/APIs/MovieAPIKey';
import { APIKey } from '../../common/APIs/movieAPIKey';

const Home = () => {
  useEffect(() => {
    const movieText = 'Harry';
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
    }
  })

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  )
}

export default Home