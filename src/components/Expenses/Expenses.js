import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function ExpensE(props) {
  return (
    <div>
    <Card className='expenses'>
      <ExpensesFilter />
      <ExpenseItem
        title={props.Expense[0].title}
        amount={props.Expense[0].amount}
        date={props.Expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.Expense[1].title}
        amount={props.Expense[1].amount}
        date={props.Expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.Expense[2].title}
        amount={props.Expense[2].amount}
        date={props.Expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.Expense[3].title}
        amount={props.Expense[3].amount}
        date={props.Expense[3].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
}

export default ExpensE;
