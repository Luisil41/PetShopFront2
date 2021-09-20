import React, { useState, useEffect } from 'react';
import { getAllPets } from '../../../api/pet.api';
import{ PetCard }from '../../shared/PetCard/PetCard';


export function PetsLostPage() {
    const [pets, setPets] = useState([]);

    const getPets = async () => {
        const petsFetch = await getAllPets();
        setPets(petsFetch);
    };
    const lostPets = [];

    pets.map((el) => {
        if (el.status === 'perdido'){
            lostPets.push(el);
        }
        return;
    })

    useEffect(() => {
        getPets();
      }, []);

    return(
        <div className="container__cards">
            <div>
                <h3 className="main__title">Mascotas perdidas</h3>
            </div>
            {lostPets.map((el) => (<PetCard key={el._id} pet={el}/>))}
        </div>
    );
}