const prisma = require('../generated/prisma/client');

// Crear un nuevo descuento
exports.createDescuento = async (req, res) => {
  try {
    const descuento = await prisma.descuento.create({
      data: {
        descripcion: req.body.descripcion,
        porcentaje: req.body.porcentaje,
        vehiculoId: req.body.vehiculoId, // Puede estar relacionado con un vehículo
      },
    });
    res.status(201).json(descuento); // Devuelve el descuento creado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los descuentos
exports.getAllDescuentos = async (req, res) => {
  try {
    const descuentos = await prisma.descuento.findMany();
    res.status(200).json(descuentos); // Devuelve todos los descuentos
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un descuento por su ID
exports.getDescuentoById = async (req, res) => {
  try {
    const descuento = await prisma.descuento.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!descuento) {
      return res.status(404).json({ error: "Descuento no encontrado" });
    }
    res.status(200).json(descuento);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un descuento por su ID
exports.updateDescuento = async (req, res) => {
  try {
    const descuento = await prisma.descuento.update({
      where: { id: parseInt(req.params.id) },
      data: {
        descripcion: req.body.descripcion,
        porcentaje: req.body.porcentaje,
        vehiculoId: req.body.vehiculoId, // Actualiza el descuento en un vehículo específico
      },
    });
    res.status(200).json(descuento); // Devuelve el descuento actualizado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un descuento por su ID
exports.deleteDescuento = async (req, res) => {
  try {
    await prisma.descuento.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Descuento eliminado correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};