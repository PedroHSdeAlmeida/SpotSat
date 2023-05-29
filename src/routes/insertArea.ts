import express, { Request, Response } from 'express';
import BD from "../database";
import Area from "../model/area";

const insertArea = express.Router();
const bd = new BD();

insertArea.post('/', async (req: Request, res: Response) => {
  try {
    const area: Area = req.body;
    await bd.insertArea(area);
    res.status(201).json({ message: 'Área inserida com sucesso!' });
  } catch (error) {
    console.error('Erro ao inserir área:', error);
    res.status(500).json({ error: 'Erro ao inserir área.' });
  }
});

export default insertArea;
