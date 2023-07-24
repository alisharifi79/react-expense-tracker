import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [btnClicked, setBtnClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveEnteredData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setBtnClicked(false);
  }

  function isClickedHandler() {
    setBtnClicked(true);
  }

  if (!btnClicked) {
    return (
      <div className="new-expense__controls">
        <button onClick={isClickedHandler}>Add New Expense</button>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={titleChangeHandler}
              type="text"
              value={title}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={amountChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
            ></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
            ></input>
          </div>
        </div>
        <div className="new-expense__actios">
          <button type="button" onClick={isClickedHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
