import { Client } from 'pg';

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

  async desconectar() {
    await this.cliente.end()
  }
 
}
