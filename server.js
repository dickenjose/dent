// server.js
const express = require('express');
const dotenv = require('dotenv');
const conectarDB = require('./config/db');

// Config env
dotenv.config();

// Conectar base de datos
conectarDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routes/usuarioRoutes'));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('API funcionando...');
});

// Escuchar
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
