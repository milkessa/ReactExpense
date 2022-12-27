import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
      <div className='expense-date'>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
