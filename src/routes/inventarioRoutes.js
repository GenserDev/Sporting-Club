const express = require('express');
const router = express.Router();
const inventarioController = require('../controllers/inventarioController');

// Rutas para CRUD de Inventarios
router.post('/inventarios', inventarioController.createInventario);  // Crear inventario
router.get('/inventarios', inventarioController.getAllInventarios);  // Obtener todos los inventarios
router.get('/inventarios/:id', inventarioController.getInventarioById);  // Obtener inventario por ID
router.put('/inventarios/:id', inventarioController.updateInventario);  // Actualizar inventario
router.delete('/inventarios/:id', inventarioController.deleteInventario);  // Eliminar inventario

module.exports = router;