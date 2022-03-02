import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 3, 2 ).toISOString();
  const expenseTitle = "Electricity Bill";
  const expenseAmount = 215
  return (
    <div className="expense-item">
      <div>{expenseDate}</div>
      <div className="expense-item-description">
        <h2 >{expenseTitle}</h2>
        <p className="expense_item-price">£{expenseAmount}</p>
      </div>
    </div>
  );
}
export default ExpenseItem;
