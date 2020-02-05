import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  return (
      <div className="containerSignUp">
        <h1>Sign Up</h1>

        <form>
        <div className="field">
            <label>User Name:</label>
            <input className="input" type="text" />
          </div>
          <div className="field">
            <label>Email:</label>
            <input className="input" type="email" />
          </div>
          <div className="field">
            <label>Password:</label>
            <input className="input" type="password" />
          </div>
          <div className="field">
            <label>Confirm Password:</label>
            <input className="input" type="password" />
          </div>
          <button className="button" type="submit">
            Sign up
          </button>
        </form>
        <p className="logIn">
          Have account ?
          <Link className="logInLink" to="/logIn">
            Login
          </Link>
        </p>
      </div>
  );
};

export default SignUp;
