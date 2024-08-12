import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css'; 
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
        <LazyLoadImage
          src={thumbnail}
          alt={name}
          effect="blur"
          placeholderSrc="/path/to/placeholder-image.png" 
        />
      </div>
    </div>
  );
};

export default Card;
