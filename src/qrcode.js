const qrcode = require('qrcode');

qrcode.toFile('qrcode.png', 'Hello world', {
    errorCorrectionLevel: 'H'
})