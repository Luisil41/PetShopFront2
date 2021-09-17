import React, { useState, useEffect } from 'react';

import { allShelters } from '../../../api/shelter.api';
import { CardShelter } from '../../shared/CardShelter/CardShelter';

export const ShelterPage = () => {

    const [ shelters, setShelters] = useState([]);

    const requestFetch = async () => {
        const shelterFetch = await allShelters();
        setShelters(shelterFetch);
    }

    useEffect(() => {
        requestFetch();
    }, []);

    return (
        <>
            {shelters.map((e) => (
                <>
                    <CardShelter shelter={e} />
                </>
            ))}
        </>
    )
}
