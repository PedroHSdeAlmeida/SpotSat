import express, { Request, Response } from 'express';

const placeRouter = express.Router();
  
  placeRouter.get('/', (req: Request, res: Response) => {
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
    res.json([places]);

  });
  
export default placeRouter;