import React, { Component } from 'react'
import axios from 'axios'

import MovieCard from '../MovieCard/MovieCard'

import './MovieContainer.css';

export class MovieContainer extends Component {

    state = {
        movies:[]
    }

    componentDidMount(){
        console.log(this)
        axios.get('http://localhost:4000/all/movies')
        .then(response =>{
            this.setState({
                movies:response.data
            })
            console.log(this.state.movies)
        })
    }

    renderMovies(){
        return this.state.movies.map((movie,i) =>{

           return <MovieCard id={movie._id} image={movie.image_url} title={movie.title} genre={movie.genre} key={i}/>
        })
    }

    render() {
        console.log('Durante el render')
        return (
            <div className="card-container">
                {
                    this.renderMovies()
                }
            </div>
        )
    }
}

export default MovieContainer
