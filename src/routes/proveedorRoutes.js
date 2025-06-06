const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// Rutas para CRUD de Proveedores
router.post('/proveedores', proveedorController.createProveedor);  // Crear proveedor
router.get('/proveedores', proveedorController.getAllProveedores);  // Obtener todos los proveedores
router.get('/proveedores/:id', proveedorController.getProveedorById);  // Obtener proveedor por ID
router.put('/proveedores/:id', proveedorController.updateProveedor);  // Actualizar proveedor
router.delete('/proveedores/:id', proveedorController.deleteProveedor);  // Eliminar proveedor

module.exports = router;