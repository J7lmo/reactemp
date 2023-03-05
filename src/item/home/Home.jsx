import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Link } from 'react-router-dom';
import imgbase from '../../img/baseimg.jpeg';
import Navbar from '../navbar/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-center'>
      <Link to="/login">
      <button>LogPage</button>
      </Link>
      <h1>Home</h1>
      <img src={imgbase} alt="imgbase" /><br/>
    </div>
    </div>
  )
}

export default Home