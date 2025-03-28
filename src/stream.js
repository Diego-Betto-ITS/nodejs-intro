// carico due moduli
// fs serve per leggere e scrivere dal File System (fs)
const fs = require('fs');
// zlib serve per comprimere dati e file
const zlib = require('zlib');

// gz servirà per comprimere il file
const gz = zlib.createGzip();

// creo uno stream di lettura, un flusso di dati letti
// a pezzetti e inviabili in un "tubo" (pipe)
const reader = fs.createReadStream('data/notizie.json');

// creo uno stream di scrittura verso il quale inviare i dati
const writerGz = fs.createWriteStream('data/notizie.json.gz');

// ascolto degli eventi e mostro in console
reader.on('open', () => console.log('Stream: open'))
reader.on('close', () => console.log('Stream: close'))
reader.on('data', (chunk) => console.log(chunk))

// collego: il reader caricati i dati, li invia a gz che 
// li comprime e poi invia in scrittura a writerGz
reader.pipe(gz).pipe(writerGz);