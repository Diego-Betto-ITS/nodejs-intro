// carico il modulo express
const express = require('express');

// carico il modulo per sqlite
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/timeline.db');

// creo una costante "port" dove imposto la porta che userò con "server.lister" per avviare il server
const port = 3000;

// creo un server, lo devo poi configurare e avviare
const server = express();

// indico che voglio decodificare i contenuti che ricevo come JSON
server.use(express.json());

// creo la tabella nel database se già non esiste
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS timeline (year INTEGER, company TEXT, role TEXT, description TEXT, link TEXT)');
});

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
    let lastInsertedID;
    db.serialize(() => {
        // preparo uno statement, un istruzione di inserimento da eseguire
        const stmt = db.prepare(
            "INSERT INTO timeline VALUES ($year, $company, $role, $description, $link)",
            {
                $year: req.body.year,
                $company: req.body.company,
                $role: req.body.role,
                $description: req.body.description,
                $link: req.body.link,
            }
        );

        // eseguo l'istruzione (lo statement)
        // accedo a this, per farlo non posso usare le 
        // arrow function, ma devo usare la forma classica
        // esempio `function(){}`

        stmt.run(function() {
            console.log(this.lastID);
            lastInsertedID = this.lastID;
        });

        // termino lo statement
        stmt.finalize();

        console.log('lastInsertedID', lastInsertedID)

        // inserimento ok, leggo l'ultima riga inserita che dovrò mandare al client
    
    });

    // esercizio: valutare perché lastInsertedId sembra non essere disponibile
    db.get(
        "SELECT rowid AS id, * FROM timeline WHERE rowid = $id", // query
        {
            $id: lastInsertedID
        }, // parametri per la query 
        function(err, row) { // callback da eseguire quando ho terminato la query
            // se c'è un errore `err` è valorizzato, altrimenti no
            if (err) {
                // c'è un errore, termino l'esecuzione e mando un messaggio in console e al client
                console.error(err);
                return res.send(400).send('Inserimento completato, errore nella lettura dei dati')
            }

            // err non è valorizzato, quindi invio i dati che ricevo su `row` 
            // al client
            return res.send(row);
        }
    );
});

// rispondo con "ok PUT con id..." alle chiamate con metodo "PUT" che ricevo su "/timeline/:id"
server.put('/timeline/:id', (req, res) => {
    res.status(202).send({
        "id": 100,
        "year": 2025,
        "company": "ACME",
        "role": "Sviluppatore Junior",
        "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
        "link": "https://google.com"
    });
});

// rispondo con "ok PATCH con id..." alle chiamate con metodo "PATCH" che ricevo su "/timeline/:id"
server.patch('/timeline/:id', (req, res) => {
    res.status(202).send({
        "id": 100,
        "year": 2025,
        "company": "ACME",
        "role": "Sviluppatore Junior",
        "description": "Lorem ipsum dolor sit amet, in Lorem duis veniam laborum ipsum nulla proident",
        "link": "https://google.com"
    });
});

// rispondo con "ok DELETE con id..." alle chiamate con metodo "DELETE" che ricevo su "/timeline/:id"
server.delete('/timeline/:id', (req, res) => {
    res.status(204).send();
});

// configurazione terminata

// ora lo avvio sulla porta indicata da "port"
server.listen(port, () => {
    console.log('server in ascolto!')
});
  