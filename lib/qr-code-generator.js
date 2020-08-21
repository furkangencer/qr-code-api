const QRCode = require("qrcode");

const generateQR = (text) => QRCode.toDataURL(text)

module.exports = {
    generateQR
}
