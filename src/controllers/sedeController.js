const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllSedes = async (req, res) => {
  try {
    const sedes = await prisma.sedes.findMany();
    res.json(sedes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener sedes' });
  }
};

exports.createSede = async (req, res) => {
  const { nombre, direccion, telefono, ciudad } = req.body;
  try {
    const nuevaSede = await prisma.sedes.create({
      data: {
        nombre,
        direccion,
        telefono,
        ciudad
      }
    });
    res.status(201).json(nuevaSede);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear sede' });
  }
};

exports.updateSede = async (req, res) => {
  const { id } = req.params;
  try {
    const sedeActualizada = await prisma.sedes.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.json(sedeActualizada);
  } catch (error) {
    res.status(400).json({ error: "Error actualizando sede" });
  }
};

exports.deleteSede = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.sedes.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Error eliminando sede" });
  }
};

