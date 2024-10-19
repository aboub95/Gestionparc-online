import React, { useEffect, useState } from 'react';
import { fetchCarById } from '../utils/api';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const getCar = async () => {
      const carData = await fetchCarById(id);
      setCar(carData);
    };
    getCar();
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div>
      <h1>{car.model}</h1>
      <p>Fabricant: {car.manufacturer}</p>
      <p>Année: {car.year}</p>
      <p>Prix: {car.price}</p>
    </div>
  );
};

export default CarDetail;
