import { useState } from "react";
import { Router, Routes, Route, Link } from 'react-router-dom';

import NavBar from "./NavBar";
import ConsoleList from "./ConsoleList";

import './App.css'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={
          <></>
        } />
        <Route path='/consoles' element={
          <ConsoleList></ConsoleList>
        } />
      </Routes>
    </>
  );
}
 

export default App;
