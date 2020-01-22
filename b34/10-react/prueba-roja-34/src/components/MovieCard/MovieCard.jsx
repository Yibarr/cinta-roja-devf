import React, { Component } from 'react';
import axios from 'axios';

function MovieCard(props){

    const removeMovie=(id)=>{
        
        axios.delete(`http://localhost:4000/delete/movie/${id}`)
        .then(res =>{ 
            console.log(res)
        })
    }

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <img src={props.image} style={{width: '20rem'}} className="card-img-top" alt="Portada de Película"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.genre}</p>
                    <button type="button" className="btn btn-danger" onClick={()=>removeMovie(props.id)}>Borrar</button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
