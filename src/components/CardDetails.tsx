import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Car } from '../types/car';
import Loader from './Loader';
import '../styles/index.scss';

const CarDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarDetails = async () => {
      if (!id) {
        // Si el id no está presente, redirige a la página principal
        navigate('/');
        return;
      }

      try {
        const response = await fetch(`https://challenge.egodesign.dev/api/models/${id}`);
        if (!response.ok) {
          throw new Error('Car not found');
        }
        const data = await response.json();
        setCar(data);
      } catch (error) {
        console.error('Error fetching car details:', error);
        setCar(null); // Configura car como null en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id, navigate]);

  if (loading) {
    return <Loader />;
  }

  if (!car || !id) {
    return (
      <div className="car-details">
        <h2>Detalles del Auto</h2>
        <p>Selecciona un auto en la página principal para visualizarlo.</p>
        <button onClick={() => navigate('/')}>Volver a la Página Principal</button>
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
