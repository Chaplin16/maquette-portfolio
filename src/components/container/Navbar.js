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
    window.addEventListener("click", changeWidth);
    return () => {
      window.removeEventListener("click", changeWidth);
    };
  });

  window.addEventListener("scroll", () => {

    const scrollMenu1 = document.querySelector(".iconMenu1");
    const scrollMenu2 = document.querySelector(".iconMenu2");

    if (window.scrollY > 500) {
      scrollMenu1.style.visibility = "hidden";
      scrollMenu2.style.visibility = "visible";
    } else {
      scrollMenu1.style.visibility = "visible";
      scrollMenu2.style.visibility = "hidden";
    }
  });

  return (
    <nav>
      {toggleMenu && (
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
          <img
            className="iconMenu1"
            src="./assets/icon/afficher-menu.png"
            alt="afficher le menu"
          />
          <img
            className="iconMenu2"
            src="./assets/icon/afficher-menu-rose.png"
            alt="afficher le menu"
          />
        </button>
      </div>
    </nav>
  );
}
