import React from 'react';
import axios from 'axios';

export class Details extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: []
        }
    }
    
    componentDidMount(){
        console.log("Este es el DidMount");
    }
    componentWillMount(){
        const url = 'https://vero-movie-api.herokuapp.com/movies/read';
        axios.get(url)
            .then((res) => {
                this.setState({movies: res.data});
                console.log(this.state);
                
            })
        console.log("Este es el WilMount");
    }
    componentWillUnmount(){
        console.log("Este es el WillUnmount");
    }

    render(){

        return(
            <div>
                <h2>
                    {/* {this.state.movies[0].title} */}
                </h2>
                
            </div>
        )
    }
}

export default Details;