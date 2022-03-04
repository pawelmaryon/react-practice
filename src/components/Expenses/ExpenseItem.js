import React, {useState} from 'react'
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card"

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  
  const clickHandler =() => {
    setTitle('Updated')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item-description">
        <h2>{title}</h2>
        <p className="expense_item-price">£{props.amount}</p>
      </div>
      <button onClick={clickHandler} >Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
