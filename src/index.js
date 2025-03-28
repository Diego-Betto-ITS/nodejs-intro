const express = require('express');
const qrcode = require('qrcode');

const server = express();
const port = 3000;

// le chiamate a '/data/timeline.json' rispondono con il
// contenuto del file 'data/timeline.json'
server.use('/data', express.static('data'));

// le chiamate a '/timeline' rispondono con il contenuto
// del file 'data/timeline.json'
server.get('/timeline', (_req, res) => {
  const timelineContent = require('../data/timeline.json');

  res.send(timelineContent)
})

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
