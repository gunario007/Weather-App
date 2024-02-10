import React from 'react'
import { Link } from 'react-router-dom'
import rain from './rain.png'


const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
            
       <div className="container">
       <img src={rain} className="card-img" alt="weather"/> 
                <a href="#" className="navbar-brand">WEATHER PREDICTOR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" >
                    <span className="navbar-toggler-icon"></span>
                </button>

            </div>

           
                <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto" >

                    <Link to="/">
                                <li className="nav-item">
                                <a href="" className="nav-link">Home</a>
                                </li>
                    </Link>

                    <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Farmers
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
  <Link to="/farmers">
                                <li className="nav-item">
                                <a href="#farmers" className="nav-link">Warm Weather</a>
                                </li>
                    </Link>
                    <Link to="/bfarmers">
                                <li className="nav-item">
                                <a href="#farmers" className="nav-link">Cool Weather</a>
                                </li>
                    </Link>
    
  </ul>
  </li>

  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            EventPlanners
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <Link to="/event">
                                <li className="nav-item">
                                <a href="#event" className="nav-link">Summer Event</a>
                                </li>
                    </Link>

                    <Link to="/bevent">
                                <li className="nav-item">
                                <a href="#bevent" className="nav-link">Winter Event</a>
                                </li>
                    </Link>

          </ul>
  </li>

                    
  <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Travellers
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                 <Link to="/travellers">
                                <li className="nav-item">
                                <a href="#travellers" className="nav-link">Summer Travellers</a>
                                </li>
                    </Link>

                    <Link to="/btravellers">
                                <li className="nav-item">
                                <a href="#btravellers" className="nav-link">Winter Travellers</a>
                                </li>
                    </Link>
          
          </ul>
  </li>
                   
                    



  

                </ul>

            </div>
        </nav>

    </div>
  )
}

export default Navbar
