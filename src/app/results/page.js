// src/app/search-results/page.js
"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchCars } from '../../utils/api';

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const fetchResults = async () => {
        try {
          const cars = await fetchCars(query);
          setResults(cars);
        } catch (error) {
          console.error('Erreur de récupération des résultats:', error);
        }
      };
      fetchResults();
    }
  }, [query]);

  return (
    <div className="p-5">
      <h1 className="text-2xl">Résultats de recherche pour : <span className="font-bold">{query}</span></h1>
      <ul>
        {results.map(car => (
          <li key={car.id} className="p-2 border-b">{car.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
