import { Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";
import ConsoleList from "./components/ConsoleList";
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
          <Route path='/consoles/*' element={
            <ConsoleList></ConsoleList>
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
