import request from 'supertest';
import app from '../app';

describe('GET /v2/places', () => {
  test('Deve retornar uma lista de lugares', async () => {
    const response = await request(app).get('/v2/places');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2);
  });
});

describe('GET /v2/places/:id', () => {
  test('Deve retornar um lugar específico pelo ID', async () => {
    const response = await request(app).get('/v2/places/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
      name: 'Parque da Cidade',
      latitude: -23.221112,
      longitude: -45.899678,
    });
  });

  test('Deve retornar 404 se o lugar não for encontrado', async () => {
    const response = await request(app).get('/v2/places/999');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Lugar não encontrado' });
  });
});
