const qrController = require('../controllers/qr');
const express = require('express');
let qrRouter = express.Router();
qrRouter.use('/qr', qrController);
module.exports = { qrRouter };
