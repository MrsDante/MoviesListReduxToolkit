import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import movieApi from '../../common/APIs/movieAPI';
import { APIKey } from '../../common/APIs/movieAPIKey';
//import { useDispatch } from 'react-redux';
//import { addMovies } from '../../features/movies/movieSlice';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = 'Harry';
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    return response.data;
});

const initialState = {
    movies: {},
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
      addMovies: (state, { payload }) => {
        state.movies = payload;
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
    }
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export default movieSlice.reducer;