import classNames from "classnames";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [age, setAge] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const buttonClass = classNames("input-button", {
    "is-loading": isLoading,
  });
  const navigate = useNavigate();

  const onButtonClick = async () => {
    setIsLoading(true);
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
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      return;
    }
    setIsLoading(false);
    navigate("/");
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
          Log in
        </button>
      </div>
      <div className="input-container">
        <button
          type="button"
          className={buttonClass}
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
