# 📚 Esempi di codice per Node.js 🚀

Ciao! 👋 Questo progetto è stato creato per aiutarti a imparare e sperimentare con il codice. Qui troverai esempi pratici e utili per migliorare le tue competenze di sviluppo. 💻✨

## 🛠️ Installazione delle Dipendenze

Prima di tutto, assicurati di avere [Node.js](https://nodejs.org/) installato sul tuo computer.
Puoi dare un occhio in fondo al documento per installare [NVM](#nvm) ovvero il gestore di versioni di Node.js.

Poi, segui questi semplici passi:

1. Apri il terminale nella cartella del progetto.
2. Esegui il comando:

    ```bash
    npm install
    ```

    Questo installerà tutte le dipendenze necessarie e specificate dentro `package.json`. 📦

## 📜 Documentazione Scripts `package.json`

Questo file contiene diversi script utili per avviare e gestire il progetto. Qui sotto trovi la descrizione di ciascuno script, come avviarlo e cosa fa.

### Scripts Disponibili
#### 1. **Start**

``` bash
npm run start
```
- **Descrizione**: Avvia il file principale `src/index.js` con la funzionalità di _watch_. Questo significa che il server si riavvierà automaticamente ogni volta che vengono rilevate modifiche al file. In questo file trovate il serverino di test iniziale.

#### 2. **Server**

``` bash
npm run server
```
- **Descrizione**: Avvia il file `src/server.js` con la funzionalità di _watch_. Questo è il server dove iniziamo a capire i metodi **GET**, **POST**, ecc

#### 3. **Database**

``` bash
npm run database
```
- **Descrizione**: Esegue il file `src/database.js`. In questo scrip iniziamo a capire come creare tabelle, scrivere e interrogare un database semplice in SQLite

#### 4. **Stream**

``` bash
npm run stream
```
- **Descrizione**: Avvia il file `src/stream.js`. Nel esempio proviamo a leggere un file, comprimerlo con GZip e poi scriverlo su disco. 

#### 5. **QRCode**

``` bash
npm run qrcode
```
- **Descrizione**: Esegue il file `src/qrcode.js` che crea un QR code in formato PNG

#### 6. **StartQR**

``` bash
npm run startqr
```
- **Descrizione**: Prima esegue lo script `qrcode` e poi avvia lo script `start`. In questo modo, i codici QR vengono aggiornati automaticamente prima dell'avvio del server principale. È un esempio di come possiamo concatenare due script per preparare dei dati e poi renderli disponibili tramite il nostro server.

#### 7. **Frontend**

``` bash
npm run frontend
```
- **Descrizione**: Avvia un web server per il frontend del progetto utilizzando la cartella `public` come radice. Il server sarà disponibile sulla porta `4000`.
- **Prerequisiti**: Questo script richiede il pacchetto globale `serve`. Per installarlo usa:
``` bash
  npm install -g serve
```
- **Uso**: Avvia solo la parte frontend del progetto. Lo useremo per valutare eventuali problematiche CORS delle richieste e trovare alternative.

### Note Generali

- Ogni script può essere avviato con il comando `npm run <nome-script>`.
- Assicurati di aver installato tutte le dipendenze richieste eseguendo:
``` bash
  npm install
```
- Puoi combinare gli script per automatizzare flussi di lavoro specifici.

## 💡 Consigli Utili

- Non avere paura di sperimentare! Questo progetto è qui per aiutarti a imparare. 🎓
- Se hai domande, chiedi al tuo insegnante o ai tuoi compagni di classe. 👩‍🏫👨‍💻

Buon divertimento e buon coding! 🎉

---
<details>
<summary>APPENDICE: Installare NVM (Node Version Manager)</summary>
<h3 id="nvm">NVM</h3>

#### Su Windows

1. Scarica il programma di installazione di NVM per Windows dal repository ufficiale: [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
2. Esegui il file `.exe` scaricato e segui le istruzioni per completare l'installazione.
3. Dopo l'installazione, apri un nuovo terminale e verifica che NVM sia installato correttamente eseguendo:

    ```bash
    nvm version
    ```

4. Ora puoi utilizzare NVM per installare e gestire diverse versioni di Node.js.
5. Il gestore di versioni NVM è installato, ora procedi con l'installazione e attivazione di una versione di Node.js (in fondo)

#### Su macOS

1. Assicurati di avere [Homebrew](https://brew.sh/) installato sul tuo sistema.
2. Esegui il seguente comando per installare NVM:

    ```bash
    brew install nvm
    ```

3. Crea una directory per NVM e aggiungi le seguenti righe al tuo file di configurazione della shell (`~/.zshrc` o `~/.bashrc`):

    ```bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
    ```

4. Ricarica il file di configurazione della shell eseguendo:

    ```bash
    source ~/.zshrc
    ```

5. Verifica che NVM sia installato correttamente eseguendo:

    ```bash
    nvm --version
    ```

6. Il gestore di versioni NVM è installato, ora procedi con l'installazione e attivazione di una versione di Node.js (in fondo)

#### Installa e attiva la versione LTS di Node.js

Ovvero installa la versione più recente e stabile di Node.js, per la quale garantiscono aggiornamenti a lungo termine.

Installa la versione recente di Node.js

- Windows: `nvm install lts` e poi `nvm use lts`
- altrimenti se non funziona o usi Linux, ecc: `nvm install --lts` e poi `nvm use --lts`

Ora sei pronto per utilizzare NVM per installare e gestire diverse versioni di Node.js! 🎉

</details>
