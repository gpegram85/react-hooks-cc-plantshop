import { useState, useEffect } from 'react';
import NewPlantForm from './NewPlantForm';
import PlantList from './PlantList';
import Search from './Search';

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
      .then((resp) => resp.json())
      .then((plantData) => {
        setPlants(plantData);
      })
      .catch((error) => console.error('Error fetching plants: ', error));
  }, []);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(query.toLowerCase())
  );

  const onDelete = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Error deleting plant. ' + resp.statusText);
        }
        return resp.json();
      })
      .then(() => {
        setPlants((prevPlants) =>
          prevPlants.filter((plant) => plant.id !== id)
        );
      })
      .catch((error) => console.log('Error: ', error));
  };

  const handlePlantSubmit = (newPlant) => {
    fetch(`http://localhost:6001/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(newPlant),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((newPlantData) => {
        setPlants((prevPlants) => [...prevPlants, newPlantData]);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  return (
    <main>
      <NewPlantForm onPlantSubmit={handlePlantSubmit} />
      <Search
        query={query}
        setQuery={setQuery}
      />
      <PlantList
        plants={filteredPlants}
        onDelete={onDelete}
      />
    </main>
  );
}

export default PlantPage;
