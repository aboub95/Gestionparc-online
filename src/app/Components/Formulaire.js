"use client"; // Ajout pour indiquer que c'est un composant client

import React, { useState } from 'react';
import Image from 'next/image'; // Garder un seul import pour Image

const Formulaire = () => {
  const [marque, setMarque] = useState('');
  const [etat, setEtat] = useState('');
  const [modele, setModele] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      marque,
      etat,
      modele,
    };

    try {
      const response = await fetch('http://backend-gestion-auto.versel.versel.app/car/vehicules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la soumission du formulaire');
      }

      const result = await response.json();
      console.log('succès', result);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <>
      <div
        className="flex flex-col items-center h-full bg-cover bg-center"
        style={{ backgroundImage: `url(/7218a1302960c48611e068302450c2a6.gif)` }}
      >
        <div className="flex justify-center h-20 w-20 hover:bg-stone-500 py-10 items-center rounded-full bg-[#D5D5D5]">
          <Image className="w-10 h-10" src="/camera-fill.svg" alt="Ajouter une photo" width="20" height="20" />
        </div>
        <p className="text-[#4AD991]">Ajouter une photo</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center mt-10 bg-white px-10 rounded-xl my-20" method="post" id="formulaire">
          <div className="space-y-6">
            <div className="w-full max-w-xs">
              <p>Marque</p>
              <input
                id="id1"
                type="text"
                value={marque}
                onChange={(e) => setMarque(e.target.value)}
                className="w-full h-12 px-4 bg-[#D5D5D5] rounded"
                placeholder="Ecrire ici"
              />
            </div>

            <div className="w-full max-w-xs">
              <p>État de la voiture</p>
              <input
                id="id2"
                type="text"
                value={etat}
                onChange={(e) => setEtat(e.target.value)}
                className="w-full h-12 px-4 bg-[#D5D5D5] rounded"
                placeholder="Ecrire ici"
              />
            </div>

            <div className="w-full max-w-xs">
              <p>Modèle</p>
              <input
                id="id3"
                type="text"
                value={modele}
                onChange={(e) => setModele(e.target.value)}
                className="w-full h-12 px-4 bg-[#D5D5D5] rounded"
                placeholder="Ecrire ici"
              />
            </div>
          </div>

          <div className="py-4">
            <button className="w-68 h-14 bg-[#4AD991] text-white rounded-xl px-10" type="submit">
              Ajouter la voiture
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulaire;
