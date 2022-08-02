import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = useState([]);
  const[search, setSearch] = useState(plants)
  useEffect(() =>{
    fetch("http://localhost:6001/plants")
      .then(r =>r.json())
      .then(data => setPlants(data))
  },[search])
  const onAddPlant = (newPlant) =>{
    setPlants([...plants,newPlant].reverse())
  }
   console.log(plants);




    const onSearch =(value) =>{
    setSearch(plants.filter(plant =>plant.name.toLowerCase().includes(value.toLowerCase())))
  }


  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={onSearch}/>
      <PlantList search={search}/>
    </main>
  );
}

export default PlantPage;
