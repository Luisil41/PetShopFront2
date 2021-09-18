import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


import "./Menu.scss";

export default function Menu() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <nav className="navbar">
        <ul className="nav__list">
          <li className="list__element">
            <div className="element__link">
              <FontAwesomeIcon icon={faHome} />
            </div>
          </li>
          <li className="list__element">
            <div className="element__link">
              <FontAwesomeIcon icon={faPaw} />
            </div>
          </li>
          <li className="list__element">
            <div className="element__link">
              <FontAwesomeIcon icon={faPlusCircle} />
            </div>
          </li>
          <li className="list__element">
            <div className="element__link">
              <FontAwesomeIcon icon={faBinoculars} />
            </div>
          </li>
          <li className="list__element">
            <div className="element__link">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </li>
        </ul>
      </nav>
  );
}
