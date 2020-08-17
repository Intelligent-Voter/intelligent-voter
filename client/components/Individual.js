import React, {Fragment, useEffect} from "react"
import ReactDOM from "react-dom"
import Bill from './Bill';
import "regenerator-runtime/runtime";

class Individual extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: []
        }
    }

    async componentDidMount() {
        const { route, current } = this.props;
        let id;
        if (route === 'rep') id = current.rep.id;
        else if (route === 's1') id = current.senators[0].id;
        else id = current.senators[1].id;

        let votes = [];


        const response = await fetch(`https://api.propublica.org/congress/v1/members/${id}/votes.json`, {
            method: 'GET',
            headers: {
            'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
        },
        });
        const everything = await response.json();
        let billsArr = everything.results[0].votes;

        let count = {};

        billsArr = billsArr.filter(el => {
            if (!(el.bill.number in count)) {
                count[el.bill.number] = true;
                return true;
            } else return false;
        })
     
        votes = await billsArr.map(bill => <div className="bigBill"><Bill obj={bill} /></div>);

        this.setState({
            bills: votes
        })
    }


   render() {

        const { route, current } = this.props;
        let name;
        if (route === 'rep') name = current.rep.name;
        else if (route === 's1') name = current.senators[0].name;
        else name = current.senators[1].name;
 
    if (this.state.bills.length) {
        return( 
                <div className = "mainIndividual">
                    <h1 className="indieTitle">{name}</h1>
                    <div className = "billPosition">
                        {this.state.bills}
                    </div>
                </div>  
        );
    } else {
        return (
            <div>Just a moment...</div>
        )
    }
   }
}

export default Individual;