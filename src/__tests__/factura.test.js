const request = require('supertest');
const app = require('../../app');  // Sube dos directorios desde `src/__tests__/`
describe('CRUD de Factura', () => {

  let facturaId;

  it('debería crear una factura', async () => {
    const response = await request(app)
      .post('/api/facturas')
      .send({
        fecha: '2023-12-01',
        medioPago: 'EFECTIVO',
        clienteId: 1, // Asegúrate de que exista un cliente con id 1
        empleadoId: 1, // Asegúrate de que exista un empleado con id 1
        total: 50000
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    facturaId = response.body.id; // Guardamos el ID de la factura creada
  });

  it('debería obtener todas las facturas', async () => {
    const response = await request(app).get('/api/facturas');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Debe ser un array
  });

  it('debería obtener una factura por ID', async () => {
    const response = await request(app).get(`/api/facturas/${facturaId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', facturaId);
  });

  it('debería actualizar una factura', async () => {
    const response = await request(app)
      .put(`/api/facturas/${facturaId}`)
      .send({
        fecha: '2023-12-02',
        medioPago: 'TARJETA',
        clienteId: 1,
        empleadoId: 1,
        total: 45000
      });

    expect(response.status).toBe(200);
    expect(response.body.total).toBe(45000); // Verificar que el total haya sido actualizado
  });

  it('debería eliminar una factura', async () => {
    const response = await request(app).delete(`/api/facturas/${facturaId}`);
    expect(response.status).toBe(204); // Código 204 indica eliminación exitosa
  });
});