import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./PetCard.scss";

export function PetCard({ pet }) {
  if (pet.type === "perro") {
    pet.icon = <FontAwesomeIcon icon={faDog} />;
  } else if (pet.type === "gato") {
    pet.icon = <FontAwesomeIcon icon={faCat} />;
  } else {
    pet.icon = <FontAwesomeIcon icon={faDove} />;
  }
  const href = `/pet/${pet._id}`;
  const url = 'https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg'
     const prueba={
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        
      };
  return (
    <div style={prueba} className="p-card" >
      <div className="p-card__box">
        <h4 className="p-card__name"><a className="p-card__link" href={href}>{pet.name} </a> {pet.icon}</h4>
        <div className="p-card__boxloc">
        <p className="p-card__loc">{pet.breed}</p>
        <p className="p-card__loc"><FontAwesomeIcon icon={faMapMarkerAlt} /> {pet.province}</p>

        </div>
      </div>
    </div>
  );
}
