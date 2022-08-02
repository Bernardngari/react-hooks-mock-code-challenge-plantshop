import React from "react";
import {useForm} from "react-hook-form"

function NewPlantForm({onAddPlant}) {
  const {register,handleSubmit, formState:{errors}} = useForm();
  const onFormSubmit =(data,e) => {
    fetch("http://localhost:6001/plants",{
    method:"POST",
    headers:{
      "Content-Type" :"application/json"
      },
      body: JSON.stringify(data)
    })
    .then(r=>r.json())
    .then(newPlant => onAddPlant(newPlant))
    e.target.reset()
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" {...register("name",{required : true})}  placeholder="Plant name"/>
        {errors.name && <span>This field is required</span>}
        <input type="text"  {...register("image",{required : true})} placeholder="Image URL" />
        <input type="number" {...register("price",{required : true})}  step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
