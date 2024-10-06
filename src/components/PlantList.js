import React from 'react';
import PlantCard from './PlantCard';

function PlantList({ plants, onDelete }) {
  const plantMap = plants.map((plant) => (
    <PlantCard
      plant={plant}
      key={plant.id}
      onDelete={onDelete}
    />
  ));

  return <ul className="cards">{plantMap}</ul>;
}

export default PlantList;
