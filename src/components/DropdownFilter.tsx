import React from 'react';
import '../styles/index.scss';

interface DropdownFilterProps {
  isOpen: boolean;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  onClose: () => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  isOpen,
  selectedFilter,
  onFilterChange,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="filter-menu" onClick={onClose}>
      <button
        className={`filter-menu-item ${selectedFilter === 'Todos' ? 'active' : ''}`}
        onClick={() => onFilterChange('Todos')}
      >
        Todos
      </button>
      <button
        className={`filter-menu-item ${selectedFilter === 'Autos' ? 'active' : ''}`}
        onClick={() => onFilterChange('Autos')}
      >
        Autos
      </button>
      <button
        className={`filter-menu-item ${selectedFilter === 'Pickups y Comerciales' ? 'active' : ''}`}
        onClick={() => onFilterChange('Pickups y Comerciales')}
      >
        Pickups y Comerciales
      </button>
      <button
        className={`filter-menu-item ${selectedFilter === 'SUVs' ? 'active' : ''}`}
        onClick={() => onFilterChange('SUVs')}
      >
        SUVs Crossovers
      </button>
    </div>
  );
};

export default DropdownFilter;
