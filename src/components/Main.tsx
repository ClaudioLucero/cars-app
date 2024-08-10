import React, { useEffect, useState } from 'react';
import { Car } from '../types/car'; // Ajusta la ruta según sea necesario
import Loader from './Loader';
import Card from './Card';
import FilterIcon from '../assets/StayBlack.svg'; // Ajusta la ruta según sea necesario
import '../styles/index.scss';

const Main: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // Estado para el menú desplegable
  const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [sortOption, setSortOption] = useState<string>('Nada'); // Estado para la opción de ordenación

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

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
    setFilterMenuOpen(false);
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setMenuOpen(false);
  };

  // Filtrar autos según el filtro seleccionado
  const filteredCars = () => {
    switch (selectedFilter) {
      case 'Autos':
        return cars.filter(car => car.segment === 'Hatchback' || car.segment === 'Sedan');
      case 'Todos':
        return cars;
      default:
        return cars.filter(car => car.segment === selectedFilter);
    }
  };

  // Ordenar autos según la opción seleccionada
  const sortedCars = () => {
    switch (sortOption) {
      case 'De menor a mayor precio':
        return [...filteredCars()].sort((a, b) => a.price - b.price);
      case 'De mayor a menor precio':
        return [...filteredCars()].sort((a, b) => b.price - a.price);
      case 'Más nuevos primero':
        return [...filteredCars()].sort((a, b) => b.year - a.year);
      case 'Más viejos primero':
        return [...filteredCars()].sort((a, b) => a.year - b.year);
      default:
        return filteredCars();
    }
  };

  return (
    <main className="main">
      {/* Título */}
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
              <button
                className={`filter-menu-item ${selectedFilter === 'Todos' ? 'active' : ''}`}
                onClick={() => handleFilterChange('Todos')}
              >
                Todos
              </button>
              <button
                className={`filter-menu-item ${selectedFilter === 'Autos' ? 'active' : ''}`}
                onClick={() => handleFilterChange('Autos')}
              >
                Autos
              </button>
              <button
                className={`filter-menu-item ${selectedFilter === 'Pickups y Comerciales' ? 'active' : ''}`}
                onClick={() => handleFilterChange('Pickups y Comerciales')}
              >
                Pickups y Comerciales
              </button>
              <button
                className={`filter-menu-item ${selectedFilter === 'SUVs' ? 'active' : ''}`}
                onClick={() => handleFilterChange('SUVs')}
              >
                SUVs Crossovers
              </button>
            </div>
          )}
        </div>
        <div className="main__tabs">
          <button
            className={`tab-button ${selectedFilter === 'Todos' ? 'active' : ''}`}
            onClick={() => handleFilterChange('Todos')}
          >
            Todos
          </button>
          <button
            className={`tab-button ${selectedFilter === 'Autos' ? 'active' : ''}`}
            onClick={() => handleFilterChange('Autos')}
          >
            Autos
          </button>
          <button
            className={`tab-button ${selectedFilter === 'Pickups y Comerciales' ? 'active' : ''}`}
            onClick={() => handleFilterChange('Pickups y Comerciales')}
          >
            Pickups y Comerciales
          </button>
          <button
            className={`tab-button ${selectedFilter === 'SUVs' ? 'active' : ''}`}
            onClick={() => handleFilterChange('SUVs')}
          >
            SUVs Crossovers
          </button>
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
              <button
                className={`sort-menu-item ${sortOption === 'Nada' ? 'active' : ''}`}
                onClick={() => handleSortChange('Nada')}
              >
                Nada
              </button>
              <button
                className={`sort-menu-item ${sortOption === 'De menor a mayor precio' ? 'active' : ''}`}
                onClick={() => handleSortChange('De menor a mayor precio')}
              >
                De menor a mayor precio
              </button>
              <button
                className={`sort-menu-item ${sortOption === 'De mayor a menor precio' ? 'active' : ''}`}
                onClick={() => handleSortChange('De mayor a menor precio')}
              >
                De mayor a menor precio
              </button>
              <button
                className={`sort-menu-item ${sortOption === 'Más nuevos primero' ? 'active' : ''}`}
                onClick={() => handleSortChange('Más nuevos primero')}
              >
                Más nuevos primero
              </button>
              <button
                className={`sort-menu-item ${sortOption === 'Más viejos primero' ? 'active' : ''}`}
                onClick={() => handleSortChange('Más viejos primero')}
              >
                Más viejos primero
              </button>
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
          sortedCars().map((item: Car) => (
            <Card
              key={item.id}
              id={item.id} // El id se pasa como número, que es el tipo esperado en el componente Card
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
