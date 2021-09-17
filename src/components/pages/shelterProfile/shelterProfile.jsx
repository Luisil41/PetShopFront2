import React, { useEffect, useState } from 'react'
import { deleteShelter, profileShelter } from '../../../api/shelter.api';
import { Button } from '../../shared/Button/Button';
import { Form } from '../../shared/Form/Form';

export const ShelterProfile = ({ id }) => {
    const [ shelter, setShelter ] = useState({});

    const getShelter = async() => {
        const shelterFetch = await profileShelter(id);
        setShelter(shelterFetch);
    }

    useEffect(() => {
        getShelter();
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();

        await deleteShelter(id);
    }

    return (
        <>
            <p>{shelter.name}</p>
            <p>{shelter.address}</p>
            <p>{shelter.phone}</p>
            <p>{shelter.province}</p>
            <p>{shelter.description}</p>

            <Form onSubmit={submitForm} method="DELETE">
                <Button type="submit">ELIMINAR</Button>
            </Form>
        </>
    )
}
