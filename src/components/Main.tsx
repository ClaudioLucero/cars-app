import React, { useEffect, useState } from 'react';
import { Car } from '../types/car';
import Loader from './Loader';
import Card from './Card';
import FilterIcon from '../assets/StayBlack.svg'; // Ajusta la ruta según sea necesario
import '../styles/index.scss';

const Main: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Estado para el menú desplegable
  const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://challenge.egodesign.dev/api/models/'
        );
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleFilterMenu = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  return (
    <main className="main">
      {/*  Título */}
      <section className="main__title">
        <h1>Descubrí todos los modelos</h1>
      </section>

      {/* Menú en horizontal */}
      <section className="main__menu">
        <div className="main__menu-item">
          <span>Filtrar por</span>
          <img
            src={FilterIcon}
            alt="Filtrar"
            className="filter-icon"
            onClick={toggleFilterMenu}
          />
          {filterMenuOpen && (
            <div className="filter-menu">
              <button className="filter-menu-item">Todos</button>
              <button className="filter-menu-item">Autos</button>
              <button className="filter-menu-item">
                Pickups y Comerciales
              </button>
              <button className="filter-menu-item">SUVs y Crossovers</button>
            </div>
          )}
        </div>
        <div className="main__tabs">
          <button className="tab-button">Todos</button>
          <button className="tab-button">Autos</button>
          <button className="tab-button">Pickups y Comerciales</button>
          <button className="tab-button">SUVs Crossovers</button>
        </div>
        <div className="main__sort">
          <span>Ordenar por</span>
          <img
            src={FilterIcon}
            alt="Ordenar"
            className="sort-icon"
            onClick={toggleMenu}
          />
          {menuOpen && (
            <div className="sort-menu">
              <button className="sort-menu-item">Nada</button>
              <button className="sort-menu-item">
                De menor a mayor precio
              </button>
              <button className="sort-menu-item">
                De mayor a menor precio
              </button>
              <button className="sort-menu-item">Más nuevos primero</button>
              <button className="sort-menu-item">Más viejos primero</button>
            </div>
          )}
        </div>
      </section>

      {/* Cuadrícula de Imágenes */}
      <section className="main__gallery">
        {loading ? (
          <div className="main__gallery-loader">
            <Loader /> {/* Muestra el Loader solo dentro de main__gallery */}
          </div>
        ) : (
          cars.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              year={item.year}
              price={item.price}
              thumbnail={item.thumbnail}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default Main;
