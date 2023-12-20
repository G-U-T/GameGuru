import { useState } from "react";
import { Router, Routes, Link } from 'react-router-dom';
import Home  from './comps/home.jsx';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/">login</Link>
        <Link to="/">register</Link>
        <Link to="/">My Reviews</Link>
      </nav>
      
    </>
  );
}
 

export default App;
