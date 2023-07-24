import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <Card className="expense-item">
    <ExpenseDate date={new Date(props.date)} />
      <div className="expense-item__details">
        <div>
          <h2 className="expense-item__title">{props.title}</h2>
        </div>
        <div className="expense-item__amount">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
