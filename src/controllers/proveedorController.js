const prisma = require('../generated/prisma/client');

// Crear un nuevo proveedor
exports.createProveedor = async (req, res) => {
  try {
    const proveedor = await prisma.proveedor.create({
      data: {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
      },
    });
    res.status(201).json(proveedor); // Devuelve el proveedor creado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los proveedores
exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await prisma.proveedor.findMany();
    res.status(200).json(proveedores); // Devuelve todos los proveedores
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un proveedor por su ID
exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await prisma.proveedor.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!proveedor) {
      return res.status(404).json({ error: "Proveedor no encontrado" });
    }
    res.status(200).json(proveedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un proveedor por su ID
exports.updateProveedor = async (req, res) => {
  try {
    const proveedor = await prisma.proveedor.update({
      where: { id: parseInt(req.params.id) },
      data: {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion,
      },
    });
    res.status(200).json(proveedor); // Devuelve el proveedor actualizado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un proveedor por su ID
exports.deleteProveedor = async (req, res) => {
  try {
    await prisma.proveedor.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Proveedor eliminado correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};