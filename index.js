let { generateQR } = require("./lib/qr-code-generator.js")
generateQR("Furkan")
    .then(qr => console.log(qr))
    .catch(err => {
        throw err
    });
