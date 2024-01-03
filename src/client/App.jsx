import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import NavBar from "./components/NavBar";
import ConsoleList from "./components/ConsoleList";
import ConsoleGameList from './components/ConsoleGameList';
import SingleGameInformation from './components/SingleGameInformation';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

import './App.css'

function App() {

  const [savedUserID, setSavedUserID] = useState(null);
  const [savedUserToken, setSavedUserToken] = useState(null);

  return (
    <>
      <NavBar></NavBar>
     
      <main>
        <Routes>
          <Route path='/' element={
            <HomePage></HomePage>
          } />
          <Route path='/api/consoles' element={
            <ConsoleList></ConsoleList>
          } />
          <Route path='/api/consoles/:consoleName' element={
            <ConsoleGameList></ConsoleGameList>
          } />
          
          <Route path='/api/games/:singleGameId' element={
            // <></>
            <SingleGameInformation 
            savedUserID={savedUserID}
            savedUserToken={savedUserToken}
            ></SingleGameInformation>
          } />

          <Route path='/login' element={
            <Login 
            setSavedUserID={setSavedUserID}
            setSavedUserToken={setSavedUserToken}
            ></Login>
          } />
          <Route path='/register' element={
            <Register></Register>
          } />
        </Routes>
      </main>
    </>
  );
}
 

export default App;
