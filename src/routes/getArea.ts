import express, { Request, Response } from 'express';
import BD from "../database";

const getArea = express.Router();
const bd = new BD();

getArea.get('/', async (req: Request, res: Response) => {
  try {
    const areas = await bd.listarAreas();
    res.status(200).json(areas);
  } catch (error) {
    console.error('Erro ao listar áreas:', error);
    res.status(500).json({ error: 'Erro ao listar áreas.' });
  }
});

export default getArea;
