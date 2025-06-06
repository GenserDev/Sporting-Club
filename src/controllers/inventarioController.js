const prisma = require('../generated/prisma/client');

// Crear un nuevo registro de inventario
exports.createInventario = async (req, res) => {
  try {
    const inventario = await prisma.inventario.create({
      data: {
        vehiculoId: req.body.vehiculoId,
        cantidad: req.body.cantidad,
        sedeId: req.body.sedeId,
      },
    });
    res.status(201).json(inventario); // Devuelve el inventario creado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los registros de inventario
exports.getAllInventarios = async (req, res) => {
  try {
    const inventarios = await prisma.inventario.findMany();
    res.status(200).json(inventarios); // Devuelve todos los inventarios
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un registro de inventario por su ID
exports.getInventarioById = async (req, res) => {
  try {
    const inventario = await prisma.inventario.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!inventario) {
      return res.status(404).json({ error: "Inventario no encontrado" });
    }
    res.status(200).json(inventario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un registro de inventario por su ID
exports.updateInventario = async (req, res) => {
  try {
    const inventario = await prisma.inventario.update({
      where: { id: parseInt(req.params.id) },
      data: {
        cantidad: req.body.cantidad,
        vehiculoId: req.body.vehiculoId,
        sedeId: req.body.sedeId,
      },
    });
    res.status(200).json(inventario); // Devuelve el inventario actualizado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un registro de inventario por su ID
exports.deleteInventario = async (req, res) => {
  try {
    await prisma.inventario.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Inventario eliminado correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};