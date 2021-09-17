import React from 'react';

export const Card = ({pet}) => {
    const { name, age, avatar, sex, breed } = pet;
    return (
        <>
        <div>
            <img src={avatar} alt={name}/>
        </div>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <h2>{age}</h2>
        </div>
        <div>
            <h3>{sex}</h3>
        </div>
        <div>
            <h3>{breed}</h3>
        </div>
        </>
    )
}
