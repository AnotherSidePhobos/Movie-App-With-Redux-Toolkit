import React, { useEffect } from 'react'
import {fetchAllMovies} from './../../common/api/movieApi';
import { useDispatch } from 'react-redux';
import {addMovies} from './../../features/movies/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import {getAllMovies} from './../../features/movies/movieSlice';
import { useSelector } from 'react-redux';

const Home = () => {

    const movies = useSelector(getAllMovies);
    const dispatch = useDispatch();
    useEffect(() => {
        fetchAllMovies()
        .then((response) => dispatch(addMovies(response)))
    }, []);

    return (
        <div className='container'>
            <div className='movies__listing'>
                {movies.map((movie) => (
                    <MovieCard movie={movie}/>

                ))}        
            </div>
        </div>
    )
}

export default Home
