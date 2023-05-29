import { Client } from 'pg';
import Lugar from './model/place';

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
  
 
}
