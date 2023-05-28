import express, { Request, Response } from 'express';

const placeRouter = express.Router();

const places = [
  {
    id: 1,
    name: 'Parque da Cidade',
    latitude: -23.221112,
    longitude: -45.899678,
  },
  {
    id: 2,
    name: 'Praça Ulisses Guimarães',
    latitude: -23.180038,
    longitude: -45.884357,
  },
];

placeRouter.get('/', (req: Request, res: Response) => {
  res.json(places);
});

placeRouter.get('/:id', (req: Request, res: Response) => { 
  const { id } = req.params;
  const place = places.find((p) => p.id === Number(id));

  if (!place) {
    res.status(404).json({ error: 'Lugar não encontrado' });
  } else {
    res.json(place);
  }
});

export default placeRouter;
