import React, { useContext } from "react";
import { ShelterProfile } from "../../pages/ShelterProfile/ShelterProfile";
import { UserContext } from "../../../App";
import { UserProfile } from "../../pages/UserProfile/UserProfile";


export const ProfileLayout = () => {
  const userGlobal = useContext(UserContext);
  console.log(userGlobal);
  return (
    <>
      {userGlobal.user.role === "shelter" ? (
        <ShelterProfile id={userGlobal?.user._id} />
      ) : (
        <UserProfile id={userGlobal?.user._id} />
      )}
    </>
  );
};
