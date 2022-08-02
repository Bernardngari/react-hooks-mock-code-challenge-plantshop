import React, {useState} from "react";

function PlantCard({image,name,price}) {
  const[instock, setInStock] = useState(true);
  const toggleInStock = () =>{setInStock(()=>!instock)}
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {instock? (
        <button onClick={toggleInStock} className="primary">{instock? "In Stock":"Out of Stock"}</button>
      ) : (
        <button onClick={toggleInStock}>{instock? "In Stock":"Out of Stock"}</button>
      )}
    </li>
  );
}

export default PlantCard;
