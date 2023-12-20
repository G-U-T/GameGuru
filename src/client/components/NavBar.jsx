import React from "react";
import { Link } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav id="navbar">
      <img src="/home-icon.svg"></img>
      <Link to="/">Home</Link>

      <img src="/console-icon.svg"></img>
      <Link to="/consoles">Consoles</Link>

      <img src="/login-icon.svg"></img>
      <Link to="/login">Login</Link>

      <img src="/register-icon.svg"></img>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default NavBar;