import React, {Fragment, Component} from "react"
import { Route, Redirect, Switch, Router, HashRouter} from "react-router-dom"
import "@babel/polyfill";
import { Link, NavLink } from "react-router-dom";
import "regenerator-runtime/runtime";
import InputField from "./InputField";


function Login2(props) {

  const {onChange, authLogin, signup, submitSignup} = props;
  const {path, hasAcc} = props.data

  if (path === '/home') {
    props.history.push('/home')
  }
  if (hasAcc) {
    return (
      <div className="login-outer-container">
        <div className="form-label">
          <form onSubmit={authLogin}>
            <InputField
              name="username"
              label="Username: "
              onChange={onChange}
            />
            <InputField
              name="password"
              label="Password: "
              onChange={onChange}
            />
            <input type='submit' value='Login' className='login-button' /> 
            {/* SIGN UP BUTTON BELOW*/}
            <button className="login-button" onClick={signup}>Sign Up</button>
          </form>
        </div>
      </div>
    )
  } else {
    return (
      <div className="form-label">
        <form onSubmit={submitSignup}>
          <InputField
            name="username"
            label="Username: "
            onChange={onChange}
          />
          <InputField
            name="password"
            label="Password: "
            onChange={onChange}
          />
          <InputField
            name="address"
            label="Address: "
            onChange={onChange}
          />
          <InputField
            name="zipcode"
            label="Zipcode: "
            onChange={onChange}
          />
          <input type='submit' value='Sign Up' className='login-button' />
        </form>
      </div>
    )
  }
}

export default Login2;

