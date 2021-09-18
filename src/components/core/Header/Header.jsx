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
            <div className="text__container">
                <p className="text">¡Únete a nuestra comunidad y ayuda a las mascotas más necesitadas!</p>
            </div>
        </header>
    );
}
