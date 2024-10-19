// src/app/components/search.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Assurez-vous que le bon hook est utilisé

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirige vers la page de résultats avec le terme de recherche
    router.push(`/search-results?query=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher..."
        className="border border-gray-300 p-2 rounded-l-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">
        Rechercher
      </button>
    </form>
  );
};

export default Search; // Assurez-vous d'utiliser `export default`
