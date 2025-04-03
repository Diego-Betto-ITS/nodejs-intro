const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data/database.db');

// db.serialize ci assicura che ogni istruzione del db venga terminata prima della successiva
db.serialize(() => {
    // creo una tabella "lorem" se non esiste, con una colonna "info" di tipo testo
    // se già esiste non viene eseguito il comando
    db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");

    // preparo uno statement, un istruzione di inserimento da eseguire
    const stmt = db.prepare("INSERT INTO lorem VALUES (?)");

    // eseguo l'istruzione (lo statement) rimpiazzando di volta in volta "?" con "Ipsum 0", "Ipsum 1", ecc
    for (let i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }

    // termino lo statement
    stmt.finalize();


    // esequo una query, un'interrogazione del db, e ogni riga che ottengo la mostro in console
    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

// chiudo la connessione al database
db.close();