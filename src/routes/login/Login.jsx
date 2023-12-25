import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AUTH_DATA } from "../../data/data";
import "./login.css";
import { logIn } from "../../features/auth/authSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onButtonClick = () => {
    setUsernameError("");
    setPasswordError("");

    if (username !== AUTH_DATA.username) {
      setUsernameError("Enter correct username");
      return;
    }

    if (password !== AUTH_DATA.password) {
      setPasswordError("Enter correct password");
      return;
    }
    dispatch(logIn());

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
        />
        <label className="error-label" htmlFor="usernameInput">
          {usernameError}
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
          className="input-button"
          type="button"
          onClick={onButtonClick}
          value="Log in"
        />
      </div>
    </div>
  );
}

export default Login;
