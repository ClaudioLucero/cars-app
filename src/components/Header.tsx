import React from 'react';
import '../styles/index.scss';
import Logo from '../assets/Logo.svg';
import Group from '../assets/Group.svg';

const Header: React.FC = () => {
  return (
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
        <button className="menu-button">
          <img src={Group} alt="Menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
