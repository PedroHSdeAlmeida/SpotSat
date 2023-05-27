import request from 'supertest';
import app from '../src/app';


describe('GET /v2/places', () => {
    test('Deve retornar uma lista de lugares', async () => {
      const response = await request(app).get('/v2/places');
  
      expect(response.status).toBe(200);
      expect(response.body[0]).toHaveLength(2); 
    });
  });
  