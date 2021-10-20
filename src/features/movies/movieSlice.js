import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: [],
    movie: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        },


        addMovie: (state, action) => {
            state.movie = action.payload[0];
debugger
            //let movie = payload.find
            //state.movie = payload;
        }
    },

});

export const {addMovies, addMovie} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovie = (state) => state.movies.movie;

export default movieSlice.reducer;
