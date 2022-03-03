
import Expenses from "./components/Expenses/Expenses";

const App = (props) => {
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
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
