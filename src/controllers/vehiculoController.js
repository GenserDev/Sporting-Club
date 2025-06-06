const prisma = require('../generated/prisma/client');

// Crear un nuevo vehículo
exports.createVehiculo = async (req, res) => {
  try {
    const vehiculo = await prisma.vehiculo.create({
      data: {
        modelo: req.body.modelo,
        anio: req.body.anio,
        color: req.body.color,
        estado: req.body.estado,
        linea: req.body.linea,
        kilometraje: req.body.kilometraje,
        precio: req.body.precio,
        precio_original: req.body.precio_original,
        marcaId: req.body.marcaId,
        airbags: req.body.airbags,
        puntuacionSeguridad: req.body.puntuacionSeguridad,
        motor: req.body.motor,
        tipoCombustible: req.body.tipoCombustible,
        torque: req.body.torque,
        caballos: req.body.caballos,
      },
    });
    res.status(201).json(vehiculo); // Devuelve el vehículo creado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los vehículos
exports.getAllVehiculos = async (req, res) => {
  try {
    const vehiculos = await prisma.vehiculo.findMany();
    res.status(200).json(vehiculos); // Devuelve todos los vehículos
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un vehículo por su ID
exports.getVehiculoById = async (req, res) => {
  try {
    const vehiculo = await prisma.vehiculo.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!vehiculo) {
      return res.status(404).json({ error: "Vehículo no encontrado" });
    }
    res.status(200).json(vehiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un vehículo por su ID
exports.updateVehiculo = async (req, res) => {
  try {
    const vehiculo = await prisma.vehiculo.update({
      where: { id: parseInt(req.params.id) },
      data: {
        modelo: req.body.modelo,
        anio: req.body.anio,
        color: req.body.color,
        estado: req.body.estado,
        linea: req.body.linea,
        kilometraje: req.body.kilometraje,
        precio: req.body.precio,
        precio_original: req.body.precio_original,
        marcaId: req.body.marcaId,
        airbags: req.body.airbags,
        puntuacionSeguridad: req.body.puntuacionSeguridad,
        motor: req.body.motor,
        tipoCombustible: req.body.tipoCombustible,
        torque: req.body.torque,
        caballos: req.body.caballos,
      },
    });
    res.status(200).json(vehiculo); // Devuelve el vehículo actualizado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un vehículo por su ID
exports.deleteVehiculo = async (req, res) => {
  try {
    await prisma.vehiculo.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Eliminado correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};