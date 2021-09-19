import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import './CardShelter.scss';

export const CardShelter = ({shelter}) => {
    const { name, avatar, province } = shelter;
    const url = 'https://www.mundoperros.es/wp-content/uploads/2016/02/protectoras-de-animales.jpg'
     const prueba={
        backgroundImage: `url(${url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        
      };
    const href = `/profile/${shelter._id}`
   

    return (
        <>
            <div style={prueba} className="b-card" >
        
            <div className="b-card__box">
                <h4 className="b-card__name"> <a className="b-card__link" href={href}>{name}</a></h4>
                <p className="b-card__loc"><FontAwesomeIcon icon={faMapMarkerAlt} /> {province}</p>
            </div>
        </div>
        </>
    )
}
