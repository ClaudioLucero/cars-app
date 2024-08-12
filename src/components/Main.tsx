import React, { useEffect, useState } from 'react';
import { fetchCars } from '../services/cardService';
import { Car } from '../types/car'; 
import Loader from './Loader';
import Card from './Card';
import FilterIcon from '../assets/StayBlack.svg'; 
import DropDownFilter from './DropDownFilter'; 
import DropDownSort from './DropDownSort'; 
import texts from '../config/texts'; 
import '../styles/index.scss';

const Main: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    texts.filter.options.all
  );
  const [sortOption, setSortOption] = useState<string>('Nada');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cars = await fetchCars(); 
        setCars(cars);
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
      case texts.filter.options.cars:
        return cars.filter(
          (car) => car.segment === 'Hatchback' || car.segment === 'Sedan'
        );
      case texts.filter.options.pickups:
        return cars.filter((car) => car.segment === 'Pickups y Comerciales');
      case texts.filter.options.suvs:
        return cars.filter((car) => car.segment === 'SUVs');
      case texts.filter.options.all:
      default:
        return cars;
    }
  };

  const sortedCars = () => {
    switch (sortOption) {
      case texts.sort.options.priceAsc:
        return [...filteredCars()].sort((a, b) => a.price - b.price);
      case texts.sort.options.priceDesc:
        return [...filteredCars()].sort((a, b) => b.price - a.price);
      case texts.sort.options.newFirst:
        return [...filteredCars()].sort((a, b) => b.year - a.year);
      case texts.sort.options.oldFirst:
        return [...filteredCars()].sort((a, b) => a.year - b.year);
      default:
        return filteredCars();
    }
  };

  return (
    <main className="main">
      <section className="main__title">
        <h1>{texts.main.title}</h1>
      </section>

      <section className="main__menu">
        <div className="main__menu-item">
          <span>{texts.filter.title}</span>
          <img
            src={FilterIcon}
            alt="Filtrar"
            className="filter-icon"
            onClick={toggleFilterMenu}
          />
          {/* Menú desplegable para filtros en móviles */}
          <DropDownFilter
            isOpen={filterMenuOpen}
            selectedFilter={selectedFilter}
            onFilterChange={handleFilterChange}
            onClose={() => setFilterMenuOpen(false)}
          />
        </div>
        <div className="main__tabs">
          <button
            className={`tab-button ${selectedFilter === texts.filter.options.all ? 'active' : ''}`}
            onClick={() => handleFilterChange(texts.filter.options.all)}
          >
            {texts.filter.options.all}
          </button>
          <button
            className={`tab-button ${selectedFilter === texts.filter.options.cars ? 'active' : ''}`}
            onClick={() => handleFilterChange(texts.filter.options.cars)}
          >
            {texts.filter.options.cars}
          </button>
          <button
            className={`tab-button ${selectedFilter === 'Pickups y Comerciales' ? 'active' : ''}`}
            onClick={() => handleFilterChange('Pickups y Comerciales')}
          >
            {texts.filter.options.pickups}
          </button>
          <button
            className={`tab-button ${selectedFilter === 'SUVs Crossovers' ? 'active' : ''}`}
            onClick={() => handleFilterChange('SUVs Crossovers')}
          >
            {texts.filter.options.suvs}
          </button>
        </div>
        <div className="main__sort">
          <span>{texts.sort.title}</span>
          <img
            src={FilterIcon}
            alt="Ordenar"
            className="sort-icon"
            onClick={toggleMenu}
          />
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
