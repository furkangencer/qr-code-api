const express = require('express');
const qrService = require('../services/qr-code-generator');
let router = express.Router();
router.post('/', qrService.generateQR);
router.get('/', qrService.generateQR);
module.exports = router;
