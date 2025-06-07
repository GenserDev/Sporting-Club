const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAllEmpleados = async (req, res) => {
  try {
    const empleados = await prisma.empleados.findMany({
      include: { sede: true }
    });
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
};

exports.createEmpleado = async (req, res) => {
  const { nombre, apellido, puesto, salario, sedeId } = req.body;
  try {
    const nuevoEmpleado = await prisma.empleados.create({
      data: {
        nombre,
        apellido,
        puesto,
        salario: parseFloat(salario),
        sedeId: parseInt(sedeId)
      }
    });
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear empleado' });
  }
};


exports.updateEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    const empleadoActualizado = await prisma.empleados.update({
      where: { id: parseInt(id) },
      data: req.body
    });
    res.json(empleadoActualizado);
  } catch (error) {
    res.status(400).json({ error: "Error actualizando empleado" });
  }
};

exports.deleteEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.empleados.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Error eliminando empleado" });
  }
};