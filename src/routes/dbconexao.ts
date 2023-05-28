import express from 'express';
import BD from "../db/database";

const conect = express.Router();
const bd = new BD();

conect.get('/', async (req, res) => {
  try {
    await bd.conectar();
    res.send('Conexão com o banco de dados estabelecida com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao conectar ao banco de dados: ' );
  }
});

export default conect;