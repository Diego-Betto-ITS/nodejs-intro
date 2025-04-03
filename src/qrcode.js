// carico il modulo (la libreria) "qrcode"
const qrcode = require('qrcode');

// uso una funzione "toFile" presente dentro il modulo "qrcode" per creare un qrcode
// creerà un file dentro "data/qrcode.png" rappresentante la stringa "Hello world"
qrcode.toFile('data/qrcode.png', 'Hello world', {
    // imposto il livello di correzione di errore su H, 30% di danno sul qr code tollerabile
    errorCorrectionLevel: 'H'
})