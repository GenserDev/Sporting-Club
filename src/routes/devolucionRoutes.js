const express = require('express');
const router = express.Router();
const devolucionController = require('../controllers/devolucionController');

// Rutas para CRUD de Devoluciones
router.post('/devoluciones', devolucionController.createDevolucion);  // Crear devolución
router.get('/devoluciones', devolucionController.getAllDevoluciones);  // Obtener todas las devoluciones
router.get('/devoluciones/:id', devolucionController.getDevolucionById);  // Obtener devolución por ID
router.put('/devoluciones/:id', devolucionController.updateDevolucion);  // Actualizar devolución
router.delete('/devoluciones/:id', devolucionController.deleteDevolucion);  // Eliminar devolución

module.exports = router;