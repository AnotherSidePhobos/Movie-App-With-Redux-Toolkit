import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import {addMovie, getAllMovies, getMovie} from './../../features/movies/movieSlice';
import {fetchMovieById} from './../../common/api/movieApi';
import './MovieDetail.css';

import {CommentFormRedux} from './../Forms/CommentForm';

const MovieDetail = (props) => {

    const { id } = useParams();
    const movie = useSelector(getMovie)
    const dispatch = useDispatch();
    useEffect(() => {
        fetchMovieById(id)
        .then((response) => dispatch(addMovie(response)))
    }, [])

    const onSubmit = (fromData) => {
        debugger
        console.log(fromData);
    }
    return (
        <div className='container'>
            <br/>
            {
                <div className='detail'>
                    <div>
                        <h2>{movie.title}</h2>
                        <div>
                            <img src={movie.img} alt={movie.title}/>
                        </div>
                    </div>
                    <div className='description'>
                        <div>
                            {movie.details}
                        </div>
                        <div className='comments'>
                            <h5>Stay your comment here</h5>
                            <CommentFormRedux onSubmit={onSubmit}/>

                        </div>
                        <div className='ratio'>
                            <strong>Ratio: {movie.ratio}</strong>
                        </div>
                    </div>
                </div>
                
            }
        </div>
    )
}

export default MovieDetail
    // const movies = useSelector(getAllMovies);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     fetchAllMovies()
    //     .then((response) => dispatch(addMovies(response)))
    // }, []);