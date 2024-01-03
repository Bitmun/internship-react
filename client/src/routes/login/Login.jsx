import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "./login.css";
import { logInUser } from "../../features/auth/reducers/logInUser";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const buttonClass = classNames("input-button", {
    "is-loading": isLoading,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onButtonClick = async () => {
    setIsLoading(true);
    setCredentialError("");
    const data = { username, password };

    const res = await dispatch(logInUser(data));

    if (res.payload) {
      navigate("/");
      return;
    }

    if (res.error.message === "Failed to fetch") {
      setCredentialError("Check connection");
    } else {
      setCredentialError("Check username and password");
    }
    setIsLoading(false);
  };

  return (
    <div className="login-container">
      <div className="title-container">Login</div>
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
          placeholder="Password..."
          value={password}
          className="input-box"
          onChange={(e) => setPassword(e.target.value)}
          id="passwordInput"
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
        <label className="error-label" htmlFor="passwordInput">
          {credentialError}
        </label>
      </div>
    </div>
  );
}
