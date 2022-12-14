import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/APIs/movieAPI';
import { APIKey } from '../../common/APIs/movieAPIKey';
//import { useDispatch } from 'react-redux';
//import { addMovies } from '../../features/movies/movieSlice';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
   // const movieText = 'Harry';
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
   // const seriesText = 'True';
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${term}&type=series`)
    return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieApi
    .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data;
});

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      /*addMovies: (state, { payload }) => {
        state.movies = payload;
      },*/
      removeSelectedMovieOtShow: (state) => {
        state.selectMovieOrShow = {};
      }
    },
    /*extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log('Pending...')
        },
        [fetchAsyncMovies.fulfilled]: (state, (payload) => {
            console.log('Fetched');
            return {...state, movies: payload};
        }),
        [fetchAsyncMovies.rejected]: () => {
            console.log('Rejected')
        }
    }*/
    extraReducers(builder) {
        builder
          .addCase(fetchAsyncMovies.pending, (state, action) => {
              console.log('Pending')
          })
          .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
              console.log('Fetched');
              return {...state, movies: payload};
          })
          .addCase(fetchAsyncMovies.rejected, (state, action) => {
              console.log('Rejected');
          })
          .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
            console.log('Fetched');
            return {...state, shows: payload};
        })
        .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
            console.log('Fetched');
            return {...state, selectMovieOrShow: payload};
        })
    }
});

export const { removeSelectedMovieOtShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export const getAllShows = (state) => state.shows;
export const getSelectedMovieOrShow = (state) => state.selectMovieOrShow;
export default movieSlice.reducer;