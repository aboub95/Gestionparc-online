
const API_URL = process.env.API_URL; // Définissez cette variable d'environnement

export const fetchAllCars = async () => {
  try {
    const response = await fetch(`${API_URL}/cars`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
    }
    const data = await response.json();
    return data; // Assurez-vous que cela correspond à la structure de votre réponse API
  } catch (error) {
    console.error(error);
    throw error; // Vous pouvez également gérer l'erreur ici si nécessaire
  }
};


export const fetchCars = async (query) => {
    const response = await fetch(`/api/cars?search=${query}`);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des voitures');
    }
    return await response.json();
  };k
  