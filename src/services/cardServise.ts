import { Car } from '../types/car';
const API_URL = 'https://challenge.egodesign.dev/api/models/';

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