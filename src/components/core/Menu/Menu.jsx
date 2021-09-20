import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


import "./Menu.scss";

export function Menu() {

  return (
    <>
      <nav className="navbar__container">
        <ul className="nav__list">
          <li className="list__element">
            <Link to="/">
              <div className="element__link">
                <FontAwesomeIcon icon={faHome} />
              </div>
            </Link>
          </li>

          <li className="list__element">
            <Link to="/requests">
              <div className="element__link">
                <FontAwesomeIcon icon={faPaw} />
              </div>
            </Link>
          </li>

          <li className="list__element">
            <Link to="/pet/add">
              <div className="element__link">
                <FontAwesomeIcon icon={faPlusCircle} />
              </div>
            </Link>
          </li>
          <li className="list__element">
            <Link to="/pet/lost">
              <div className="element__link">
                <FontAwesomeIcon icon={faBinoculars} />
              </div>
            </Link>
          </li>
          <li className="list__element">
            <Link to="/profile">
              <div className="element__link">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
