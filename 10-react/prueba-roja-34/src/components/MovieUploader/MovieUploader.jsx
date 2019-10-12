import React, { Component } from 'react'
import axios from 'axios';

export class MovieUploader extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'',
            image_url:'',
            genre:'',
            directors:[]
        }

    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/create/movie',this.state)
        .then(res => alert('Movie añadida'))
        .catch(error => console.log(error))
    }

    onInputChange = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

    render() {
        return (
            <div>
                <form className="p-5" onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Titulo</label>
                        <input type="text" className="form-control" id="title"
                            onChange={this.onInputChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Url de la imagen</label>
                        <input type="text" class="form-control" id="image_url"
                        onChange={this.onInputChange}
                        value={this.state.image_url}
                        />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Género</label>
                    <select className="form-control" id="genre" onChange={this.onInputChange} value={this.state.genre}>
                        <option>CD</option>
                        <option>HR</option>
                        <option>SF</option>
                    </select>
                    </div>
                
                    <button className="btn btn-success" type="submit">Guardar</button>
                </form>
            </div>
        )
    }
}

export default MovieUploader
