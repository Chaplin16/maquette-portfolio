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

      if (window.innerWidth > 1000) {
        setToggleMenu(false);
      }
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || largeur > 1000) && (
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/Training"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Formation
          </NavLink>
          <NavLink
            to="/Hobbies"
            className={({ isActive }) => (isActive ? "link-active" : "link")}
          >
            Hobbies
          </NavLink>
        </ul>
      )}

      <button onClick={navSmallScreen} className="btn">
        MENU
      </button>
    </nav>
  );
}
