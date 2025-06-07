const express = require('express');
const app = express();
const vehiculoRoutes = require('./src/routes/vehiculoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes'); 
const facturaRoutes = require('./src/routes/facturaRoutes');
const mantenimientoRoutes = require('./src/routes/mantenimientoRoutes');
const proveedorRoutes = require('./src/routes/proveedorRoutes');
const descuentoRoutes = require('./src/routes/descuentoRoutes');
const devolucionRoutes = require('./src/routes/devolucionRoutes');
const inventarioRoutes = require('./src/routes/inventarioRoutes');

app.use(express.json()); // Para manejar solicitudes con cuerpo JSON
app.use('/api', vehiculoRoutes); // Rutas para vehículos estarán bajo /api
app.use('/api', clienteRoutes);
app.use('/api', facturaRoutes);
app.use('/api', mantenimientoRoutes);
app.use('/api', proveedorRoutes);
app.use('/api', descuentoRoutes); 
app.use('/api', devolucionRoutes);
app.use('/api', inventarioRoutes);

module.exports = app; 