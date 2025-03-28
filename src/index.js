const express = require('express');

const server = express();
const port = 3000;

server.get('/', (_req, res) => {
  res.send('Hello world');
});

server.get('/json', (_req, res) => {
  const rispostaJson = {"nome": "pippo"};

  res.send(rispostaJson);
})

server.listen(port, () => {
  console.log('server in ascolto!')
})
