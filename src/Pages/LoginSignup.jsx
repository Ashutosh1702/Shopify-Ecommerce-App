import React, { useState } from "react";
import "../CSS/LoginSignup.css" 

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Executed", formData);
    // Add your login logic here
  };

  const signup = async () => {
    console.log("Signup Executed", formData);
    // Add your signup logic here
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        <p className="loginsignup-login">
          {state === "Sign Up"
            ? "Already have an account? "
            : "Don't have an account? "}
          <span
            onClick={() => {
              setState(state === "Login" ? "Sign Up" : "Login");
            }}
          >
            {state === "Sign Up" ? "Login here" : "Sign up here"}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p className="loginsignup-agree-text">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
