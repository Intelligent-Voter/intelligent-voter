import React, {Fragment} from "react"

import MainPage from "./components/MainPage"
import Individual from "./components/Individual"
import {Route, Redirect, Switch} from "react-router-dom"

function App(){
 
    return(
        <React.Fragment>
        <Switch>
            <Route path ="/home" component={MainPage}></Route>
            <Route path ="/individual" component = {Individual}></Route>
            <Redirect from="/" exact to="/home"></Redirect>
        </Switch>
        </React.Fragment>
    )
}

export default App;