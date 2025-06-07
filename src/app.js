// src/app.js
const express = require('express');
const app = express();

// Middleware para JSON
app.use(express.json());

// Servir archivos estáticos
app.use(express.static('public'));

// Importar rutas
const sedeRoutes = require('./routes/sedeRoutes');
const empleadoRoutes = require('./routes/empleadoRoutes');
const vehiculoRoutes = require('./routes/vehiculoRoutes');

// Usar rutas
app.use('/api/sedes', sedeRoutes);
app.use('/api/empleados', empleadoRoutes);
app.use('/api/vehiculos', vehiculoRoutes);

// Ruta de prueba
app.get('/api', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

module.exports = app;