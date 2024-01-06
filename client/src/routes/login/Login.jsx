import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { singIn } from "../../features/auth/authSlice";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const buttonClass = classNames("input-button", {
    "is-loading": isLoading,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onButtonClick = async () => {
    setIsLoading(true);
    setCredentialError("");
    const data = { username, password };
    const response = await fetch(
      "https://task5-2-server.onrender.com/auth/signIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      },
    );

    setIsLoading(false);

    if (!response.ok) {
      const errorData = await response.json();
      setCredentialError(errorData.msg);
      return;
    }

    dispatch(singIn(username));

    navigate("/");
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
      <div className="input-container">
        <button
          type="button"
          className={buttonClass}
          onClick={() => navigate("/signUp")}
          value="Don't have an account?"
          id="signUp"
          aria-label="redirect"
        >
          Don&apos;t have an account?
        </button>
      </div>
    </div>
  );
}
