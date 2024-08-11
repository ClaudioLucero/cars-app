import React, { useEffect, useState } from 'react';
import { Car } from '../types/car'; // Ajusta la ruta según sea necesario
import Loader from './Loader';
import Card from './Card';
import FilterIcon from '../assets/StayBlack.svg'; // Ajusta la ruta según sea necesario
import DropdownFilter from './DropdownFilter'; // Importa el nuevo componente
import DropDownSort from './DropDownSort'; // Importa el nuevo componente
import '../styles/index.scss';

const Main: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [sortOption, setSortOption] = useState<string>('Nada');

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

  const filteredCars = () => {
    switch (selectedFilter) {
      case 'Autos':
        return cars.filter(
          (car) => car.segment === 'Hatchback' || car.segment === 'Sedan'
        );
      case 'Todos':
        return cars;
      default:
        return cars.filter((car) => car.segment === selectedFilter);
    }
  };

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
      <section className="main__title">
        <h1>Descubrí todos los modelos</h1>
      </section>

      <section className="main__menu">
        <div className="main__menu-item">
          <span>Filtrar por</span>
          <img
            src={FilterIcon}
            alt="Filtrar"
            className="filter-icon"
            onClick={toggleFilterMenu}
          />
          {/* Menú desplegable para filtros en móviles */}
          <DropdownFilter
            isOpen={filterMenuOpen}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
            onClose={() => setFilterMenuOpen(false)}
          />
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
          {/* Menú desplegable para ordenación */}
          <DropDownSort
            isOpen={menuOpen}
            selectedSort={sortOption}
            onSortChange={handleSortChange}
            onClose={() => setMenuOpen(false)}
          />
        </div>
      </section>

      <section className="main__gallery">
        {loading ? (
          <div className="main__gallery-loader">
            <Loader />
          </div>
        ) : (
          sortedCars().map((item: Car) => (
            <Card
              key={item.id}
              id={item.id}
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
