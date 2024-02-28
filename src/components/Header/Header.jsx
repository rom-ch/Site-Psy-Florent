import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import styles from "./Header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleClickOutside = e => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      e.target !== buttonRef.current
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleOpenMenu = () => {
    setIsOpen(o => !o);
  };

  const handleClickLink = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h3>Florent CHAUVIN</h3>
        <span>Psycholoque Clinicien</span>
      </div>
      <nav
        ref={menuRef}
        className={isOpen ? `${styles.nav} ${styles.active}` : styles.nav}
      >
        <ul>
          <li>
            <NavLink to="/accueil" onClick={handleClickLink}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/qui-suis-je" onClick={handleClickLink}>
              Qui suis-je?
            </NavLink>
          </li>
          <li>
            <NavLink to="le-cabinet" onClick={handleClickLink}>
              Le cabinet
            </NavLink>
          </li>
          <li>
            <NavLink to="/ma-pratique" onClick={handleClickLink}>
              Ma pratique
            </NavLink>
          </li>
          <li>
            <NavLink to="/prendre-rendez-vous" onClick={handleClickLink}>
              Prendre rendez-vous
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        ref={buttonRef}
        className={styles.mobile}
        onClick={handleOpenMenu}
      >
        {isOpen ? (
          <IconContext.Provider value={{ className: styles.menuIcon }}>
            <IoClose />
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ className: styles.menuIcon }}>
            <LuMenu />
          </IconContext.Provider>
        )}
      </button>
    </header>
  );
}

export default Header;
