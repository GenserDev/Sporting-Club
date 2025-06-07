const request = require('supertest');
const app = require('../../app');  // Sube dos directorios desde `src/__tests__/`

describe('CRUD de Cliente', () => {
  let clienteId;

  it('debería crear un cliente', async () => {
    const response = await request(app)
      .post('/api/clientes')
      .send({
        nombre: 'Juan Pérez',
        telefono: '123456789',
        correo: 'juan.perez@example.com'
      });
    expect(response.status).toBe(201);
    clienteId = response.body.id;
  });

  it('debería obtener todos los clientes', async () => {
    const response = await request(app).get('/api/clientes');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debería obtener un cliente por ID', async () => {
    const response = await request(app).get(`/api/clientes/${clienteId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', clienteId);
  });

  it('debería actualizar un cliente', async () => {
    const response = await request(app)
      .put(`/api/clientes/${clienteId}`)
      .send({
        nombre: 'Juan Pérez Actualizado',
        telefono: '987654321',
        correo: 'juan.perez_updated@example.com'
      });
    expect(response.status).toBe(200);
    expect(response.body.nombre).toBe('Juan Pérez Actualizado');
  });

  it('debería eliminar un cliente', async () => {
    const response = await request(app).delete(`/api/clientes/${clienteId}`);
    expect(response.status).toBe(204);
  });
});