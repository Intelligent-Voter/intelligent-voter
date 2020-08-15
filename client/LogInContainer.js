import React, { Component } from 'react';
import Login from './Login.js';
import Signup from './Signup.js';

class LogInContainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            LogInOn: true
        }
    }

    render () {
        const {logInOn} = this.state;
            return (
            <div>
                {/* {LogInOn && <Login />} 
                {!LogInOn && <Signup />}  */}
                <Login />
                <Signup />
            </div>
    
            )
    
    };
};

export default LogInContainer;