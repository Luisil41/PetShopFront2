import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

import "./Header.scss";

export const Header = (props) => {
    return (
        <header className="header">
            <div className="logo__container">
                <span className="logo"><FontAwesomeIcon icon={faPaw} /></span>
                <h1 className="title">{props.title}</h1>
            </div>
            <div className="image__container">
                <img className="image" src="https://cdn.cienradios.com/wp-content/uploads/sites/2/2020/07/D%C3%ADa-mundial-del-perro-c%C3%B3mo-ser-el-mejor-due%C3%B1o-de-una-mascota-kk.jpg" alt="mascota y dueño" />
            </div>
            <div className="text__container">
                <p className="text">¡Únete a nuestra comunidad y ayuda a las mascotas más necesitadas!</p>
            </div>
        </header>
    );
}
