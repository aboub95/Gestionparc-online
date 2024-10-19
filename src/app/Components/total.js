// src/app/Components/total.js
"use client"; // Indique que ce composant doit être rendu côté client

import React, { useEffect, useState } from 'react';
import { fetchAllCars } from '../../utils/api'; // Assurez-vous que cette fonction existe
import Image from 'next/image';

export default function Total() {
  const [allCars, setAllCars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const data = await fetchAllCars(); // Assurez-vous d'utiliser la bonne fonction
        setAllCars(data.all); // Ajustez cela selon la structure de votre réponse API
      } catch (error) {
        setError('Erreur lors de la récupération du total des voitures');
      } finally {
        setLoading(false);
      }
    };

    getAllCars();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center border border-red-500 rounded-lg shadow-lg w-64 h-40 p-4 m-2">
        <h1 className="text-lg font-semibold">Total des voitures :</h1>
        <p className="text-2xl font-bold">non disponible</p> {/* Affichage lors du chargement */}
        <Image 
          src="/images/car.jpg" 
          alt="Voiture" 
          width={60} 
          height={60} 
          className="rounded-lg shadow-md" 
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex  items-center border border-black-500 rounded-lg shadow-lg w-64 h-40 p-4 m-2">
        
        <div>
        <h1 className="text-lg font-semibold">Total des voitures</h1>
        <p className="text-2xl font-bold">Erreur</p> 
        <p className="text-red-500">{error}</p>
           
        </div> <Image 
          src="icon.svg" 
          alt="Voiture" 
          width={60} 
          height={60} 
          className="rounded-lg shadow-md" 
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center border border-black-500 rounded-lg shadow-lg w-64 h-40 p-4 m-2">
        <h1 className="text-lg font-semibold">Total des voitures </h1>
        <p className="text-2xl font-bold">{allCars}</p> 
      </div>
      <Image 
        src="icon.svg" 
        alt="Voiture" 
        width={60} 
        height={60} 
        className="rounded-lg shadow-md" 
      />
    </div>
  );
}
