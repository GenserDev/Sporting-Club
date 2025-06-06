const express = require('express');
const router = express.Router();
const vehiculoController = require('../controllers/vehiculoController');

// Rutas para CRUD de Vehículos
router.post('/vehiculos', vehiculoController.createVehiculo);  // Crear vehículo
router.get('/vehiculos', vehiculoController.getAllVehiculos);  // Obtener todos los vehículos
router.get('/vehiculos/:id', vehiculoController.getVehiculoById);  // Obtener un vehículo por su ID
router.put('/vehiculos/:id', vehiculoController.updateVehiculo);  // Actualizar vehículo
router.delete('/vehiculos/:id', vehiculoController.deleteVehiculo);  // Eliminar vehículo

module.exports = router;