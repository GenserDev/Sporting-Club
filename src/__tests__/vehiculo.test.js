const request = require('supertest');
const app = require('../../app');  // Sube dos directorios desde `src/__tests__/`

describe('CRUD de Vehiculo', () => {
  
  let vehicleId;

  // Prueba para crear un vehículo
  it('debería crear un vehículo', async () => {
    const response = await request(app)
      .post('/api/vehiculos')
      .send({
        modelo: 'Toyota Camry',
        anio: 2020,
        color: 'Negro',
        estado: 'NUEVO',
        linea: 'SUV',
        kilometraje: 15000,
        precio: 30000,
        precio_original: 32000,
        marcaId: 1,
        airbags: 6,
        puntuacionSeguridad: 5,
        motor: 'V6',
        tipoCombustible: 'GASOLINA',
        torque: 350,
        caballos: 250
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    vehicleId = response.body.id; // Guardamos el ID del vehículo creado
  });

  // Prueba para obtener todos los vehículos
  it('debería obtener todos los vehículos', async () => {
    const response = await request(app).get('/api/vehiculos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Debería ser un array
  });

  // Prueba para obtener un vehículo por ID
  it('debería obtener un vehículo por ID', async () => {
    const response = await request(app).get(`/api/vehiculos/${vehicleId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', vehicleId);
  });

  // Prueba para actualizar un vehículo
  it('debería actualizar un vehículo', async () => {
    const response = await request(app)
      .put(`/api/vehiculos/${vehicleId}`)
      .send({
        modelo: 'Toyota Camry',
        anio: 2020,
        color: 'Blanco',
        estado: 'USADO',
        linea: 'SUV',
        kilometraje: 16000,
        precio: 28000,
        precio_original: 32000,
        marcaId: 1,
        airbags: 6,
        puntuacionSeguridad: 5,
        motor: 'V6',
        tipoCombustible: 'GASOLINA',
        torque: 350,
        caballos: 250
      });

    expect(response.status).toBe(200);
    expect(response.body.color).toBe('Blanco');  // Verificar que el color haya sido actualizado
  });

  // Prueba para eliminar un vehículo
  it('debería eliminar un vehículo', async () => {
    const response = await request(app).delete(`/api/vehiculos/${vehicleId}`);
    expect(response.status).toBe(204); // Código de estado 204 indica eliminación exitosa
  });

});