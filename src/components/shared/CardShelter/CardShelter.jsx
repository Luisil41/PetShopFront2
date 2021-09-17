import React from 'react'

export const CardShelter = ({shelter}) => {
    const { name, address, avatar, provincia } = shelter;
    return (
        <div>
            <p>{name}</p>
            <p>{address}</p>
            <p>{avatar}</p>
            <p>{provincia}</p>
        </div>
    )
}
