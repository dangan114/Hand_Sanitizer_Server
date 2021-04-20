const express = require('express');
const router = express.Router(); 
const stations = require('../data/stations.json')
const nodeMailer = require('../services/node_mailer')

const fs = require('fs');

router.get('/', (req, res) => {

    var station = stations.stations.find(station => station.ip === req.ip)

    if (station == undefined) {
        console.log("Could not find the station!!!");
        res.send("Error!!! Could not find the station!!!");
    } else {
        nodeMailer(`Please respond to the hand sanitizer station ${station.station_id} right now! Or you are fired!!!!`); 
        res.send("Email sent successfully!!!");
    }
});

router.post('/add', (req, res) => {
    console.log(req)
    var newStation = {
        ip: req.ip,
        station_id: req.body.station_id
    }

    stations.stations.push(newStation);
    var json = JSON.stringify(stations);
    fs.writeFile('./data/stations.json', json, function(err) {
        if (err) throw err;
        console.log('complete');
    });  
})

module.exports = router; 