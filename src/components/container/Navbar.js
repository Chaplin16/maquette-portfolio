import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);
  
  const navSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };


  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };
    window.addEventListener('click', changeWidth);
    return () => {
      window.removeEventListener('click', changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu) && (
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            onClick={navSmallScreen}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/Portfolio" 
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            onClick={navSmallScreen}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/Training"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            onClick={navSmallScreen}
          >
            Formation
          </NavLink>
          <NavLink
            to="/Hobbies"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
            onClick={navSmallScreen}
          >
            Hobbies
          </NavLink>
        </ul>
      )}
      <div className="btnMenu">
        <button onClick={navSmallScreen} id="menu">
            MENU
            <img className="displayMenu" src="./assets/icon/afficher-menu.png" alt="afficher le menu" />
        </button>
      </div>
    </nav>
  );
}
