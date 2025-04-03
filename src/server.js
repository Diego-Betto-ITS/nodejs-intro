// carico il modulo express
const express = require('express');

// creo una costante "port" dove imposto la porta che userò con "server.lister" per avviare il server
const port = 3000;

// creo un server, lo devo poi configurare e avviare
const server = express();

// inizio la configurazione, poi dovrò avviarlo

// rispondo con il contenuto di "../data/timeline.json" a chi richiede la rotta "/timeline"
server.get('/timeline', (_req, res) => {
    // carico il json
    const timelineContent = require('../data/timeline.json');
  
    // invio la risposta
    res.send(timelineContent)
});

// chiamata con metodo "GET" su "/timeline/:id", ad esempio "/timeline/4"
// attenzione che ogni elemento del URL è una stringa, 4 in questo caso è una stringa
// rispondo con il singolo elemento, se presente, dentro il json indicato
server.get('/timeline/:id', (req, res) => {
    // carico il json
    const timelineContent = require('../data/timeline.json');

    // cerco se c'è nel json un elemento con id === al parametro ":id" che ricevo nel url
    const item = timelineContent.find(item => item.id === parseInt(req.params.id));

    // se non c'è mando 404 come status code e nessun contenuto
    if (!item) {
        return res.status(404).send();
    }

    // se invece c'è mostro un messaggio in console e...
    console.log('tutto ok')

    // ...invio l'oggetto che ho trovato
    res.send(item);
});

// rispondo con "ok POST" alle chiamate con metodo "POST" che ricevo su "/timeline"
server.post('/timeline', (req, res) => {
    res.send('ok POST');
});

// rispondo con "ok PUT con id..." alle chiamate con metodo "PUT" che ricevo su "/timeline/:id"
server.put('/timeline/:id', (req, res) => {
    res.send(`ok PUT con id ${req.params.id}`);
});

// rispondo con "ok PATCH con id..." alle chiamate con metodo "PATCH" che ricevo su "/timeline/:id"
server.patch('/timeline/:id', (req, res) => {
    res.send(`ok PATCH con id ${req.params.id}`);
});

// rispondo con "ok DELETE con id..." alle chiamate con metodo "DELETE" che ricevo su "/timeline/:id"
server.delete('/timeline/:id', (req, res) => {
    res.send(`ok DELETE con id ${req.params.id}`);
});

// configurazione terminata

// ora lo avvio sulla porta indicata da "port"
server.listen(port, () => {
    console.log('server in ascolto!')
});
  