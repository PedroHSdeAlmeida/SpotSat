import express from 'express';
import routes from './routes/welcome';
import authRouter from './routes/auth';
import bodyParser from 'body-parser';
import placeRouter from './routes/getPlaces';

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/v1', routes);
app.use('/v1/auth', authRouter);
app.use('/v2/places', placeRouter);

const port = 5678;
const server = app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;
