import React from "react";
import { useParams } from "react-router-dom";

import { PetProfile } from '../../pages/PetProfile/PetProfile';

export const PetProfileLayout = () => {
    const { id } = useParams();

    return <PetProfile id={id} />
}
