import React from 'react';
import './App.css';

// Pages
import {HomePage} from './Pages/Home/Home';
import {Details} from './Pages/Details/Details';

//Componenst
//import Navbar from './Components/Shared/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Details />
    </div>
  );
}

export default App;
