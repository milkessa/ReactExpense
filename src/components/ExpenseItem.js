import "./ExpenseItem.css";
function ExpenseItem(dete) {
  return (
    <div className='expense-item'>
      <div>{dete.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{dete.title}</h2>
      </div>
      <div className='expense-item__price'>${dete.amount}</div>
    </div>
  );
}

export default ExpenseItem;
