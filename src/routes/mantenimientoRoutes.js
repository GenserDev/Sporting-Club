const express = require('express');
const router = express.Router();
const mantenimientoController = require('../controllers/mantenimientoController');

// Rutas para CRUD de Mantenimientos de Vehículos
router.post('/mantenimiento', mantenimientoController.createMantenimiento);  // Crear mantenimiento
router.get('/mantenimiento', mantenimientoController.getAllMantenimientos);  // Obtener todos los mantenimientos
router.get('/mantenimiento/:id', mantenimientoController.getMantenimientoById);  // Obtener mantenimiento por ID
router.put('/mantenimiento/:id', mantenimientoController.updateMantenimiento);  // Actualizar mantenimiento
router.delete('/mantenimiento/:id', mantenimientoController.deleteMantenimiento);  // Eliminar mantenimiento

module.exports = router;