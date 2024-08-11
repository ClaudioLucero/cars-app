// src/components/DropDownSort.tsx
import React from 'react';
import '../styles/index.scss'; // Asegúrate de importar los estilos aquí si no están en el archivo principal

interface DropDownSortProps {
  isOpen: boolean;
  selectedSort: string;
  onSortChange: (option: string) => void;
  onClose: () => void;
}

const DropDownSort: React.FC<DropDownSortProps> = ({
  isOpen,
  selectedSort,
  onSortChange,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="sort-menu">
      <button
        className={`sort-menu-item ${selectedSort === 'Nada' ? 'active' : ''}`}
        onClick={() => {
          onSortChange('Nada');
          onClose();
        }}
      >
        Nada
      </button>
      <button
        className={`sort-menu-item ${selectedSort === 'De menor a mayor precio' ? 'active' : ''}`}
        onClick={() => {
          onSortChange('De menor a mayor precio');
          onClose();
        }}
      >
        De menor a mayor precio
      </button>
      <button
        className={`sort-menu-item ${selectedSort === 'De mayor a menor precio' ? 'active' : ''}`}
        onClick={() => {
          onSortChange('De mayor a menor precio');
          onClose();
        }}
      >
        De mayor a menor precio
      </button>
      <button
        className={`sort-menu-item ${selectedSort === 'Más nuevos primero' ? 'active' : ''}`}
        onClick={() => {
          onSortChange('Más nuevos primero');
          onClose();
        }}
      >
        Más nuevos primero
      </button>
      <button
        className={`sort-menu-item ${selectedSort === 'Más viejos primero' ? 'active' : ''}`}
        onClick={() => {
          onSortChange('Más viejos primero');
          onClose();
        }}
      >
        Más viejos primero
      </button>
    </div>
  );
};

export default DropDownSort;
