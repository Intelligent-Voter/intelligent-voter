import React, {Fragment} from "react"
import ReactDOM from "react-dom"

function Individual(){
    return( 
    <Fragment>
    
        <div className = "mainIndividual">
            <h1>Name of the Individual</h1>
            <div className = "billPosition">
                <div className= "billFirstSection">
                <div className= "indBillInfo">Bill Title:</div>
                <div>Latest Action:</div>
                <div>Description:</div>
                <div>Postion:</div>
                <div>Total Votes for this Bill:</div>
                <div>Yes:</div>
                <div>No:</div>
                <div>Not Voting:</div>
                </div>
                <div>
                <div>To authorize appropriations and to appropriate amounts for the Veterans Choice Program of the Department of Veterans Affairs, to improve hiring authorities of the Department, to authorize major medical facility leases, and for other purposes.</div>
                <div>Became Public Law No: 115-46.</div>
                <div>Department of Veterans Affairs Bonus Transparency Act</div>
                <div>Yes</div>
                <div>414</div>
                <div>0</div>
                <div>19</div>
                </div>
            </div>
      
        </div>
    
  
      
    </Fragment>    
    );
}

export default Individual;