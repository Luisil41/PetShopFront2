import React, { useContext } from "react";
import { ShelterProfile } from "../../pages/ShelterProfile/ShelterProfile";
import { UserContext } from "../../../App";
export const ProfileLayout = () => {
  const userGlobal = useContext(UserContext);

  return (
    <>
      <ShelterProfile id="6141f8c228df17dd82445a76" />
    </>
  );
};
