import "./App.css";
import "./components/Expenses/ExpenseItem";
import ExpenseE from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import { useState } from "react";

const DUMMY = [
  {
    id: "e1",
    title: "Book",
    amount: 254,
    date: new Date(2021, 3, 3),
  },
  {
    id: "e2",
    title: "Pencil",
    amount: 365,
    date: new Date(2021, 5, 5),
  },
  {
    id: "e3",
    title: "Wood Book",
    amount: 985,
    date: new Date(2021, 7, 6),
  },
  {
    id: "e4",
    title: "Computer",
    amount: 320,
    date: new Date(2021, 1, 1),
  },
];

const App = () => {
  const [Expense, setExpenses] = useState(DUMMY);
  const addExpenseHaandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHaandler} />
      <ExpenseE items={Expense} />;
    </div>
  );
};

export default App;
