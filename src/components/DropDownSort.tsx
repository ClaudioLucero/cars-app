// src/components/DropDownSort.tsx
import React from 'react';
import texts from '../config/texts'; // Asegúrate de ajustar la ruta si es necesario
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
        className={`sort-menu-item ${selectedSort === texts.sort.options.priceAsc ? 'active' : ''}`}
        onClick={() => {
          onSortChange(texts.sort.options.priceAsc);
          onClose();
        }}
      >
        {texts.sort.options.priceAsc}
      </button>
      <button
        className={`sort-menu-item ${selectedSort === texts.sort.options.priceDesc ? 'active' : ''}`}
        onClick={() => {
          onSortChange(texts.sort.options.priceDesc);
          onClose();
        }}
      >
        {texts.sort.options.priceDesc}
      </button>
      <button
        className={`sort-menu-item ${selectedSort === texts.sort.options.newFirst ? 'active' : ''}`}
        onClick={() => {
          onSortChange(texts.sort.options.newFirst);
          onClose();
        }}
      >
        {texts.sort.options.newFirst}
      </button>
      <button
        className={`sort-menu-item ${selectedSort === texts.sort.options.oldFirst ? 'active' : ''}`}
        onClick={() => {
          onSortChange(texts.sort.options.oldFirst);
          onClose();
        }}
      >
        {texts.sort.options.oldFirst}
      </button>
    </div>
  );
};

export default DropDownSort;
