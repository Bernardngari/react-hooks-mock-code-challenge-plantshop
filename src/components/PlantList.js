import React from "react";
import PlantCard from "./PlantCard";

function PlantList({search}) {
  //console.log(search);
  return (
    <ul className="cards">{search.map((plant) => (
      <PlantCard name={plant.name} image={plant.image} price={plant.price} key={plant.id}/>
    ))}</ul>
  );
}

export default PlantList;
