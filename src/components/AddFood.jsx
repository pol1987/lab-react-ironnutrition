import React, { useState } from 'react'

function AddFood() {
  const [name, setName] = useState("")
  const [calories, setCalories] = useState(0)
  const [image, setImage] = useState("")

  const handleNameChange = (event) => {
    console.log(event.target.value)

    setName(event.target.value)
  }


  const handleSubmit = (event) => {    
    event.preventDefault()
    console.log("Haciendo submit", event.target.value)
  }

  const handleCaloriesChange = (event) => {
      setCalories(event.target.value)
  }


  return (

    <div>
        <form onSubmit={handleSubmit}>
        
            {/* NOMBRE */}
            <label htmlFor="name">Nombre </label>
            <input type="text" name="name" onChange={handleNameChange} value={name}/>

            {/* CALORIAS */}
            <label htmlFor="calories">Calorías </label>
            <input type="number" name="calories"onChange={handleCaloriesChange} value={calories}/>

            {/* IMAGEN */}
            <label htmlFor="image">Imagen</label>
            <input type="image" name="image"/>

            <button>Submit</button>
        </form>
    </div>
  )
}

export default AddFood