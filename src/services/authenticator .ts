import { Request, Response } from 'express';

export const authenticate = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === 'admin@exemplo.com.br' && password === 'abcd1234') {
    return res.status(200).json({ message: 'Autenticado com sucesso!' });
  } 
  if (!email || !password) {
    return res.status(400).json({ message: 'Formato da requisição inválido!' });
  }
  else {
    return res.status(401).json({ message: 'Falha ao autenticar!' });
  }
};
