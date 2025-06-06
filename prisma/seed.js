
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {

  const marcas = ['BMW', 'Lexus', 'Infiniti', 'Mercedes Benz', 'Audi', 'Land Rover', 'Jaguar', 'Mini Cooper', 'Toyota', 'Lamborghini', 'Aston Martin', 'Bentley', 'Porsche', 'Ferrari', 'Maserati', 'Rolls Royce', 'McLaren'];
  for (const marca of marcas) {
    await prisma.marca.create({
      data: { nombre: marca }
    });
  }

  // Insertar algunas sedes
  const sedes = ['Sucursal Central', 'Sucursal Norte', 'Sucursal Sur', 'Sucursal Este'];
  for (const sede of sedes) {
    await prisma.sede.create({
      data: { nombre: sede, direccion: `${sede} - Dirección` }
    });
  }

  // Insertar 100 empleados
  for (let i = 0; i < 100; i++) {
    const sedeId = Math.floor(Math.random() * 4) + 1;  // Asignar aleatoriamente a una sede
    await prisma.empleado.create({
      data: {
        nombre: `Empleado ${i + 1}`,
        puesto: i % 2 === 0 ? 'Vendedor' : 'Gerente',
        sedeId: sedeId
      }
    });
  }

  // Insertar 100 clientes
  for (let i = 0; i < 100; i++) {
    await prisma.cliente.create({
      data: {
        nombre: `Cliente ${i + 1}`,
        telefono: `555-000${i + 1}`,
        correo: `cliente${i + 1}@gmail.com`
      }
    });
  }

  // Insertar 1000 vehículos
  for (let i = 0; i < 1000; i++) {
    const marcaAleatoria = marcas[Math.floor(Math.random() * marcas.length)];
    const modelo = `Modelo ${i + 1}`;
    const anio = 2020 + (i % 5);  // Año aleatorio entre 2020 y 2024
    const color = i % 2 === 0 ? 'Rojo' : 'Azul';  // Alternar colores

    await prisma.vehiculo.create({
      data: {
        modelo,
        anio,
        color,
        estado: i % 2 === 0 ? 'NUEVO' : 'USADO',
        precio: (Math.random() * 10000 + 15000).toFixed(2), // Precio aleatorio entre 15,000 y 25,000
        disponible: true,
        marca: { connect: { nombre: marcaAleatoria } }  // Relacionar con una marca aleatoria
      }
    });
  }

  // Insertar facturas para cada cliente
  for (let i = 0; i < 100; i++) {
    const cliente = await prisma.cliente.findUnique({
      where: { correo: `cliente${i + 1}@gmail.com` }
    });

    const empleado = await prisma.empleado.findFirst();
    const vehiculo = await prisma.vehiculo.findFirst();  // Usar el primer vehículo creado

    await prisma.factura.create({
      data: {
        fecha: new Date(),
        medioPago: 'EFECTIVO',
        total: vehiculo.precio,
        clienteId: cliente.id,
        empleadoId: empleado.id,
        detalles: {
          create: {
            vehiculoId: vehiculo.id,
            precio: vehiculo.precio
          }
        }
      }
    });
  }

  console.log('Datos insertados exitosamente!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
