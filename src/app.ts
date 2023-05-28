import express from 'express';
import routes from './routes/welcome';
import authRouter from './routes/auth';
import bodyParser from 'body-parser';
import placeRouter from './routes/getPlaces';
import conect from './routes/dbconexao';

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/v1', routes); // Bem-vindo à API GeoPoly!
app.use('/v1/auth', authRouter); // autenticação
app.use('/v2/places', placeRouter); // retorna uma lista de lugares, e /v2/places/<id> retorna por id 
app.use('/v5/conect', conect) // conexão com o banco de dados

const server = app.listen(0, () => {
  const port = (server.address() as any).port;
  console.log(`Server running on port ${port}`);
});


export default app;
