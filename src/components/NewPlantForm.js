import { Body } from "node-fetch";
import React, { useState } from "react";

function NewPlantForm({onPlantSubmit}) {

  const [plantName, setPlantName] = useState(``)
  const [plantImage, setPlantImage] = useState(``)
  const [plantPrice, setPlantPrice] = useState(``)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPlant = {
      name: plantName,
      price: plantPrice,
      image: plantImage
    }
    onPlantSubmit(newPlant)
    setPlantName("")
    setPlantImage("")
    setPlantPrice("")
  }

  const handleNameChange = (e) => {
    setPlantName(e.target.value)
  }

  const handleImageChange = (e) => {
    setPlantImage(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPlantPrice(e.target.value)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input  type="text" 
                name="name" 
                placeholder="Plant name" 
                value={plantName}
                onChange={handleNameChange}
                />
        <input  type="text" 
                name="image" 
                placeholder="Image URL" 
                value={plantImage}
                onChange={handleImageChange}
                />
        <input  type="number" 
                name="price" 
                step="0.01" 
                placeholder="Price"
                value={plantPrice} 
                onChange={handlePriceChange}
                />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
