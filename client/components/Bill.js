import React, {Fragment} from "react";
import ReactDOM from "react-dom";

const Bill = (props) => {
  const { obj } = props;
  let { title, number, latest_action } = obj.bill;
  let { position, description } = obj;
  let { yes, no, not_voting } = obj.total;

  if (title) title = `Description: ${title}`;
  if (!title) title = `Description: ${description}`
  if (number) number = `Bill Title: ${number}`;
  if (latest_action) latest_action = `Latest Action: ${latest_action}`
  if(yes) yes = `Yes: ${yes} `
  if (no) no = `No: ${no}`;
  if (not_voting) not_voting = `Not Voting: ${not_voting}`;
  position = `Position: ${position}`
  
  
  return (
      <div className= "billFirstSection">
        <h3 className= "indBillInfo">{number}</h3>
        <div className="point">{title}</div>
        <div className="point">{latest_action}</div>
        <div className="point">{position}</div>
        <div className="total">Total Votes for this Bill:</div>
        <div className= "totalVotes">{yes}</div>
        <div className= "totalVotes" >{no}</div>
        <div className= "totalVotes" >{not_voting}</div>
      </div>
  )
}

export default Bill;