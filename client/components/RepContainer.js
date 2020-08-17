import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom";
import "regenerator-runtime/runtime";

class RepContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }



    async componentDidMount() {
        const names = {
            'Robert': 'Bob',
            'Charles': 'Chuck',
            'Bernard': 'Bernie'
        }
        let first = this.props.rep.first_name;
        if (names[first]) first = names[first];
        let name = `${first}_${this.props.rep.last_name}`

        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=${name}&pithumbsize=110&format=json`)

        const parsed = await response.json();

        console.log(parsed)

        const image = Object.values(parsed.query.pages)[0].thumbnail.source

        console.log(image)

        this.setState({
            image
        })
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
}

export default RepContainer;