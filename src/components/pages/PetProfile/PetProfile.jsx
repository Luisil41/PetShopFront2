import React, { useEffect, useState } from "react";
import { deletePet, profilePet } from "../../../api/pet.api";
import { Button } from "../../shared/Button/Button";
import { Forms } from "../../shared/Forms/Forms";
import { Logout } from "../../shared/Logout/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faDove } from "@fortawesome/free-solid-svg-icons";

// esto no sirve import PetCard from "../../shared/PetCard/PetCard";
import "./ShelterProfile.scss";

export const PetProfile = ({ id }) => {
  const [pet, setPet] = useState({});

  const getPet = async () => {
    const petFetch = await profilePet(id);
    setPet(petFetch);
  };
  const url =
    "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg";
  const prueba = {
    backgroundImage: `url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    getPet();
  }, []);

  if (pet.type === "perro") {
    pet.icon = <FontAwesomeIcon icon={faDog} />;
  } else if (pet.type === "gato") {
    pet.icon = <FontAwesomeIcon icon={faCat} />;
  } else {
    pet.icon = <FontAwesomeIcon icon={faDove} />;
  }

  const submitForm = async (e) => {
    e.preventDefault();

    await deletePet(id);
  };

  return (
    <>
      <div className="b-container">
        <div style={prueba} className="b-container__boximg"></div>
        <div className="b-container__boxinfo">
          <h3 className="b-container__name">{pet?.name}</h3>
          <p className="b-container__phone">
            {pet.icon} {' '} {shelter?.phone}
          </p>
          <p className="b-container__address">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {pet?.province}
          </p>
        </div>
        <div className="b-container__boxdesc">
          <h4 className="b-container__titledesc">Descripción</h4>
          <p className="b-container__desc"></p>
        </div>
        <div className="b-container__boxbtn">
          <Button type="button" className="button">
            Editar
          </Button>
          <Forms onSubmit={submitForm} method="DELETE">
            <Button type="submit" className="button">
              Eliminar
            </Button>
          </Forms>
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </>
  );
};
