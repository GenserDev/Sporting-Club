const prisma = require('../generated/prisma/client');

// Crear un nuevo cliente
exports.createCliente = async (req, res) => {
  try {
    const cliente = await prisma.cliente.create({
      data: {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
      },
    });
    res.status(201).json(cliente); // Devuelve el cliente creado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.status(200).json(clientes); // Devuelve todos los clientes
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un cliente por su ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await prisma.cliente.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!cliente) {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un cliente por su ID
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await prisma.cliente.update({
      where: { id: parseInt(req.params.id) },
      data: {
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
      },
    });
    res.status(200).json(cliente); // Devuelve el cliente actualizado
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un cliente por su ID
exports.deleteCliente = async (req, res) => {
  try {
    await prisma.cliente.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).send(); // Cliente eliminado correctamente
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};