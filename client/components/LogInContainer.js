import React, { Component } from 'react';
import Login from './Login.js';

function LoginContainer() {

 

    //we want to render either the login or sign up based on the state
        //pass container state as props to login
        //if state is truthy then we want to show the login option.
        //if state is false show signup option
           //have a button in login that changes the state. 

            return (
            <div>
                <Login />
            </div>
            )
    };


export default LoginContainer;