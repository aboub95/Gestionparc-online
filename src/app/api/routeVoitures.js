// pages/api/voitures.js
import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  try {
    const allcars = await db.collection('voitures').countDocuments();
    res.status(200).json({ total: totalVoitures });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des données' });
  }
}
