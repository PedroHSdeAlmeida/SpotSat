import request from 'supertest';
import app  from '../src/app';

describe('Testes da API', () => {
  it('Deve retornar a mensagem de boas-vindas ao acessar a rota GET /v1/', async () => {
    const response = await request(app).get('/v1/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Bem-vindo à API GeoPoly!' });
  });
});
