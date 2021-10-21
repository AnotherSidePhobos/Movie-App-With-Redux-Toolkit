import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import {addMovie, addComments, getAllMovies, getMovie} from './../../features/movies/movieSlice';
import {fetchMovieById} from './../../common/api/movieApi';
import './MovieDetail.css';

import {CommentReduxForm} from './../Forms/CommentForm';
import CommentForm from './../Forms/CommentForm';

const MovieDetail = (props) => {


    //const [state, setstate] = useState(initialState)

    const { id } = useParams();
    const movie = useSelector(getMovie)
    const movies = useSelector(getAllMovies)
    const dispatch = useDispatch();
    useEffect(() => {
        fetchMovieById(id)
        .then((response) => dispatch(addMovie(response)))
    }, [movies])

    const onSubmit = (fromData) => {
        dispatch(addComments({fromData, id, movies}));
        
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
                            <CommentReduxForm onSubmit={onSubmit}/>


                        </div>
                        <div className='comments'>
                            {movie.comments ? movie.comments : <div>no comments yet</div>}
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