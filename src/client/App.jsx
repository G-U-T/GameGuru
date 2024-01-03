import { Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";
import ConsoleList from "./components/ConsoleList";
import ConsoleGameList from './components/ConsoleGameList';
import SingleGameInformation from './components/SingleGameInformation';
import Login from './components/Login';
import Register from './components/Register';

import './App.css'

function App() {
  return (
    <>
   
     
      <NavBar></NavBar>
     
      <main>
        
        <Routes>
          <Route path='/' element={
            <></>
          } />
          <Route path='/api/consoles' element={
            <ConsoleList></ConsoleList>
          } />
          <Route path='/api/consoles/:consoleName' element={
            <ConsoleGameList></ConsoleGameList>
          } />
          
          <Route path='/api/games/:singleGameId' element={
            // <></>
            <SingleGameInformation></SingleGameInformation>
          } />

          <Route path='/login' element={
            <Login></Login>
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
