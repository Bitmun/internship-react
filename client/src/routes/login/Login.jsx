import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { logInUser } from "../../features/auth/reducers/logInUser";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onButtonClick = async () => {
    setCredentialError("");
    const data = { username, password };
    const res = await dispatch(logInUser(data));
    if (res.payload) {
      navigate("/");
    }
    setCredentialError("Check username or password");
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
        <label className="error-label" htmlFor="passwordInput">
          {credentialError}
        </label>
      </div>
      <div className="input-container">
        <button
          type="submit"
          className="input-button"
          onClick={onButtonClick}
          value="Log in"
          id="submitButton"
          aria-label="Submit"
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
