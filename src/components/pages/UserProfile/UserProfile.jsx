import React, { useEffect, useState } from "react";
import { deleteUser, profileUser } from "../../../api/user.api";
import { Button } from "../../shared/Button/Button";
import { Forms } from "../../shared/Forms/Forms";
import { Logout } from "../../shared/Logout/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { getAllPets } from "../../../api/pet.api";
import { PetCard } from "../../shared/PetCard/PetCard";

// esto no sirve import PetCard from "../../shared/PetCard/PetCard";

export const UserProfile = ({ id }) => {
  const [user, setUser] = useState({});

  const url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsiLpDkdOBS_lUa160BCbkfRbHmjgf5v6EPA&usqp=CAU";

  const prueba = {
    backgroundImage: `url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const getUser = async () => {
    const userFetch = await profileUser(id);
    setUser(userFetch);
  };

  useEffect(() => {
    getUser();
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();

    await deleteUser(id);
  };

  return (
    <>
      <div className="b-container">
        <div style={prueba} className="b-container__boximg"></div>
        <div className="b-container__boxinfo">
          <h3 className="b-container__name">{user.fullName}</h3>
          <p className="b-container__address">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {user.province}
          </p>
          {user.verified === true ? (
            <p className="b-container__phone">
              Usuario verificado <FontAwesomeIcon icon={faCheckCircle} />
            </p>
          ) : (
            <p className="b-container__phone">Usuario no verificado</p>
          )}
        </div>
        <div className="b-container__boxdesc">
          <h4 className="b-container__titledesc">Intereses</h4>
          {user.interest === "ambas" ? (
            <p className="b-container__desc">Adopción y casa de acogida</p>
          ) : (
            <p>{user.interest}</p>
          )}
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
