import React from "react";
import { Link } from 'react-router-dom';
import { SearchBar } from "./SearchBar";
import './NavBar.css'
import UserProfile from "./UserProfile";

const NavBar = ({ isLoggedIn }) => {
  return (
    <>
      <nav id="navbar">
        <h1 id="title">Game Gurus</h1>
        <div id="navbar-links">
          <img src="/home-icon.svg" alt="Home"></img>
          <Link id='navbar-link' to="/">Home</Link>

          <img src="/console-icon.svg" alt="Consoles"></img>
          <Link id='navbar-link' to="/api/consoles">Consoles</Link>

          {isLoggedIn ? (
            <>
              <img src="/" alt="My Account"></img>
              <Link id='navbar-link' to="/profile">My Account</Link>
            </>
          ) : (
            <>
              <img src="/login-icon.svg" alt="Login"></img>
              <Link id='navbar-link' to="/login">Login</Link>

              <img src="/register-icon.svg" alt="Register"></img>
              <Link id='navbar-link' to="/register">Register</Link>
            </>
          )}

        </div>
        
        <div className="search-bar-container">
        <SearchBar />
        <div className="search-results"></div>

      </div>

      
      </nav>
      
      </>
  );
};

export default NavBar;