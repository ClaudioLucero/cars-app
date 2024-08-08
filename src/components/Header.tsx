import React, { useState } from 'react';
import '../styles/index.scss';
import SideMenu from '../components/SideMenu';
import Logo from '../assets/Logo.svg';
import Group from '../assets/Group.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#modelos">Modelos</a>
            </li>
            <li>
              <a href="#ficha-modelo">Ficha de Modelo</a>
            </li>
          </ul>
        </nav>
        <div className="header__menu">
          <span className="header__menu-text">Menú</span>
          <button className="menu-button" onClick={toggleMenu}>
            <img src={Group} alt="Menu" />
          </button>
        </div>
      </header>
      <SideMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
