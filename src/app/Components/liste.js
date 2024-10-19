"use client";

import React, { useEffect, useState } from 'react';
import { fetchCars } from '../../utils/api';
import Link from 'next/link';

const Liste = () => {
  const [cars, setCars] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const getCars = async () => {
      const carData = await fetchCars();
      setCars(carData);
    };
    getCars();
  }, []);

  // Cette fonction détermine si on doit afficher les détails selon la largeur de l'écran
  const isLargeScreen = () => window.innerWidth >= 768;

  // Utilisation d'un effet pour gérer l'affichage initial des détails selon la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (isLargeScreen()) {
        setShowDetails(true); // Afficher les détails sur les grands écrans
      } else {
        setShowDetails(false); // Masquer les détails sur les petits écrans
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Vérifier la taille de l'écran au premier rendu

    return () => {
      window.removeEventListener('resize', handleResize); // Nettoyer l'événement lors du démontage
    };
  }, []);

  return (
    <div>
      <h1 className="p-5 text-[28px]">Liste des voitures</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 border">Marque</th>
              <th className="p-3 border">Modèle</th>
              {showDetails && (
                <>
                  <th className="p-3 border">Date - Heure</th>
                  <th className="p-3 border">Année</th>
                  <th className="p-3 border">Statut</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id} className="hover:bg-gray-100">
                <td className="p-3 border">
                  <Link href={`/cars/${car.id}`} className="text-blue-600 hover:underline">
                    {car.brand}
                  </Link>
                </td>
                <td className="p-3 border">{car.model}</td>
                {showDetails && (
                  <>
                    <td className="p-3 border">{car.dateTime}</td>
                    <td className="p-3 border">{car.year}</td>
                    <td className="p-3 border">{car.status}</td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Liste;
