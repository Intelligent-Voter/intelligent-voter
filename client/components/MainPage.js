import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import { Link, NavLink } from "react-router-dom";
import RepContainer from './RepContainer';
import InputField from './InputField';


function MainPage(props) {
    const { data, updateAddress, onChange } = props;

    const senators = data.senators.map((obj, i) => <div className="senators"><RepContainer homeState={data.state} rep={obj} route={`s${i + 1}`} /></div>)

    return (
        <Fragment>
            <div className="reps-container">
                <Link to="/all"><button className='seeAll'>See All Members</button></Link>
                {/* <Link to='/'><button>Logout</button></Link> */}
                <h1>Your State Representatives</h1>
                <h4>Senators</h4>
                {senators}   {/* PASS IN SENATORS DIVS FROM ARRAY ABOVE */}
                <h4>House</h4>
                <div className="house">
                    <RepContainer homeState={data.state} rep={data.rep} route='r' />
                </div>
                <div className="update">
                    <h4>Moved? Update Your Address</h4>
                    <form onSubmit={updateAddress}>
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
                        <input type='submit' value='update' className='login-button' />
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default MainPage;