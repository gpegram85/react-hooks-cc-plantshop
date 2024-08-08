import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onPlantSubmit, onSearchInput, onDelete }) {

  return (
    <main>
      <NewPlantForm onPlantSubmit={onPlantSubmit}/>
      <Search onSearchInput={onSearchInput}/>
      <PlantList plants={plants} onDelete={onDelete}/>
    </main>
  );
}

export default PlantPage;
