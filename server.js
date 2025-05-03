require('graphql-import-node');  // Aseguramos que los archivos .graphql sean importados

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/schema.graphql');
const resolvers = require('./src/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Microservicio GraphQL listo en ${url}`);
});

const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 3000;

// Configurar conexión con MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Endpoint para obtener todas las películas
app.get('/api/films', (req, res) => {
  db.query('SELECT * FROM film', (err, results) => {
    if (err) {
      console.error('Error al obtener las películas:', err);
      res.status(500).send('Error en el servidor');
      return;
    }
    res.json(results); // Retornar los resultados de la consulta en formato JSON
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
