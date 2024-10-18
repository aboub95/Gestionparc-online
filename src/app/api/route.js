// src/app/api/statistics/route.js

export async function GET(request) {
  const data = [10, 20, 30, 40, 50, 40 , 30]; // Exemple de données
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
