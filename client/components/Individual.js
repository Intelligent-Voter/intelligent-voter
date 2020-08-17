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
    // const [bills, setBills] = React.useState([])
    
    

    // const fetching = async () => {
    //     const response = await fetch(`https://api.propublica.org/congress/v1/members/${rep.id}/votes.json`, {
    //         method: 'GET',
    //         headers: {
    //         'x-api-key': 'czotF7qf5gL6JUwX03GdtucgNcSaJOOMgZsutEGF',
    //     },
    //     });
    //     const everything = await response.json();
    //     const billsArr = everything.results[0].votes;
    //     // console.log(billsArr)
    //     return billsArr;
    // }   

    // useEffect(() => {
    //     async function fetchData() {
    //         const billsArr = await fetching();
    //         console.log('billsarr', billsArr);
    //         votes = await billsArr.map(bill => <div><Bill obj={bill} /></div>);
    //     }
    //     fetchData();
    //     // const billsArr = await fetching();
    //     // bills = billsArr.map(bill => <div><Bill obj={bill} /></div>);
    //     setBills(votes);
    // })

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

       
        // console.log(billsArr)
        this.setState({
            bills: votes
        })
    }


    // props.fetchRep();

        
    // const billsArr = fetching();
    // const bills = billsArr.map(bill => <div><Bill obj={bill} /></div>);


    // console.log(props.billsArray);

    
   render() {

        const { route, current } = this.props;
        let name;
        if (route === 'rep') name = current.rep.name;
        else if (route === 's1') name = current.senators[0].name;
        else name = current.senators[1].name;
   
    // console.log(this.state.bills)


    
    // console.log(bills)
    if (this.state.bills.length) {
        return( 
            // <Fragment>
                <div className = "mainIndividual">
                    <h1 className="indieTitle">{name}</h1>
                    <div className = "billPosition">
                        {this.state.bills}
                    </div>
                </div>
            // </Fragment>    
        );
    } else {
        return (
            <div>Just a moment...</div>
        )
    }
   }
}

export default Individual;