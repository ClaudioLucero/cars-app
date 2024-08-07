import React from 'react';
import '../styles/index.scss';

interface CardProps {
  name: string;
  year: number;
  price: number;
  thumbnail: string;
}

const Card: React.FC<CardProps> = ({ name, year, price, thumbnail }) => {
  return (
    <div className="card">
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