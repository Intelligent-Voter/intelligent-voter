import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import "regenerator-runtime/runtime";

function Login (props) {
  const { login, onPass, onEmail, username, password } = props

  return (
    <div>
    <h3> Login Form:</h3>
    <form onSubmit={login}>
      <div className='form-label'>
        <label>Username:</label>
        <input type='text'
          required
          className='form'
          name='email'
          value={username}
          onChange={e => onEmail(e.target.value)} />
      </div>
      <div className='form-label'>
        <label>Password:</label>
        <input type='password'
          required
          className='form'
          name='password'
          value={password}
          onChange={e => onPass(e.target.value)} />
      </div>
      <div className='form-label'>
            <input type='submit' value='Login' className='button' /> 
          </div>
        </form>
          <Link className="test" to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  )
 

}

export default Login;