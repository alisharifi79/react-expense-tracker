import React, { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpenses/NewExpense";


const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Tiolet Paper",
    amount: 94.12,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e2",
    title: "Groceries",
    amount: 45.99,
    date: new Date(2020, 8, 5),
  },
  {
    id: "e3",
    title: "Movie Tickets",
    amount: 25.5,
    date: new Date(2021, 2, 20),
  },
  {
    id: "e4",
    title: "Restaurant",
    amount: 75.85,
    date: new Date(2021, 0, 15),
  },
  {
    id: "e5",
    title: "Travel",
    amount: 250.0,
    date: new Date(2021, 7, 28),
  },
];
function App() {
  const [expenses, setNewExpense] = useState(DUMMY_EXPENSES);

  function addNewExpenseHandler(expense) {
    setNewExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
}

export default App;
