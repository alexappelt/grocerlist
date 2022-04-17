import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";

function App() {

  const [items, setItems] = useState([
    {
        id:1,
        checked: false,
        item: "Six Eggs"
    },
    {
        id:2,
        checked: false,
        item: "Four slices of bacon"
    },
    {
        id:3,
        checked: true,
        item: "One box of chocolates"
    }, 
    {
        id:4,
        checked:true,
        item: "One EnergyDrink"
      }
]);


const handleCheck = (id) => {
  const listItems = items.map((item)=>  item.id === id ? {...item, checked: !item.checked } : item )
  setItems(listItems);
  localStorage.setItem('shoppingList', JSON.stringify(listItems))
}

const handleTrashButton = (id) => {
  const listItems = items.filter((item) => item.id !== id  )
  setItems(listItems);
}

  const name="Alex Appelt";
  return (
    <div className="App">
    <Header title="Groceries List"/>
    <Content 
    items={items}
    handleCheck={handleCheck}
    handleTrashButton={handleTrashButton}
    />
    <Footer 
    length={items.length}
    />
    </div>
  );
}

export default App;
