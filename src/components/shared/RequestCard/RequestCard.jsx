import React from "react";

import "./RequestCard.scss";

export const RequestCard = ({ user, pet, shelter }) => {
  return (
    <>
      <div className="b-card">
        <div className="b-card__boxuser">
          <h4 className="b-card__nameuser">De {user?.fullName}</h4>
        </div>
        <div className="b-card__box">
          <h4 className="b-card__name">
              Petición para {pet?.name}
          </h4>
          <p className="b-card__loc">
            Protectora {shelter?.name}
          </p>
        </div>
      </div>
    </>
  );
};
