import React from "react";
import "./main.css";
import { useNavigate } from "react-router-dom";

export function MainSection() {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    fetch("http://localhost:5000/auth/signOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(() => {
      navigate("/login");
    });
  };
  return (
    <main className="main-wrapper">
      <article className="main">
        <button type="button" onClick={handleLogOut}>
          Sign Out
        </button>
        <h1>Projects</h1>
        <span className="description">
          From configuration to security, web apps to big data — whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you
          need—Spring is modular by design.
        </span>
      </article>
    </main>
  );
}
