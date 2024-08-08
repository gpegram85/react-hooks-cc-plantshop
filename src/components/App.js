import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  const [plants, setPlants] = useState([])
  const [initialPlants, setInitialPlants] = useState([])

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(resp => resp.json())
    .then(plantData => {
      setPlants(plantData)
      setInitialPlants(plantData)
    })
    .catch(error => console.error("Error fetching plants: ", error))
  }, [])

  const handlePlantSubmit = (newPlant) => {
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type" : "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => {
      if(!resp.ok) {
        throw new Error("Error adding plant. " + resp.statusText)
      } return resp.json()
    })
    .then((newPlantData) => {
      setPlants(prevPlants => [...prevPlants, newPlantData])
      setInitialPlants(prevPlants => [...prevPlants, newPlantData])
    })
    .catch(error => {
      console.error("Error: ", error)
    })
  }

  const handleSearchInput = (query) => {
    if (query === "") {
      setPlants(initialPlants)
    } else {
      setPlants(initialPlants.filter((plant) => plant.name.toLowerCase().includes(query.toLowerCase())
      ))
    }
  }

  const onDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then(resp => {
      if(!resp.ok) {
        throw new Error("Error deleting plant. " + resp.statusText)
      } return resp.json()
    })
    .then(() => {
      setPlants(prevPlants => prevPlants.filter(plant => plant.id !== id))
    })
    .catch(error => console.log("Error: ", error))
    }

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} onPlantSubmit={handlePlantSubmit} onSearchInput={handleSearchInput} onDelete={onDelete}/>
    </div>
  );

}

export default App;
