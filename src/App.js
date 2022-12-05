import "./App.css";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={Expense[0].title}
        amount={Expense[0].amount}
        date={Expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={Expense[1].title}
        amount={Expense[1].amount}
        date={Expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={Expense[2].title}
        amount={Expense[2].amount}
        date={Expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={Expense[3].title}
        amount={Expense[3].amount}
        date={Expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
