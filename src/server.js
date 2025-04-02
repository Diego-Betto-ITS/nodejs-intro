const express = require('express');

const port = 3000;
const server = express();

server.get('/timeline', (_req, res) => {
    res.send([
        {
            "id": 1,
            "year": 2025,
            "company": "ACME",
            "role": "Sviluppatore Junior",
            "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
            "link": "https://google.com"
        },
        {
            "id": 2,
            "year": 2024,
            "company": "SIGMA",
            "role": "Sviluppatore Senior",
            "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
            "link": "https://google.com"
        }
    ]);
});

server.listen(port, () => {
    console.log('server in ascolto!')
});
  