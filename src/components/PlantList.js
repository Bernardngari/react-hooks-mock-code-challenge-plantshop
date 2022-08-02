import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredPlants}) {
  //console.log(search);
  return (
    <ul className="cards">{filteredPlants.map((plant) => (
      <PlantCard name={plant.name} image={plant.image} price={plant.price} key={plant.id}/>
    ))}</ul>
  );
}

export default PlantList;
