import {React, useState} from "react";
import '../App.css';

const VALID_SUCCESS_MESSAGE = `User registered successfully`;

const Register = () => {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const submitRegistration = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.status === 409) {
        setErrorMessage(`Cannot register a username that already exists!`);
        return;
      }
      else if (response.status === 422) {
        setErrorMessage(`Username and password needs to be at least 4 characters long.`);
        return;
      }
      
      const result = await response.json();
      setSuccessMessage(result.message);
      setErrorMessage(null);
    }
    catch(error) {
      setErrorMessage(error.message);
    }
  }

  return (<>
    <form className="column-flex">
      <h3>Register for a new account:</h3>

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

      <button onClick={(event) => {submitRegistration(event)}}>Register</button>
    </form>

    {errorMessage && <p>ERROR: {errorMessage}</p>}
    {successMessage === VALID_SUCCESS_MESSAGE && <p>SUCCESS: {successMessage}</p>}
  </>);
}

export default Register;