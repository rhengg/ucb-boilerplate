import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e: React.BaseSyntheticEvent) => {};

  const handleAccountCreateClick = () => {
    navigate({
      pathname: "/register",
    });
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleLogin}>
        <p className="auth-header">Sign in</p>
        <p className="input-title">Email</p>
        <input
          className="input-main"
          type="email"
          name="email"
          placeholder="abc@email.com"
        />
        <div style={{ minHeight: "1rem" }}></div>

        <p className="input-title">Password</p>
        <input
          className="input-main"
          autoComplete="off"
          type="password"
          name="password"
          placeholder="********"
        />

        <div className="error-container"></div>

        <button
          type="submit"
          className="large-primary-btn"
          style={{
            width: "100%",
            margin: "2rem 0",
          }}
        >
          Sign In
        </button>

        <button
          className="large-secondary-btn"
          style={{
            width: "100%",
          }}
          onClick={handleAccountCreateClick}
        >
          I don't have an account
        </button>
      </form>
    </div>
  );
};

export default Login;
