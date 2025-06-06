const prisma = require('../generated/prisma/client');

// Crear una nueva factura
exports.createFactura = async (req, res) => {
  try {
    const factura = await prisma.factura.create({
      data: {
        fecha: req.body.fecha,
        medioPago: req.body.medioPago,
        clienteId: req.body.clienteId,
        empleadoId: req.body.empleadoId,
        total: req.body.total,
      },
    });
    res.status(201).json(factura); // Devuelve la factura creada
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todas las facturas
exports.getAllFacturas = async (req, res) => {
  try {
    const facturas = await prisma.factura.findMany();
    res.status(200).json(facturas); // Devuelve todas las facturas
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener una factura por su ID
exports.getFacturaById = async (req, res) => {
  try {
    const factura = await prisma.factura.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!factura) {
      return res.status(404).json({ error: "Factura no encontrada" });
    }
    res.status(200).json(factura);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar una factura por su ID
exports.updateFactura = async (req, res) => {
  try {
    const factura = await prisma.factura.update({
      where: { id: parseInt(req.params.id) },
      data: {
        fecha: req.body.fecha,
        medioPago: req.body.medioPago,
        clienteId: req.body.clienteId,
        empleadoId: req.body.empleadoId,
        total: req.body.total,
      },
    });
    res.status(200).json(factura); // Devuelve la factura actualizada
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una factura por su ID
exports.deleteFactura = async (req, res) => {
  try {
    await prisma.factura.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Factura eliminada correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};