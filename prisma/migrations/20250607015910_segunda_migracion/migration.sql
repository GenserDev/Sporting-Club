/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Descuento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DetalleFactura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Devolucion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Empleado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmpleadoSucursal` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Factura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FacturaVehiculo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `HistorialVehiculo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inventario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `MantenimientoVehiculo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Marca` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pago` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Promocion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Proveedor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reporte` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sede` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehiculo` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EstadoFactura" AS ENUM ('PENDIENTE', 'PAGADA', 'CANCELADA', 'ANULADA');

-- CreateEnum
CREATE TYPE "TipoMantenimiento" AS ENUM ('PREVENTIVO', 'CORRECTIVO', 'REVISION', 'EMERGENCIA');

-- CreateEnum
CREATE TYPE "EstadoInventario" AS ENUM ('DISPONIBLE', 'RESERVADO', 'VENDIDO', 'MANTENIMIENTO');

-- DropForeignKey
ALTER TABLE "Descuento" DROP CONSTRAINT "Descuento_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "DetalleFactura" DROP CONSTRAINT "DetalleFactura_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "DetalleFactura" DROP CONSTRAINT "DetalleFactura_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Devolucion" DROP CONSTRAINT "Devolucion_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "Devolucion" DROP CONSTRAINT "Devolucion_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Empleado" DROP CONSTRAINT "Empleado_sedeId_fkey";

-- DropForeignKey
ALTER TABLE "EmpleadoSucursal" DROP CONSTRAINT "EmpleadoSucursal_empleadoId_fkey";

-- DropForeignKey
ALTER TABLE "EmpleadoSucursal" DROP CONSTRAINT "EmpleadoSucursal_sedeId_fkey";

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Factura" DROP CONSTRAINT "Factura_empleadoId_fkey";

-- DropForeignKey
ALTER TABLE "FacturaVehiculo" DROP CONSTRAINT "FacturaVehiculo_facturaId_fkey";

-- DropForeignKey
ALTER TABLE "FacturaVehiculo" DROP CONSTRAINT "FacturaVehiculo_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "HistorialVehiculo" DROP CONSTRAINT "HistorialVehiculo_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_sedeId_fkey";

-- DropForeignKey
ALTER TABLE "Inventario" DROP CONSTRAINT "Inventario_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "MantenimientoVehiculo" DROP CONSTRAINT "MantenimientoVehiculo_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "MantenimientoVehiculo" DROP CONSTRAINT "MantenimientoVehiculo_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Pago" DROP CONSTRAINT "Pago_empleadoId_fkey";

-- DropForeignKey
ALTER TABLE "Promocion" DROP CONSTRAINT "Promocion_vehiculoId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_empleadoId_fkey";

-- DropForeignKey
ALTER TABLE "Vehiculo" DROP CONSTRAINT "Vehiculo_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Vehiculo" DROP CONSTRAINT "Vehiculo_marcaId_fkey";

-- DropForeignKey
ALTER TABLE "Vehiculo" DROP CONSTRAINT "Vehiculo_proveedorId_fkey";

-- DropForeignKey
ALTER TABLE "_RoleUsuario" DROP CONSTRAINT "_RoleUsuario_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleUsuario" DROP CONSTRAINT "_RoleUsuario_B_fkey";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "Cliente";

-- DropTable
DROP TABLE "Descuento";

-- DropTable
DROP TABLE "DetalleFactura";

-- DropTable
DROP TABLE "Devolucion";

-- DropTable
DROP TABLE "Empleado";

-- DropTable
DROP TABLE "EmpleadoSucursal";

-- DropTable
DROP TABLE "Factura";

-- DropTable
DROP TABLE "FacturaVehiculo";

-- DropTable
DROP TABLE "HistorialVehiculo";

-- DropTable
DROP TABLE "Inventario";

-- DropTable
DROP TABLE "MantenimientoVehiculo";

-- DropTable
DROP TABLE "Marca";

-- DropTable
DROP TABLE "Pago";

-- DropTable
DROP TABLE "Promocion";

-- DropTable
DROP TABLE "Proveedor";

-- DropTable
DROP TABLE "Reporte";

-- DropTable
DROP TABLE "Role";

-- DropTable
DROP TABLE "Sede";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "Vehiculo";

-- CreateTable
CREATE TABLE "sedes" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(20),
    "ciudad" VARCHAR(50) NOT NULL DEFAULT 'Guatemala',
    "activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "sedes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "correo" VARCHAR(150) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "rol" "Rol" NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "fechaCreacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ultimoAcceso" TIMESTAMP(3),
    "empleadoId" INTEGER,
    "clienteId" INTEGER,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "empleados" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "puesto" VARCHAR(50) NOT NULL,
    "salario" DECIMAL(10,2),
    "fechaContratacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "sedeId" INTEGER NOT NULL,

    CONSTRAINT "empleados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "apellido" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "correo" VARCHAR(150) NOT NULL,
    "direccion" VARCHAR(255),
    "dpi" VARCHAR(20),
    "fechaNacimiento" TIMESTAMP(3),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marcas" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "paisOrigen" VARCHAR(50),
    "aniofundacion" INTEGER,
    "activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "marcas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" TEXT,
    "activa" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vehiculos" (
    "id" SERIAL NOT NULL,
    "modelo" VARCHAR(100) NOT NULL,
    "anio" INTEGER NOT NULL,
    "color" VARCHAR(30) NOT NULL,
    "estado" "EstadoVehiculo" NOT NULL,
    "linea" VARCHAR(50) NOT NULL,
    "kilometraje" INTEGER NOT NULL DEFAULT 0,
    "precio" DECIMAL(12,2) NOT NULL,
    "precioOriginal" DECIMAL(12,2) NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "marcaId" INTEGER NOT NULL,
    "airbags" INTEGER NOT NULL DEFAULT 0,
    "puntuacionSeguridad" INTEGER NOT NULL DEFAULT 0,
    "motor" VARCHAR(100) NOT NULL,
    "tipoCombustible" "TipoCombustible" NOT NULL,
    "torque" INTEGER NOT NULL DEFAULT 0,
    "caballos" INTEGER NOT NULL DEFAULT 0,
    "categoriaId" INTEGER,
    "proveedorId" INTEGER,
    "fechaIngreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "numeroSerie" VARCHAR(50),
    "numeroMotor" VARCHAR(50),

    CONSTRAINT "vehiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proveedores" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "telefono" VARCHAR(20) NOT NULL,
    "correo" VARCHAR(150),
    "direccion" VARCHAR(255),
    "contacto" VARCHAR(100),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "proveedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "facturas" (
    "id" SERIAL NOT NULL,
    "numero" VARCHAR(50) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "medioPago" "MedioPago" NOT NULL,
    "estado" "EstadoFactura" NOT NULL DEFAULT 'PENDIENTE',
    "clienteId" INTEGER NOT NULL,
    "empleadoId" INTEGER NOT NULL,
    "subtotal" DECIMAL(12,2) NOT NULL,
    "impuestos" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "total" DECIMAL(12,2) NOT NULL,
    "observaciones" TEXT,

    CONSTRAINT "facturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalle_facturas" (
    "id" SERIAL NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "precio" DECIMAL(12,2) NOT NULL,
    "descuento" DECIMAL(5,2) NOT NULL DEFAULT 0.0,
    "subtotal" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "detalle_facturas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagos" (
    "id" SERIAL NOT NULL,
    "numero" VARCHAR(50) NOT NULL,
    "monto" DECIMAL(12,2) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "medioPago" "MedioPago" NOT NULL,
    "referencia" VARCHAR(100),
    "clienteId" INTEGER NOT NULL,
    "empleadoId" INTEGER NOT NULL,

    CONSTRAINT "pagos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "factura_vehiculos" (
    "facturaId" INTEGER NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "precio" DECIMAL(12,2) NOT NULL,
    "descuento" DECIMAL(5,2) NOT NULL DEFAULT 0.0,

    CONSTRAINT "factura_vehiculos_pkey" PRIMARY KEY ("facturaId","vehiculoId")
);

-- CreateTable
CREATE TABLE "empleado_sucursales" (
    "empleadoId" INTEGER NOT NULL,
    "sedeId" INTEGER NOT NULL,
    "horario" VARCHAR(100) NOT NULL,
    "fechaAsignacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "empleado_sucursales_pkey" PRIMARY KEY ("empleadoId","sedeId")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventarios" (
    "id" SERIAL NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 0,
    "cantidadMinima" INTEGER NOT NULL DEFAULT 1,
    "sedeId" INTEGER NOT NULL,
    "estado" "EstadoInventario" NOT NULL DEFAULT 'DISPONIBLE',
    "fechaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "inventarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historial_vehiculos" (
    "id" SERIAL NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accion" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "usuarioId" INTEGER,

    CONSTRAINT "historial_vehiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promociones" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "descuento" DECIMAL(5,2) NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "activa" BOOLEAN NOT NULL DEFAULT true,
    "vehiculoId" INTEGER,

    CONSTRAINT "promociones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "descuentos" (
    "id" SERIAL NOT NULL,
    "codigo" VARCHAR(20) NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL,
    "porcentaje" DECIMAL(5,2) NOT NULL,
    "montoFijo" DECIMAL(10,2),
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaFin" TIMESTAMP(3) NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "vehiculoId" INTEGER,

    CONSTRAINT "descuentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devoluciones" (
    "id" SERIAL NOT NULL,
    "numero" VARCHAR(50) NOT NULL,
    "facturaId" INTEGER NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "motivo" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL DEFAULT 1,
    "montoDevolucion" DECIMAL(12,2) NOT NULL,
    "aprobada" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "devoluciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mantenimiento_vehiculos" (
    "id" SERIAL NOT NULL,
    "vehiculoId" INTEGER NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "tipo" "TipoMantenimiento" NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "descripcion" TEXT NOT NULL,
    "costo" DECIMAL(10,2) NOT NULL,
    "completado" BOOLEAN NOT NULL DEFAULT false,
    "proximoMantenimiento" TIMESTAMP(3),

    CONSTRAINT "mantenimiento_vehiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reportes" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(150) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "parametros" JSON,
    "generadoPor" INTEGER,

    CONSTRAINT "reportes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_empleadoId_key" ON "usuarios"("empleadoId");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_clienteId_key" ON "usuarios"("clienteId");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_correo_key" ON "clientes"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_dpi_key" ON "clientes"("dpi");

-- CreateIndex
CREATE UNIQUE INDEX "marcas_nombre_key" ON "marcas"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "categorias_nombre_key" ON "categorias"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "vehiculos_numeroSerie_key" ON "vehiculos"("numeroSerie");

-- CreateIndex
CREATE UNIQUE INDEX "vehiculos_numeroMotor_key" ON "vehiculos"("numeroMotor");

-- CreateIndex
CREATE UNIQUE INDEX "proveedores_correo_key" ON "proveedores"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "facturas_numero_key" ON "facturas"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "pagos_numero_key" ON "pagos"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "roles_nombre_key" ON "roles"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "inventarios_vehiculoId_sedeId_key" ON "inventarios"("vehiculoId", "sedeId");

-- CreateIndex
CREATE UNIQUE INDEX "descuentos_codigo_key" ON "descuentos"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "devoluciones_numero_key" ON "devoluciones"("numero");

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleados" ADD CONSTRAINT "empleados_sedeId_fkey" FOREIGN KEY ("sedeId") REFERENCES "sedes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "vehiculos_marcaId_fkey" FOREIGN KEY ("marcaId") REFERENCES "marcas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "vehiculos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "vehiculos" ADD CONSTRAINT "vehiculos_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "proveedores"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facturas" ADD CONSTRAINT "facturas_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "facturas" ADD CONSTRAINT "facturas_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_facturas" ADD CONSTRAINT "detalle_facturas_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "facturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_facturas" ADD CONSTRAINT "detalle_facturas_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factura_vehiculos" ADD CONSTRAINT "factura_vehiculos_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "facturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factura_vehiculos" ADD CONSTRAINT "factura_vehiculos_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleado_sucursales" ADD CONSTRAINT "empleado_sucursales_empleadoId_fkey" FOREIGN KEY ("empleadoId") REFERENCES "empleados"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "empleado_sucursales" ADD CONSTRAINT "empleado_sucursales_sedeId_fkey" FOREIGN KEY ("sedeId") REFERENCES "sedes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventarios" ADD CONSTRAINT "inventarios_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventarios" ADD CONSTRAINT "inventarios_sedeId_fkey" FOREIGN KEY ("sedeId") REFERENCES "sedes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historial_vehiculos" ADD CONSTRAINT "historial_vehiculos_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promociones" ADD CONSTRAINT "promociones_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "descuentos" ADD CONSTRAINT "descuentos_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devoluciones" ADD CONSTRAINT "devoluciones_facturaId_fkey" FOREIGN KEY ("facturaId") REFERENCES "facturas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devoluciones" ADD CONSTRAINT "devoluciones_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mantenimiento_vehiculos" ADD CONSTRAINT "mantenimiento_vehiculos_vehiculoId_fkey" FOREIGN KEY ("vehiculoId") REFERENCES "vehiculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mantenimiento_vehiculos" ADD CONSTRAINT "mantenimiento_vehiculos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleUsuario" ADD CONSTRAINT "_RoleUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleUsuario" ADD CONSTRAINT "_RoleUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
