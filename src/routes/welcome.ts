import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const message = 'Bem-vindo à API GeoPoly!';
  res.json({ message });
});

export default router;
