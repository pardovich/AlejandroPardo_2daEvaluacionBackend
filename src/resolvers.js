const axios = require('axios');
require('dotenv').config(); // Cargar las variables de entorno

const API_URL = process.env.API_URL; // URL de tu API (definida en el archivo .env)

// Resolver para obtener las películas
const resolvers = {
  Query: {
    films: async () => {
      try {
        const response = await axios.get(`${API_URL}/api/films`, {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`, // Si se requiere autenticación
          },
        });
        return response.data; // Retorna las películas obtenidas de la API
      } catch (error) {
        console.error("Error al obtener las películas", error);
        throw new Error("No se pudo obtener las películas");
      }
    },
  },
};

module.exports = resolvers;
