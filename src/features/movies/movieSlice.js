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
        },
        addComments: (state, action) => {
            debugger
            let author = action.payload.fromData.yourName;
            let comment = action.payload.fromData.yourComment;
            let movieId = action.payload.id;
            let moviesArr = action.payload.movies;
            let obj = moviesArr.find((item) => item.id == movieId);
            let newObj = {...obj, comments: comment}

            const newArr = moviesArr.map(o => {
                if (o.id === newObj.id) {
                    return newObj;
                }
                return o;
            })
            state.movies = newArr;
        }
    },

});

export const {addMovies, addMovie, addComments} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getMovie = (state) => state.movies.movie;

export default movieSlice.reducer;
