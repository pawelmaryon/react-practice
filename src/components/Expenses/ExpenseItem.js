import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <p className="expense_item-price">£{props.amount}</p>
      </div>
    </Card>
  );
}
export default ExpenseItem;
