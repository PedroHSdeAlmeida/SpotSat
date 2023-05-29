import express, { Request, Response } from 'express';
import BD from "../database";

const getPlace = express.Router();
const bd = new BD();

getPlace.get('/', async (req: Request, res: Response) => {
  try {
    const lugares = await bd.getPlaces();
    res.status(200).json(lugares);
  } catch (error) {
    console.error('Erro ao listar lugares:', error);
    res.status(500).json({ error: 'Erro ao listar lugares.' });
  }
});

export default getPlace;
