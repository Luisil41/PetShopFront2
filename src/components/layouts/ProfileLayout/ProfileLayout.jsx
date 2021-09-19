import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { Redirect } from "react-router-dom";

import { ShelterProfile } from "../../pages/ShelterProfile/ShelterProfile";
import { UserProfile } from "../../pages/UserProfile/UserProfile";

export const ProfileLayout = () => {
  const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <Redirect to="/login" />
    if (user.user) {
      if (user.user.role === 'shelter') {
        return <ShelterProfile id={user.user._id} />
      } else {
        return <UserProfile id={user.user._id} />
      }
    }
};
