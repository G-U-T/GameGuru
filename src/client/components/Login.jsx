import {React, useState} from "react";
import UserProfile from "./UserProfile";
import '../App.css';

const Login = ({setSavedUserID, setSavedUserToken}) => {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const submitLogin = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const result = await response.json();
      console.log('Result after login:', result);
      if (response.ok) {
        setSuccessMessage('Logged in!');
        setIsLoggedIn(true);
        
        setSavedUserID(result.userId);
        setUserId(result.userId);
        console.log('UserID after login:', result.userId);
        setSavedUserToken(result.token);
      } else {
        setSuccessMessage(null);
      }
    } catch (error) {
      setSuccessMessage(null);
      setErrorMessage(error.message);
    }
  };

  return (<>
    
    {!isLoggedIn && (
    <form className="column-flex">
      <h3>Log in to an existing account:</h3>

      <label>
        Username: <input required type="text" value={username} onChange={(event) => {
          setUsername(event.target.value);
        }} />
      </label>

      <label>
        Password: <input required type="password" value={password} onChange={(event) => {
          setPassword(event.target.value);
        }} />
      </label>

      <button onClick={(event) => {submitLogin(event)}}>Login</button>
    </form>)}

    {errorMessage && <p>ERROR: {errorMessage}</p>}
    {successMessage && <p>SUCCESS: {successMessage}</p>}
    {/* {isLoggedIn && <UserProfile userId={userId} />} */}
  </>
  );
}

export default Login;