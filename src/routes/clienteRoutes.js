const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

// Rutas para CRUD de Clientes
router.post('/clientes', clienteController.createCliente);  // Crear cliente
router.get('/clientes', clienteController.getAllClientes);  // Obtener todos los clientes
router.get('/clientes/:id', clienteController.getClienteById);  // Obtener cliente por ID
router.put('/clientes/:id', clienteController.updateCliente);  // Actualizar cliente
router.delete('/clientes/:id', clienteController.deleteCliente);  // Eliminar cliente

module.exports = router;