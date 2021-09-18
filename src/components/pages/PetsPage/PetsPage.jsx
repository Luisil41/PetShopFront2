import React, { useState, useEffect } from 'react';
import { getAllPets } from '../../../api/pet.api';
import{ PetCard }from '../../shared/PetCard/PetCard';


export function PetsPage() {
    const [pets, setPets] = useState([]);

    const getPets = async () => {
        const petsFetch = await getAllPets();
        setPets(petsFetch);
    };

    useEffect(() => {
        getPets();
      }, []);

    return(
        <div className="container__cards">
            {pets.map((el) => (<PetCard key={el._id} pet={el}/>))}
        </div>
    );
}