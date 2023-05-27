import express from 'express';
import { authenticate } from '../services/authenticator ';

const authRouter = express.Router();

authRouter.post('/', authenticate);

export default authRouter;
