import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/index.scss';
import SideMenu from '../components/SideMenu';
import Logo from '../assets/Logo.svg';
import Group from '../assets/Group.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getNavLinkClass = (path: string) => {
    return location.pathname === path ? 'active-link' : '';
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
              <Link to="/" className={getNavLinkClass('/')}>Modelos</Link>
            </li>
            <li>
              <Link 
                to={`/car/${location.state?.carId || ''}`} 
                className={getNavLinkClass(`/car/${location.state?.carId || ''}`)}
              >
                Ficha de Modelo
              </Link>
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
