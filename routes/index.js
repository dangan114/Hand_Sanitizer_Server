const express = require('express');
const router = express.Router(); 

const nodeMailer = require('../services/node_mailer')

router.get('/', (req, res) => {
    res.send("Hi There")
    nodeMailer("Please respond to the hand sanitizer station 1 right now! Or you are fired!!!!"); 
});

module.exports = router; 