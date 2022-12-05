function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date1 = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{date1}</div>
    </div>
  );
}

export default ExpenseItem;
