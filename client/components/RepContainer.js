import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";

function RepContainer (props) {
    const { rep, route } = props;
    let { homeState } = props;

    let name;
    if (!rep.name) name = `${rep.first_name} ${rep.last_name}`;
    else name = rep.name;



    return (
        <div className = "rep">
          <Link className = "test" to= {`/individual/${route}`}>
            <button className = "senatorButton" >
                <div className = "senatorButtonInner">
                <div>
                    <div className = "info"></div>
                    <div className = "info">{`Name: ${name}`}</div>
                    <div className = "info">{`Party: ${rep.party}`}</div>
                </div>
                <div>
                    <div className = "info">{`Next Election: ${rep.next_election}`}</div>
                    <div className = "info">{`State: ${homeState}`}</div>
                    <div className = "info">See Bill Positions + Additonal Info</div>
                </div>
                </div>
            </button>
          </Link>
        </div>
    )
}

export default RepContainer;