import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { UserContext } from "../../../App";

import { RequestByUser } from "../../pages/RequestByUser/RequestByUser";
import { RequestByShelter } from "../../pages/RequestByShelter/RequestByShelter";

export const AllRequestsLayout = () => {
  const user = useContext(UserContext);

  if (user.user === null) return <div>Cargando...</div>
  if (user.user === false) return <Redirect to="/login" />
  if (user.user) {
    if (user.user.role === 'shelter') {
      return <RequestByShelter id={user.user._id} />
    } else {
      return <RequestByUser id={user.user._id} />
    }
  }
};