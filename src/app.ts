const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use('/v1', routes);

const server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
  

export default app