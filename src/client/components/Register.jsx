import {React, useState} from "react";
import '../App.css';

const Register = () => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const submitRegistration = async(event) => {
    event.preventDefault();

    try {
      // Register to database here
    }
    catch(error) {
      setErrorMessage(error.message);
    }
  }

  return (<>
    <form className="column-flex">
      <h3>Register for a new account:</h3>

      <label>
        Email: <input required type="email" value={email} onChange={(event) => {
          setEmail(event.target.value);
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
    {successMessage && <p>SUCCESS: {successMessage}</p>}
  </>);
}

export default Register;