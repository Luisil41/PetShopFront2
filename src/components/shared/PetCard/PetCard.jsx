import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";


import "./PetCard.scss";

export default function PetCard({ pet }) {

  if(pet.type === 'perro'){
    pet.icon = <FontAwesomeIcon icon={faDog} />
  } else if(pet.type === 'gato'){
    pet.icon = <FontAwesomeIcon icon={faCat} />
  }else {
    pet.icon = <FontAwesomeIcon icon={faDove} />
  }
  const url = `/pet/${pet._id}`
  return (
    <div className="Card1">
      <img
        src="https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
        className="photo"
      />
      <div className="description">
        <div className="line">
          <h1 className="product_name">{pet.name}</h1>
          
          <h1 className="product_price">{pet.icon}</h1>
        </div>
        <h2>{pet.age} años</h2>
        <p className="summary">
         Raza: {pet.breed}
        </p>
        <p className="summary">
         Tamaño: {pet.size}
        </p>
        <a href={url}>Saber más</a>
      </div>
    </div>
  );
}
