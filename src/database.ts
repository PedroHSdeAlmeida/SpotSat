import { Client } from 'pg';
import Lugar from './model/place';
import Area from './model/area';

export default class BD {
  private cliente: Client;

  async conectar() {
    try {
      this.cliente = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'dbspotsat',
        password: 'fatec',
        port: 5432,
      });

      await this.cliente.connect();
      console.log('Conectado ao banco de dados com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
      throw error;
    }
  }

  async insertPlace(lugar: Lugar) {
    await this.conectar();
    await this.cliente.query('INSERT INTO lugares(nome, ponto) VALUES($1, ST_SetSRID(ST_MakePoint($2, $3), 4326))', [lugar.nome, lugar.ponto.coordinates[0], lugar.ponto.coordinates[1]]);
    await this.cliente.end();
  }
  
  async insertArea(area: Area) {
    await this.conectar();
    await this.cliente.query('INSERT INTO areas(nome, poligono) VALUES($1, ST_SetSRID(ST_GeomFromGeoJSON($2), 4326))', [area.nome, JSON.stringify(area.poligono)]);
    await this.cliente.end();
  }
  
  async getPlaces() {
    await this.conectar();
    const result = await this.cliente.query('SELECT * FROM lugares');
    await this.cliente.end();
    return result.rows;
  }
  
  async listarAreas() {
    await this.conectar();
    const result = await this.cliente.query('SELECT * FROM areas');
    await this.cliente.end();
    return result.rows;
  }
  
 
}
