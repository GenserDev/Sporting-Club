const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient();

// Configurar faker en español
faker.locale = 'es';

async function main() {
  console.log('🌱 Iniciando seed de la base de datos...');

  // 1. Limpiar datos existentes
  await prisma.$executeRaw`TRUNCATE TABLE "mantenimiento_vehiculos", "devoluciones", "descuentos", "promociones", "historial_vehiculos", "inventarios", "roles", "empleado_sucursales", "detalle_facturas", "factura_vehiculos", "facturas", "pagos", "vehiculos", "categorias", "proveedores", "marcas", "clientes", "empleados", "usuarios", "sedes", "reportes" RESTART IDENTITY CASCADE;`;

  // 2. Crear Sedes (8 sedes)
  const sedesData = [
    { nombre: 'Sede Central', direccion: 'Zona 10, Ciudad de Guatemala', telefono: '2234-5678', ciudad: 'Guatemala' },
    { nombre: 'Sucursal Norte', direccion: 'Zona 17, Ciudad de Guatemala', telefono: '2234-5679', ciudad: 'Guatemala' },
    { nombre: 'Sucursal Sur', direccion: 'Villa Nueva', telefono: '2234-5680', ciudad: 'Villa Nueva' },
    { nombre: 'Sucursal Este', direccion: 'Zona 18, Ciudad de Guatemala', telefono: '2234-5681', ciudad: 'Guatemala' },
    { nombre: 'Sucursal Xela', direccion: 'Quetzaltenango Centro', telefono: '7765-4321', ciudad: 'Quetzaltenango' },
    { nombre: 'Sucursal Antigua', direccion: 'Antigua Guatemala', telefono: '7832-1234', ciudad: 'Antigua Guatemala' },
    { nombre: 'Sucursal Escuintla', direccion: 'Centro Escuintla', telefono: '7888-9999', ciudad: 'Escuintla' },
    { nombre: 'Sucursal Petén', direccion: 'Flores, Petén', telefono: '7926-5555', ciudad: 'Flores' }
  ];

  for (const sede of sedesData) {
    await prisma.sede.create({ data: sede });
  }
  console.log('✅ Sedes creadas');

  // 3. Crear Marcas (20 marcas)
  const marcasData = [
    { nombre: 'Toyota', paisOrigen: 'Japón', aniofundacion: 1937 },
    { nombre: 'BMW', paisOrigen: 'Alemania', aniofundacion: 1916 },
    { nombre: 'Mercedes-Benz', paisOrigen: 'Alemania', aniofundacion: 1926 },
    { nombre: 'Audi', paisOrigen: 'Alemania', aniofundacion: 1909 },
    { nombre: 'Lexus', paisOrigen: 'Japón', aniofundacion: 1989 },
    { nombre: 'Honda', paisOrigen: 'Japón', aniofundacion: 1948 },
    { nombre: 'Nissan', paisOrigen: 'Japón', aniofundacion: 1933 },
    { nombre: 'Hyundai', paisOrigen: 'Corea del Sur', aniofundacion: 1967 },
    { nombre: 'Kia', paisOrigen: 'Corea del Sur', aniofundacion: 1944 },
    { nombre: 'Mazda', paisOrigen: 'Japón', aniofundacion: 1920 },
    { nombre: 'Subaru', paisOrigen: 'Japón', aniofundacion: 1953 },
    { nombre: 'Volkswagen', paisOrigen: 'Alemania', aniofundacion: 1937 },
    { nombre: 'Ford', paisOrigen: 'Estados Unidos', aniofundacion: 1903 },
    { nombre: 'Chevrolet', paisOrigen: 'Estados Unidos', aniofundacion: 1911 },
    { nombre: 'Land Rover', paisOrigen: 'Reino Unido', aniofundacion: 1948 },
    { nombre: 'Jaguar', paisOrigen: 'Reino Unido', aniofundacion: 1922 },
    { nombre: 'Porsche', paisOrigen: 'Alemania', aniofundacion: 1931 },
    { nombre: 'Ferrari', paisOrigen: 'Italia', aniofundacion: 1939 },
    { nombre: 'Lamborghini', paisOrigen: 'Italia', aniofundacion: 1963 },
    { nombre: 'Mitsubishi', paisOrigen: 'Japón', aniofundacion: 1970 }
  ];

  for (const marca of marcasData) {
    await prisma.marca.create({ data: marca });
  }
  console.log('✅ Marcas creadas');

  // 4. Crear Categorías (10 categorías)
  const categoriasData = [
    { nombre: 'Sedán', descripcion: 'Vehículos de 4 puertas, cómodos para familias' },
    { nombre: 'SUV', descripcion: 'Vehículos utilitarios deportivos' },
    { nombre: 'Hatchback', descripcion: 'Vehículos compactos de 5 puertas' },
    { nombre: 'Pickup', descripcion: 'Camionetas con área de carga' },
    { nombre: 'Coupé', descripcion: 'Vehículos deportivos de 2 puertas' },
    { nombre: 'Convertible', descripcion: 'Vehículos con techo descapotable' },
    { nombre: 'Station Wagon', descripcion: 'Vehículos familiares con gran espacio' },
    { nombre: 'Crossover', descripcion: 'Mezcla entre SUV y sedán' },
    { nombre: 'Deportivo', descripcion: 'Vehículos de alto rendimiento' },
    { nombre: 'Eléctrico', descripcion: 'Vehículos con motor eléctrico' }
  ];

  for (const categoria of categoriasData) {
    await prisma.categoria.create({ data: categoria });
  }
  console.log('✅ Categorías creadas');

  // 5. Crear Proveedores (15 proveedores)
  for (let i = 1; i <= 15; i++) {
    await prisma.proveedor.create({
      data: {
        nombre: faker.company.name().slice(0, 50),
        telefono: faker.phone.number('2###-####').slice(0, 20),
        correo: faker.internet.email().slice(0, 100),
        direccion: faker.location.streetAddress().slice(0, 100),
        contacto: faker.person.fullName().slice(0, 50)
      }
    });
  }
  console.log('✅ Proveedores creados');

  // 6. Crear Roles (5 roles)
  const rolesData = [
    { nombre: 'Administrador', descripcion: 'Acceso completo al sistema' },
    { nombre: 'Gerente', descripcion: 'Gestión de sucursal y empleados' },
    { nombre: 'Vendedor', descripcion: 'Ventas y atención al cliente' },
    { nombre: 'Contador', descripcion: 'Gestión financiera y reportes' },
    { nombre: 'Cliente', descripcion: 'Usuario cliente del sistema' }
  ];

  for (const role of rolesData) {
    await prisma.role.create({ data: role });
  }
  console.log('✅ Roles creados');

  // 7. Crear Empleados (120 empleados)
  const puestos = ['Vendedor Senior', 'Vendedor Junior', 'Gerente de Ventas', 'Gerente General', 'Contador', 'Asistente Administrativo', 'Técnico Automotriz', 'Recepcionista'];
  
  for (let i = 1; i <= 120; i++) {
    const sedeId = Math.floor(Math.random() * 8) + 1;
    const puesto = puestos[Math.floor(Math.random() * puestos.length)];
    
    await prisma.empleado.create({
      data: {
        nombre: faker.person.firstName(),
        apellido: faker.person.lastName(),
        puesto: puesto,
        salario: faker.number.float({ min: 3000, max: 25000, precision: 0.01 }),
        fechaContratacion: faker.date.between({ from: '2020-01-01', to: '2024-12-31' }),
        sedeId: sedeId
      }
    });
  }
  console.log('✅ Empleados creados');

  // 8. Crear Clientes (200 clientes)
  for (let i = 1; i <= 200; i++) {
    await prisma.cliente.create({
      data: {
        nombre: faker.person.firstName().slice(0, 30),         
        apellido: faker.person.lastName().slice(0, 30),       
        telefono: faker.phone.number('5###-####').slice(0, 20),
        correo: faker.internet.email().slice(0, 100),
        direccion: faker.location.streetAddress().slice(0, 100),
        dpi: faker.string.numeric(13),                         
        fechaNacimiento: faker.date.between({ 
          from: '1960-01-01', 
          to: '2005-12-31' 
        })
      }
    });
  }
  console.log('✅ Clientes creados');


  // 9. Crear Vehículos (500 vehículos)
  const modelos = {
    'Toyota': ['Corolla', 'Camry', 'RAV4', 'Highlander', 'Prius'],
    'BMW': ['Serie 3', 'Serie 5', 'X3', 'X5', 'i4'],
    'Mercedes-Benz': ['Clase C', 'Clase E', 'GLC', 'GLE', 'EQC'],
    'Audi': ['A3', 'A4', 'Q3', 'Q5', 'e-tron'],
    'Honda': ['Civic', 'Accord', 'CR-V', 'Pilot', 'Insight']
  };

  const colores = ['Blanco', 'Negro', 'Gris', 'Plata', 'Rojo', 'Azul', 'Verde', 'Dorado', 'Beige'];
  const lineas = ['Sedán', 'SUV', 'Hatchback', 'Coupé', 'Crossover'];
  const motores = ['1.6L 4 cilindros', '2.0L 4 cilindros Turbo', '3.0L V6', '2.5L Híbrido', 'Eléctrico 150kW'];
  const combustibles = ['GASOLINA', 'DIESEL', 'HIBRIDO', 'ELECTRICO'];

  for (let i = 1; i <= 500; i++) {
    const marcaId = Math.floor(Math.random() * 20) + 1;
    const marca = await prisma.marca.findUnique({ where: { id: marcaId } });
    const modelosDisponibles = modelos[marca.nombre] || ['Modelo Estándar'];
    const modelo = modelosDisponibles[Math.floor(Math.random() * modelosDisponibles.length)];
    
    const anio = faker.number.int({ min: 2015, max: 2024 });
    const kilometraje = anio < 2022 ? faker.number.int({ min: 5000, max: 80000 }) : faker.number.int({ min: 0, max: 15000 });
    const precio = faker.number.float({ min: 15000, max: 150000, precision: 0.01 });
    
    await prisma.vehiculo.create({
      data: {
        modelo: modelo,
        anio: anio,
        color: colores[Math.floor(Math.random() * colores.length)],
        estado: kilometraje < 1000 ? 'NUEVO' : 'USADO',
        linea: lineas[Math.floor(Math.random() * lineas.length)],
        kilometraje: kilometraje,
        precio: precio,
        precioOriginal: precio * faker.number.float({ min: 1.1, max: 1.3 }),
        marcaId: marcaId,
        categoriaId: Math.floor(Math.random() * 10) + 1,
        proveedorId: Math.floor(Math.random() * 15) + 1,
        airbags: faker.number.int({ min: 2, max: 10 }),
        puntuacionSeguridad: faker.number.int({ min: 3, max: 5 }),
        motor: motores[Math.floor(Math.random() * motores.length)],
        tipoCombustible: combustibles[Math.floor(Math.random() * combustibles.length)],
        torque: faker.number.int({ min: 150, max: 500 }),
        caballos: faker.number.int({ min: 120, max: 400 }),
        numeroSerie: `VIN${faker.string.alphanumeric({ length: 17, casing: 'upper' })}`,
        numeroMotor: `MOT${faker.string.alphanumeric({ length: 12, casing: 'upper' })}`
      }
    });
  }
  console.log('✅ Vehículos creados');

  // 10. Crear Inventarios
  const vehiculos = await prisma.vehiculo.findMany();
  for (const vehiculo of vehiculos) {
    const sedeId = Math.floor(Math.random() * 8) + 1;
    const cantidad = faker.number.int({ min: 0, max: 5 });
    
    await prisma.inventario.create({
      data: {
        vehiculoId: vehiculo.id,
        cantidad: cantidad,
        cantidadMinima: 1,
        sedeId: sedeId,
        estado: cantidad > 0 ? 'DISPONIBLE' : 'VENDIDO'
      }
    });
  }
  console.log('✅ Inventarios creados');

  // 11. Crear Usuarios (100 usuarios)
  const empleados = await prisma.empleado.findMany();
  const clientes = await prisma.cliente.findMany();

  // Usuarios para empleados (50)
  for (let i = 0; i < 50; i++) {
    const empleado = empleados[i];
    await prisma.usuario.create({
      data: {
        correo: `empleado${i + 1}@concesionaria.com`,
        password: faker.internet.password(),
        rol: 'VENDEDOR',
        empleadoId: empleado.id
      }
    });
  }

  // Usuarios para clientes (50)
  for (let i = 0; i < 50; i++) {
    const cliente = clientes[i];
    await prisma.usuario.create({
      data: {
        correo: cliente.correo,
        password: faker.internet.password(),
        rol: 'COMPRADOR',
        clienteId: cliente.id
      }
    });
  }
  console.log('✅ Usuarios creados');

  // 12. Crear Facturas (150 facturas)
  for (let i = 1; i <= 150; i++) {
    const clienteId = faker.number.int({ min: 1, max: 200 });
    const empleadoId = faker.number.int({ min: 1, max: 120 });
    const subtotal = faker.number.float({ min: 15000, max: 80000, precision: 0.01 });
    const impuestos = subtotal * 0.12; // IVA 12%
    const total = subtotal + impuestos;

    const factura = await prisma.factura.create({
      data: {
        fecha: faker.date.between({ from: '2023-01-01', to: '2024-12-31' }),
        medioPago: ['EFECTIVO', 'TARJETA', 'TRANSFERENCIA'][Math.floor(Math.random() * 3)],
        estado: ['PENDIENTE', 'PAGADA', 'CANCELADA'][Math.floor(Math.random() * 3)],
        clienteId: clienteId,
        empleadoId: empleadoId,
        subtotal: subtotal,
        impuestos: impuestos,
        total: total,
        observaciones: Math.random() > 0.7 ? faker.lorem.sentence() : null
      }
    });

    // Crear detalles de factura (1-3 vehículos por factura)
    const numVehiculos = faker.number.int({ min: 1, max: 3 });
    for (let j = 0; j < numVehiculos; j++) {
      const vehiculoId = faker.number.int({ min: 1, max: 500 });
      const vehiculo = await prisma.vehiculo.findUnique({ where: { id: vehiculoId } });
      const descuento = faker.number.float({ min: 0, max: 15, precision: 0.01 });
      const precio = Number(vehiculo.precio);
      const subtotalDetalle = precio * (1 - descuento / 100);

      await prisma.detalleFactura.create({
        data: {
          facturaId: factura.id,
          vehiculoId: vehiculoId,
          cantidad: 1,
          precio: precio,
          descuento: descuento,
          subtotal: subtotalDetalle
        }
      });
    }
  }
  console.log('✅ Facturas creadas');

  // 13. Crear Pagos (100 pagos)
  for (let i = 1; i <= 100; i++) {
    await prisma.pago.create({
      data: {
        monto: faker.number.float({ min: 1000, max: 50000, precision: 0.01 }),
        fecha: faker.date.between({ from: '2023-01-01', to: '2024-12-31' }),
        medioPago: ['EFECTIVO', 'TARJETA', 'TRANSFERENCIA'][Math.floor(Math.random() * 3)],
        referencia: faker.string.alphanumeric({ length: 10, casing: 'upper' }),
        clienteId: faker.number.int({ min: 1, max: 200 }),
        empleadoId: faker.number.int({ min: 1, max: 120 })
      }
    });
  }
  console.log('✅ Pagos creados');

  // 14. Crear Promociones (20 promociones)
  for (let i = 1; i <= 20; i++) {
    const fechaInicio = faker.date.between({ from: '2024-01-01', to: '2024-06-01' });
    const fechaFin = faker.date.between({ from: fechaInicio, to: '2024-12-31' });

    await prisma.promocion.create({
      data: {
        nombre: `Promoción ${faker.commerce.productAdjective()} ${i}`,
        descripcion: faker.lorem.sentences(2),
        descuento: faker.number.float({ min: 5, max: 25, precision: 0.01 }),
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        activa: faker.datatype.boolean(),
        vehiculoId: Math.random() > 0.3 ? faker.number.int({ min: 1, max: 500 }) : null
      }
    });
  }
  console.log('✅ Promociones creadas');

  // 15. Crear Descuentos (30 descuentos)
  for (let i = 1; i <= 30; i++) {
    const fechaInicio = faker.date.between({ from: '2024-01-01', to: '2024-06-01' });
    const fechaFin = faker.date.between({ from: fechaInicio, to: '2024-12-31' });

    await prisma.descuento.create({
      data: {
        codigo: faker.string.alphanumeric({ length: 8, casing: 'upper' }),
        descripcion: `Descuento ${faker.commerce.productAdjective()}`,
        porcentaje: faker.number.float({ min: 5, max: 20, precision: 0.01 }),
        montoFijo: Math.random() > 0.5 ? faker.number.float({ min: 500, max: 5000, precision: 0.01 }) : null,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        vehiculoId: Math.random() > 0.4 ? faker.number.int({ min: 1, max: 500 }) : null
      }
    });
  }
  console.log('✅ Descuentos creados');

  // 16. Crear Devoluciones (25 devoluciones)
  const facturas = await prisma.factura.findMany({ include: { detalles: true } });
  for (let i = 0; i < 25; i++) {
    const factura = facturas[faker.number.int({ min: 0, max: facturas.length - 1 })];
    if (factura.detalles.length > 0) {
      const detalle = factura.detalles[0];
      
      await prisma.devolucion.create({
        data: {
          facturaId: factura.id,
          vehiculoId: detalle.vehiculoId,
          fecha: faker.date.between({ from: factura.fecha, to: '2024-12-31' }),
          motivo: faker.helpers.arrayElement([
            'Defecto de fábrica',
            'No cumple expectativas',
            'Problema mecánico',
            'Error en la venta',
            'Cliente cambió de opinión'
          ]),
          cantidad: 1,
          montoDevolucion: Number(detalle.precio),
          aprobada: faker.datatype.boolean()
        }
      });
    }
  }
  console.log('✅ Devoluciones creadas');

  // 17. Crear Mantenimientos (80 mantenimientos)
  for (let i = 1; i <= 80; i++) {
    const vehiculoId = faker.number.int({ min: 1, max: 500 });
    const clienteId = faker.number.int({ min: 1, max: 200 });
    const fecha = faker.date.between({ from: '2023-01-01', to: '2024-12-31' });
    
    await prisma.mantenimientoVehiculo.create({
      data: {
        vehiculoId: vehiculoId,
        clienteId: clienteId,
        tipo: faker.helpers.arrayElement(['PREVENTIVO', 'CORRECTIVO', 'REVISION', 'EMERGENCIA']),
        fecha: fecha,
        descripcion: faker.lorem.sentences(3),
        costo: faker.number.float({ min: 200, max: 3000, precision: 0.01 }),
        completado: faker.datatype.boolean(),
        proximoMantenimiento: faker.date.between({ from: fecha, to: '2025-12-31' })
      }
    });
  }
  console.log('✅ Mantenimientos creados');

  // 18. Crear Historial de Vehículos (200 registros)
  for (let i = 1; i <= 200; i++) {
    await prisma.historialVehiculo.create({
      data: {
        vehiculoId: faker.number.int({ min: 1, max: 500 }),
        fecha: faker.date.between({ from: '2023-01-01', to: '2024-12-31' }),
        accion: faker.helpers.arrayElement(['Ingreso', 'Venta', 'Mantenimiento', 'Revisión', 'Actualización']),
        descripcion: faker.lorem.sentence(),
        usuarioId: faker.number.int({ min: 1, max: 100 })
      }
    });
  }
  console.log('✅ Historial de vehículos creado');

  // 19. Crear EmpleadoSucursal (asignaciones múltiples)
  for (let i = 1; i <= 50; i++) {
    const empleadoId = faker.number.int({ min: 1, max: 120 });
    const sedeId = faker.number.int({ min: 1, max: 8 });
    
    try {
      await prisma.empleadoSucursal.create({
        data: {
          empleadoId: empleadoId,
          sedeId: sedeId,
          horario: faker.helpers.arrayElement(['8:00-17:00', '9:00-18:00', '10:00-19:00', '7:00-16:00']),
          fechaAsignacion: faker.date.between({ from: '2023-01-01', to: '2024-12-31' })
        }
      });
    } catch (error) {
      // Ignora duplicados
    }
  }
  console.log('✅ Asignaciones empleado-sucursal creadas');

  // 20. Crear Reportes (15 reportes)
  for (let i = 1; i <= 15; i++) {
    await prisma.reporte.create({
      data: {
        titulo: `Reporte ${faker.helpers.arrayElement(['de Ventas', 'de Inventario', 'Financiero', 'de Clientes', 'de Empleados'])} ${i}`,
        fecha: faker.date.between({ from: '2024-01-01', to: '2024-12-31' }),
        tipo: faker.helpers.arrayElement(['VENTAS', 'INVENTARIO', 'FINANCIERO', 'CLIENTES', 'EMPLEADOS']),
        descripcion: faker.lorem.paragraph(),
        parametros: JSON.stringify({
          fechaInicio: faker.date.recent().toISOString(),
          fechaFin: faker.date.future().toISOString(),
          filtros: faker.helpers.arrayElements(['sede', 'marca', 'categoria'], 2)
        }),
        generadoPor: faker.number.int({ min: 1, max: 50 })
      }
    });
  }
  console.log('✅ Reportes creados');

  // Estadísticas finales
  const stats = {
    sedes: await prisma.sede.count(),
    marcas: await prisma.marca.count(),
    categorias: await prisma.categoria.count(),
    proveedores: await prisma.proveedor.count(),
    empleados: await prisma.empleado.count(),
    clientes: await prisma.cliente.count(),
    usuarios: await prisma.usuario.count(),
    vehiculos: await prisma.vehiculo.count(),
    facturas: await prisma.factura.count(),
    detalleFacturas: await prisma.detalleFactura.count(),
    pagos: await prisma.pago.count(),
    inventarios: await prisma.inventario.count(),
    promociones: await prisma.promocion.count(),
    descuentos: await prisma.descuento.count(),
    devoluciones: await prisma.devolucion.count(),
    mantenimientos: await prisma.mantenimientoVehiculo.count(),
    historial: await prisma.historialVehiculo.count(),
    roles: await prisma.role.count(),
    reportes: await prisma.reporte.count()
  };

  const totalRegistros = Object.values(stats).reduce((sum, count) => sum + count, 0);

  console.log('\n🎉 ¡Seed completado exitosamente!');
  console.log('📊 Estadísticas de datos creados:');
  console.log('=====================================');
  Object.entries(stats).forEach(([tabla, cantidad]) => {
    console.log(`${tabla.padEnd(20)}: ${cantidad.toString().padStart(6)}`);
  });
  console.log('=====================================');
  console.log(`TOTAL DE REGISTROS: ${totalRegistros.toString().padStart(6)}`);
  console.log('=====================================');
}

main()
  .catch((e) => {
    console.error('❌ Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });