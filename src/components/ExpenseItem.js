import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <p className="expense_item-price">£{props.amount}</p>
      </div>
    </div>
  );
}
export default ExpenseItem;
