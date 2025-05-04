// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const {
  obtenerUsuarios,
  crearUsuario
} = require('../controllers/usuarioController');

// Ruta GET para obtener usuarios
router.get('/', obtenerUsuarios);

// Ruta POST para crear usuario
router.post('/', crearUsuario);

module.exports = router;
