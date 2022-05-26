//TODO Esta es mi página clúster que va a aglutinar a los hijos
// 1. Importamos los hijos (FoodBox, ...) Importante checkear que se importan cuando creamos nuevos
import React, { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import './App.css';

//Importamos el JSON y lo pasamos por una variable para poder usarlo
import foods from "./foods.json"
const foodsArr = foods;



function App() {
  const [ foods, setFoods ] = useState(foodsArr)


  return (
    <div className="App">

    <h1>Lista de comidas</h1>

    <button>Add New Foods</button>

    <AddFood />

    {
      foods.map((eachFood) => {
        return (
          <FoodBox propFood={eachFood}/>
        )
      })
    }
      
    </div>
  );
}

export default App;
