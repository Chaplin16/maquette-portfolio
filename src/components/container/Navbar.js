import React, { useEffect, useState } from "react";

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
          <li>
            <a href="./">Accueil</a>
          </li>
          <li>
            <a href="./Training">Formation</a>
          </li>
          <li>
            <a href="./Hobbies">Hobbies</a>
          </li>
        </ul>
      )}

      <button onClick={navSmallScreen} className="btn">
      MENU
      </button>
    </nav>
  );
}
