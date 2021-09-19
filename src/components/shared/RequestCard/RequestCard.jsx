import React, { useContext } from "react";
import UserContext from '../../../App';
import "./RequestCard.scss";

export const RequestCard = ({ user, pet, shelter }) => {

  const userGlobal = useContext(UserContext);
  console.log(userGlobal);
  if(userGlobal?.user.role === "user"){
    return (
    <>
      <div className="card">
          <div className="card__imageBox">
            <img className="card__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2b9q7D5b1WahcJ_KthoB2-bbzH5L6Z7OPsw&usqp=CAU" alt="" />
          </div>
          <div className="card__infoBox">
            <p className="card__text">
              Has realizado una solicitud para {pet.name} de la protectora {shelter.name}.
              Haz click para más información sobre esta solicitud.
            </p>
          </div>
      </div>
    </>
  )
  }else {
    return (
      <>
        <div className="card">
            <div className="card__imageBox">
              <img className="card__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2b9q7D5b1WahcJ_KthoB2-bbzH5L6Z7OPsw&usqp=CAU" alt="" />
            </div>
            <div className="card__infoBox">
              <p className="card__text">
                Solicitud recibida para {pet.name} por {user.fullName}.
                Haz click para más información sobre esta solicitud.
              </p>
            </div>
        </div>
      </>
    )
  }

  
};
