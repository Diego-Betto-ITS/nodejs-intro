const qrcode = require('qrcode');

qrcode.toFile('data/qrcode.png', 'Hello world', {
    errorCorrectionLevel: 'H'
})