import React, { useEffect, useState } from 'react'
import { deleteUser, profileUser } from '../../../api/user.api';
import { Button } from '../../shared/Button/Button';
import { Forms } from '../../shared/Forms/Forms';

export const UserProfile = ({ id }) => {
    const [ user, setUser ] = useState({});

    const getUser = async() => {
        const userFetch = await profileUser(id);
        setUser(userFetch);
    }

    useEffect(() => {
        getUser();
    }, [])

    const submitForm = async (e) => {
        e.preventDefault();

        await deleteUser(id);
    }

    return (
        <>
            
            <p>{user.fullName}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.province}</p>
            <p>{user.birthdate}</p>

            <Forms onSubmit={submitForm} method="DELETE">
                <Button type="submit">ELIMINAR</Button>
            </Forms>
        </>
    )
}
