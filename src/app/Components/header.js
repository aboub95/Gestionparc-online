"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Header({ user }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Action à exécuter lors de la recherche
    alert(`Recherche de : ${searchTerm}`); // Cela peut être remplacé par toute logique de recherche
  };

  return (
    <header className="flex items-center justify-between shadow-md border border-black-600 p-1">
      {/* Section de recherche */}
      <div className="flex items-center space-x-2">
        <input 
          type="text" 
          placeholder="Rechercher..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Mise à jour de la valeur de recherche
          className="px-4 py-2 bg-black-600 w-64 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500 hidden md:block"
        />
        <button 
          onClick={handleSearch} // Fonction exécutée au clic
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-yellow-200 transition duration-200 hidden md:block"
        >
          Rechercher
        </button>
      </div>

      {/* Section de notifications */}
      <div className="relative flex items-center md:block">
        <button className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6  hover:text-gray-300 transition duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 00-9.33-4.472A3.28 3.28 0 008 9v5c0 .828-.67 1.5-1.5 1.5H4m4 0v1a2 2 0 001.508 1.94c.81.11 1.65-.302 1.92-1.1M12 17v2a2 2 0 11-4 0v-2a2 2 0 014 0z" />
          </svg>
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </div>

      {/* Section de profil */}
      <div className="flex items-center space-x-4">
        <Image
          src={user?.photo || '/default-profile.png'}
          alt="Photo de profil"
          width={60}
          height={60}
          className="rounded-full border border-black-600"
        />
        <div className="flex flex-col max-md:block">
          <span className="font-bold">{user?.name || 'Utilisateur'}</span>
          <span className="text-sm text-gray-300">{user?.role || 'Rôle'}</span>
        </div>
      </div>
    </header>
  );
}

