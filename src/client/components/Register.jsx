import {React, useState} from "react";
import '../App.css';

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const VALID_SUCCESS_MESSAGE = `User registered successfully`;

const Register = () => {
  const [username, setUsername] = useState(``);
  const [password, setPassword] = useState(``);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const submitRegistration = async(event) => {
    event.preventDefault();

    try {
      // TODO: Need to check if the username exists first.

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
      const result = await response.json();
      setSuccessMessage(result.message);
    }
    catch(error) {
      console.log(`eror!!`)
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