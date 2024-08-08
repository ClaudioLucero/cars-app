import React from 'react';
import '../styles/index.scss';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="side-menu__content">
          <button className="side-menu__close" onClick={onClose}>
            <span className="side-menu__close-text">Cerrar</span>
            &times;
          </button>
          <div className="side-menu__list-container">
            <ul>
            <div className="separator"></div>
              <li><a href="#modelos">Modelos</a></li>
              <li><a href="#servicios-y-accesorios">Servicios y Accesorios</a></li>
              <li><a href="#financicion">Financiación</a></li>
              <li ><a href="#revies-y-comunidad">Reviews y Comunidad</a></li>
              <div className="separator"></div>
              <li><a href="#ficha-modelo">Servicios y Accesorios</a></li>
              <li><a href="#toyota-mobility-service">Toyota Mobility Service</a></li>
              <li><a href="#toyota-gazoo-racing">Toyota Gazoo Racing</a></li>
              <li><a href="#toyota-hibridos">Toyota Hibridos</a></li>
              <div className="separator"></div>
              <li><a href="#concecionarios">Concesionarios</a></li>
              <li><a href="#test-drive">Test Drive</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="side-menu__list-container">
            <ul>
              <li><a href="#actividades">Actividades</a></li>
              <li><a href="#servicios-al-cliente">Servicios al Cliente</a></li>
              <li><a href="#ventas-especiales">Ventas Especiales</a></li>
              <li><a href="#innovacion">Innovación</a></li>
              <li><a href="#prensa">Prensa</a></li>
              <li><a href="#acerca-de">Acerca de...</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`side-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
    </>
  );
};

export default SideMenu;
