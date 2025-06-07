const request = require('supertest');
const app = require('../../app');  // Sube dos directorios desde `src/__tests__/`

describe('CRUD de Mantenimiento Vehículo', () => {

  let mantenimientoId;

  it('debería crear un mantenimiento de vehículo', async () => {
    const response = await request(app)
      .post('/api/mantenimiento')
      .send({
        vehiculoId: 1, // Asegúrate de que exista un vehículo con id 1
        clienteId: 1,  // Asegúrate de que exista un cliente con id 1
        descripcion: 'Cambio de aceite',
        costo: 1500
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    mantenimientoId = response.body.id; // Guardamos el ID del mantenimiento creado
  });

  it('debería obtener todos los mantenimientos de vehículos', async () => {
    const response = await request(app).get('/api/mantenimiento');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Debe ser un array
  });

  it('debería obtener un mantenimiento de vehículo por ID', async () => {
    const response = await request(app).get(`/api/mantenimiento/${mantenimientoId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', mantenimientoId);
  });

  it('debería actualizar un mantenimiento de vehículo', async () => {
    const response = await request(app)
      .put(`/api/mantenimiento/${mantenimientoId}`)
      .send({
        vehiculoId: 1,
        clienteId: 1,
        descripcion: 'Cambio de filtros',
        costo: 1200
      });

    expect(response.status).toBe(200);
    expect(response.body.descripcion).toBe('Cambio de filtros'); // Verificar que la descripción haya sido actualizada
  });

  it('debería eliminar un mantenimiento de vehículo', async () => {
    const response = await request(app).delete(`/api/mantenimiento/${mantenimientoId}`);
    expect(response.status).toBe(204); // Código 204 indica eliminación exitosa
  });
});