const prisma = require('../generated/prisma/client');

// Crear una nueva devolución
exports.createDevolucion = async (req, res) => {
  try {
    const devolucion = await prisma.devolucion.create({
      data: {
        facturaId: req.body.facturaId,
        vehiculoId: req.body.vehiculoId,
        motivo: req.body.motivo,
        cantidad: req.body.cantidad,
      },
    });
    res.status(201).json(devolucion); // Devuelve la devolución creada
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las devoluciones
exports.getAllDevoluciones = async (req, res) => {
  try {
    const devoluciones = await prisma.devolucion.findMany();
    res.status(200).json(devoluciones); // Devuelve todas las devoluciones
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener una devolución por su ID
exports.getDevolucionById = async (req, res) => {
  try {
    const devolucion = await prisma.devolucion.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!devolucion) {
      return res.status(404).json({ error: "Devolución no encontrada" });
    }
    res.status(200).json(devolucion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una devolución por su ID
exports.updateDevolucion = async (req, res) => {
  try {
    const devolucion = await prisma.devolucion.update({
      where: { id: parseInt(req.params.id) },
      data: {
        facturaId: req.body.facturaId,
        vehiculoId: req.body.vehiculoId,
        motivo: req.body.motivo,
        cantidad: req.body.cantidad,
      },
    });
    res.status(200).json(devolucion); // Devuelve la devolución actualizada
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una devolución por su ID
exports.deleteDevolucion = async (req, res) => {
  try {
    await prisma.devolucion.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Devolución eliminada correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};