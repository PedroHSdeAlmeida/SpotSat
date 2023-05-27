import express from 'express';
import routes from './routes/welcome';
import authRouter from './routes/auth';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/v1', routes);
app.use('/v1/auth', authRouter);

const server = app.listen(0, () => {
  const address = server.address();
  if (address && typeof address !== 'string') {
    const port = address.port;
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});

export default app;
