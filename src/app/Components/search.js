"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Indiquer que le composant est monté
    setMounted(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      router.push(`../results?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  // Si le composant n'est pas monté, ne pas rendre le formulaire
  if (!mounted) {
    return null;
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        placeholder="Rechercher une voiture..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border rounded-l-lg"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">Rechercher</button>
    </form>
  );
};

export default Search;
