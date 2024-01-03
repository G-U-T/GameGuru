import React from "react";
import { Link } from 'react-router-dom';
import { SearchBar } from "./SearchBar";
import './NavBar.css'

const NavBar = () => {
  return (
      <>
    
    <nav id="navbar">
    <h1 id="title">
      Game Gurus
    </h1>
      <div id="navbar-links">
        <img src="/home-icon.svg"></img>
        <Link id='navbar-link' to="/">Home</Link>

        <img src="/console-icon.svg"></img>
        <Link id='navbar-link' to="/api/consoles">Consoles</Link>

        <img src="/login-icon.svg"></img>
        <Link id='navbar-link' to="/login">Login</Link>

        <img src="/register-icon.svg"></img>
        <Link id='navbar-link' to="/register">Register</Link>
      </div>
        
        <div className="search-bar-container">
        <SearchBar />
        <div>SearchResults</div>

      </div>

      
      </nav>
      
      </>
  );
};

export default NavBar;