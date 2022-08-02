import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = useState([]);
  const[search, setSearch] = useState("")
  useEffect(() =>{
    fetch("http://localhost:6001/plants")
      .then(r =>r.json())
      .then(data => setPlants(data))
  },[])
  const onAddPlant = (newPlant) =>{
    setPlants([...plants,newPlant].reverse())
  }
     const filteredPlants=plants.filter(plant =>plant.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search  search={search} setSearch={setSearch} />
      <PlantList filteredPlants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
