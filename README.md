# 🛒 Sporting Club

Este proyecto es una aplicación CRUD completa para una concesionaria de automóviles, que incluye un backend desarrollado con Node.js + Express y un frontend básico construido con HTML, CSS y JavaScript. La aplicación permite gestionar tres tipos de CRUD diferentes: empleados, vehículos y sedes. Además, incorpora la generación de tres tipos distintos de reportes y la funcionalidad para exportar la información en formato CSV.

---

## 📦 Requisitos

- Node.js 
- npm
- pgAdmin u derivados

---

## 🚀 Instalación

1. **Clona el repositorio**

```bash
git clone [https://github.com/GenserDev/game-shop-crud.git](https://github.com/GenserDev/Sporting-Club.git](https://github.com/GenserDev/Sporting-Club.git)
```
```bash
cd Sporting-Club
```
2. **Instalar dependencias**
```bash
npm install
```
3. **Crear una database en pgAdmin u derivados**
```bash
CREATE DATABASE nombre-de-la-db;
```
4. **Crear archivo .env* dentro de Laboratory:**
```bash
DATABASE_URL="postgresql://[nombredeusuario]:[contraseña]@localhost:[numero-de-puerto]/[nombre-de-la-db]"
```
Nota: Estos datos tienen que ser los relacionados a tus credenciales del servidor donde montaste la database.

5. **Iniciar el servidor backend**
```bash
npx prisma generate
nom run dev
```
6. **Abrir archivo index.html**
```bash
cd public
index.html
```

# Imagen de referencia 
![A](https://github.com/user-attachments/assets/983d3cc2-bdc3-4f7b-bcd1-1250bb1aafcc)


![B](https://github.com/user-attachments/assets/a5c1375e-099c-41fa-9381-68cc007ac41a)

