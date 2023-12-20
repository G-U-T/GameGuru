import {React, useState} from "react";
import '../App.css';

const Login = () => {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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
      if (response.ok) setSuccessMessage(`Logged in!`);
      else setSuccessMessage(null);
    }
    catch(error) {
      setSuccessMessage(null);
      setErrorMessage(error.message);
    }
  }

  return (<>
    <form className="column-flex">
      <h3>Log in to an existing account:</h3>

      <label>
        Username: <input required type="text" value={username} onChange={(event) => {
          setUsername(event.target.value);
        }} />
      </label>

      <label>
        Password: <input required type="text" value={password} onChange={(event) => {
          setPassword(event.target.value);
        }} />
      </label>

      <button onClick={(event) => {submitLogin(event)}}>Login</button>
    </form>

    {errorMessage && <p>ERROR: {errorMessage}</p>}
    {successMessage && <p>SUCCESS: {successMessage}</p>}
  </>);
}

export default Login;