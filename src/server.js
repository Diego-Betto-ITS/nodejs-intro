const express = require('express');

const port = 3000;
const server = express();

server.get('/timeline', (_req, res) => {
    const timelineContent = require('../data/timeline.json');
  
    res.send(timelineContent)
});

server.get('/timeline/:id', (req, res) => {
    const timelineContent = require('../data/timeline.json');

    const item = timelineContent.find(item => item.id === parseInt(req.params.id));

    if (!item) {
        return res.status(404).send();
    }

    console.log('tutto ok')

    res.send(item);
});

server.post('/timeline', (req, res) => {
    res.send('ok POST');
})

server.put('/timeline/:id', (req, res) => {
    res.send(`ok PUT con id ${req.params.id}`);
})

server.listen(port, () => {
    console.log('server in ascolto!')
});
  