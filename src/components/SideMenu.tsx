import React from 'react';
import { Link } from 'react-router-dom';
import texts from '../config/texts'; // Importa el archivo de textos
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
              <li>
                <Link to="/home" onClick={onClose}>
                  {texts.menu.modelos}
                </Link>
              </li>
              <li>
                <a href="#servicios-y-accesorios">{texts.menu.servicios}</a>
              </li>
              <li>
                <a href="#financicion">{texts.menu.financiacion}</a>
              </li>
              <li>
                <a href="#revies-y-comunidad">{texts.menu.reviews}</a>
              </li>
              <div className="separator"></div>
              <li>
                <a href="#ficha-modelo">{texts.menu.fichaModelo}</a>
              </li>
              <li>
                <a href="#toyota-mobility-service">
                  {texts.menu.mobilityService}
                </a>
              </li>
              <li>
                <a href="#toyota-gazoo-racing">{texts.menu.gazooRacing}</a>
              </li>
              <li>
                <a href="#toyota-hibridos">{texts.menu.hibridos}</a>
              </li>
              <div className="separator"></div>
              <li>
                <a href="#concecionarios">{texts.menu.concesionarios}</a>
              </li>
              <li>
                <a href="#test-drive">{texts.menu.testDrive}</a>
              </li>
              <li>
                <a href="#contacto">{texts.menu.contacto}</a>
              </li>
            </ul>
          </div>
          <div className="side-menu__list-container">
            <ul>
              <li>
                <a href="#actividades">{texts.menu.actividades}</a>
              </li>
              <li>
                <a href="#servicios-al-cliente">{texts.menu.customerService}</a>
              </li>
              <li>
                <a href="#ventas-especiales">{texts.menu.specialSales}</a>
              </li>
              <li>
                <a href="#innovacion">{texts.menu.innovation}</a>
              </li>
              <li>
                <a href="#prensa">{texts.menu.press}</a>
              </li>
              <li>
                <a href="#acerca-de">{texts.menu.about}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`side-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export default SideMenu;
