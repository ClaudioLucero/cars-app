import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Opcional: puedes usar otros efectos si prefieres

import { CarDetail } from '../types/carDetail';
import Loader from './Loader';
import Carousel from './Carousel'; // Asegúrate de importar el componente Carousel
import Highlight from './Highlight';
import { fetchCarDetails } from '../services/cardService';
import '../styles/index.scss';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<CarDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCarDetails = async () => {
      if (!id || id.trim() === '') {
        setLoading(false);
        navigate('/');
        return;
      }

      const carData = await fetchCarDetails(id);

      if (carData) {
        setCar(carData);
      } else {
        setCar(null);
      }

      setLoading(false);
    };

    getCarDetails();
  }, [id, navigate]);

  if (loading) {
    return <Loader />;
  }

  if (!car) {
    return (
      <div className="car-details">
        <h2>Detalles del Auto</h2>
        <p>Selecciona un auto en la página principal para visualizarlo.</p>
        <button onClick={() => navigate('/')}>
          Volver a la Página Principal
        </button>
      </div>
    );
  }

  return (
    <div className="car-details">
      <div className="car-details__main">
        {/* Primera columna: Imagen del auto */}
        <div className="car-details__main-image">
          <LazyLoadImage
            src={car.photo}
            alt={car.name}
            effect="blur" // Opcional: puedes usar otros efectos si prefieres
            placeholderSrc="/path/to/placeholder-image.png" // Opcional: una imagen de marcador de posición
            className="lazy-load-image"
          />
        </div>

        {/* Segunda columna: Detalles del auto */}
        <div className="car-details__main-info">
          <h1>{car.name}</h1>
          <h2>{car.title}</h2>
          <div
            className="car-details__description"
            dangerouslySetInnerHTML={{ __html: car.description }}
          />
        </div>
      </div>

      {/* Carousel */}
      {car.model_features && car.model_features.length > 0 && (
        <div className="car-details__carousel">
          <Carousel features={car.model_features} />
        </div>
      )}

      {/* Características */}
      <section>
        <div className="car-details__highlights">
          <Highlight highlights={car.model_highlights} />
        </div>
      </section>
    </div>
  );
};

export default CarDetails;
