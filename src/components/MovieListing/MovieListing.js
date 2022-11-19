import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss';
import { Settings } from '../../common/settings';
import Slider from "react-slick";

const MovieListing = () => {
  /*const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };*/

  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);

  let renderMovies, renderShows = '';
  renderMovies = movies.Response === 'True' ?
    (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />
      })
    ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>);
  
  renderShows = shows.Response === 'True' ?
    (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />
      })
    ) : (<div className="shows-error"><h3>{shows.Error}</h3></div>);
    
    console.log(shows.Response)
    //console.log(movies.Search.map(el => ))
  console.log(renderMovies)
    return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>

      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
        <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieListing