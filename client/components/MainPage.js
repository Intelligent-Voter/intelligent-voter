import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import { Link, NavLink } from "react-router-dom";

function MainPage(){
    return( 
    <Fragment>
        <div className = "secondPart">
        <h1>Your State Congress</h1>
        <h4>Senators</h4>
        <div className = "senators">
        <Link className = "test" to= "/individual">
            <button className = "senatorButton" >
                <div className = "senatorButtonInner">
                <div>
                    <div className = "info">Name : XXXXXX  xX XxXXX </div>
                    <div className = "info">Chamber: Xxxx xx xx </div>
                    <div className = "info">Party: XX XX xxx</div>
                </div>
                <div>
                    <div className = "info">Next Election: 2020</div>
                    <div className = "info">State: CA</div>
                    <div className = "info">See Bill Positions + Additonal Info</div>
                </div>
                </div>
            </button>
            </Link>
        </div>
        <h4>House</h4>
        <div className = "house">
        <button className = "senatorButton" >
                <div className = "senatorButtonInner">
                <div>
                    <div className = "info">Name : X X  XX X</div>
                    <div className = "info">Chamber: X  X xX</div>
                    <div className = "info">Party: X X X X x</div>
                </div>
                <div>
                    <div className = "info">Next Election:X X x </div>
                    <div className = "info">State:X X X </div>
                    <div className = "info">See Bill Positions + Additonal Info</div>
                </div>
                </div>
            </button>
        </div>
        </div>
    </Fragment>    
    );
}

export default MainPage;