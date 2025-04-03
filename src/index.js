const express = require('express');

// creo un server, lo dovrò configurare e avviare poi
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

// esempio, rispondo con "Hello world" a chi accede alla root del sito
server.get('/', (_req, res) => {
  res.send('Hello world');
});


// rispondo con un json '{"nome": "pippo"}' a chi accede a /json
server.get('/json', (_req, res) => {
  const rispostaJson = {"nome": "pippo"};

  res.send(rispostaJson);
})

// avvio il server in ascolto
server.listen(port, () => {
  console.log('server in ascolto!')
})
