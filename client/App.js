
import React, {Fragment, Component} from "react"
import MainPage from "./components/MainPage"
import Individual from "./components/Individual"
import { Route, Redirect, Switch, Router, HashRouter} from "react-router-dom"
import Login from './components/Login.js';
import Signup from './components/Signup';
import "@babel/polyfill";


class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          username: "",
          password: "",
          address: "",
          zipcode: "",
          current: null,
        //   redirect: '/login'
        };
    
        this.onAddress = this.onAddress.bind(this);
        this.onZip = this.onZip.bind(this);
        this.onPass = this.onPass.bind(this);
        this.onEmail = this.onEmail.bind(this);
        this.onSignup = this.onSignup.bind(this);
        this.login = this.login.bind(this);
}
    
onAddress(address) {
    this.setState({
        ...this.state,
        address,
    });
}

onPass(password) {
    this.setState({
        ...this.state,
        password,
    });
 }

onEmail(username) {
    this.setState({
        ...this.state,
        username,
    });
}

onZip(zipcode) {
    this.setState({
        ...this.state,
        zipcode,
    });
}

async onSignup(e) {
    e.preventDefault();
    const signup = {
        username: this.state.username,
        password: this.state.password.toString(),
        address: this.state.address,
        zipcode: this.state.zipcode,
    };

    const response = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signup),
    
    });
    const current = response.json();
    console.log('sign up response: ', current)

    this.setState({
        username: "",
        password: "",
        address: "",
        zipcode: "",
        current,
    });
}

async login(e){
    e.preventDefault();
    const login = {
        username: this.state.username,
        password: this.state.password.toString()
    }
    // console.log(login)
    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
    
    });
    const current = await response.json();
    // console.log(current);

    this.setState(
        {
            username: '',
            password: '',
            current
        }
    )
    
    // if (current) {
    //     this.setState({
    //         ...this.state,
    //         redirect: '/home'
    //     })
    // }
 
}

    render() {
        
        return(
            <React.StrictMode>
            <HashRouter>
            <AppJunior current={this.state.current} onSignup={this.onSignup} username={this.state.username} password={this.state.password} onAddress={this.onAddress} onEmail={this.onEmail} onZip={this.onZip} onPass={this.onPass} login={this.login}/>
            </HashRouter>
            </React.StrictMode>
        )  
    }
} 


function AppJunior (props) {
    const {onSignup, onAddress, onEmail, onZip, onPass, login, username, password, current} = props

    // if (props.redirect) {
    //     return <Redirect to={props.redirect} />
    // }
    return(
        <React.Fragment>
        <Switch>
            <Route path ="/login" render={() => <Login onPass={onPass} login={login} onEmail={onEmail} username={username} password={password}/>}></Route>
            <Route path = "/signup" component = {() => <Signup />} ></Route>
            <Route path ="/home" render={() => <MainPage data={current}/>} ></Route>
            <Route path ="/individual" component = {username} ></Route>
            <Redirect from="/" exact to="/login"></Redirect>
        </Switch>
        </React.Fragment>
    )  
}


export default App;