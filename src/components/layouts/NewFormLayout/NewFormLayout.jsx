import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { Redirect } from "react-router-dom";

import { FormNew } from "../../pages/FormNew/FormNew";

export const NewFormLayout = () => {
    const user = useContext(UserContext);

    if (user.user === null) return <div>Cargando...</div>
    if (user.user === false) return <Redirect to="/login" />
    if (user.user) {
      if (user.user.role === 'shelter') {
        return <Redirect to="/" />
      } else {
        return <FormNew />
      }
    }
}
