import request from 'supertest';
import app from '../app';

describe('Auth route', () => {
  it('should return 200 OK when credentials are correct', async () => {
    const response = await request(app)
      .post('/v1/auth')
      .send({ email: 'admin@exemplo.com.br', password: 'abcd1234' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Autenticado com sucesso!');
  });
});
