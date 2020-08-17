
import React, {Fragment, Component} from "react"
import MainPage from "./components/MainPage"
import Individual from "./components/Individual"
import { Route, Redirect, Switch, Router, HashRouter} from "react-router-dom"
import Login2 from './components/Login2';
import AllMembers from './components/AllMembers';
import "@babel/polyfill";

const App = (props) => {
    // array destructuring here and setting it to an empty object;
    const [data, setData] = React.useState({path: '/login', hasAcc: true});

    // this grabs text from input field and changes the state 
    const handleChange = (name, value) => {
        setData(prev => ({... prev, [name]: value}))
    }
    // Login button click function
    const authLogin = async (e) => {
        // const { history } = props;
        const {username, password} = data

        e.preventDefault();
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username, password}),
    
        })
        const current = await response.json();
        // console.log(current);
        if (!current.error) {
            setData(prev => ({...prev, current, path: '/home'}))
            // fetchRep();
        } else {
            setData(prev => ({...prev, hasAcc: false }))
        }
    }
    // Signup submit button click function
    const submitSignup = async (e) => {
        e.preventDefault();
        const {username, password, address, zipcode} = data

        const response = await fetch("/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({username, password, address, zipcode}),
        });

        const current = await response.json();
        // console.log('sign up response: ', current)
        if (current) setTimeout(setData(prev => ({...prev, current, path: '/home'})), 2000);

    }

    // Update address and zipcode
    const updateAddress = async (e) => {
        e.preventDefault();
        const { username, address, zipcode } = data;

        const response = await fetch('/update', {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username, address, zipcode}),
        });

        const current = await response.json();

        if (current) setTimeout(setData(prev => ({...prev, current })), 2000);
    }

    // Click signup button on login page
    const signup = () => {
        setData(prev => ({...prev, hasAcc: false }))
    }

    return (
        <React.Fragment>
        <Switch>
            <Route path='/login' render={(props) => <Login2 {...props} onChange={handleChange} data={data} authLogin={authLogin} signup={signup} submitSignup={submitSignup}/>}></Route>
            <Route path="/home" render={(props) => <MainPage {...props} data={data.current} updateAddress={updateAddress} onChange={handleChange}/>} ></Route>
            <Route path="/individual/r" render={(props) => <Individual {...props} current={data.current} route='rep'/>} ></Route>
            <Route path="/individual/s1" render={(props) => <Individual {...props} current={data.current} route='s1'/>}></Route>
            <Route path="/individual/s2" render={(props) => <Individual {...props} current={data.current} route='s2'/>}></Route>
            <Route path="/all" render={(props) => <AllMembers {...props}/>}></Route>
            <Redirect from="/" exact to="/login"></Redirect>
        </Switch>
        </React.Fragment>
    )
}






export default App;