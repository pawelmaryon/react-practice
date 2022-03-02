import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2022, 3, 2 ),
    title: "Electricity and Gas",
    amount: 215
  },
  {
    date: new Date(2022, 3, 1 ),
    title: "Car insurance",
    amount: 650
  },
  {
    date: new Date(2022, 3, 2 ),
    title: "Nursery",
    amount: 110.83
  },
  { 
    date: new Date(2022, 3, 2 ),
    title: "Rent",
    amount: 1250
  }
  ]
  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount}  date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount}  date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount}  date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount}  date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
