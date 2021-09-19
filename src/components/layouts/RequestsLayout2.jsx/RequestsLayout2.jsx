import React, { useContext } from "react";
import { UserContext } from "../../../App";
import { RequestByUser } from "../../pages/RequestByUser/RequestByUser";
import { RequestByShelter } from "../../pages/RequestByShelter/RequestByShelter";


export const RequestsLayout2 = () => {
  const userGlobal = useContext(UserContext);

  console.log(userGlobal);

  return (
    <>
      {userGlobal.user.role === "shelter" ? (
        <RequestByShelter id={userGlobal?.user._id} />
      ) : (
        <RequestByUser id={userGlobal?.user._id} />
      )}
    </>
  );
};