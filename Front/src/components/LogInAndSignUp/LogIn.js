import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./login.css";

const LogIn = () => {
  return (
    <div className="app">
      <div className="container">
        <h1>Log In</h1>

        <form>
          <div className="field">
            <label>Email:</label>
            <input className="input" type="email" />
          </div>
          <div className="field">
            <label>Password:</label>
            <input className="input" type="password" />
          </div>
          <button className="button" type="submit">
            log in
          </button>
        </form>
        <p className="signUp">
          Don't have account ?
          <Link className="signUpLink" to="/signUp">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
