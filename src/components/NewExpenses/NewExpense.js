import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

    function saveEnteredDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData)
    }

  return <div className="new-expense">
    <ExpenseForm onSaveEnteredData={saveEnteredDataHandler} />
  </div>;
}

export default NewExpense;
