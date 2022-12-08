import "./App.css";
import "./components/Expenses/ExpenseItem";
import ExpenseE from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const Expense = [
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
  return (
    <div>
      <NewExpense />
      <ExpenseE Expense={Expense}></ExpenseE>;
    </div>
  );
}

export default App;
