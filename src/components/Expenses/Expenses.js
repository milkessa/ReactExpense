import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";

const ExpensE = (props) => {
  const [filterdyear, setFilteredYear] = useState("2019");
  const filterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filterdyear} onChangeFilter={filterChange} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default ExpensE;
