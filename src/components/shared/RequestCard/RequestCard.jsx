import React from "react";

import "./RequestCard.scss";

export const RequestCard = ({ request }) => {
    const { petId, userId, shelterId } = request
  const href = `/request/${request._id}`;


  return (
    <>
      <div className="b-card">
        <div className="b-card__boxuser">
            <h4 className="b-card__nameuser">De {userId.fullName}</h4>
        </div>
        <div className="b-card__box">
          <h4 className="b-card__name">
            <a className="b-card__link" href={href}>
            Petición para {petId.name}
            </a>
          </h4>
          <p className="b-card__loc">
            Protectora {shelterId.name}
          </p>
        </div>
      </div>
    </>
  );
};
