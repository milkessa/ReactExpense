import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = () => {
  //
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  return (
    <form action=''>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-02-09'
            onchange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new_expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
