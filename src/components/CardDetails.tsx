import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Car } from '../types/car';
import Loader from './Loader';
import { fetchCarDetails } from '../services/cardService';
import '../styles/index.scss';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCarDetails = async () => {
      if (!id || id.trim() === '') {
        // Si el id no está presente o es una cadena vacía, redirige a la página principal
        setLoading(false); // Deja de cargar si no hay id
        navigate('/'); // Redirige a la página principal
        return;
      }

      const carData = await fetchCarDetails(id);

      if (carData) {
        setCar(carData);
      } else {
        setCar(null); // Configura car como null en caso de error
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
      <h2>{car.name}</h2>
      <img src={car.thumbnail} alt={car.name} />
      <p>Año: {car.year}</p>
      <p>Precio: ${car.price}</p>
      {/* Agrega más detalles según sea necesario */}
    </div>
  );
};

export default CarDetails;
