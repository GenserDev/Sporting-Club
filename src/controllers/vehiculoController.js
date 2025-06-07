const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllVehiculos = async (req, res) => {
  try {
    const vehiculos = await prisma.vehiculos.findMany({
      include: {
        marca: { select: { nombre: true } },
        categoria: { select: { nombre: true } }
      }
    });
    res.json(vehiculos);
  } catch (error) {
    console.error("Error al obtener vehículos:", error);
    res.status(500).json({ 
      error: 'Error al obtener vehículos',
      details: error.message 
    });
  }
};

exports.createVehiculo = async (req, res) => {
  const { modelo, anio, color, precio, marcaId, categoriaId } = req.body;
  try {
    const nuevoVehiculo = await prisma.vehiculos.create({
      data: {
        modelo,
        anio: parseInt(anio),
        color,
        precio: parseFloat(precio),
        marcaId: parseInt(marcaId),
        categoriaId: parseInt(categoriaId),
        estado: 'DISPONIBLE',
        disponible: true
      }
    });
    res.status(201).json(nuevoVehiculo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear vehículo' });
  }
};

exports.updateVehiculo = async (req, res) => {
  const { id } = req.params;
  try {
    const vehiculoActualizado = await prisma.vehiculos.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.json(vehiculoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error actualizando vehículo" });
  }
};

exports.deleteVehiculo = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.vehiculos.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Error eliminando vehículo" });
  }
};