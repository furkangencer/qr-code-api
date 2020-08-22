const QRCode = require("qrcode");

const generateQR = async (req, res, next) => {
    const { text } = (req.method === 'POST' ? req.body : req.query);
    const qr = await QRCode.toBuffer(text || "Default Dummy QR", { width: 150, margin: 1, scale: 4})

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': qr.length
    });
    return res.end(qr);
}

module.exports = {
    generateQR
}
