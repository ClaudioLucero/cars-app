import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/index.scss';

interface CardProps {
  id: number;
  name: string;
  year: number;
  price: number;
  thumbnail: string;
}

const Card: React.FC<CardProps> = ({ id, name, year, price, thumbnail }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/car/${id}`, { state: { carId: id } });
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="card__info">
        <h3 className="card__name">{name}</h3>
        <p className="card__details">
          {year} | ${price.toLocaleString()}
        </p>
      </div>
      <div className="card__image">
        <img src={thumbnail} alt={name} />
      </div>
    </div>
  );
};

export default Card;
