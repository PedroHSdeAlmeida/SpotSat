import express from 'express';
import routes from './routes/welcome';
import authRouter from './routes/auth';
import bodyParser from 'body-parser';
import placeRouter from './routes/getPlaces';
import insertPlace from './routes/insertPlace';
import insertArea from './routes/insertArea';
import getPlace from './routes/getPlace';
import getArea from './routes/getArea';

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use('/v1', routes); // Bem-vindo à API GeoPoly!
app.use('/v1/auth', authRouter); // autenticação
app.use('/v2/places', placeRouter); // retorna uma lista de lugares, e /v2/places/<id> retorna por id 
app.use('/v5/insertP', insertPlace) // inserir lugar 
app.use('/v5/insertA', insertArea) // inserir area 
app.use('/v5/getP', getPlace) // retorna uma lista de lugares cadastrados no bd
app.use('/v5/getA', getArea) // retorna uma lista de areas cadastrados no bd 




const server = app.listen(0, () => {
  const port = (server.address() as any).port;
  console.log(`Server running on port ${port}`);
});


export default app;
