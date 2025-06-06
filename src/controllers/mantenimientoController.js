const prisma = require('../generated/prisma/client');

// Crear un nuevo mantenimiento de vehículo
exports.createMantenimiento = async (req, res) => {
  try {
    const mantenimiento = await prisma.mantenimientoVehiculo.create({
      data: {
        vehiculoId: req.body.vehiculoId,
        clienteId: req.body.clienteId,
        descripcion: req.body.descripcion,
        costo: req.body.costo,
      },
    });
    res.status(201).json(mantenimiento); // Devuelve el mantenimiento creado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los mantenimientos de vehículos
exports.getAllMantenimientos = async (req, res) => {
  try {
    const mantenimientos = await prisma.mantenimientoVehiculo.findMany();
    res.status(200).json(mantenimientos); // Devuelve todos los mantenimientos
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un mantenimiento de vehículo por su ID
exports.getMantenimientoById = async (req, res) => {
  try {
    const mantenimiento = await prisma.mantenimientoVehiculo.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!mantenimiento) {
      return res.status(404).json({ error: "Mantenimiento no encontrado" });
    }
    res.status(200).json(mantenimiento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un mantenimiento de vehículo por su ID
exports.updateMantenimiento = async (req, res) => {
  try {
    const mantenimiento = await prisma.mantenimientoVehiculo.update({
      where: { id: parseInt(req.params.id) },
      data: {
        vehiculoId: req.body.vehiculoId,
        clienteId: req.body.clienteId,
        descripcion: req.body.descripcion,
        costo: req.body.costo,
      },
    });
    res.status(200).json(mantenimiento); // Devuelve el mantenimiento actualizado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un mantenimiento de vehículo por su ID
exports.deleteMantenimiento = async (req, res) => {
  try {
    await prisma.mantenimientoVehiculo.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Mantenimiento eliminado correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};