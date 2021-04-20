const express = require('express');
const router = express.Router(); 
const stations = require('../data/stations.json')
const nodeMailer = require('../services/node_mailer')

router.get('/', (req, res) => {
    console.log(stations.stations);

    var station = stations.stations.find(station => station.ip === req.ip)

    if (station == undefined) {
        console.log("Could not find the station!!!");
        res.send("Error!!! Could not find the station!!!");
    } else {
        nodeMailer(`Please respond to the hand sanitizer station ${station.station_id} right now! Or you are fired!!!!`); 
        res.send("Email sent successfully!!!");
    }
});

module.exports = router; 