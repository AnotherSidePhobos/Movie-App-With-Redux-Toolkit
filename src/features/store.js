import {configureStore} from '@reduxjs/toolkit';
import moviesReducer from './movies/movieSlice';
import {reducer as formReducer} from 'redux-form';
export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        form: formReducer
    }
    
})