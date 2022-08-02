import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  return (
    <ul className="cards">{plants.map((plant) => (
      <PlantCard name={plant.name} image={plant.image} price={plant.price} key={plant.id}/>
    ))}</ul>
  );
}

export default PlantList;
