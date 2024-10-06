import React, { useState } from 'react';

function PlantCard({ plant, onDelete }) {
  const { id, name, price, image } = plant;
  const [inStock, setInStock] = useState(true);

  const handleClick = () => {
    setInStock(!inStock);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li
      className="card"
      data-testid="plant-item"
    >
      <img
        src={image}
        alt={name}
      />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <>
          <button
            className="primary"
            onClick={handleClick}
          >
            In Stock
          </button>
          <button
            className="secondary"
            onClick={handleDelete}
          >
            Delete
          </button>
        </>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
