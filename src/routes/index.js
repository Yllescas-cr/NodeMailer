const express = require('express');
const router = express.Router();
const mail = require('../services/mailer')

router.post('/send-email', mail.post);

module.exports = router;
