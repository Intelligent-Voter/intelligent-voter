import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import "regenerator-runtime/runtime";

class RepContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            extraInfo: {},
            phone: null
        }
    }



    async componentDidMount() {
        const names = {
            'Robert': 'Bob',
            'Charles': 'Chuck',
            'Bernard': 'Bernie',
            'Jerrold': 'Jerry'
        }
        let first = this.props.rep.first_name;
        if (names[first]) first = names[first];
        let name = `${first}_${this.props.rep.last_name}`

        // const response = await fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${name}&pithumbsize=110&format=json`)

        // const parsed = await response.json();

        // const image = Object.values(parsed.query.pages)[0].thumbnail.source;

        // const extraInfo = await fetch(`https://cors-anywhere.herokuapp.com/https://api.propublica.org/congress/v1/members/${this.props.rep.id}.json`, {
        //     method: 'GET',
        //     headers: { 
        //         "x-api-key": "UtUCd2v2fjbIMNqQxZaAeVS407ZAVVT9iKsCJO6r"
        //     }
        // })

        // const parsedInfo = await extraInfo.json();


        // const { missed_votes_pct, votes_with_party_pct, phone } = parsedInfo.results[0].roles[0];

        // console.log(parsedInfo)

        // const onCommitteesNum = parsedInfo.results[0].roles[0].committees.length;
        // const subCommitteesNum = parsedInfo.results[0].roles[0].subcommittees.length;

        // this.setState({
        //     // image,
        //     extraInfo: parsedInfo.results[0].roles[0],
        //     phone
        // })
    }

    render() {
    const { rep, route } = this.props;
    let { homeState } = this.props;
    
    let name;
    if (!rep.name) name = `${rep.first_name} ${rep.last_name}`;
    else name = rep.name;

    return (
        <div className = "rep">
          <Link className = "test" to= {`/individual/${route}`}>
            <button className = "senatorButton" >
                <div className = "senatorButtonInner">
                <img src={this.state.image}></img>
                <div>
                    <div className = "info"></div>
                    <div className = "info">{`Name: ${name}`}</div>
                    <div className = "info">{`Party: ${rep.party}`}</div>
                    <div className = "info">{`Phone: ${this.state.phone}`}</div>
                    <div className = "info">{`Missed Votes: ${this.state.extraInfo.missed_votes_pct}%`}</div>
                </div>
                <div>
                    <div className = "info">{`Next Election: ${rep.next_election}`}</div>
                    <div className = "info">{`State: ${homeState}`}</div>
                    <div className ="info">{`Party Loyalty: ${this.state.extraInfo.votes_with_party_pct}%`}</div>
                    <div className = "info">Click for Bill Positions + Additonal Info</div>
                </div>
                </div>
            </button>
          </Link>
        </div>
    )
    }
}

export default RepContainer;