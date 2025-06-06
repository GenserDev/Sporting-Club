const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');

// Rutas para CRUD de Facturas
router.post('/facturas', facturaController.createFactura);  // Crear factura
router.get('/facturas', facturaController.getAllFacturas);  // Obtener todas las facturas
router.get('/facturas/:id', facturaController.getFacturaById);  // Obtener factura por ID
router.put('/facturas/:id', facturaController.updateFactura);  // Actualizar factura
router.delete('/facturas/:id', facturaController.deleteFactura);  // Eliminar factura

module.exports = router;