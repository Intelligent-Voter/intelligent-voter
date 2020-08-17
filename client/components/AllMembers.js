import React, {Fragment} from "react"
import ReactDOM from "react-dom"
import AllRep from './AllRep';

class AllMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: [],
      senate: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`https://api.propublica.org/congress/v1/116/house/members.json`, {
            method: 'GET',
            headers: {
            'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
        },
    });
    const everything = await response.json();
    const house = everything.results[0].members;
    // console.log(house);



    const res = await fetch(`https://api.propublica.org/congress/v1/116/senate/members.json`, {
      method: 'GET',
            headers: {
            'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
        },
    });
    const parsedres = await res.json();
    const senate = parsedres.results[0].members;

    this.setState({
      house,
      senate
    })
  }

  render() {
    const houseMembers = this.state.house.map(el => <AllRep homeState={el.state} rep={el} route='r'/>);
    const senateMembers = this.state.senate.map(el => <AllRep homeState={el.state} rep={el} route='s'/>);

    return (
      <div>
        <h1>All House and Senate Members</h1>
        <div className="allMembers">
          {houseMembers}
          {senateMembers}
        </div>
      </div>
    )
  }
}

export default AllMembers;