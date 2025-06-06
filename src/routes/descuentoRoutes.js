const express = require('express');
const router = express.Router();
const descuentoController = require('../controllers/descuentoController');

// Rutas para CRUD de Descuentos
router.post('/descuentos', descuentoController.createDescuento);  // Crear descuento
router.get('/descuentos', descuentoController.getAllDescuentos);  // Obtener todos los descuentos
router.get('/descuentos/:id', descuentoController.getDescuentoById);  // Obtener descuento por ID
router.put('/descuentos/:id', descuentoController.updateDescuento);  // Actualizar descuento
router.delete('/descuentos/:id', descuentoController.deleteDescuento);  // Eliminar descuento

module.exports = router;