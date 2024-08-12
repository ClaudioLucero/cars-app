import { Car } from '../types/car';
import { CarDetail } from '../types/carDetail';

// Asegúrate de que la URL de la API esté definida
const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw new Error('API_URL is not defined in the environment variables');
}

export const fetchCars = async (): Promise<Car[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Response not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
};

export const fetchCarDetails = async (
  id: string
): Promise<CarDetail | null> => {
  try {
    const response = await fetch(`${API_URL}${id}`);
    if (!response.ok) {
      throw new Error('Car not found');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching car details:', error);
    return null;
  }
};
