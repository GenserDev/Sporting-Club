const express = require('express');
const app = express();
const vehiculoRoutes = require('./routes/vehiculoRoutes');
const clienteRoutes = require('./routes/clienteRoutes'); 
const facturaRoutes = require('./routes/facturaRoutes');
const mantenimientoRoutes = require('./routes/mantenimientoRoutes');
const proveedorRoutes = require('./routes/proveedorRoutes');
const descuentoRoutes = require('./routes/descuentoRoutes');
const devolucionRoutes = require('./routes/devolucionRoutes');
const inventarioRoutes = require('./routes/inventarioRoutes');

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