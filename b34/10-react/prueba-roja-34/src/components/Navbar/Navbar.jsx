import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <Link to='/'>
                        <p className="navbar-brand">Navbar</p>
                    </Link>
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to='/upload'>
                            <p class="nav-link">Subir Película <span class="sr-only">(current)</span></p>
                        </Link>
                    </li>
                    <li class="nav-item active">
                        <Link to='/movies'>
                            <p class="nav-link">Películas<span class="sr-only">(current)</span></p>
                        </Link>
                    </li>
                    </ul>
                </nav>  
            </div>
        )
    }
}

export default Navbar
