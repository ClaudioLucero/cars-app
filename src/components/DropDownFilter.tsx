// src/components/DropdownFilter.tsx
import React from 'react';
import texts from '../config/texts'; // Asegúrate de ajustar la ruta si es necesario
import '../styles/index.scss';

interface DropDownFilterProps {
  isOpen: boolean;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onClose: () => void;
}

const DropDownFilter: React.FC<DropDownFilterProps> = ({
  isOpen,
  selectedFilter,
  onFilterChange,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="filter-menu" onClick={onClose}>
      <button
        className={`filter-menu-item ${selectedFilter === texts.filter.options.all ? 'active' : ''}`}
        onClick={() => onFilterChange(texts.filter.options.all)}
      >
        {texts.filter.options.all}
      </button>
      <button
        className={`filter-menu-item ${selectedFilter === texts.filter.options.cars ? 'active' : ''}`}
        onClick={() => onFilterChange(texts.filter.options.cars)}
      >
        {texts.filter.options.cars}
      </button>
      <button
        className={`filter-menu-item ${selectedFilter === texts.filter.options.pickups ? 'active' : ''}`}
        onClick={() => onFilterChange(texts.filter.options.pickups)}
      >
        {texts.filter.options.pickups}
      </button>
      <button
        className={`filter-menu-item ${selectedFilter === texts.filter.options.suvs ? 'active' : ''}`}
        onClick={() => onFilterChange(texts.filter.options.suvs)}
      >
        {texts.filter.options.suvs}
      </button>
    </div>
  );
};

export default DropDownFilter;
