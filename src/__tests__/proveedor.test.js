const request = require('supertest');
const app = require('../../app');  // Sube dos directorios desde `src/__tests__/`

describe('CRUD de Proveedor', () => {

  let proveedorId;

  it('debería crear un proveedor', async () => {
    const response = await request(app)
      .post('/api/proveedores')
      .send({
        nombre: 'Proveedor 1',
        telefono: '123456789',
        correo: 'proveedor1@example.com',
        direccion: 'Calle 123'
      });
    
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    proveedorId = response.body.id; // Guardamos el ID del proveedor creado
  });

  it('debería obtener todos los proveedores', async () => {
    const response = await request(app).get('/api/proveedores');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Debe ser un array
  });

  it('debería obtener un proveedor por ID', async () => {
    const response = await request(app).get(`/api/proveedores/${proveedorId}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', proveedorId);
  });

  it('debería actualizar un proveedor', async () => {
    const response = await request(app)
      .put(`/api/proveedores/${proveedorId}`)
      .send({
        nombre: 'Proveedor Actualizado',
        telefono: '987654321',
        correo: 'proveedor_actualizado@example.com',
        direccion: 'Calle 456'
      });

    expect(response.status).toBe(200);
    expect(response.body.nombre).toBe('Proveedor Actualizado'); // Verificar que el nombre haya sido actualizado
  });

  it('debería eliminar un proveedor', async () => {
    const response = await request(app).delete(`/api/proveedores/${proveedorId}`);
    expect(response.status).toBe(204); // Código 204 indica eliminación exitosa
  });
});