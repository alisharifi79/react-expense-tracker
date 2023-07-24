import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpesesFilter";
import ExpensesChart from "./ExpensesChart";
import "./ExpensesList.css";

function ExpensesList(props) {
  const [filterdYear, setFilterdYear] = useState("2020");

  function checkFilteredYear(exp) {
    let year = new Date(exp.date)
    return year.getFullYear().toString() === filterdYear
  }
  
  const filteredExpenses = props.items.filter(checkFilteredYear)

  function filterChangeHandler(selectedYear) {
    setFilterdYear(selectedYear);
  }
  let expensesContent = <p>No expenses found.</p>
  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="page-container">
        <ExpensesFilter
          selectedYear={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses = {filteredExpenses}/>
        {expensesContent}
      </Card>
    </div>
  );
}

export default ExpensesList;
