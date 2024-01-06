import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");
  const [age, setAge] = useState(0);
  const [ageError, setAgeError] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const buttonClass = classNames("input-button", {
    "is-loading": isLoading,
  });
  const navigate = useNavigate();

  const onButtonClick = async () => {
    setIsLoading(true);
    setAgeError("");
    setFirstNameError("");
    setLastNameError("");
    setUsernameError("");
    setPasswordError("");
    setRepeatPasswordError("");
    const data = {
      username,
      password,
      repeatPassword,
      firstName,
      lastName,
      age,
    };
    const response = await fetch("http://localhost:5000/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      setIsLoading(false);
      const errorData = await response.json();
      const errorsArray = errorData.errors;
      for (let i = 0; i < errorsArray.length; i += 1) {
        const { msg } = errorsArray[i];
        switch (errorsArray[i].type) {
          case "username": {
            setUsernameError(msg);
            break;
          }
          case "password": {
            setPasswordError(msg);
            break;
          }
          case "repeatPassword": {
            setRepeatPasswordError(msg);
            break;
          }
          case "firstName": {
            setFirstNameError(msg);
            break;
          }
          case "lastName": {
            setLastNameError(msg);
            break;
          }
          case "age": {
            setAgeError(msg);
            break;
          }
          default: {
            console.log("some unknown error");
          }
        }
      }
      return;
    }
    setIsLoading(false);
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="title-container">Sign Up</div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username..."
          value={username}
          className="input-box"
          onChange={(e) => setUsername(e.target.value)}
          id="usernameInput"
          aria-label="username"
        />
        <label className="error-label" htmlFor="usernameInput">
          {usernameError}
        </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="First name..."
          value={firstName}
          className="input-box"
          onChange={(e) => setFirstName(e.target.value)}
          id="firstNameInput"
          aria-label="firstName"
        />
        <label className="error-label" htmlFor="firstNameInput">
          {firstNameError}
        </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Last name..."
          value={lastName}
          className="input-box"
          onChange={(e) => setLastName(e.target.value)}
          id="lastNameInput"
          aria-label="lastName"
        />
        <label className="error-label" htmlFor="lastNameInput">
          {lastNameError}
        </label>
      </div>
      <div className="input-container">
        <div>Age:</div>
        <input
          type="number"
          placeholder="Age"
          value={age}
          className="input-box"
          onChange={(e) => setAge(e.target.value)}
          id="ageInput"
          aria-label="age"
        />
        <label className="error-label" htmlFor="ageInput">
          {ageError}
        </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Password..."
          value={password}
          className="input-box"
          onChange={(e) => setPassword(e.target.value)}
          id="passwordInput"
        />
        <label className="error-label" htmlFor="passwordInput">
          {passwordError}
        </label>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Repeat password..."
          value={repeatPassword}
          className="input-box"
          onChange={(e) => setRepeatPassword(e.target.value)}
          id="repeatPasswordInput"
        />
        <label className="error-label" htmlFor="repeatPasswordInput">
          {repeatPasswordError}
        </label>
      </div>
      <div className="input-container">
        <button
          type="submit"
          className={buttonClass}
          onClick={onButtonClick}
          value="Log in"
          id="submitButton"
          aria-label="Submit"
          disabled={isLoading}
        >
          Sign Up
        </button>
      </div>
      <div className="input-container">
        <button
          type="button"
          className="input-button"
          onClick={() => navigate("/login")}
          value="Don't have an account?"
          id="login"
          aria-label="redirect"
        >
          Already have an account?
        </button>
      </div>
    </div>
  );
}
