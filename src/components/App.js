import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [selectedPizza, setSelectedPizza] = useState({id: '', topping: '', size: 'Small', vegetarian: false})
  
  useEffect(() => {
    fetchPizzas()
  }, [])

  function fetchPizzas() {
    fetch(`http://localhost:3001/pizzas`)
      .then(response => response.json())
      .then(json => setPizzas(json))
  }

  function editPizza(key, value) {
    setSelectedPizza({...selectedPizza, [key]: value})
  }

  function changePizza(e) {
    e.preventDefault();
    if(selectedPizza.id === '') {
      return
    }
    
    fetch(`http://localhost:3001/pizzas/${selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedPizza),
    })
      .then((response) => response.json())
      .then(fetchPizzas);
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza = {selectedPizza} editPizza = {editPizza} changePizza = {changePizza}/>
      <PizzaList pizzas = {pizzas} setSelectedPizza = {setSelectedPizza}/>
    </>
  );
}

export default App;
