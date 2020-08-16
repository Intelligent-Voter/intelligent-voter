import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import { Link, NavLink } from "react-router-dom";

function MainPage(props) {
    const { name, party, next_election } = props.data.rep;
    const { state } = props.data;

    console.log(props.data)
    let partyy;
    if (party === 'D') partyy = 'Democrat';
    else if (party === 'R') partyy = 'Republican';
    else partyy = 'Independent';


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
                    <div className = "info"></div>
                    <div className = "info">Chamber: Xxxx xx xx </div>
                    <div className = "info">Party: XXXxxxx</div>
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
                    <div className = "info">{`Name: ${name}`}</div>
                    <div className = "info">Chamber: House</div>
                    <div className = "info">{`Party: ${partyy}`}</div>
                </div>
                <div>
                    <div className = "info">{`Next Election: ${next_election}`}</div>
                    <div className = "info">{`State: ${state}`} </div>
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